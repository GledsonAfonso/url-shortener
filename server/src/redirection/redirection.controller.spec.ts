import { NotFoundException } from '@nestjs/common';
import { TestBed, type Mocked } from '@suites/unit';
import { Response } from 'express';
import { mock } from 'jest-mock-extended';
import { RedirectionController } from 'src/redirection/redirection.controller';
import { Url } from 'src/url/url.interface';
import { UrlRepository } from 'src/url/url.repository';

describe('RedirectionController', () => {
  let controller: RedirectionController;
  let urlRepository: Mocked<UrlRepository>;
  let response: Response;

  beforeEach(async () => {
    const { unit, unitRef } = await TestBed.solitary(RedirectionController).compile();

    controller = unit;
    urlRepository = unitRef.get(UrlRepository);
    response = {
      redirect: jest.fn().mockImplementation(),
    } as unknown as Response;
  });

  describe('common cases', () => {
    it('should be able to redirect previously stored url', async () => {
      const urlId = 1;
      const shortUrl = 'asdf';
      const originalUrl = 'http://www.google.com/';

      urlRepository.findByShortUrl.mockResolvedValueOnce(mock<Url>({
        id: urlId,
        originalUrl,
      }));

      await controller.redirect(shortUrl, response);

      expect(urlRepository.findByShortUrl).toHaveBeenCalledWith(shortUrl);
      expect(urlRepository.updateVisitCounter).toHaveBeenCalledWith(urlId);
      expect(response.redirect).toHaveBeenCalledWith(originalUrl);
    });
  });

  describe('error cases', () => {
    it('should throw a NotFoundException if the given url are not found in the storage', async () => {
      const urlId = 1;
      const shortUrl = 'asdf';
      const originalUrl = 'http://www.google.com/';

      urlRepository.findByShortUrl.mockResolvedValueOnce(null);
      
      await expect(controller.redirect(shortUrl, response)).rejects.toThrow(NotFoundException);

      expect(urlRepository.findByShortUrl).toHaveBeenCalledWith(shortUrl);
      expect(urlRepository.updateVisitCounter).not.toHaveBeenCalled();
      expect(response.redirect).not.toHaveBeenCalled();
    });
  });
});

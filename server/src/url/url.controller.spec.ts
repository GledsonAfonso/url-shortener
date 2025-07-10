import { TestBed, type Mocked } from '@suites/unit';
import { UrlController } from 'src/url/url.controller';
import { UrlService } from 'src/url/url.service';
import { UrlUtils } from 'src/url/url.utils';

describe('UrlController', () => {
  let controller: UrlController;
  let service: Mocked<UrlService>;
  let request: Request;

  beforeEach(async () => {
    const { unit, unitRef } = await TestBed.solitary(UrlController).compile();

    controller = unit;
    service = unitRef.get(UrlService);
    request = {
      protocol: 'http',
      host: 'localhost',
    } as unknown as Request;
  });

  describe('common cases', () => {
    it('should be able to short a URL', async () => {
      const url = 'asdf';
      const getShortenedUrlResult = `qwer`;

      service.getShortenedUrl.mockResolvedValueOnce(getShortenedUrlResult);

      const result = await controller.shortUrl(request, {
        url,
      });

      expect(result.shortUrl).toBe(UrlUtils.getFormattedUrl(request, getShortenedUrlResult));
    });
  });

  describe('error cases', () => {
    it.todo('should forward any errors given');
  });
});

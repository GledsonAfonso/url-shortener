import { useState, type ChangeEvent } from "react";
import { getShortUrl } from "../../services/url/url-service";
import "./UrlShortenerForm.css";
import FormInput from "../../components/form-input/FormInput";

export const UrlShortenerForm = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [url, setUrl] = useState('');

  const onSubmitFormHandler = async (element: ChangeEvent<HTMLFormElement>) => {
    element.preventDefault();

    const response = await getShortUrl(url);

    if (response.isSuccessful) {
      setShortUrl(response.data.shortUrl);
    }
  };

  const onChangeInputHandler = (element: ChangeEvent<HTMLInputElement>) => {
    setUrl(element.target.value);
    setShortUrl('');
  };

  const urlInputValidatorHandler = (): boolean => {
    return url.length === 0 || /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s?#]*)?(\?[^\s#]*)?(#[^\s]*)?$/g.test(url);
  };

  const copyButtonHandler = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
    }
  };

  return <>
    <div id="url-shortener-container">
      <div>
        <h1>URL Shortener</h1>
      </div>

      <div>
        <p>Enter the URL to shorten</p>

        <form onSubmit={onSubmitFormHandler}>
          <FormInput
            id="url-form-input"
            label="URL"
            onChange={onChangeInputHandler}
            isInputValid={urlInputValidatorHandler}
            errorMessage="It must be a valid URL."
          />

          <button id="shorten-button">Shorten</button>
        </form>
      </div>

      {shortUrl ?
        <div>
          <p>Success! Here's your short URL:</p>
          <p>{shortUrl}</p>
          <button onClick={copyButtonHandler}>Copy</button>
        </div>
        : <></>
      }
    </div>
  </>;
};

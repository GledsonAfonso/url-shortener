import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { getShortUrl } from "../services/url-service";

type UrlContainerProperties = {
  setShortUrlFn: Dispatch<SetStateAction<string>>;
};

export const UrlContainer = (props: UrlContainerProperties) => {
  const { setShortUrlFn } = props;
  const [url, setUrl] = useState('');

  const onChangeInputHandler = (element: ChangeEvent<HTMLInputElement>) => {
    setUrl(element.target.value);
  };

  const onClickButtonHandler = async () => {
    const data = await getShortUrl(url);
    setShortUrlFn(data.shortUrl);
  };

  return <>
    <div className="url-container">
      <p>URL</p>
      <input
        className="url-container-input"
        value={url}
        onChange={onChangeInputHandler}
      />
      <button className="url-container-send-button" onClick={onClickButtonHandler}>Shorten</button>
    </div>
  </>
};

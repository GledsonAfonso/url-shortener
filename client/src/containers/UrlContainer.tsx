import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { getShortUrl } from "../services/url/url-service";

type UrlContainerProperties = {
  setShortUrlFn: Dispatch<SetStateAction<string>>;
};

export const UrlContainer = (props: UrlContainerProperties) => {
  const { setShortUrlFn } = props;
  const [url, setUrl] = useState('');

  const onSubmitFormHandler = async (element: ChangeEvent<HTMLFormElement>) => {
    element.preventDefault();
    
    const response = await getShortUrl(url);
  
    if (response.isSuccessful) {
      setShortUrlFn(response.data.shortUrl);
    }
  };

  const onChangeInputHandler = (element: ChangeEvent<HTMLInputElement>) => {
    setUrl(element.target.value);
  };

  return <>
    <div className="url-container">
      <form id="url-container-form" onSubmit={onSubmitFormHandler}>
        <p>URL</p>
        <input onChange={onChangeInputHandler} />
        <button>Shorten</button>
      </form>
    </div>
  </>
};

import type { Dispatch, SetStateAction } from "react";

type UrlContainerProperties = {
  setShortUrlFn: Dispatch<SetStateAction<undefined>>;
};

export const UrlContainer = (props: UrlContainerProperties) => {
  const { setShortUrlFn } = props;

  return <>
    <div className="url-container">
      <p>URL</p>
      <input className="url-container-input" />
      <button className="url-container-send-button">Shorten</button>
    </div>
  </>
};
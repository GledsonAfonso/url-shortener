type ShortUrlContainerProperties = {
  shortUrl?: string
};

export const ShortUrlContainer = (props: ShortUrlContainerProperties) => {
  const { shortUrl } = props;

  const copyButtonHandler = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
    }
  };

  return <>
    { shortUrl ?
      <div className="short-url-container">
        <p id="short-url-container-success-message">Success! Here's your short URL:</p>
        <p id="short-url-container-url-value">{shortUrl}</p>
        <button onClick={copyButtonHandler}>Copy</button>
      </div>
      : <></>
    }
  </>
};
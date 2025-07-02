type ShortUrlContainerProperties = {
  shortUrl?: string
};

export const ShortUrlContainer = (props: ShortUrlContainerProperties) => {
  const { shortUrl } = props;

  return <>
    { shortUrl ?
      <div className="short-url-container">
        <p id="short-url-container-success-message">Success! Here's your short URL:</p>
        <p id="short-url-container-url-value">{shortUrl}</p>
        <button>Copy</button>
      </div>
      : <></>
    }
  </>
};
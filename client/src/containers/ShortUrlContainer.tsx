type ShortUrlContainerProperties = {};

export const ShortUrlContainer = (props: ShortUrlContainerProperties) => {
  return <>
    <div className="short-url-container">
      <p>Success! Here's your short URL:</p>
      <p className="short-url-container-url-value">http://localhost:3000/asdf</p>
      <button>Copy</button>
    </div>
  </>
};
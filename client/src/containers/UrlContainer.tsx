type UrlContainerProperties = {};

export const UrlContainer = (props: UrlContainerProperties) => {
  return <>
    <div className="url-container">
      <p>URL</p>
      <input className="url-container-input" />
      <button className="url-container-send-button">Shorten</button>
    </div>
  </>
};
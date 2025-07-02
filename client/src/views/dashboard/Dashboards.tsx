import { useState } from "react";
import { ShortUrlContainer } from "../../containers/ShortUrlContainer";
import { UrlContainer } from "../../containers/UrlContainer";

export const Dashboard = () => {
  const [shortUrl, setShortUrl] = useState();

  return <>
    <div className="dashboard-view">
      <div className="dashboard-view-title">
        <h1>URL Shortener</h1>
        {/* icon here */}
      </div>

      <p>Enter the URL to shorten</p>

      <UrlContainer setShortUrlFn={setShortUrl} />
      <ShortUrlContainer shortUrl={shortUrl} />
    </div>
  </>;
};

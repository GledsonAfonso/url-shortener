import { ShortUrlContainer } from "../../containers/ShortUrlContainer";
import { UrlContainer } from "../../containers/UrlContainer";

type DashboardProperties = {};

export const Dashboard = (props: DashboardProperties) => {
  return <>
    <div className="dashboard-view">
      <div className="dashboard-view-title">
        <h1>URL Shortener</h1>
        {/* icon here */}
      </div>

      <p>Enter the URL to shorten</p>

      <UrlContainer />
      <ShortUrlContainer />
    </div>
  </>;
};

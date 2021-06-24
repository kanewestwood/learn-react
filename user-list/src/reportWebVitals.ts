import { ReportHandler } from "web-vitals";

/**
 * Report Web Vitals
 *
 * @param {ReportHandler} onPerfEntry on perf entry
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

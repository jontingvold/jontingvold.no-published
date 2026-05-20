window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-KHB0R9D6K7", {
  send_page_view: false,
});

gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
});

gtag("consent", "update", {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
});

gtag("event", "page_view", {
  page_title: document.title,
  page_location: location.pathname + location.search,
});

/* Track page views with InstantClick SinglePageApplication */
InstantClick.on("change", function () {
  gtag("event", "page_view", {
    page_title: document.title,
    page_location: location.pathname + location.search,
  });
});

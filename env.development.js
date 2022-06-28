window.env = {
  contentServerVersion: "5.9",
  contentServerUrl: "https://activeui-tutorial-server.activeviam.com:9090",
  // WARNING: Changing the keys of activePivotServers will break previously saved widgets and dashboards.
  // If you must do it, then you also need to update each one's serverKey attribute on your content server.
  activePivotServers: {
    // You can connect to as many servers as needed.
    // In practice most projects only need one.
    "my-server": {
      url: "https://activeui-tutorial-server.activeviam.com:9090",
      version: "5.9",
    },
  },
};

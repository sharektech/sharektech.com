/* const React = require('react');

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script
        src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
        async=""
      ></script>,
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
              OneSignal.init({
                appId: "e99d79a5-fc67-4a4a-8203-4fd24afd6d73",
              });
          });
            
            `
        }}
      />
    ]);
  }
}; */

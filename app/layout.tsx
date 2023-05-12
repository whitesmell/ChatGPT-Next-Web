/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";

import { APP_TITLE, APP_SUB_TITLE } from "./constant";

const buildConfig = getBuildConfig();

export const metadata = {
  title: APP_TITLE,
  description: APP_SUB_TITLE,
  appleWebApp: {
    title: APP_TITLE,
    statusBarStyle: "default",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?729788bc71665ee31fd99cb5e3071345";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    }
  }

  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          content="#fafafa"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#151515"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.proxy.ustclug.org"></link>
        <link
          href="https://fonts.proxy.ustclug.org/css2?family=Noto+Sans+SC:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        <script dangerouslySetInnerHTML={getAnalyticsTag()}/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

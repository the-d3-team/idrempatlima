import Document, { Html, Head, Main, NextScript } from "next/document";

import Sidebar from "../components/sidebar";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/iconidr45.svg" type="image/svg+xml" />
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script
            async
            custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
          />
          <script
            async
            custom-element="amp-list"
            src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
          ></script>
          <script
            async
            custom-element="amp-lightbox"
            src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
          ></script>
          <script
            async
            custom-element="amp-bind"
            src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
          ></script>
          {/* <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: `
              .sidebar {
                color: #fff;
              }
              `,
            }}
          ></style> */}
        </Head>
        <body>
          <Sidebar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="stylesheet" href="https://use.typekit.net/pau7rli.css" />
        <style>{`
            .font-aria {
                font-family: aria-text-g2, sans-serif;
            }
            * {
                --color1: #A1796A;
                --color2: #FFE5DB;
                --color3: #EDC3B4;
                --color4: #5AA193;
                --color5: #B4EDE2;
            }
            .bg-color1 {
                background-color: var(--color1)
            }
            .bg-color2 {
                background-color: var(--color2)
            }
            .bg-color3 {
                background-color: var(--color3)
            }
            .text-color4 {
                color: var(--color4)
            }
            .text-color5 {
                color: var(--color5)
            }
            .text-color1 {
                color: var(--color1)
            }
            .text-color2 {
                color: var(--color2)
            }
            .text-color3 {
                color: var(--color3)
            }
            .text-color4 {
                color: var(--color4)
            }
            .text-color5 {
                color: var(--color5)
            }
        `}</style>
        <body className="serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import { Html, Head, Main, NextScript } from "next/document";

// export default class CustomDocument extends Document {
export default function Document() {
    return(
        <Html lang="en" data-theme="emerald">
            <Head></Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    )
}
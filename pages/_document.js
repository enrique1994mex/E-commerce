import { ServerStyleSheets } from '@mui/styles';
import Document, {Html, Main, NextScript, Head} from 'next/document'; 
import React from 'react'; 

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets(); 
    const originalRenderPage = ctx.originalRenderPage;
    ctx.originalRenderPage = () => {
        return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        });
    };
    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles), sheets.getStyleElement(), 
        ],
    };
};
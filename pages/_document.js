/**
 * This file is part of Go Forensics (https://www.goforensics.io/)
 * Copyright (C) 2022 Marten Mooij (https://www.mooijtech.com/)
 */
import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Go Forensics</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"/>
                </Head>

                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;

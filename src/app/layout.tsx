import { Inter } from "next/font/google";
import React, { type ReactNode } from "react";

import "@styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout(props: RootLayoutProps): ReactNode {
    const { children } = props;

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

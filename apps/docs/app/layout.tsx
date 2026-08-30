import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import localFont from "next/font/local";
import "nextra-theme-docs/style.css";
import "./logo.css";
import "./fonts.css";

const calSans = localFont({
  src: "../fonts/CalSans-Regular.woff2",
  variable: "--font-cal",
  display: "swap",
  weight: "400",
});

const calSansUI = localFont({
  src: [
    { path: "../fonts/CalSansUI-UILight.woff2", weight: "300" },
    { path: "../fonts/CalSansUI-UIRegular.woff2", weight: "400" },
    { path: "../fonts/CalSansUI-UIMedium.woff2", weight: "500" },
    { path: "../fonts/CalSansUI-UISemiBold.woff2", weight: "600" },
    { path: "../fonts/CalSansUI-UIBold.woff2", weight: "700" },
  ],
  variable: "--font-cal-ui",
  display: "swap",
});

const navbar: React.ReactElement = (
  <Navbar
    logo={
      <>
        <img
          src="/cal-docs-logo.svg"
          alt="Null Chapter VITAP Docs"
          height={26}
          className="logo-light"
          style={{ height: 26 }}
        />
        <img
          src="/cal-docs-logo-white.svg"
          alt="Null Chapter VITAP Docs"
          height={26}
          className="logo-dark"
          style={{ height: 26 }}
        />
      </>
    }
  />
);

const footer: React.ReactElement = (
  <Footer>
    <small>
      Null Chapter VITAP - Cybersecurity community at VIT-AP University.
    </small>
  </Footer>
);

export const metadata: { title: string; description: string } = {
  title: "Null Chapter VITAP Docs",
  description: "Null Chapter VIT-AP documentation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${calSans.variable} ${calSansUI.variable}`}
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/NullChapter"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

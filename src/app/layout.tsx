import "@styles/globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "next-atomic",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/assets/icons/favicon-light.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/ico",
      url: "/assets/icons/favicon-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  description: "generic description",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-BR' className={GeistSans.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;

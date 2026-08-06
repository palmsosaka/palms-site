import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedCTA from "@/components/FixedCTA";
import { siteConfig, BASE_PATH } from "@/config/site";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.area}の事故・故障対応｜レッカー・修理・レンタカー一括手配｜${siteConfig.companyName}`,
    template: `%s｜${siteConfig.brand}`,
  },
  description: `事故・故障のその場から、レッカー〜修理〜レンタカーまで一括対応。保険修理のご相談も可能。${siteConfig.area}で迅速手配なら${siteConfig.companyName}へ。`,
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: "any" },
      { url: `${BASE_PATH}/assets/icon/icon-32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: `${BASE_PATH}/assets/icon/apple-touch-icon.png`,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = localBusinessSchema();

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* GA4 - Replace GA_MEASUREMENT_ID with actual ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
        <FixedCTA />
      </body>
    </html>
  );
}

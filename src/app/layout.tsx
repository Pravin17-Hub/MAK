import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "MAK Ladies Tailoring | Best Bridal & Designer Blouse Tailor in Karaikudi",
  description: "Specializing in custom ladies stitching, bridal Aari embroidery blouses, designer blouses, chudithars, and kids wear in Karaikudi. Perfect fit and timely delivery guaranteed.",
  keywords: [
    "Ladies Tailor Near Me",
    "Ladies Tailor in Karaikudi",
    "Blouse Stitching",
    "Bridal Blouse Design",
    "Designer Blouse Tailor",
    "Chudithar Stitching",
    "Pattu Pavadai Stitching",
    "MAK Ladies Tailoring",
    "Best tailor in Karaikudi"
  ],
  openGraph: {
    title: "MAK Ladies Tailoring | Best Bridal & Designer Blouse Tailor in Karaikudi",
    description: "Premium custom tailoring for ladies in Karaikudi. Bridal blouses, designer wear, chudithars, kids dresses with guaranteed perfect fit.",
    url: "https://maktailoring.in",
    siteName: "MAK Ladies Tailoring",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MAK Ladies Tailoring",
    "image": "https://maktailoring.in/assets/bridal-blouse.jpg",
    "telephone": "+917502540560",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Street, Karuppar Kovil Road, Thanthai Periyar Nagar, Burma Colony",
      "addressLocality": "Karaikudi",
      "addressRegion": "Tamil Nadu",
      "postalCode": "630002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.0748,
      "longitude": 78.7845
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:30"
    }
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Rios Debora Sabrina",
  description: "Portafolio",
  icons: {
    icon: ["/Captura-de-pantalla-_89.ico?v=4"],
    apple: ["/Captura-de-pantalla-_89.ico?v=4"],
    shortcut: ["/Captura-de-pantalla-_89_.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

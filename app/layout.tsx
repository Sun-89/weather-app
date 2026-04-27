import '../styles/index.css';

export const metadata = {
  title: "Weather App",
  description: "Application météo Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

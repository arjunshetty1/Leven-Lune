import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

export const metadata = {
  title: "Leven Lune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />

      <main>
        {children}
        </main>
      <Footer />
    </html>
  );
}

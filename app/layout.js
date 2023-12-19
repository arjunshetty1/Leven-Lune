"use client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import store from "../store/store";
import { Provider } from "react-redux";

import "./globals.css";

export const metadata = {
  title: "Leven Lune",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <Header />
        <main>{children}</main>
        <Footer />
      </html>
    </Provider>
  );
}

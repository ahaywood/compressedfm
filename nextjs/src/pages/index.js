import Head from 'next/head'
import { Hamburger } from "modules/shared/components/Header/components/Hamburger";
import { HomePage } from "modules/home";
import { Footer } from "modules/shared/components/Footer";

export default function Home() {
  return (
    <div>
      <Hamburger className="hamburger" />
      <HomePage />
      <Footer />
    </div>
  )
}

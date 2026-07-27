import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AltOps } from "./components/AltOps";
import { Work } from "./components/Work";
import { Built } from "./components/Built";
import { Writing } from "./components/Writing";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function Page() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <AltOps />
        <Work />
        <Built />
        <Writing />
        <About />
        <Contact />
      </main>
    </>
  );
}

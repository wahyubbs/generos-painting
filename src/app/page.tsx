import "./page.css";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section6 from "./component/Section6";
import Section7 from "./component/Section7";
import Section8 from "./component/Section8";
import Section9 from "./component/Section9";
import Footer from "./component/Footer";
import Section10 from "./component/Section10";

export default function Home() {
  return (
    <main className="container-bbs">
      <Section1 />
      <Section10 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </main>
  );
}

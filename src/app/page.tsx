import CurrentWorkSection from "./components/CurrentWorkSection";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import OutroSection from "./components/OutroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <CurrentWorkSection />
      <Projects />
      <OutroSection />
    </>
  );
}

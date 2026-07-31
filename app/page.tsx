import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProject />
      <Footer />
    </main>
  );
}
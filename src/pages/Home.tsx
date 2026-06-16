import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import AppScreenshots from '../components/home/AppScreenshots';
import LiveRoutePreview from '../components/home/LiveRoutePreview';
import ProblemSolution from '../components/home/ProblemSolution';
import HowItWorks from '../components/home/HowItWorks';
import Audiences from '../components/home/Audiences';
import Operations from '../components/home/Operations';
import Platform from '../components/home/Platform';
import Roadmap from '../components/home/Roadmap';
import InvestorCTA from '../components/home/InvestorCTA';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveRoutePreview />
        <AppScreenshots />
        <ProblemSolution />
        <HowItWorks />
        <Audiences />
        <Operations />
        <Platform />
        <Roadmap />
        <InvestorCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

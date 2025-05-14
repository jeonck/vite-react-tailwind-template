import AboutHeader from '../components/about/AboutHeader.jsx';
import TechStack from '../components/about/TechStack.jsx';
import TeamSection from '../components/about/TeamSection.jsx';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
      <AboutHeader />
      <TechStack />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
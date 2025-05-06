
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;

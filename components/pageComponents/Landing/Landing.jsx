import Footer from 'components/Layout/Footer/Footer';
import Navbar from 'components/Layout/Navbar/Navbar';
import FutureGateways from './FutureGateways/FutureGateways';
import Blogs from './Blogs/Blogs';
import Reviews from './Reviews/Reviews';
import FilterBar from './FilterBar/FilterBar';
import Planning from './Planning/Planning';

function Landing() {
  return (
    <>
      <Navbar />
      <Planning />
      {/* <FutureGateways /> */}
      <FilterBar />
      <Blogs />
      <Reviews />
      <Footer />
    </>
  );
}

export default Landing;

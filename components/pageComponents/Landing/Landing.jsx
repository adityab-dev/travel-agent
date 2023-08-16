import Footer from 'components/Layout/Footer/Footer';
import Navbar from 'components/Layout/Navbar/Navbar';
import FutureGateways from './FutureGateways/FutureGateways';
import Blogs from './Blogs/Blogs';

function Landing() {
  return (
    <>
      <Navbar />
      {/* <FutureGateways /> */}
      <Blogs />
      <Footer />
    </>
  );
}

export default Landing;

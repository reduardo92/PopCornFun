import Layout from '../components/layout';
import Contact from '../components/contact';
import Hero from '../components/ui/hero';
import Banner from '../components/ui/banner';
import Carousell from '../components/ui/carousel/carousel';

const contact = () => (
  <Layout>
    <Hero img='/group-of-people.jpg' heroSize='calc(100vh - 40vh)'>
      {/* <Banner bannerTitle='contact' btnTwo='about' /> */}
    </Hero>
    <Contact />
    <Carousell />
  </Layout>
);

export default contact;

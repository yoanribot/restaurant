import '../styles/globals.css'
import '../styles/index.css'
import Layout from '../components/components/Layout';
import '../components/components/Menuitem/MenuItem.css';
import '../components/components/Navbar/Navbar.css';
import '../components/components/Newsletter/Newsletter.css';
import '../components/components/Newsletter/FooterOverlay.css';
import '../components/container/AboutUs/AboutUs.css';
import '../components/container/Chef/Chef.css';
import '../components/container/Contact/Contact.css';
import '../components/container/FindUs/FindUs.css';
import '../components/container/Footer/Footer.css';
import '../components/container/Gallery/Gallery.css';
import '../components/container/Header/Header.css';
import '../components/container/Intro/Intro.css';
import '../components/container/Laurels/Laurels.css';
import '../components/container/Menu/SpecialMenu.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp

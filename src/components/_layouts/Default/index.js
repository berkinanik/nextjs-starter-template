import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Wrapper from 'components/Wrapper';

const DefaultLayout = props => {
  const { children } = props;
  return <>
    <Navbar />
    <main>
      <Wrapper>
        { children }
      </Wrapper>
    </main>
    <Footer />
  </>;
};

export default DefaultLayout;

import Image from 'next/image';

import Wrapper from 'components/Wrapper';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return <nav className={ styles.container }>
    <Wrapper className={ styles.wrapper }>
      <div className={ styles.logo }>
        <Image src="/images/vercel-logo.svg" alt="Vercel Logo" width={ 144 } height={ 32 } quality={ 100 }/>
      </div>
      <a href="http://github.com/berkinanik/" target="_blank" rel="noreferrer">GitHub Repo</a>
    </Wrapper>
  </nav>;
};

Navbar.propTypes = {};

export default Navbar;

import Wrapper from 'components/Wrapper';
import Image from 'next/image';

import styles from './Footer.module.scss';

const Footer = () => {
  return <footer className={ styles.container }>
    <Wrapper className={ styles.wrapper }>
      <a href="http://github.com/berkinanik/" target="_blank" rel="noreferrer">
        <Image src="/icons/github.png" alt="GitHub icon" height={ 16 } width={ 16 } />
        @berkinanik
      </a>
    </Wrapper>
  </footer>;
};

export default Footer;

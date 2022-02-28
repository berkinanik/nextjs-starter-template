import DefaultLayout from 'components/_layouts/Default';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return <DefaultLayout>
    <Component { ...pageProps } />
  </DefaultLayout>;
};

export default MyApp;

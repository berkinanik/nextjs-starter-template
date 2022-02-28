import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Wrapper.module.scss';

const Wrapper = props => {
  const { children, className } = props;
  return <div className={ cx(styles.container, className) }>
    { children }
  </div>;
};

Wrapper.propTypes = {
  className: PropTypes.string,
};

export default Wrapper;

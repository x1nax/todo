import React from 'react';
import styles from "./Footer.module.css"
import Proptypes from 'prop-types'

const Footer = ({count}) => (
  <div className={styles.count}>
    Важных дел осталось : {count}
  </div>
);
Footer.defaultProps = {
  count:0
}

Footer.propTypes = {
  count: Proptypes.number.isRequired
}
export default Footer;
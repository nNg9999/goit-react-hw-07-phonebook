import React from "react";
import PropTypes from "prop-types";


// redux
import { connect } from "react-redux";
import themeSelector from '../../../modules/theme/themeSelector';

// styles
import styles from "./Layout.module.scss";

function Layout(props) {
  const { children, isChecked } = props;

  return (
    <div
      className={`${styles.container} ${
        isChecked.isChecked ? styles.dark : styles.light
        }`}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.object.isRequired

};

const mapStateToProps = state => {
  return {
    theme: themeSelector.getThemeConfig(state),
    isChecked: themeSelector.getIsChecked(state),
  };
};

export default connect(mapStateToProps)(Layout);
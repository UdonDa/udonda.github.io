import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Avatar from "../ourself/avatar";

const styles = {};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

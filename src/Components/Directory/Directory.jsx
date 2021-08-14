import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menuItem/menu-item";
import "./Directory.scss";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSections }) => (
        <MenuItem key={id} {...otherSections} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

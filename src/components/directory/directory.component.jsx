import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.components";
import "../directory/directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
  console.log(sections);
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

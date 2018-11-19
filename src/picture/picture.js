import React from "react";
import PropTypes from "prop-types";
// import template from "./picture.jsx";

class picture extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
		<img src={imageUrl} alt="Flex-Slider"/>
      </div>
    );
  }

  render() {
    return (
      <div className="picture">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
picture.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default picture;
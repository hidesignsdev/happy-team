import React, { Component } from "react";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPreviewUrl: "",
    };
  }
  handleImgChange = (e) => {
    const {
      input: { onChange },
    } = this.props;

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imgPreviewUrl: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      onChange(file);
    }
  };
  render() {
    let { imgPreviewUrl } = this.state;
    return (
      <div className="image-wrapper">
        <div className="imgPreview ">
          {imgPreviewUrl ? <img src={imgPreviewUrl} alt="" /> : null}
        </div>

        <i
          onClick={() => {
            this.input.click();
          }}
          className="fa fa-camera input-icon " ></i>
        <input
          style={{ display: "none" }}
          ref={(component) => (this.input = component)}
          name={this.props.input.name}
          type="file"
          accept="image/*"
          onChange={this.handleImgChange}
        />
      </div>
    );
  }
}

export default ImageUpload;

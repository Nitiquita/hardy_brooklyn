import React, { Component } from "react";
import { storage, database } from "../../firebase";
import store from "../store";

let imagesStyles = {
  showImages: {
    display: "flex"
  },
  hideImages: {
    display: "none"
  }
};

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      showImages: "hideImages",
      selectedRadio: null,
      selectedImage: [],
      highlightSelected: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickBGImage = this.handleClickBGImage.bind(this);
    this.handleClickC1 = this.handleClickC1.bind(this);
    this.handleClickC2 = this.handleClickC2.bind(this);
    this.handleClickC3 = this.handleClickC3.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    let photos = [];
    let promise = new Promise((resolve, reject) => {
      database
        .ref("images/")
        .once("value")
        .then(function(snapshot) {
          let values = snapshot.val();
          let images = [];
          for (var key in values) {
            images.push(values[key]["filename"]);
          }
          images.map(image => {
            // Create a reference to the file we want to download
            const storageRef = storage.ref();
            // Get the download URL
            storageRef
              .child("images/" + image)
              .getDownloadURL()
              .then(function(url) {
                // Insert url into an <img> tag to "download"
                photos.push(url);
              });
          });
        });

      resolve(photos);
    });
    promise.then(photos => {
      this.setState({ images: photos });
    });
  }

  handleClick() {
    let imagesArray;
    this.props.images.length
      ? (imagesArray = this.props.images.map((image, idx) => {
          return { image: image, id: idx };
        }))
      : (imagesArray = this.state.images.map((image, idx) => {
          return { image: image, id: idx };
        }));
    this.setState({ images: imagesArray });
    this.forceUpdate();
    this.setState({ showImages: "showImages" });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(event) {
    this.setState({ selectedImage: event.target.value });
  }

  handleClickBGImage() {
    database.ref("bgimage").set({
      imageURL: this.state.selectedImage
    });
    this.setState({ selectedRadio: null });
  }

  handleClickC1() {
    let date = new Date();
    database.ref("c1images/" + date).set({
      imageURL: this.state.selectedImage
    });
    this.setState({ selectedRadio: null });
  }

  handleClickC2() {
    let date = new Date();
    database.ref("c2images/" + date).set({
      imageURL: this.state.selectedImage
    });
    this.setState({ selectedRadio: null });
  }

  handleClickC3() {
    let date = new Date();
    database.ref("c3images/" + date).set({
      imageURL: this.state.selectedImage
    });
    this.setState({ selectedRadio: null });
  }

  handleSelect(id) {
    this.setState({ selectedRadio: id });
  }

  handleDelete() {}

  render() {
    return (
      <div id="images">
        <button onClick={this.handleClick}>show all images</button>
        <div style={imagesStyles[this.state.showImages]} id="image-container">
          {this.state.images &&
            this.state.images.map((image, idx) => {
              return (
                <div key={idx} className="image-box">
                  <img src={image.image} className="image" />
                  <input
                    onChange={this.handleChange}
                    onClick={this.handleSelect.bind(this, image.id)}
                    className="radio-button"
                    type="radio"
                    value={image.image}
                    checked={this.state.selectedRadio === image.id}
                  />
                </div>
              );
            })}
        </div>
        <br/>
        <button className="carousel-button" onClick={this.handleClickBGImage}>
          use as background image
        </button>
        <h4>Select at least 5 images to add to each carousel</h4>
        <button className="carousel-button" onClick={this.handleClickC1}>
          add to carousel 1
        </button>
        <button className="carousel-button" onClick={this.handleClickC2}>
          add to carousel 2
        </button>
        <button className="carousel-button" onClick={this.handleClickC3}>
          add to carousel 3
        </button>
        <button className="carousel-button" onClick={this.handleDelete}>delete</button>
      </div>
    );
  }
}

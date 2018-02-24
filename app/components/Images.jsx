import React, { Component } from "react";
import { storage, database } from "../../firebase";
import store from "../store";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickBGImage = this.handleClickBGImage.bind(this);
    this.handleClickC1 = this.handleClickC1.bind(this);
    this.handleClickC2 = this.handleClickC2.bind(this);
    this.handleClickC3 = this.handleClickC3.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    let photos = [];
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
            })
            .catch(function(error) {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case "storage/object_not_found":
                  // File doesn't exist
                  break;

                case "storage/unauthorized":
                  // User doesn't have permission to access the object
                  break;

                case "storage/canceled":
                  // User canceled the upload
                  break;
                case "storage/unknown":
                  // Unknown error occurred, inspect the server response
                  break;
              }
            });
        });

      });
      this.setState({ images: photos})
  }

  componentDidUpdate(){

  }
  handleClick() {
    this.forceUpdate()
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(event) {
    let images = this.state.selectedImages;
    images.push(event.target.value)
    this.setState({ selectedImages: images });
  }

  handleClickBGImage(){
    let bgImage = this.state.selectedImages[0]
    database.ref("bgimage").set({
      imageURL: bgImage
    })
  }

  handleClickC1() {
    this.state.selectedImages.map((image, idx) => {
      database.ref("c1images/" + idx).set({
        imageURL: image
      })
    })
  }

  handleClickC2() {
    this.state.selectedImages.map((image, idx) => {
      database.ref("c2images/" + idx).set({
        imageURL: image
      })
    })
  }

  handleClickC3() {
    this.state.selectedImages.map((image, idx) => {
      database.ref("c3images/" + idx).set({
        imageURL: image
      })
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>show all images</button>
      <div>
       {this.state.images && this.state.images.map((image, idx) => {
         return <div  key={idx} ><input onChange={this.handleChange}className="radio-button" type="radio" value={image}/><img src={image} className="image"/></div>
       })
       }
       <button onClick={this.handleClickBGImage}>use as background image</button>
       <button onClick={this.handleClickC1}>add to carousel 1</button>
       <button onClick={this.handleClickC2}>add to carousel 2</button>
       <button onClick={this.handleClickC3}>add to carousel 3</button>
       </div>
        </div>
    )
  }
}

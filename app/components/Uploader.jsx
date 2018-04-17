import React, { Component } from "react";
import { storage, database } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import Images from "./Images";

export default class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      progress: 0,
      image: "",
      filename: "",
      imageURL: "",
      images: ""
    }
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }

  handleUploadStart() {
    this.setState({ isUploading: true, progress: 0 });
  }
  handleProgress(progress) {
    this.setState({ progress });
  }
  handleUploadError(error) {
    this.setState({ isUploading: false });
    console.error(error);
  }
  handleUploadSuccess(filename) {
    this.setState({ image: filename, progress: 100, isUploading: false });
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ imageURL: url });
        let sliceAt;
        console.log(filename.slice(-4))
        if (
          filename.slice(-4) === "jpeg" ||
          filename.slice(-4) === "JPEG"
        ) {
          sliceAt = -5;
        } else {
          sliceAt = -4;
        }
        database.ref("images/" + filename.slice(0, sliceAt)).set({
          filename: filename
        });
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
      this.setState({
        images: photos
      });
    });
  }

  render() {
    return (
      <div>
        <form>
          <h1>Add image</h1>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="image"
            storageRef={storage.ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
        <Images images={this.state.images} />
      </div>
    );
  }
}

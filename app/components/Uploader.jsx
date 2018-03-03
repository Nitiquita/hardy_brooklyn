import React, { Component } from "react";
import { storage, database } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import Images from "./Images";
import store from "../store";

export default class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
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
    let images = this.state.images;
    images.push(filename);
    this.setState({ images: images });
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ imageURL: url });
        database.ref("images/" + filename.slice(0, -4)).set({
          filename: filename
        });
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
    this.setState({ images: photos });
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

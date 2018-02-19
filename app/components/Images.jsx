import React, { Component } from "react";
import { storage } from "../../firebase";



export default class Images extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Create a reference to the file we want to download
    const storageRef = storage.ref();
    // Get the download URL
    storageRef.child('images/')
      .getDownloadURL()
      .then(function(url) {
        // Insert url into an <img> tag to "download"
        console.log(url)
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
  }

  render() {
    console.log(this.props.fileName)
    return <div />;
  }
}

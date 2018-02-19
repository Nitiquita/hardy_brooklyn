import React, { Component } from 'react';
import { storage } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import Images from './Images'

export default class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: '',
        isUploading: false,
        progress: 0,
        imageURL: ''
    }
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }

  handleUploadStart() {this.setState({isUploading: true, progress: 0})};
  handleProgress(progress) {this.setState({progress})}
  handleUploadError(error) {
    this.setState({isUploading: false});
    console.error(error);
  }
  handleUploadSuccess(filename) {
    this.setState({image: filename, progress: 100, isUploading: false});
    storage.ref('images').child(filename).getDownloadURL().then(url => this.setState({imageURL: url}));
  };

  render() {
    return (
      <div>
        <form>
          <label>Add image</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img src={this.state.avatarURL} />
          }
          <FileUploader
            accept="image/*"
            name="image"
            storageRef={storage.ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
        <Images fileName={this.state.image}/>

      </div>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const UploadUrl = 'https://sm.ms/api/upload';

export default class UploadSmms extends Component {
  static propTypes = {
    onFileUploadSuccess: PropTypes.func
  }

  getResponse = ({data}) => {
    const {code, ...restProps} = data;
    if (code !== 'success') {
      throw new Error(restProps.msg);
    }
    return this.renderList(restProps.data);
  }

  upload = (file) => {
    const data = new FormData();
    data.append('smfile', file);
    data.append('ssl', true);
    return Axios.post(UploadUrl, data).then(this.getResponse);
  }

  onChange = (e) => {
    const {files} = e.target;
    this.uploadFiles(files);
  }

  uploadFiles = (files) => {
    const postFiles = Array.prototype.slice.call(files);
    postFiles.forEach((file) => {
      this.upload(file);
    });
  }

  clickUpload = () => {
    const el = this.uploader;
    if (!el) return;
    el.click();
  }

  saveUploader = (node) => {
    this.uploader = node;
  }

  renderList = (data) => {
    const {onFileUploadSuccess} = this.props;
    onFileUploadSuccess(data);
  }

  render() {
    return (
      <div
        role="button"
        tabIndex={0}
        className="upload-button"
        onClick={this.clickUpload}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          style={{display: 'none'}}
          onChange={this.onChange}
          ref={this.saveUploader}
        />
        <button type="button">
          <span>+ 点击上传</span>
        </button>
      </div>
    );
  }
}

import React, {Component} from 'react';
import UploadSmms from './Upload';
import Preview from './Preview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destroyed: false,
      fileList: []
    };
  }

  destroy = () => {
    this.setState({
      destroyed: true
    });
  }

  uploadFileList = (file) => {
    console.log('file: ', file);
    const {fileList} = this.state;
    this.setState({
      fileList: [
        ...fileList,
        file
      ]
    });
  }

  render() {
    const {fileList, destroyed} = this.state;
    if (destroyed) {
      return null;
    }
    return (
      <div className="App">
        <UploadSmms onFileUploadSuccess={this.uploadFileList} />
        <Preview fileList={fileList} />
      </div>
    );
  }
}

export default App;

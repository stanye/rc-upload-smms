import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import QRCode from 'qrcode.react';
import Axios from 'axios';

class Preview extends React.PureComponent {
  static propTypes = {
    fileList: PropTypes.array
  }

  copy = (url) => {
    copy(url);
  }

  delete = url => Axios.get(url)

  render() {
    const {fileList} = this.props;

    return (
      <div className="file-list">
        {fileList.map(({
          url,
          alt,
          hash,
          delete: deleteUrl,
          filename,
          height,
          width
        }) => (
          <div key={hash} className="file">
            <div className="layout">
              <img alt={alt} src={url} />
            </div>
            <div className="layout">
              <p>
                文件名:
                {filename}
              </p>
              <p>
                宽:
                {width}
                px
              </p>
              <p>
                高:
                {height}
                px
              </p>
              <div>
                <button className="copy" type="button" onClick={() => this.copy(url)}>复制链接</button>
                <button className="delete" type="button" onClick={() => this.delete(deleteUrl)}>删除照片</button>
              </div>
              <div>
                <QRCode className="qrcode" value={url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Preview;

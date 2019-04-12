import React from 'react';
import PropTypes from 'prop-types';

class Preview extends React.PureComponent {
  static propTypes = {
    fileList: PropTypes.array
  }

  render() {
    const {fileList} = this.props;

    return (
      <div>
        {fileList.map((file) => {
          const {src, alt} = file;
          return <img alt={alt} src={src} />;
        })}
      </div>
    );
  }
}

export default Preview;

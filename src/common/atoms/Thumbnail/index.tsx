import React from 'react';

interface IThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Thumbnail = ({ alt, ...rest }: IThumbnailProps) => {
  return <img alt={alt} {...rest} />;
};

Thumbnail.defaultProps = {
  alt: '',
};

export default Thumbnail;

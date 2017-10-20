import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //  console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="row video-list media">
        <div className="col col-lg-6 media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="col col-lg-6 media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
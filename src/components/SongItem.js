import React from 'react'
import { getTimeInMinute } from '../utils/functions';

const SongItem = ({item}) => {
  const featured = item.artists.length > 1 ? item.artists[1] : null;

  return (
    <div className="track">
      <div className="track-art">
        <img src={item.album.images[2] ? item.album.images[2].url : item.album.images[0].url} alt="When It's Dark Out" />
      </div>
      <div className={`track-title ${featured && 'featured'}`}>
        <span className="title">{item.name.replace(/ *\([^)]*\) */g, "")}</span>
        {featured && <span className="feature">{featured.name}</span>}
      </div>
      {item.explicit &&
      <div class="track-explicit">
        <span class="label">Explicit</span>
      </div>
      }
      <div className="track-length">{getTimeInMinute(item.duration_ms)}</div>
    </div>
  )
}

export default SongItem

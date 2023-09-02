import React from 'react'

export default function Volume({volume, onVolumeChange}) {
    return (
        <div className="volume-slider">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => onVolumeChange(e.target.value)}
          />
        </div>
      );
}

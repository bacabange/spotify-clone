import React from 'react'
import PropTypes from 'prop-types';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SongItem from './SongItem'

const SongList = ({ songs, pagination, onPrevious, onNext }) => {
  return (
    <div className="song-list-wrapper">
      <div className="song-list-header">
        <p className="section-title">Tracks <span>({pagination.total})</span></p>

        <div className="song-list-pagination">
          <button href="/#" onClick={() => onPrevious(pagination.previous)} className={`${!pagination.previous && 'disabled'}`} disabled={!pagination.previous}>
            <AiOutlineLeft />
          </button>
          <button href="/#" onClick={() => onNext(pagination.next)} className={`${!pagination.next && 'disabled'}`}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <div className="song-list">
        {songs.length
          ? (
            songs.map((song, index) => {
              return (
                <SongItem key={`song-${index}`} item={song} index={index} />
              )
            })
            )
          : <p className="text-center">No songs found 🙁</p>
        }
      </div>
    </div>
  )
}

SongList.propTypes = {
  songs: PropTypes.array,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
}

export default SongList

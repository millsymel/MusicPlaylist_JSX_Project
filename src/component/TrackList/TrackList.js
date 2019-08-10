import React from 'react';
import './TrackList.css';

import Track from '../Track/Track.js';

class TrackList extends React.Component {
  render () {
    return (
      <div className="TrackList"> {
        this.props.tracks.map(track => {
          return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
        })
      }

      <div className="Track-information" >
                      <h1>{this.props.track.name}</h1>
                      <p>{this.props.track.artist} | {this.props.track.album} </p>
                    </div>
      </div>
    );
  }
}

export default TrackList;

import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList.js';
import App from '../App/App.js';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div classNmae ="Playlist">
        <input defaultValue= {'New Playlist'}
        onClick = {this.handleNameChange}/>
        <TrackList tracks = {this.props.tracks}
        onNameChange = {this.updatePlaylistName}
         />
        // {this.props.playlistTracks}
        <a className = "Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;

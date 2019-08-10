import React from 'react';
// import logo from './favicon.ico';
import './App.css';

import Playlist from '../Playlist/Playlist.js';
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Track from '../Track/Track.js';

const playlistName = 'Melsplaylist'

const playlistTracks = {
  name: 'Pumped Up Kicks',
  artist: 'Foster the People',
  album:  'Torches',
  id: 1
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        name: 'name',
        artist: 'artist',
        album:  'album',
        id: 'id'
      }]
    }


  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);

  }

  addTrack (track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(selectedTrack => selectedTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
   this.setState({playlistName: name})
 }

 savePlaylist() {
   const trackURIs = this.state.playlistTracks.map(track => track.uri);
 }

 search(term) {
   console.log(term);
 }


  render() {
    return (
      <div className="App">
          <h1>Ja<span className ="highlight">mmm</span>ing</h1>
          <SearchBar onSearch = {this.search}/>
          <div className="App-playlist">
            <Playlist playlistName = {this.state.playlistName}
             playlistTracks = {this.state.playlistTracks}
             onAdd={this.addTrack}
             onRemove = {this.removeTrack}
             onNameChange = {this.updatePlaylistName}
             onSave = {this.savePlaylist} />
            <SearchResults searchResults = {this.props.searchResults}/>
          </div>
        </div>
      );
  }
}

export default App;



/*

<div>
  <h1>Ja<span className ="highlight">mmm</span>ing</h1>
  <div className ="App">
  //  <-- Add a SearchBar component -->
    <div className ="App-playlist">
    //  <-- Add a SearchResults component -->
    //  <-- Add a Playlist component -->
    </div>
  </div>
</div>


*/

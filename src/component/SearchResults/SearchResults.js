import React from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList.js';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks= {this.props.searchResults} onAdd = {this.props.onAdd} />
        <ul>
        //  {this.state.searchResults()}
        // {this.props.onAdd}
        // {this.props.searchResults}
        </ul>
      </div>
    );
  }
}


export default SearchResults;

/*
if(this.props.tracks){
     return (
       <div className="TrackList">
       {this.props.tracks.map(track => {
         return <Track  key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
       })
     }
     </div>
   )
 } else {
   return null }

   */

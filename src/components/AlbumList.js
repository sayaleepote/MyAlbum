import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  getTextTagWithText(album) {
    return <AlbumDetails key={album.title} album={album} />;
  }

  filteredAlbum(album) {
    if (album.title.includes('o')) {
      return this.getTextTagWithText(album);
    }
  }

  renderAlbums() {
    return this.state.albums.map(album => this.getTextTagWithText(album));
  }

  render() {
    console.log(this.state); 

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

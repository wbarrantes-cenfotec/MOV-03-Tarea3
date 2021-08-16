import React, { Component } from 'react';
import AlbumDetail from '../../organisms/albumDetail';
import { PhotosProvider } from '../../../contexts/photos-context';

export default class DetailScreen extends Component {
  render() {
    const title = this.props.title;
    const index = this.props.index;
    
    return (
      <PhotosProvider>
        <AlbumDetail title={title} index={index} />
      </PhotosProvider>
    );
  }
}
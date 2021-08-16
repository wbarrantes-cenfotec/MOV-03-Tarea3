import React, { FC, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useAlbums } from '../../../contexts/albums-context';
import AlbumListItem from '../../molecules/albumListItem';

const AlbumList: FC = () => {
  
  const { albums, fetchAlbums } = useAlbums();

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item, index}) => (
            <AlbumListItem key={index} album={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  )
};

export default AlbumList;
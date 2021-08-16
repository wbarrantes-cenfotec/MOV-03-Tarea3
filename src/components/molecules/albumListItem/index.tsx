import React, { FC, useEffect } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styled from "@emotion/native";
import IAlbum from '../../../models/IAlbum';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
}

const AlbumItemContainer = styled.TouchableOpacity`
  background-color: #dce1e3;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

const AlbumListItem: FC<AlbumListItemProps> = ({album, index}) => {
  return (
    <AlbumItemContainer onPress={() =>
      Actions.detail({
        title: `${album.title}`,
        id: `${album.id}`
      })
    }>
      <Text>
        {album.id}. {album.title}
      </Text>
    </AlbumItemContainer>
  );
};

export default AlbumListItem;
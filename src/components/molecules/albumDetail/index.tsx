import React, { FC } from 'react';
import { Actions } from 'react-native-router-flux';
import styled from "@emotion/native";

export interface AlbumDetailItemProps {
  title: string;
  index: number;
}

const AlbumItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

const AlbumDetails: FC<AlbumDetailItemProps> = ({ title, index }) => {
  return (
    <AlbumItemContainer onPress={() => 
      Actions.detail({
        title: `${title}`,
        id: `${index}`
      })
    }></AlbumItemContainer>
  );
};

export default AlbumDetails;
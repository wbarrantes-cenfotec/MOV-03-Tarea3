import React, { FC, useEffect } from 'react';
import { Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styled from '@emotion/native';
import axios from "axios";
import { usePhotos } from '../../../contexts/photos-context';

export interface AlbumDetailItemProps {
  title: string;
  index: number;
}

const CustomContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;
    
const CustomText = styled.Text`
  font-size: 18px;
`;

const CustomImage = styled.Image`
  width: 70%;
  height: 60%;
`;

const AlbumDetail: FC<AlbumDetailItemProps> = ({title, index}) => {
  const { photos, setPhotos, fetchPhotosContext } = usePhotos();

  useEffect(() => {
    fetchPhotosContext();
  }, []);

  return ( 
    <CustomContainer>
      <CustomText>Title: {title}</CustomText>
      {photos.length > 0 ? (
        <CustomImage source={{uri: photos[0].thumbnailUrl}} />
      ) : (
        <CustomImage source={{uri: ''}} />
      )}
      <Button title="Back" onPress={() => Actions.pop()}></Button>
    </CustomContainer>
  );
};

export default AlbumDetail;
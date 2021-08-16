import React, { FC, createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import IPhoto from "../models/IPhoto";

interface PhotosContextProps {
  photos: IPhoto[];
  setPhotos: (photos: IPhoto[]) => void;
  fetchPhotosContext: () => Promise<void>;
}

const PhotosContext = createContext<PhotosContextProps>({
  photos: [],
  setPhotos: () => {},
  fetchPhotosContext: () => Promise.resolve()
});

export const PhotosProvider: FC = ({children}) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const fetchPhotosContext = async () => {
    try {
      const photos = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPhotos(photos.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = { photos, setPhotos, fetchPhotosContext };

  return (
    <PhotosContext.Provider value={val}>
      {children}
    </PhotosContext.Provider>
  );
};

export const usePhotos = () => useContext(PhotosContext);
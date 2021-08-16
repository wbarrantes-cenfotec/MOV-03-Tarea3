import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../../store/reducers';
import AlbumList from '../../organisms/albumList';
import { PhotosProvider } from '../../../contexts/photos-context';
import { AlbumsProvider } from '../../../contexts/albums-context';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk))
);

const HomeScreen: FC = () => {
  return (
    <Provider store={store}>
      <PhotosProvider>
        <AlbumsProvider>
          <SafeAreaView>
            <AlbumList />
          </SafeAreaView>
        </AlbumsProvider>
      </PhotosProvider>
    </Provider>
  );
};

export default HomeScreen;
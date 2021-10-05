import { createReducer } from '@ngrx/store';
import { Photo } from '../interfaces/photo.interface';

export interface PhotosState {
  photos: Photo[];
  loading: boolean;
}

const PHOTOS_INITIAL_STATE: PhotosState = {
  photos: [],
  loading: false,
};

export const photosReducerKey = '[ reducer ] photos';

export const photosReducer = createReducer(PHOTOS_INITIAL_STATE);

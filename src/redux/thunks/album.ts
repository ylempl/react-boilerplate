import {
    requestFetching,
    requestFetchingSuccess,
    requestFetchingError
} from '../actions/album';
import { Dispatch } from 'redux';
import apiRoutes from '../../consts/apiRoutes';

const fetchRequest: Function = () => (dispatch: Dispatch) => {
    dispatch(requestFetching());

    fetch(apiRoutes.getAlbumData)
        .then(res => res.json())
        .then((res) => {
            dispatch(requestFetchingSuccess(res));
        })
        .catch(err => dispatch(requestFetchingError(err)));
};

export const requestThunk = () => (dispatch: Dispatch) => {
    dispatch(fetchRequest());
};

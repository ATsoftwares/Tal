import streams from '../apis/streams';
import history from '../history';
import {
    CREATE_STREAM,
    UPDATE_STREAM,
    SIGN_OUT,
    SIGN_IN,
    GET_STREAMS,
    GET_STREAM,
    DELETE_STREAM
} from './types';
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (streamValues,userId) => async dispatch => {
    const newValuse = {...streamValues,userId};
    const result = await streams.post('/', newValuse);
    dispatch({ type: CREATE_STREAM, payload: result.data })
    history.push('/');
}

export const getStreams = () => async dispatch => {
    const result = await streams.get('/');
    dispatch({ type: GET_STREAMS, payload: result.data })
}

export const getStream = (id) => async dispatch => {
    const result = await streams.get(`/${id}`);
    dispatch({ type: GET_STREAM, payload: result.data })
}

export const deleteStream = (id) => async dispatch => {
    const result = await streams.delete(`/${id}`);;
    dispatch({ type: DELETE_STREAM, payload: result.data })
}

export const updateStream = (id, streamValues) => async dispatch => {
    await streams.patch(`/${id}`, streamValues);
    dispatch({ type: UPDATE_STREAM, payload: id });
    history.push('/')
}
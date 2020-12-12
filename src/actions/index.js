import { SAVE_COMMENT, FETCH_COMMENTS } from './types';
import axios from 'axios';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment,
    };
}

export const fetchComments = () => async (dispatch) => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');

    dispatch({ type: FETCH_COMMENTS, payload: response });
};

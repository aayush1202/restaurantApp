import * as ActionTypes from './ActionTypes';
import { COMMENTS } from '../shared/comments';
export const Comments = (state = {
        errMess: null,
        comments: COMMENTS
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: COMMENTS};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
}
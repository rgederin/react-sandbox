import _ from 'lodash'
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        
        const uniqueUserIds = _.uniq(_.map(getState().posts, 'userId'));

        uniqueUserIds.forEach(id => dispatch(fetchUser(id)));
    }
};

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
};

export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
};

// Memoize approach
// export const fetchUser = (id) => {
//     return dispatch => {
//         _fetchUser(id, dispatch);
//     }
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });
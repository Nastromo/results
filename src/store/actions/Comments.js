import API from '../../utils/Api';



export const setComments = (list) => ({
    type: 'SET_COMMENTS',
    list
});

export const getComments = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/comments`);
            dispatch(setComments(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}
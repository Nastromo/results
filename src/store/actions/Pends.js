import API from '../../utils/Api';

export const setPends = (list) => ({
    type: 'SET_PENDS',
    list
});

export const getPends = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/pending`);
            dispatch(setPends(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}
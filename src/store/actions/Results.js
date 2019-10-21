import API from '../../utils/Api';

export const setTestsList = (list) => ({
    type: 'SET_TESTS',
    list
});

export const setAcc = (obj) => ({
    type: 'SET_ACC',
    obj
});

export const setTests = (text) => {
    return async (dispatch, getState) => {
        try {
            const arr = text.split(` | `);
            dispatch(setAcc({
                id: arr[0],
                name: arr[1],
                dob: arr[2],
                sex: arr[3],
                clientLocationId: arr[4],
                physicianId: arr[5]
            }));
            const res = await API.get(`/v1/tests?id=${arr[0]}`);
            dispatch(setTestsList(res.data));
            
        } catch (err) {
            console.log(err);
        }
    }
}
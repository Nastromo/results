export const tests = (state = [], action) => {
    switch (action.type) {
        case `SET_TESTS`:
            return action.list;

        default: return state;
    }
}

export const acc = (state = {}, action) => {
    switch (action.type) {
        case `SET_ACC`:
            return action.obj;

        default: return state;
    }
}
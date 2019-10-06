export const pends = (state = [], action) => {
    switch (action.type) {
        case `SET_PENDS`:
            return action.list;

        default: return state;
    }
}
export const comments = (state = [], action) => {
    switch (action.type) {
        case `SET_COMMENTS`:
            return action.list;

        default: return state;
    }
}
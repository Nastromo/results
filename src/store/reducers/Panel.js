export const test = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_COMMENT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.comment = action.text
            return newState;

        default: return state;
    }
}
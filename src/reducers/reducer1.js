const initialState = {

};

export function reducer1(state = initialState,action) {
    switch (action.type) {
        case "DA":
            return {...state, };
        default:
            return state;
    }
}
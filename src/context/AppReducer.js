export default(state, action) =>{
    switch (action.type) {
        case "Add":
            return [action.payload, ...state];

        default:
            return state;
    }
}
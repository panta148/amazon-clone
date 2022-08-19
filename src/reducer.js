// import { useStateValue } from './StateProvider'
export const initialState = {
    basket: []
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic to addd item to basket
            return { state }
            break;
        case 'REMOVE_FROM_BASKRT':
            //logic to reemove item from basket
            return { state }
            break;
        default:
            return state;

    }
};
export default reducer;
import { ADD_MARKET, CHOOSE_LIKED, FETCHED } from "../types";

const defaultValue = {
    products:[],
    market:[],
    liked:[],
}

const reducers = (state = defaultValue, action)=>{
    switch (action.type){
        case FETCHED:
            return {
                ...state,
                products:action.payload,
            }
        case ADD_MARKET:
            return {
                ...state,
                market:[...state.market,action.payload],
            }
            case CHOOSE_LIKED : 
            return {
                ...state,
                liked:[...state.liked,action.payload]
            }
        default:
        return state;
    }
}

export default reducers;
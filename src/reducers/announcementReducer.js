import { AN_LIST_FAIL, AN_LIST_REQUEST, AN_LIST_SUCCESS , ADD_FAIL, ADD_REQUEST, ADD_SUCCESS} from "../constants/announcementConstants";

export const announcementListReducer = (state ={loading:true, announcement:[]},action) => {
    switch (action.type) {
        case AN_LIST_REQUEST:
            return {loading:true};
        case AN_LIST_SUCCESS:
            return {loading:false, announcement: action.payload};
        case AN_LIST_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}


export const addReducer = (state ={loading:true, announcement:[]},action) => {
    switch (action.type) {
        case ADD_REQUEST:
            return {loading:true};
        case ADD_SUCCESS:
            return {loading:false, announcement: action.payload};
        case ADD_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}

import {
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE,
} from "../constains/photo.constains";

interface State {
    loading: boolean;
    photos: any[];
    error: string;
}

const initialState: State = {
    loading: false,
    photos: [],
    error: "",
};

const photoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: action.payload,
                error: "",
            };
        case FETCH_PHOTOS_FAILURE:
            return {
                ...state,
                loading: false,
                photos: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default photoReducer;

import axios from "axios";
import { Dispatch } from "redux";
import {
    FETCH_PHOTOS_FAILURE,
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS,
} from "../constains/photo.constains";

export const fetchPhotosRequest = () => {
    return {
        type: FETCH_PHOTOS_REQUEST,
    };
};

export const fetchPhotosSuccess = (photos: any) => {
    return {
        type: FETCH_PHOTOS_SUCCESS,
        payload: photos,
    };
};

export const fetchPhotosFailure = (error: any) => {
    return {
        type: FETCH_PHOTOS_FAILURE,
        payload: error,
    };
};

// export const fetchPhotos = (page: number, perPage: number) => {
//     return async (dispatch: Dispatch) => {
//         dispatch(fetchPhotosRequest());
//         try {
//             const res = await axios.get(
//                 `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perPage}`
//             );
//             const data = await res.data;
//             dispatch(fetchPhotosSuccess(data));
//             return data;
//         } catch (error) {
//             dispatch(fetchPhotosFailure(error));
//         }
//     };
// };

export const fetchPhotos = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchPhotosRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                const photos = response.data;
                dispatch(fetchPhotosSuccess(photos));
            })
            .catch((error) => {
                dispatch(fetchPhotosFailure(error.message));
            });
    };
};

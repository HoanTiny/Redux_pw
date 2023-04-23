import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../redux/reducers";
import { fetchPhotos } from "../redux/actions/photo.action";
import ListItem from "./ListItem";
import useInfiniteScroll from "react-infinite-scroll-hook";

interface Photo {
    id: number;
    title: string;
    thumbnailUrl: string;
}

const PhotoList = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state: State) => state.photoReducer.photos);
    const loading = useSelector((state: State) => state.photoReducer.loading);
    const error = useSelector((state: State) => state.photoReducer.error);

    useEffect(() => {
        dispatch<any>(fetchPhotos()); // Thêm any để bỏ qua kiểm tra kiểu dữ liệu
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    const handleReset = () => {
        dispatch<any>(fetchPhotos());
    };

    return (
        <div>
            <h2>Photo List</h2>
            <button>Cập nhật</button>
            <button onClick={handleReset}>Reset</button>
            <ul>
                {photos.map((photo: Photo, index: number) => (
                    <ListItem
                        key={photo.id}
                        id={photo.id}
                        title={photo.title}
                        thumbnailUrl={photo.thumbnailUrl}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;

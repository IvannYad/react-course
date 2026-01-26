import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        // Very rare to override this function.
        fetchFn: async (...args) => {
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    return [
                        ...result.map(photo => {return { type: 'Photo', id: photo.id}}),
                        { type: 'AlbumsPhotos', albumId: album.Id }
                    ]
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET'
                    };
                },
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [
                        { type: 'AlbumsPhotos', albumId: album.id }
                    ]
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            url: faker.image.abstract(150, 150, true),
                            albumId: album.id
                        }
                    };
                },
            }),
            deletePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [
                        { type: 'Photo', id: photo.id },
                    ];
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE',
                    };
                }
            }),
        };
    }
});

export const {
    useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation
} = photosApi;
export { photosApi };
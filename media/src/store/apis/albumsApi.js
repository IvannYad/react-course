import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        // Very rare to override this function.
        fetchFn: async (...args) => {
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    return [
                        ...result.map(album => {return { type: 'Album', id: album.id}}),
                        { type: 'UsersAlbums', userId: user.Id }
                    ]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    };
                },
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [
                        { type: 'UsersAlbums', userId: user.id }
                    ]
                },
                query: (user) => {
                    return {
                        url: 'albums',
                        method: 'POST',
                        body: {
                            title: faker.commerce.productName(),
                            userId: user.id
                        }
                    };
                },
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [
                        { type: 'Album', id: album.id },
                    ];
                },
                query: (album) => {
                    return {
                        url: `albums/${album.id}`,
                        method: 'DELETE',
                    };
                }
            }),
        };
    }
});

export const {
    useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation
} = albumsApi;
export { albumsApi };
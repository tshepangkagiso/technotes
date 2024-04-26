// Importing necessary functions from the Redux Toolkit query library
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Creating an API slice using createApi function
export const apiSlice = createApi({
    // Setting the baseQuery for making requests with a base URL which is our api url
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),

    // Defining tag types for the API, which can be used for caching and other purposes
    tagTypes: ['Note', 'User'],

    // Defining API endpoints using the builder function
    endpoints: builder => ({
        // You can add specific endpoints for your API here
        // Each endpoint can have its own configuration and behavior
    }),
});

/*In summary, this code sets up the foundation for an API slice in Redux Toolkit, providing tools to interact with an API in a Redux store. The base query is configured with a base URL, tag types are defined for caching, and endpoints can be added later to specify API endpoints with their own configurations. */
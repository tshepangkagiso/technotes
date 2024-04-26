// Importing necessary function from Redux Toolkit for configuring the store
import { configureStore } from "@reduxjs/toolkit";

// Importing the API slice created in the previous code
import { apiSlice } from './api/apiSlice';

// Configuring the Redux store using configureStore
export const store = configureStore({
    // Defining reducers for the store
    reducer: {
        // Using the reducer from the API slice and assigning it to a specific reducer path
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    
    // Adding middleware to the store
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),

    // Enabling Redux DevTools for debugging
    devTools: true
});

/*In summary, this code configures the Redux store using the configureStore function from Redux Toolkit. It includes the API slice's reducer under a specific path, adds the API slice's middleware, and enables the Redux DevTools for debugging. This store can now be used in a React application to manage state and interact with the API using the tools provided by Redux Toolkit. */
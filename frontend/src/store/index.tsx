import { configureStore } from '@reduxjs/toolkit'

import isLoggedInSlice from './loggedin'

const store = configureStore({
    reducer: {
        isLoggedIn: isLoggedInSlice.reducer,
    },
})

export default store

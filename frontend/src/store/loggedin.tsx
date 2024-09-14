import { createSlice } from '@reduxjs/toolkit'

const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState: 'false',

    reducers: {
        // getLoggedInCookie() {
        //     const isLoggedIn = getCookie('isLoggedIn')
        //     let login
        //     if (isLoggedIn === null || isLoggedIn === 'false') {
        //         login = 'false'
        //     } else {
        //         login = 'true'
        //     }
        //     return login
        // },
        // createLoggedCookie(_, action) {
        //     const loginValue = action.payload
        //     createCookie('isLoggedIn', loginValue)
        //     return loginValue
        // },
    },
})

export const isLoggedInActions = isLoggedInSlice.actions
export default isLoggedInSlice

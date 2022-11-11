import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    severity:'',
    message:'',
}

const tooltipsSlice = createSlice({
    name:'tooltips',
    initialState: initialState,
    reducers: {
        showToast: (state,action) =>{
            state.severity = action.payload.severity;
            state.message = action.payload.message;
        }
    }
})

export const { showToast } = tooltipsSlice.actions

export default tooltipsSlice.reducer

export const setToast = (severity,message) => (dispatch) =>{
    dispatch(showToast({
        severity: severity,
        message: message
    }))
}
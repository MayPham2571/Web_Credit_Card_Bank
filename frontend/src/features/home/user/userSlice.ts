import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { homeApi } from "../../../api";
import { RootState } from "../../../app/store";
import { userInfoDto, userInfoInitial, userInfoStateDto } from "../home-dto";

export const initialState: userInfoStateDto = {
    status: 'idle',
    errMsg: '',
    accountInfo: userInfoInitial
}

export const getAccountInfo = createAsyncThunk(
    'UserHome/getAccountInfo', async(id: number, thunkApi) => {
        let response: any = await homeApi.getAccountById(id);
        if(response.statusCode >300 ) {
            return thunkApi.rejectWithValue(response.message);
        } else {
            return response
        }
    }
)

export const userHomeSlice = createSlice ({
    name:'UserHome',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAccountInfo.pending, (state) => {
            state.status = 'isLoading';
        })
        .addCase(getAccountInfo.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = action.payload;
        })
        .addCase(getAccountInfo.fulfilled, (state, action: PayloadAction<any>) => {
            state.status ='idle';
            state.accountInfo = action.payload;
        })
    }
})


export const { reducer, actions } = userHomeSlice;
// export const { setUserInfo } = actions;
export const selectUserHomeState = (state: RootState) => state.userHomeState;
export default reducer;
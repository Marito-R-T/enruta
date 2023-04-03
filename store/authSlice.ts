import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
/*const initialState: AuthState = {
  authState: false,
};*/

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
/*const extraActions = createExtraActions();*/
const extraReducers = createExtraReducers();


// implementation

function createInitialState() {
    return {
        authState: false,
    }
}

function createReducers() {
    return {
      setAuthState
    };

    function setAuthState(state: { authState: any; }, action: { payload: any; }) {
      state.authState = action.payload;
    };
}

/*function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

    return {
        login: login()
    };

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async () => await setTimeout(()=>{console.log("")},1000)
        );
    }
}*/

function createExtraReducers() {
    return (builder) => {
      builder.addCase(HYDRATE, (state, auth) => {
        return {
          ...state,
          ...auth,
        };
      });
        /*login();

        function login() {
            var { pending, fulfilled, rejected } = extraActions.login;
            builder
                .addCase(pending, (state: { error: null; }) => {
                    state.error = null;
                })
                .addCase(fulfilled, (state: { authState: boolean; }) => {
                    state.authState = true,
                })
                .addCase(rejected, (state: { error: any; }, action: { error: any; }) => {
                    state.error = action.error;
                });
        }*/
    };
}

// Actual Slice
export const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers,

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: extraReducers
});

// exports

export const authActions = { ...slice.actions };
export const { setAuthState } = slice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default slice.reducer;
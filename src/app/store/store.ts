import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthSlice {
	isUserLoggedIn: boolean;
}

const initialState: IAuthSlice = {
	isUserLoggedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (
			state,
			action: PayloadAction<{ name: string; password: string }>
		) => {
			if (
				action.payload.name === "User" &&
				action.payload.password === "12345"
			) {
				state.isUserLoggedIn = true;
			}
		},
	},
});

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

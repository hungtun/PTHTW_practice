import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UiState = {
    mobileNavOpen: boolean;
    postSearchDraft: string;
    adminStatusFilter: "all" | "draft" | "published";
}

const initialState : UiState = {
    mobileNavOpen : false,
    postSearchDraft: "",
    adminStatusFilter: "all"
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setMobileNavOpen(state, action: PayloadAction<string>){
            // state.mobileNavOpen = action.payload
        }
    }
});

export const {
    setMobileNavOpen
} = uiSlice.actions;

export default uiSlice.reducer;
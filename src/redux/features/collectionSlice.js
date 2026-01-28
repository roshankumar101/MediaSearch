import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        items: JSON.parse(localStorage.getItem('collection')) || [],
    },
    reducers: {
        addCollection(state, action) {
            // check if already exist in the items
            const exists = state.items.find(
                items => items.id === action.payload.id
            )

            if(!exists){
                // add to the items
                state.items.push(action.payload)

                // add to the localStorage
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection(state, action){
            // delete from the items
            state.items = state.items.filter(
                items => items.id !== action.payload.id
            )
            // add to the collection
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection(state) {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast() {

        },
        deleteToast() {

        }
    }

})


export const { addCollection, removeCollection, clearCollection, addedToast, deleteToast } = collectionSlice.actions;
export default collectionSlice.reducer;
import { createSelector } from "reselect";

const selectUser = state => state.user;

 export const selectedCurrentUser = createSelector(
    [selectUser],
    (user)=>user.currentUser
);
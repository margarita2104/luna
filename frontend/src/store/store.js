import { configureStore } from '@reduxjs/toolkit';
import loggedInUser from './slices/loggedInUser.js';
import profileFilter from './slices/profileFilter.js';
import postsFilter from './slices/postsFilter';
import friendRequests from './slices/friendRequests.js';
import userReducer from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    // loggedInUser: loggedInUser,
    // profileFilter: profileFilter,
    // postsFilter: postsFilter,
    // friendRequests: friendRequests,
    user: userReducer,
  },
});

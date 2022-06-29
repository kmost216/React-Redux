import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice.js";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

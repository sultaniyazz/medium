import axios from "axios";
import {
  fetchAuthorsErr,
  fetchAuthorStart,
  fetchAuthorSuccess,
  fetchPostsErr,
  fetchPostStart,
  fetchPostSuccess,
} from "../store/action";

export const getAllPosts = (url) => {
  return async (dispatch) => {
    dispatch(fetchPostStart());
    try {
      const res = await axios.get(url);
      dispatch(fetchPostSuccess(res.data));
    } catch (err) {
      dispatch(fetchPostsErr());
    }
  };
};

// try {
//   const res = await axios.delete(
//     `${"https://posts-db.onrender.com/posts"}/${17}`
//   );
// } catch (err) {
//   console.log(err);
// }

export const fetchAuthors = (url) => {
  return async (dispatch) => {
    dispatch(fetchAuthorStart());
    try {
      const res = await axios.get(url);
      dispatch(fetchAuthorSuccess(res.data));
    } catch (err) {
      dispatch(fetchAuthorsErr());
    }
  };
};

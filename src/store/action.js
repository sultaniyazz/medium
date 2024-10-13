export const darkMode = () => {
  return {
    type: "DARK-MODE",
  };
};

export const fetchPostStart = (payload) => {
  return {
    type: "FETCH_POST_START",
    payload: payload,
  };
};
export const fetchPostSuccess = (payload) => {
  return {
    type: "FETCH_POST_SUCCESS",
    payload: payload,
  };
};
export const fetchAuthorStart = (payload) => {
  return {
    type: "FETCH_AUTHOR_START",
    payload: payload,
  };
};
export const fetchAuthorSuccess = (payload) => {
  return {
    type: "FETCH_AUTHOR_SUCCESS",
    payload: payload,
  };
};
export const fetchPostsErr = (payload) => {
  return {
    type: "FETCH_POST_ERROR",
    payload: payload,
  };
};
export const fetchAuthorsErr = (payload) => {
  return {
    type: "FETCH_AUTHORS_ERROR",
    payload: payload,
  };
};
export const authorSelect = (payload) => {
  return {
    type: "AUTHOR-SELECT",
    payload: payload,
  };
};
export const reload = () => {
  return {
    type: "RELOAD",
  };
};
export const sideBar = () => {
  return {
    type: "SIDEBAR",
  };
};

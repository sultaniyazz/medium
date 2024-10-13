import {
  authorSelect,
  fetchAuthorsErr,
  fetchAuthorStart,
  fetchAuthorSuccess,
  fetchPostsErr,
  fetchPostStart,
  fetchPostSuccess,
  reload,
  sideBar,
} from "./action";

const initialState = {
  dataPosts: [],
  filterPosts: [],
  dataAuthors: [],
  loadingPosts: false,
  loadingAuthors: false,
  errorPosts: false,
  errorAuthors: false,
  darkMode: false,
  sidebar: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK-MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case sideBar().type:
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case fetchPostStart().type:
      return {
        ...state,
        loadingPosts: true,
      };
    case fetchPostSuccess().type:
      return {
        ...state,
        loadingPosts: false,
        dataPosts: action.payload,
      };
    case authorSelect().type:
      return {
        ...state,
        filterPosts: state.dataPosts.filter(
          (item) => item.authorId === action.payload
        ),
      };
    case reload().type:
      return {
        ...state,
        filterPosts: [],
      };
    case fetchAuthorStart().type:
      return {
        ...state,
        loadingAuthors: true,
      };
    case fetchAuthorSuccess().type:
      return {
        ...state,
        loadingAuthors: false,
        dataAuthors: action.payload,
      };
    case fetchPostsErr().type:
      return {
        ...state,
        errorPosts: true,
      };
    case fetchAuthorsErr().type:
      return {
        ...state,
        errorAuthors: true,
      };
    default:
      return state;
  }
};

import { ADD_TODO, TOGGLE_TODO, TOGGLE_FAVORITE } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
            favorite: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      console.log("inside the toggleTodo reducer");
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case TOGGLE_FAVORITE: {
      console.log("inside the toggleFavorite reducer");
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            favorite: !state.byIds[id].favorite,
          },
        },
      };
    }

    default:
      return state;
  }
}

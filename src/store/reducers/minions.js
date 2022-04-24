import actionTypes from "../actions";

const initialState = {
  minions: 0,
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MINION:
      return { minions: state.minions + 1, message: "" };
    case actionTypes.DESTROY_MINION:
      if (state.minions == 0) {
        return { minions: 0, message: "Il n'y a plus de minions à détruire !" };
      } else {
        return { minions: state.minions - 1, message: "" };
      }
    case actionTypes.CREATE_TEAM:
      return { minions: state.minions + action.value, message: "" };
    case actionTypes.DESTROY_TEAM:
      if (state.minions == 0) {
        return { minions: 0, message: "Il n'y a plus de minions à détruire !" };
      } else if (state.minions < action.value.toString()) {
        return {
          minions: state.minions,
          message: "Il n'y a pas assez de minions à détruire !",
        };
      } else {
        return {
          minions: state.minions - action.value,
          message: "",
        };
      }

    default:
      return state;
  }
};

export default reducer;

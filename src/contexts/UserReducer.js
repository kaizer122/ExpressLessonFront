const setStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user ?? null));
};
const removeStorage = () => localStorage.removeItem("user");
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      setStorage(action.payload.user);
      return {
        loggedIn: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      removeStorage();
      return {
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

import { store } from "../app/store";
import { Navigate } from "react-router-dom";
export default function AuthGuard({ children }) {
  const { user } = store.getState();
  return user ? children : <Navigate to="/signin" />;
}

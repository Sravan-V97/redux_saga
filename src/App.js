import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/users";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <div className="App">
      <h1>Hello {user}</h1>
    </div>
  );
}

export default App;

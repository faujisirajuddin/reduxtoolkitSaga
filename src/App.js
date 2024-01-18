import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./catReducer";
import Cat from "./cat";

function App() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <Cat />
    </div>
  );
}

export default App;

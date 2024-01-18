import react from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const { name, age } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> I am {name}</h1>
      <h1> My age is {age}</h1>
      <button
        onClick={() => dispatch({ type: "UPDATE_NAME"})}
      >
        Update Name
      </button>
    </div>
  );
}

export default Profile;

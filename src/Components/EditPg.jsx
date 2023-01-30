import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Data from "./DataContext";
import NavBar from "./NavBar";

const EditPg = () => {
  const context = useContext(Data);
  const location = useLocation();
  const navigate = useNavigate();
  const index = location.state.data;
  const newObj = {
    name: context.entries[index].Name,
    age: context.entries[index].Age,
    course: context.entries[index].Course,
    batch: context.entries[index].Batch,
  };

  const onCancel = () => {
    navigate("/student");
  };

  const handleChange = (e) => {
    newObj[e.target.name] = e.target.value;
  };

  const handleUpdate = () => {
    context.updateFunction((prevObj) => {
      prevObj[index] = newObj;
      return prevObj;
    });
    navigate("/student");
  };
  return (
    <div>
      <NavBar />
      <div className="input-container">
        <input
          type="text"
          name="Name"
          onChange={handleChange}
          placeholder={context.entries[index].Name}
        />

        <input
          type="text"
          name="Age"
          onChange={handleChange}
          placeholder={context.entries[index].Age}
        />
        <input
          type="text"
          name="Course"
          onChange={handleChange}
          placeholder={context.entries[index].Course}
        />
        <input
          type="text"
          name="Batch"
          onChange={handleChange}
          placeholder={context.entries[index].Batch}
        />
      </div>
      <div className="btns">
        <button onClick={onCancel} className="cancel-btn">
          <Link to={"/student"} className="cancel-link">
            Cancel
          </Link>{" "}
        </button>
        <button className="cancel-btn add-btn" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPg;

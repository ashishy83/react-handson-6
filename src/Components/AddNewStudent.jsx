
// import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from './DataContext';

const AddNewStudent = () => {
  const context = useContext(Data);
  const navigate = useNavigate();
  const newObj ={
    Name : '',
    Age : '',
    Course : '',
    Batch : ''


  }


  const onCancel = () => {
    navigate('/student')
  };

  const handleChange = (e) => {
    newObj[e.target.name] = e.target.value ;
  };

  const handleUpdate =(e)=>{
    context.updateFunction((prevObj)=>{
      prevObj.push(newObj);
      return (prevObj)
    }
    );
    navigate('/student');
  }
  return (
    <div>
      <NavBar />
      <div className="input-container">
        <input
          type="text"
          
          name="Name"
          onChange={handleChange}
          placeholder='Name'
        />
        <input
          type="text"
          
          name="Age"
          onChange={handleChange}
          placeholder='Age'
        />
        <input
          type="text"
          
          name="Course"
          onChange={handleChange}
          placeholder='Course'
        />
        <input
          type="text"
          
          name="Batch"
          onChange={handleChange}
          placeholder='Batch'
        />
      </div>
      <div className="btns">
        <button onClick={onCancel} className='cancel-btn'><span className='cancel-link'>Cancel</span> </button>
        <button className='cancel-btn' onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};


export default AddNewStudent
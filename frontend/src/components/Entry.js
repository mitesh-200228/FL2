import React from 'react'
import '../css/common.css';
import axios from 'axios';

const Entry = () => {
  const [data, setData] = React.useState({
    entity: "", department: "", designation: "", hiringmanager: "", hrmanager: "", recruiter: ""
  });
  const [grade,setGrade] = React.useState(1);
  const ChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  }
  const Trigger = async () => {
    try {
      await axios.post('http://localhost:4000/insert', {
        data,grade
      }).then((data) => {
        console.log(data);
        window.alert(data.data.message);
      }).catch(err => {
        window.alert(err);
      });
    } catch (error) {
      window.alert(error);
    }
  }
  return (
    <div className="main">
      <div className='secondMain'>
        <label for="grade">Choose a Grade:</label>
        <select onChange={(e) => setGrade(e.target.value)} name="grades" id="grades">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
        <input onChange={ChangeData} placeholder='Enter Entity' type='text' name='entity' value={data.entity} className='inpt'></input>
        <input onChange={ChangeData} placeholder='Enter Department' type='text' name='department' value={data.department} className='inpt'></input>
        <input onChange={ChangeData} placeholder='Enter Designation' type='text' name='designation' value={data.designation} className='inpt'></input>
        <input onChange={ChangeData} placeholder='Enter Hiring manager' type='text' name='hiringmanager' value={data.hiringmanager} className='inpt'></input>
        <input onChange={ChangeData} placeholder='Enter HR manager' type='text' name='hrmanager' value={data.hrmanager} className='inpt'></input>
        <input onChange={ChangeData} placeholder='Enter Recruiter' type='text' name='recruiter' value={data.recruiter} className='inpt'></input>
        <button onClick={Trigger}>Submit</button>
      </div>
    </div>
  )
}

export default Entry
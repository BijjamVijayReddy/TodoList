import { React, useState, } from "react";
import "./TodoList.css";

function Todolist() {
  const [data, SetData] = useState({
    first: "",
    last: "",
    email: "",
    mobile: "",
  });
  const [store, SetStore] = useState([]);
 

  const changeHandler = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
   console.log( data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: data.id,
      first: data.first,
      last: data.last,
      email: data.email,
      mobile: data.mobile,
    };

    SetStore([...store, newData]);
    console.log(store);
    
  };
 
  return (
    <div>
      <h3>ContactForm</h3>
      <p>{JSON.stringify(data)}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="FirstName"
            name="first"
            onChange={changeHandler}
            maxlength="7"
            value={store.first}
            
          />
          <br />
          <input placeholder="LastName" name="last" onChange={changeHandler}  maxlength="7"  value={store.last}/>
          <br />
          <input placeholder="Email" name="email" onChange={changeHandler}  maxlength="20"  value={store.email}/>
          <br />
          <input
            placeholder="Mobile"
            name="mobile"
            onChange={changeHandler}
            maxlength="12"
            minLength="10"
            value={store.mobile}
          />
          <br />
          <button className="button1 bluebtn" >
            Submit
          </button>
          <button className="button1 redbtn">Cancle</button>
        </form>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
          <th>S.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Edit/Delete</th>
          </thead>
          <tbody>
            {store.map((emp, id) => {
              return (
                <tr key={id}>
                  <td>{id+1}</td>
                  <td>{emp.first}</td>
                  <td>{emp.last}</td>
                  <td>{emp.email}</td>
                  <td>{emp.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todolist;

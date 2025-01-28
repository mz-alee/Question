import React, { useEffect, useState } from "react";

const Form = () => {
  const [userData, setuserData] = useState({
    firstname: "",
    lastname: "",
    lastname: "",
    email: "",
    password: "",
  });
  cosnt[(Data, setData)] = useState([]);
  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...prev,
      [name]: value,
    });
    localStorage.setItem("users", JSON.stringify(Data));
  };
  const handleForm = (e) => {
    e.preventDefault();
    setData({
      firstname: "",
      lastname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    const updateddata = localStorage.getItem("users");
    if (updateddata) {
      setData(JSON.parse(updateddata));
    }
  }, []);

  return (
    <div className=" bg-gray-950 text-white text-center flex flex-col items-center justify-center w-full p-6 gap-4">
      <div className="main">
        <h1>form</h1>
        <div className="form">
          <form>
            <div>
              <input
                type="text"
                placeholder="firstname"
                name="firstname"
                value={userData.firstname}
                onChange={handleInputData}
              />
              <input
                type="text"
                placeholder="lastname"
                name="lastname"
                value={userData.lastname}
                onChange={handleInputData}
              />
              <input type="email" placeholder="email" value={userData.email} />
              <input
                type="password"
                placeholder="password"
                value={userData.password}
                onChange={handleInputData}
              />
            </div>
            <button onClick={handleForm} type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
      {Data.map((items, index) => {
        <div key={index}>
          <h4>{items.firstname}</h4>
          <h4>{items.lastname}</h4>
          <h4>{items.email}</h4>
          <h4>{items.password}</h4>
        </div>;
      })}
    </div>
  );
};

export default Form;

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = e => {
    var { name, value } = e.target;
    //Spread Operator  ,set obj key by [key]
    setContact({ ...contact, [name]: value }); // 1

    // 2
    /*setContact(prevValue => ({
      //Spread Operator
      ...prevValue,
      //set obj key by [key]
      [name]: value
    }));
    */
    console.log(contact);
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          value={contact.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

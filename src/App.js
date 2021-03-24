import React, { useState, useEffect } from "react";
import Form from "./Forms/Form.js"
import axios from "axios";


const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

export default function App() {
  const [forms, setForms] = useState([]); 

  
  const [formValues, setFormValues] = useState(initialFormValues);


  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    
    if (!newFriend.username || !newFriend.email || !newFriend.role) return;
    
    axios
      .post("fakeapi.com", newFriend)
      .then((res) => {
        setForms([newFriend, ...forms]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
      });
   
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setForms(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Form App</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {/* {forms.map((friend) => {
        return <Friend key={friend.id} details={friend} />;
      })} */}
    </div>
  );
}

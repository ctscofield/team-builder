import React, { useState, useEffect } from "react";
import Form from "./Forms/Form.js"
import FormList from "./Forms/FormList"
import axios from "./Axios/index";


const initialFormValues = {
  name: "",
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
    const newForm = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    };
    
    if (!newForm.name || !newForm.email || !newForm.role) return;
    
    axios
      .post("fakeapi.com", newForm)
      .then((res) => {
        setForms([newForm, ...forms]);
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
      <h1>Team Sign up App</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {forms.map((details) => {
        return <FormList key={details.id} details={details} />;
      })}
    </div>
  );
}

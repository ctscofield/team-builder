import React, { useState } from 'react'





export default function LoginForm(props) {
  const { values, update, submit } = props;

const onChange = (evt) => {
  const { name, value } = evt.target;

  update(name, value);
};
 
const [formData, setFormData] =useState({
    name: '',
    email: '',
    role: ''
})

const onInputChange = event => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,  
    });
};

  const onSubmit = evt => {
    evt.preventDefault()
    console.log('submit event')
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='Login inputs'>
        
        <label>Name
          
              <input 
                name='name' 
                type='text' 
                onChange={onInputChange} 
                maxLength='30'
              />
        </label>

        <label>Email
         
          <input
            name='email' 
            type='email' 
            onChange={onInputChange} 
          />
        </label>

        <label>
          Role
          
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">------select role------</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
            <option value="graduate">Graduate</option>
          </select>
        </label>

        <div className='submit'>
          <button>Add</button>
        </div>
      </div>
    </form>
  )
}


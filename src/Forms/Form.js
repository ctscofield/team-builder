import React from 'react'





export default function Form(props) {
  const { values, update, submit } = props;

 const onChange = event => {
   const { name, value } = event.target;
   update(name, value);
};

  const onSubmit = evt => {
    evt.preventDefault()
    submit();
    console.log(submit());
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-groups inputs'>
        
        <label>Name
          
              <input 
                name='name' 
                type='text' 
                onChange={onChange}
                value={values.username}
                placeholder="type a username"
                maxLength='30'
              />
        </label>

        <label>Email
         
          <input
            name="email"
            value={values.email}
            type="email"
            onChange={onChange}
            placeholder="type an email" 
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
  );
}


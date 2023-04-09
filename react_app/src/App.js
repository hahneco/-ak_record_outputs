// import logo from './logo.svg';
// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';


function AlertMessage(props) {
  const data = props.data
  const msg = JSON.stringify(data)

  return <div className='alert alert-primary h5 text-primary'>
    <h5>{props.msg}</h5>
    <table className='table h6'>
      <tbody>
        <tr><th>Name<td>{data.name}</td></th></tr>
        <tr><th>Mail<td>{data.mail}</td></th></tr>
        <tr><th>Age<td>{data.age}</td></th></tr>
      </tbody>
    </table>
  </div>
}


function App() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [age, setAge] = useState("")
  const [form, setForm] = useState({
    name: 'no name', mail: 'no mail', age: 0
  })

  const doChangeName = (event) => {
    setName(event.target.value)
  }
  const doChangeMail = (event) => {
    setMail(event.target.value)
  }
  const doChangeAge = (event) => {
    setAge(event.target.value)
  }

  const doSubmit = (event) => {
    setForm({ name: name, mail: mail, age: age })
    event.preventDefault()
  }

  return (
    <div>
      <h1 className='bg-blue text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks sample</h4>
        <AlertMessage data={form} setData={setForm} />
        <form onSubmit={doSubmit}>
          <label>Name:</label>
          <input type="text" className='form-control' onChange={doChangeName} />
          <div className='form-group'>
            <label>Mail:</label>
            <input type="text" className='form-control' onChange={doChangeMail} />
          </div>
          <div className='form-group'>
            <label>Age:</label>
            <input type="number" className='form-control' onChange={doChangeAge} />
          </div>
          <input type="submit" className='btn btn-primary' value="Click" />
        </form>
      </div>
    </div>
  )
}

export default App

// import logo from './logo.svg';
// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';


function AlertMessage(props) {
  return <div className='alert alert-primary h5 text-primary'>
    {props.message}
  </div>
}

function CardMessage(props) {
  return <div className='card p-3 h5 border-primary text-center'>
    {props.message}
  </div>
}

function App() {
  const [msg] = useState("This is sample message!")

  return (
    <div>
      <h1 className='bg-blue text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
      </div>
    </div>
  )
}

export default App

import React from 'react';
import './App.css'; 
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1 className="app-title">User Information Form</h1>
      <div className="form-container">
        <MyForm />
      </div>
    </div>
  );
}

export default App;

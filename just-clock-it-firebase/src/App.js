import React from 'react';
import logo from './logo.svg';
import firebase from './firebase'
import './App.css';
import TimeList from './components/time-list'
import AddTimeEntryList from './components/add-time-entry-form'

//Test firebase
//firebase.firestore().collection('times').add({
//  title: 'Hello firebase',
//  time: 45
//})

function App() {
  return (
    <div className="App">
      <h1>Just Clock it</h1>
      <TimeList />
      <AddTimeEntryList />
    </div>
  );
}

export default App;

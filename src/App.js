import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header/HeaderComponent';
import TodosComponent from './components/todos/TodosComponent';
import AlbumsComponent from './components/albums/AlbumsComponent';
import CommentsComponent from './components/comments/Commentscomponent';


const App = () =>{
  return (
  <div className = 'wrapper'>
    <Router>
    <HeaderComponent />
    <Routes>
      <Route path="/todos" element={<TodosComponent />} />
      <Route path="/albums" element={<AlbumsComponent />} />
      <Route path="/comments" element={<CommentsComponent />} />
    </Routes>
  </Router>
  </div>
  )
}


export default App;

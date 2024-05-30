import styles from './TodosComponent.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const TodosComponent = () => {
  const [todos,  setTodos] = useState([]);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => setTodos(response.data))
    .catch(error => console.error('Error fetching todos:', error));
}, []);


  return (
    <ol>  
    {todos?.map((todo) =>(
    <li key={todo.id} className = {styles.box}>
    <div>userID: {todo.userId}</div>
    <div>id: {todo.id}</div>
    <div>title: {todo.title}</div> 
    <div>completed: {`${todo.completed}`}</div>
    </li>
    ))}
    </ol>
    
  );
}

export default TodosComponent;
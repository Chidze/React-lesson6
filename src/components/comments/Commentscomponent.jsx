import styles from './CommentComponent.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CommentsComponent = () => {
  const [comments,  setComments] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => setComments(response.data))
    .catch(error => console.error('Error fetching comments:', error));
}, []);


const fetchPost = (postId) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => setPost(response.data))
    .catch(error => console.error('Error fetching post:', error));
};

  return (
    <div>
    <ol>  
    {comments?.map((comment) =>(
    <li key={comment.id} className={styles.box}>
    <div>postId: {comment.postId}</div>
    <div>id: {comment.id}</div>
    <div>name: {comment.name}</div>
    <div>email: {comment.email}</div> 
    <div>body: {comment.body}</div> 
    <button className={styles.button} onClick={() => fetchPost(comment.postId)}>Показати пост</button>
    {post && (
      <div className={styles.post}>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
   )}
    </li>
    ))}
   
   
    </ol>
    
  </div>
  )
}


export default CommentsComponent;
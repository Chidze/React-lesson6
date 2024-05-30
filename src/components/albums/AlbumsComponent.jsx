import styles from './AlbumComponent.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumsComponent = () => {
  const [albums,  setAlbums] = useState([]);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
    .then(response => setAlbums(response.data))
    .catch(error => console.error('Error fetching albums:', error));
}, []);

  return (
    <ol>  
    {albums?.map((album) =>(
    <li key={album.id} className={styles.box}>
    <div>userID: {album.userId}</div>
    <div>id: {album.id}</div>
    <div>title: {album.title}</div> 
    </li>
    ))}
    </ol>
  );
}

export default AlbumsComponent;
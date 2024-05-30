import styles from './HeaderComponent.module.css'
import React from 'react';
import { Link } from 'react-router-dom';


const HeaderComponent = () => (
  <nav >
    <ul className={styles.list}>
      <li><Link className={styles.link} to="/todos">Todos</Link></li>
      <li><Link className={styles.link} to="/albums">Albums</Link></li>
      <li><Link className={styles.link} to="/comments">Comments</Link></li>
    </ul>
  </nav>
);

export default HeaderComponent;
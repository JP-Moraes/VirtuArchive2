import styles from './GameCard.module.css';
import { Link } from 'react-router-dom';

export default function GameCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className={styles.button}>Ver mais</Link>
    </div>
  );
}
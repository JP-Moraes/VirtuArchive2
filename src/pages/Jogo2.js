import styles from './Jogo2.module.css';
import { Link } from 'react-router-dom';

export default function Jogo2() {
  return (
    <div className={styles.container}>
      <h1>Forest Quest</h1>
      <p>
        Explore a floresta encantada, encontre criaturas mágicas,
        resolva enigmas e descubra templos escondidos.
      </p>

      <div className={styles.image}></div>

      <Link to="/" className={styles.backButton}>Voltar</Link>
    </div>
  );
}

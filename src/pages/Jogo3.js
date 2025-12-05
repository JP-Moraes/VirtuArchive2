import styles from './Jogo3.module.css';
import { Link } from 'react-router-dom';

export default function Jogo3() {
  return (
    <div className={styles.container}>
      <h1>Space Duel</h1>
      <p>
        Entre em combates espaciais intensos contra naves inimigas,
        melhore seu arsenal e salve a galáxia da ameaça alienígena.
      </p>

      <div className={styles.image}></div>

      <Link to="/" className={styles.backButton}>Voltar</Link>
    </div>
  );
}

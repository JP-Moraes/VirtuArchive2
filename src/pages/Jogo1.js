import styles from './Jogo1.module.css';
import { Link } from 'react-router-dom';

export default function Jogo1() {
  return (
    <div className={styles.container}>
      <h1>CyberRunner</h1>
      <p>
        Corra pelas ruas neon de uma mega metrópole futurista, desviando de drones,
        saltando prédios e hackeando obstáculos eletrônicos.
      </p>

      <div className={styles.image}></div>

      <Link to="/" className={styles.backButton}>Voltar</Link>
    </div>
  );
}

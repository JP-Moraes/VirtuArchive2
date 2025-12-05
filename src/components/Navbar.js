import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>🎮 Biblioteca de Jogos</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jogo1">CyberRunner</Link></li>
        <li><Link to="/jogo2">Forest Quest</Link></li>
        <li><Link to="/jogo3">Space Duel</Link></li>
      </ul>
    </nav>
  );
}
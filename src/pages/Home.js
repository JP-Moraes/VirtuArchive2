import styles from './Home.module.css';
import GameCard from '../components/GameCard';


export default function Home() {
  const games = [
    { id: 1, title: "CyberRunner", description: "Corra pelas ruas neon de uma cidade futurista.", path: "/jogo1" },
    { id: 2, title: "Forest Quest", description: "Explore uma floresta encantada cheia de mistérios.", path: "/jogo2" },
    { id: 3, title: "Space Duel", description: "Lute contra inimigos galácticos em batalhas espaciais.", path: "/jogo3" }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Bem-vindo à Biblioteca de Jogos</h1>
        <p>Descubra jogos incríveis em um só lugar!</p>
      </header>

      <section className={styles.gamesSection}>
        <h2>Nossos Jogos em Destaque</h2>
        <div className={styles.gamesGrid}>
          {games.map(game => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              link={game.path}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Next cryptocurrency tracker</h1>

				<h2 className={styles.description}>Cryptocurrency Prices by Market Cap</h2>
			</main>
		</div>
	);
}

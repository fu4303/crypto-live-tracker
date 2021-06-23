import Coins from '../components/Coins/Coins';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
export async function getStaticProps() {
	const res = await fetch(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
	);

	const data = await res.json();

	if (!data) {
		return { notFound: true };
	}
	return {
		props: { coins: data },
		revalidate: 2
	};
}

export default function Home({ coins }) {
	const [ search, setSearch ] = useState('');

	//console.log(coins);
	const result = coins.filter((coin) => {
		console.log(coin.name);
	});

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};
	const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
	console.log(filterCoins);
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Next cryptocurrency tracker</h1>

				<h2 className={styles.description}>Cryptocurrency Prices by Market Cap</h2>
				<div>
					<form>
						<input type="text" onChange={searchHandler} placeholder="search here" />
					</form>
				</div>
				<div>
					<div className="coins-title">
						<h3>Coin</h3>
						<h3>Price</h3>
						<h3>1Hr</h3>
						<h3>24h Volume</h3>
						<h3>Mkt Cap</h3>
					</div>
					{filterCoins.map((coin) => <Coins key={coin.id} coin={coin} />)}
				</div>
			</main>
			<style jsx>{`
				.coins-title {
					display: grid;
					justify-content: center;
					align-content: center;
					grid-auto-flow: column;
					grid-column-gap: 12rem;
				}
			`}</style>
		</div>
	);
}

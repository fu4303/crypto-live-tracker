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

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};
	const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
	console.log(filterCoins);
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className="centered-text">
					<h1 className={styles.title}>Next Js cryptocurrency tracker</h1>

					<h2 className={styles.description}>Cryptocurrency Prices by Market Cap</h2>
					<div className="form-container">
						<form>
							<input
								className="search-input"
								type="text"
								onChange={searchHandler}
								placeholder="search here"
							/>
						</form>
					</div>
				</div>
				<div>{filterCoins.map((coin) => <Coins key={coin.id} coin={coin} />)}</div>
			</main>
			<style jsx>{`
				h1 {
					margin-bottom: 1rem;
				}
				.centered-text {
					text-align: center;
					margin: 2rem auto;
				}
				.form-container {
					margin: 4rem auto;
				}
				.coins-title {
					display: flex;
				}
				.margin-left {
					margin-left: 25rem;
					display: grid;
					justify-content: start;
					grid-auto-flow: column;
					grid-column-gap: 12rem;
				}
				.search-input {
					height: 5rem;
					width: 30rem;
					font-size: 2rem;
					padding: 2rem 3rem;
					background-image: linear-gradient(-225deg, #5f2c82 20%, #7918f2 48%, #49a09d 74%);
					transition: 0.5s;
					color: #fff;
					border: none;
				}
				.search-input:focus {
					transition: 0.5s;
					background-image: linear-gradient(-225deg, #49a09d 20%, #7918f2 58%, #5f2c82 100%);
				}
				.search-input::placeholder {
					color: #fff;
				}
			`}</style>
		</div>
	);
}

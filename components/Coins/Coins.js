import Image from 'next/image';
export default function Coins({ coin }) {
	return (
		<div>
			<div className="grid">
				<span className="flex-row">
					<h4>{coin.market_cap_rank}</h4>
					<h4>{coin.name}</h4>
					{/* <Image src={`${coin.image}`} height={30} width={30} /> */}
				</span>
				<span className="grid">
					<p>{coin.symbol}</p>
					<p>${coin.current_price.toLocaleString()}</p>
					<p>{coin.price_change_percentage_24h}</p>
					<p>${coin.total_volume.toLocaleString()}</p>
					<p>${coin.market_cap.toLocaleString()}</p>
				</span>
			</div>
			<style jsx>{`
				.flex-row {
					display: flex;
				}
				.grid {
					display: grid;
					grid-auto-flow: column;
					justify-items: flex-start;
					/* align-items: center; */
					gap: 2rem;
				}
			`}</style>
		</div>
	);
}

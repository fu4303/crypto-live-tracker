import Image from 'next/image';
export default function Coins({ coin }) {
	return (
		<>
			
				<div className='coin-container'>
					<h4>{coin.market_cap_rank}</h4>
					<h4>{coin.name}</h4>
					<p>{coin.symbol}</p>
					<Image src={coin.image} height={40} width={30} />
					<p>${coin.current_price.toLocaleString()}</p>
					{coin.price_change_percentage_24h < 0 ? (
						<p className='red'>{coin.price_change_percentage_24h.toFixed(1)}%</p>
					) : (
						<p className="green">{coin.price_change_percentage_24h.toFixed(1)}%</p>
					)}
					{}
					<p>${coin.total_volume.toLocaleString()}</p>
					<p>${coin.market_cap.toLocaleString()}</p>
				</div>
			
			<style jsx>{`
				.coin-container {
					display: grid;
					grid-template-columns: 2rem 7rem 5rem 5rem 10rem 10rem 13rem 14rem;
					grid-column-gap: 4rem;
					align-items: center;
					justify-items: start;
					margin-bottom: 3rem;
					border-bottom: 1px solid #fefefe;
					margin-top: 5rem;
				}
				.red{
					color: red;
				}
				.green{
					color: #66DE93;
				}
			`}</style>
		</>
	);
}

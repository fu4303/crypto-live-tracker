import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/LOGO.svg';

export default function Layout({ children}) {
  return(
    <>
	<Head>
		<title>Cryptocurrency tracker</title>
		<meta name="author" content="Jane Muchiri"/>
		<meta name="Keywords" content="Next Js,cryptocurrency, Bitcoin,Ethereum,Dogecoin,cryptocurrency tracker, live tracker"/>
		<meta name="description" content="cryptocurrency tracker app that updates live prices and percentages" />
		<meta name="theme-color" content="#161616" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="icon" href="/favicon.ico" />
			
	</Head>

  <div>
    {children}

    <footer className='flex-row'>
				<a className='flex-row'
					href="https://github.com/muchirijane"
					target="_blank"
					rel="noopener noreferrer"
				>
					Coded and designed by Jane Muchiri
					<span>
						<Image src={Logo} alt="Jane's Logo" />
					</span>
				</a>
			</footer>

  </div>
  </>
  );
}

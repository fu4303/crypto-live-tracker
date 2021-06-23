import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/LOGO.svg';

export default function Layout({ children}) {
  return(
    <>
	<Head>
		<title>Cryptocurrency tracker</title>
		<meta name="description" content="cryptocurrency tracker app that updates live prices and percentages" />
		<link rel="icon" href="/favicon.ico" />
		<meta name="theme-color" content="#000" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
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

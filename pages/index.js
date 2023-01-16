import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from './../components/Header/Header';

export default function Home() {
  return (
   <div>
    <Head>
      <title>ComfortTown</title>
      <meta
      name='description'
      content='Find your home'
      />
    </Head>
    <Header />
   </div>
  )
}

import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Why from '@/components/Why/Why';

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
    <About />
    <Contact />
    <Why />
   </div>
  )
}

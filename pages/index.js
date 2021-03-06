import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Uber.com</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
        </>
    )
}

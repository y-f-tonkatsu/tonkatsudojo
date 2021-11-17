import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlayGround from "../components/PlayGround";
import {useState} from "react";
import work from "../dojo/001/index"
const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title></title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div>
                <main className={styles.main}>
                    <PlayGround  work={work}></PlayGround>
                </main>
            </div>
            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home

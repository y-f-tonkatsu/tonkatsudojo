import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlayGround from "../components/PlayGround";
import work from "../dojo/001/index"
import {getMenu} from "../lib/api/Menu"
import {Menu} from "../lib/resources/Types";

type Props = {
    menu:Menu[];
}

const Home: NextPage<Props> = (props:Props) => {

    const menu = props.menu;

    return (
        <div className={styles.container}>
            <Head>
                <title></title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <ul>
                {menu.map(m=> <li key={m.name}>{m.name}</li>)}
            </ul>

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

export async function getStaticProps() {

    const menu = await getMenu();

    return {
        props: {
            menu: menu
        },
    }
}

export default Home

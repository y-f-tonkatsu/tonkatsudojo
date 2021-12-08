import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {Menu} from "../resources/Types";
import firebase from "firebase/compat";
import {Post} from "@firebase/firestore/dist/firestore/test/lite/helpers";

const firebaseConfig = {
    apiKey: "AIzaSyDHbEWxjoW7VxKt02HyOE6PHkAC1KQaAw0",
    authDomain: "dojo-4648e.firebaseapp.com",
    databaseURL: "https://dojo-4648e-default-rtdb.firebaseio.com",
    projectId: "dojo-4648e",
    storageBucket: "dojo-4648e.appspot.com",
    messagingSenderId: "12329796458",
    appId: "1:12329796458:web:e268779c3ee747db5d1b13"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getMenu():Promise<Menu[]> {
    const col = collection(db, 'menu');
    const menuSnapshot = await getDocs(col);
    const menuList:Menu[] = menuSnapshot.docs.map(doc => doc.data()) as Menu[];
    return menuList;
}
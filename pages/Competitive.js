import Link from "next/link";
import Image from 'next/image';
import Navbar from "../components/navbar";

export default function Competitive(){
    return(
        <div>
            <Navbar></Navbar>
    <Image src="/images/fortnite_logo.png" alt="fortnite image" width={640} height={360}/>
    <h1>Competitive</h1>
    <h2>DROP IN AND GET HYPE!</h2>
    <h3>Ways to Play</h3>
    <li>Play Arena
        Open Events
        Fortnite Champion Series</li>
        <Link href="./Register"><h3>Register</h3></Link>
        <Link href="./Home-page"><h3>Home page</h3></Link>
        </div>
    )
}
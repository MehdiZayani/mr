import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
export default function Intro(){
    return(
        <div>
            <Navbar></Navbar>
         <Image src="/images/fortnite_logo.png" alt="fortnite image" width={640} height={320}/>
         <p>Fortnite is an online video game developed by Epic Games and released in 2017.</p>
         <p>It is available in three distinct game mode versions:</p>
         <p>1st Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build;</p>
         <p>2nd Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing;</p>
         <p>and 3rd Fortnite Creative, where players are given complete freedom to create worlds and battle arenas.</p>
         <h3><Link href="./Home-page">Home page</Link></h3>
        </div>
    )
}
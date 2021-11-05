import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
export default function Hompage(){
    return(
        <div>
            <Navbar></Navbar>
    <Image src="/images/fortnite_logo.png" alt="fornite" width={640} height={320}/>
              
    <h3>Genre(s)</h3><p>Survival, battle royale, sandbox</p>
    <h3>Developer(s)</h3><a><h3>Epic Games</h3></a>
    <h3>Publisher(s)</h3><p>Epic Games</p>
    <h3>Platform(s)</h3><p>Windows, macOS, Nintendo switch, PlayStation 4, Xbox One, iOS, Android</p>
    <h3>First release</h3><p>July 25, 2017</p>
    <Link href="./Intro"><h3>Game Intro</h3></Link>
    <Link href="./Competitive"><h3>Competitive</h3></Link>
        </div>
    )
}
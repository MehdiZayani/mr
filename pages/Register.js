import Link from "next/link";
import Image from 'next/image';
import Navbar from "../components/navbar";
export default function Register(){
    return(
        <div>
            <Navbar></Navbar>
    <Image src="/images/fortnite_logo.png" alt="fortnite image" width={640} height={320}/>
    <div className="flex">
        <p>Nickname</p><input/>
    </div>
    <div>
       <p>Email</p><input/>
    </div>
    <button>Register</button>
    <Link href="./Home-page">Home page</Link>
        </div>
    )
}
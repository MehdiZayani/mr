import Navbar from '../components/navbar'
import Image from 'next/image'
export default function Trilogie(){
    return(
        <div>
<Navbar></Navbar>
<h1>Troisième trilogie</h1>

<p className="centrer"><Image src="/images/trilogie.jpg" alt="Troisième trilogie" width={1920} height={1080}/></p>

<p> Cette trilogie est composée des épisodes : </p>
<ul>
  <li>Star Wars, épisode VII : Le Réveil de la Force sorti en 2015</li>
  <li>Star Wars, épisode VIII : Les Derniers Jedi sorti en 2017</li>
  <li>Star Wars, épisode IX : L'Ascension de Skywalker sortie prévue en 2019</li>
</ul>

<h2>Star Wars Trailer - The Rise of Skywalker</h2>
<video src="medias/starwars_trailer2019.mp4" width="100%" controls></video>
        </div>
    )
}
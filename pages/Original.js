import Navbar from '../components/navbar'
import Image from 'next/image'
export default function Original(){
    return(
        <div>

  <Navbar/>
<h1>Trilogie originale</h1>


    <Image src="/images/originale.jpg" alt="Trilogie originale" width={640} height={360} />

<p><strong>La première trilogie de Star Wars</strong> ou <strong>trilogie originale</strong> est une série de trois
  films de la saga Star Wars créée par George Lucas, sortis entre 1977 et 1983.</p>

<p>Cette trilogie est composée des épisodes :</p>

<ol>
  <li>Star Wars, épisode IV : Un nouvel espoir sorti en 1977</li>
  <li>Star Wars, épisode V : L'Empire contre-attaque sorti en 1980</li>
  <li>Star Wars, épisode VI : Le Retour du Jedi de sorti en 1983</li>
</ol>

<h2>Audio - Star Wars</h2>
<audio src="medias/starwars.mp3"  controls></audio>
        </div>
    )
}
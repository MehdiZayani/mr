import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar.js'
function starwars(){
return (
    <div>
        <Navbar/>
        <Image src="/images/starwars.jpg" alt="starwars" width={1920} height={1080} />
      <hr/>

<p><strong><em>Star Wars</em></strong> est une saga cinématographique américaine du genre du <strong><em>space
      opera</em></strong>.</p>
<p>La saga est composée de <strong>trois trilogies</strong> et de plusieurs films dérivés.</p>
<p>Elle comprend à ce jour <strong>onze films</strong> sortis, un film en production et plusieurs films en
  développement :</p>
<ul>
  <li><Link href="./Trilogie"><a>Trilogie originale (1977-1983)</a></Link></li>
  <li><Link href="./Prelogie"><a>Prélogie (1999-2005)</a></Link></li>
  <li><Link href="./Trilogie"><a>Troisième trilogie (2015-2019)</a></Link></li>
  <li><strong>Films dérivés</strong> (depuis 2008) :
    <ol>
      <li><u>Star wars :</u><br/> <b>The Clone wars</b> de <i>Dave Filoni</i>, sorti en 2008</li>
      <li><u>Rogue one :</u><br/> <b>A Star Wars Story</b> de <i>Gareth Edwards</i>, sorti en 2016</li>
      <li><u>Solo :</u><br/> <b>A Star Wars Story</b> de <i>Ron Howard</i>, sorti en 2018</li>
    </ol>
  </li>
</ul>
 </div>
    
)
}
export default starwars
import link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
export default function Prelogie(){
    return(
        <div>
             <Navbar></Navbar>
              <h1>Prélogie</h1>

  <p className="centrer"><Image src="/images/prelogie.jpg" alt="Prélogie" width={1920} height={1080}/></p>

  <p>La deuxième trilogie de Star Wars ou prélogie est une série de trois films de la saga Star Wars créée
    par George Lucas, sortis entre 1999 et 2005.</p>
  <p>Cette trilogie est composée des épisodes :</p>

  <table>
    <thead>
      <tr>
        <th>Numéro</th>
        <th>Nom</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>I</td>
        <td>La Menace Fantôme</td>
        <td>1999</td>
      </tr>
      <tr>
        <td>II</td>
        <td>L'attaque des clones</td>
        <td>2002</td>
      </tr>
      <tr>
        <td>III</td>
        <td>La revanche des Siths</td>
        <td>2005</td>
      </tr>
    </tbody>
  </table>
        </div>
    )
}
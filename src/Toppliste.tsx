import React from 'react'; // we need this to make JSX compile
import { Link } from 'react-router-dom';
import styled from "styled-components"

type TopplisteEntry = {
    navn: string;
    score: number;
}

const Entry = styled.p`
    width: 280px;
    margin: auto;
    background-color: #8080805e;
    padding: 0.5rem;
    border-radius: 20px;
    margin-bottom: 10px;
    color: white;
`

const First = styled.p`
    width: 280px;
    margin: auto;
    background-color: #ffcc08e6;
    padding: 1.25rem 0.5rem;
    border-radius: 20px;
    margin-bottom:10px;
    color: white;
`
const Second = styled.p`
    width: 280px;
    margin: auto;
    background-color: #a6a295e6;
    padding: 1rem 0.5rem;
    border-radius: 20px;
    margin-bottom:10px;
    color: white;
`
const Third = styled.p`
    width: 280px;
    margin: auto;
    background-color: #ca5600b5;
    padding: 0.75rem 0.5rem;
    border-radius: 20px;
    margin-bottom:10px;
    color: white;
`

const Topp = styled.div`
  margin-top: 2rem;
  
`
//https://docs.google.com/spreadsheets/d/1rgV7BDp3KFQUrk8asHNshyV3Zth8p8G7w-xV258CxB4/edit#gid=254437293
const data: TopplisteEntry[] = [
    { navn: "Åse Mari og Kjell Ole", score: 49} ,
    { navn: "Åge Andersen", score: 39} ,
    { navn: "Øyvind og Åshild", score: 10} ,
    { navn: "Øyvind By Rise", score: 30} ,
    { navn: "Øystein Garli Dragset", score: 10} ,
    { navn: "Yri Helene Ljosdal", score: 58} ,
    { navn: "Yngve", score: 10} ,
    { navn: "William Sibbern", score: 10} ,
    { navn: "Wenche SL", score: 10} ,
    { navn: "Vilde Aakre Lie", score: 38} ,
    { navn: "Vidar", score: 48} ,
    { navn: "Veslemøy Malm Landsem", score: 10} ,
    { navn: "Vebjørn", score: 10} ,
    { navn: "Trygve By Rise", score: 20} ,
    { navn: "Trude Flo", score: 10} ,
    { navn: "Torunn haugland", score: 20} ,
    { navn: "Torill Lundgren", score: 38} ,
    { navn: "Tord Hanevik", score: 9} ,
    { navn: "Tonje Nedal", score: 20} ,
    { navn: "Tonje HG", score: 40} ,
    { navn: "Tone&Mensamedlemmet", score: 56} ,
    { navn: "Thor Magne Seland", score: 59} ,
    { navn: "Susanne Christensen", score: 9} ,
    { navn: "Stormkjøkkenkokken", score: 20} ,
    { navn: "Stian Salvesen", score: 10} ,
    { navn: "Sten Even", score: 19} ,
    { navn: "SpeedyPer", score: 38} ,
    { navn: "SMS", score: 18} ,
    { navn: "Sigve", score: 39} ,
    { navn: "Sebastian Stixrud", score: 9} ,
    { navn: "Sarita", score: 10} ,
    { navn: "S.Heggheim", score: 19} ,
    { navn: "Runar og Vivian", score: 58} ,
    { navn: "Rakel", score: 10} ,
    { navn: "Ragnhild Marie Bøe", score: 0} ,
    { navn: "Olve Ellingsen", score: 19} ,
    { navn: "Olve", score: 9} ,
    { navn: "Nora Grøtting", score: 58} ,
    { navn: "Naja", score: 10} ,
    { navn: "Mia Schrøder", score: 39} ,
    { navn: "Merete Gander", score: 10} ,
    { navn: "Merete G", score: 0} ,
    { navn: "Martin Sivertsen", score: 10} ,
    { navn: "Marit Granhaug", score: 39} ,
    { navn: "Magnus Steigedal", score: 50} ,
    { navn: "Lise Rådmannsøy", score: 40} ,
    { navn: "Leiv Martin ", score: 10} ,
    { navn: "Lassepasse", score: 19} ,
    { navn: "Lars Lind", score: 49} ,
    { navn: "Kristin rian", score: 0} ,
    { navn: "Kris og Matta", score: 30} ,
    { navn: "Konrad Slinning", score: 28} ,
    { navn: "Knut og merete", score: 20} ,
    { navn: "Kjersti Aakre", score: 38} ,
    { navn: "Kirsti M Olsen", score: 28} ,
    { navn: "KATMANDU", score: 0} ,
    { navn: "Kasper Svendsen", score: 10} ,
    { navn: "Karoline & Simen", score: 47} ,
    { navn: "Jørgen", score: 10} ,
    { navn: "Julie Egelie", score: 10} ,
    { navn: "Julie ", score: 9} ,
    { navn: "Joakim D", score: 59} ,
    { navn: "Joachim Solem Holan", score: 10} ,
    { navn: "Ingunn K", score: 10} ,
    { navn: "Ines", score: 0} ,
    { navn: "Ida Jensen", score: 29} ,
    { navn: "Ida J", score: 0} ,
    { navn: "Hildur Nautnes", score: 49} ,
    { navn: "Henning", score: 0} ,
    { navn: "Helge boganes", score: 49} ,
    { navn: "Helene Jakobia", score: 39} ,
    { navn: "Hanne Snerting", score: 9} ,
    { navn: "Geir Røsvoll", score: 9} ,
    { navn: "espen", score: 10} ,
    { navn: "Erlend og Kari", score: 10} ,
    { navn: "Emma&Ed", score: 9} ,
    { navn: "Ellen-Anne Brunstad", score: 10} ,
    { navn: "Elisabeth", score: 30} ,
    { navn: "Denzel Washington", score: 0} ,
    { navn: "Daniel King", score: 29} ,
    { navn: "Dammen & Madammen", score: 59} ,
    { navn: "Cecilie Schrøder", score: 10} ,
    { navn: "Camilla og Are Aune", score: 19} ,
    { navn: "Bernt Nicolai Særsten", score: 10} ,
    { navn: "Bente Renée Holmstad", score: 19} ,
    { navn: "Anne-Kristin Solheim", score: 39} ,
    { navn: "Anne Merete Fjeldstad", score: 10} ,
    { navn: "Anna", score: 10} ,
    { navn: "Andres Holmstad Særsten", score: 10} ,
    { navn: "André", score: 10} ,
    { navn: "Anders Aase", score: 10} ,
    { navn: "Aina", score: 57} ,
    { navn: "Adam", score: 56} ,
    ]

export const Toppliste = () => {

    return (
        <div className="App">
            <Topp>
                <Link to="/julereisen">Gå tilbake til oppgavene</Link>
                <h1>Toppliste</h1>
                <h5>Oppdatert: 07/12/2022</h5>
                {
                    data.sort(function (x, y) { return y.score - x.score; }).map((it, index) => 
                        {
                            switch(index){
                                case 0:
                                    return <First>{index + 1}. {it.navn}, {it.score}p</First>
                                case 1:
                                    return <Second>{index + 1}. {it.navn}, {it.score}p</Second>
                                case 2:
                                    return <Third>{index + 1}. {it.navn}, {it.score}p</Third>
                                default:
                                    return <Entry>{index + 1}. {it.navn}, {it.score}p</Entry>
                            }
                        }
                    )
                }
            </Topp>
        </div>
    )
}
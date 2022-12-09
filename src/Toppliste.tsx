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
    { navn: "Thor Magne Seland", score: 79} ,
    { navn: "Joakim D", score: 79} ,
    { navn: "Dammen & Madammen", score: 79} ,
    { navn: "Yri Helene Ljosdal", score: 78} ,
    { navn: "Runar og Vivian", score: 78} ,
    { navn: "Nora Grøtting", score: 78} ,
    { navn: "Aina", score: 77} ,
    { navn: "Tone&Mensamedlemmet", score: 75} ,
    { navn: "Adam", score: 74} ,
    { navn: "Magnus Steigedal", score: 70} ,
    { navn: "Åse Mari og Kjell Ole", score: 69} ,
    { navn: "Hildur Nautnes", score: 69} ,
    { navn: "Helge boganes", score: 69} ,
    { navn: "Vidar", score: 67} ,
    { navn: "Lars Lind", score: 67} ,
    { navn: "Tonje HG", score: 59} ,
    { navn: "Sigve", score: 59} ,
    { navn: "Mia Schrøder", score: 59} ,
    { navn: "Marit Granhaug", score: 59} ,
    { navn: "Åge Andersen", score: 58} ,
    { navn: "Torill Lundgren", score: 58} ,
    { navn: "Lise Rådmannsøy", score: 58} ,
    { navn: "Helene Jakobia", score: 58} ,
    { navn: "Anne-Kristin Solheim", score: 58} ,
    { navn: "Karoline & Simen", score: 57} ,
    { navn: "Vilde Aakre Lie", score: 56} ,
    { navn: "Kjersti Aakre", score: 56} ,
    { navn: "Elisabeth", score: 50} ,
    { navn: "Kris og Matta", score: 49} ,
    { navn: "Ida Jensen", score: 49} ,
    { navn: "Øyvind By Rise", score: 48} ,
    { navn: "SpeedyPer", score: 47} ,
    { navn: "Tonje Nedal", score: 40} ,
    { navn: "Trygve By Rise", score: 39} ,
    { navn: "Daniel King", score: 39} ,
    { navn: "Lassepasse", score: 38} ,
    { navn: "Knut og merete", score: 38} ,
    { navn: "Bente Renée Holmstad", score: 38} ,
    { navn: "SMS", score: 37} ,
    { navn: "Olve Ellingsen", score: 37} ,
    { navn: "Øystein Garli Dragset", score: 30} ,
    { navn: "Julie", score: 29} ,
    { navn: "Konrad Slinning", score: 28} ,
    { navn: "Kirsti M Olsen", score: 28} ,
    { navn: "Yngve Sommervoll", score: 20} ,
    { navn: "Vebjørn", score: 20} ,
    { navn: "Torunn haugland", score: 20} ,
    { navn: "Stormkjøkkenkokken", score: 20} ,
    { navn: "Stian Salvesen", score: 20} ,
    { navn: "Naja", score: 20} ,
    { navn: "Sten Even", score: 19} ,
    { navn: "S.Heggheim", score: 19} ,
    { navn: "Martin Sivertsen", score: 19} ,
    { navn: "Camilla og Are Aune", score: 19} ,
    { navn: "Bernt Nicolai Særsten", score: 19} ,
    { navn: "Andres Holmstad Særsten", score: 19} ,
    { navn: "Øyvind og Åshild", score: 10} ,
    { navn: "William Sibbern", score: 10} ,
    { navn: "Wenche SL", score: 10} ,
    { navn: "Veslemøy Malm Landsem", score: 10} ,
    { navn: "Trude Flo", score: 10} ,
    { navn: "Sarita", score: 10} ,
    { navn: "Rakel", score: 10} ,
    { navn: "Merete Gander", score: 10} ,
    { navn: "Leiv Martin ", score: 10} ,
    { navn: "Kasper Svendsen", score: 10} ,
    { navn: "Jørgen", score: 10} ,
    { navn: "Joachim Solem Holan", score: 10} ,
    { navn: "Ingunn K", score: 10} ,
    { navn: "Ingrid By Rise", score: 10} ,
    { navn: "Ines", score: 10} ,
    { navn: "espen", score: 10} ,
    { navn: "Erlend og Kari", score: 10} ,
    { navn: "Ellen-Anne Brunstad", score: 10} ,
    { navn: "Cecilie Schrøder", score: 10} ,
    { navn: "Anne Merete Fjeldstad", score: 10} ,
    { navn: "Anna", score: 10} ,
    { navn: "André", score: 10} ,
    { navn: "Anders Aase", score: 10} ,
    { navn: "Tord Hanevik", score: 9} ,
    { navn: "Susanne Christensen", score: 9} ,
    { navn: "Sebastian Stixrud", score: 9} ,
    { navn: "Hanne Snerting", score: 9} ,
    { navn: "Geir Røsvoll", score: 9} ,
    { navn: "Emma&Ed", score: 9} ,
    { navn: "Ragnhild Marie Bøe", score: 0} ,
    { navn: "Merete G", score: 0} ,
    { navn: "Kristin rian", score: 0} ,
    { navn: "KATMANDU", score: 0} ,
    { navn: "Ida J", score: 0} ,
    { navn: "Henning", score: 0} ,
    { navn: "Denzel Washington", score: 0} ,
    ]

export const Toppliste = () => {

    return (
        <div className="App">
            <Topp>
                <Link to="/julereisen">Gå tilbake til oppgavene</Link>
                <h1>Toppliste</h1>
                <h5>Oppdatert: 09/12/2022</h5>
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
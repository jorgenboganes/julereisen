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
const data: TopplisteEntry[] = [
    { navn: "Åse Mari og Kjell Ole", score: 40} ,
    { navn: "Thor Magne Seland", score: 40} ,
    { navn: "Magnus Steigedal", score: 40} ,
    { navn: "Lise Rådmannsøy", score: 40} ,
    { navn: "Joakim D", score: 40} ,
    { navn: "Dammen & Madammen", score: 40} ,
    { navn: "Yri Helene Ljosdal", score: 39} ,
    { navn: "Vidar", score: 39} ,
    { navn: "Runar og Vivian", score: 39} ,
    { navn: "Nora Grøtting", score: 39} ,
    { navn: "Torill Lundgren", score: 38} ,
    { navn: "Tone&Mensamedlemmet", score: 38} ,
    { navn: "Karoline & Simen", score: 38} ,
    { navn: "Aina", score: 38} ,
    { navn: "Adam", score: 37} ,
    { navn: "Åge Andersen", score: 30} ,
    { navn: "Tonje HG", score: 30} ,
    { navn: "Sigve", score: 30} ,
    { navn: "Mia Schrøder", score: 30} ,
    { navn: "Lars Lind", score: 30} ,
    { navn: "Hildur Nautnes", score: 30} ,
    { navn: "Helge boganes", score: 30} ,
    { navn: "Anne-Kristin Solheim", score: 30} ,
    { navn: "Vilde Aakre Lie", score: 29} ,
    { navn: "SpeedyPer", score: 29} ,
    { navn: "Marit Granhaug", score: 29} ,
    { navn: "Kjersti Aakre", score: 29} ,
    { navn: "Helene Jakobia", score: 29} ,
    { navn: "Daniel King", score: 29} ,
    { navn: "Kirsti M Olsen", score: 28} ,
    { navn: "Øyvind By Rise", score: 20} ,
    { navn: "Torunn haugland", score: 20} ,
    { navn: "Stormkjøkkenkokken", score: 20} ,
    { navn: "Kris og Matta", score: 20} ,
    { navn: "Knut og merete", score: 20} ,
    { navn: "Ida Jensen", score: 20} ,
    { navn: "Elisabeth", score: 20} ,
    { navn: "Sten Even", score: 19} ,
    { navn: "Olve Ellingsen", score: 19} ,
    { navn: "Konrad Slinning", score: 19} ,
    { navn: "Camilla og Are Aune", score: 19} ,
    { navn: "Bente Renée Holmstad", score: 19} ,
    { navn: "SMS", score: 18} ,
    { navn: "Øyvind og Åshild", score: 10} ,
    { navn: "Øystein Garli Dragset", score: 10} ,
    { navn: "Yngve", score: 10} ,
    { navn: "William Sibbern", score: 10} ,
    { navn: "Wenche SL", score: 10} ,
    { navn: "Veslemøy Malm Landsem", score: 10} ,
    { navn: "Vebjørn", score: 10} ,
    { navn: "Trygve By Rise", score: 10} ,
    { navn: "Trude Flo", score: 10} ,
    { navn: "Tonje Nedal", score: 10} ,
    { navn: "Stian Salvesen", score: 10} ,
    { navn: "Sarita", score: 10} ,
    { navn: "S. Heggheim", score: 10} ,
    { navn: "Rakel", score: 10} ,
    { navn: "Merete Gander", score: 10} ,
    { navn: "Merete G", score: 10} ,
    { navn: "Martin Sivertsen", score: 10} ,
    { navn: "Leiv Martin ", score: 10} ,
    { navn: "Lassepasse", score: 10} ,
    { navn: "Kasper Svendsen", score: 10} ,
    { navn: "Jørgen", score: 10} ,
    { navn: "Julie Egelie", score: 10} ,
    { navn: "Joachim Solem Holan", score: 10} ,
    { navn: "Ingunn K", score: 10} ,
    { navn: "espen", score: 10} ,
    { navn: "Erlend og Kari", score: 10} ,
    { navn: "Ellen-Anne Brunstad", score: 10} ,
    { navn: "Cecilie Schrøder", score: 10} ,
    { navn: "Bernt Nicolai Særsten", score: 10} ,
    { navn: "Anne Merete Fjeldstad", score: 10} ,
    { navn: "Anna", score: 10} ,
    { navn: "Andres Holmstad Særsten", score: 10} ,
    { navn: "André", score: 10} ,
    { navn: "Anders Aase", score: 10} ,
    { navn: "Tord Hanevik", score: 9} ,
    { navn: "Susanne Christensen", score: 9} ,
    { navn: "Sebastian Stixrud", score: 9} ,
    { navn: "Hanne Snerting", score: 9} ,
    { navn: "Geir Røsvoll", score: 9} ,
    { navn: "Ragnhild Marie Bøe", score: 0} ,
    { navn: "Kristin rian", score: 0} ,
    { navn: "Denzel Washington", score: 0} ,
    ]

export const Toppliste = () => {

    return (
        <div className="App">
            <Topp>
                <Link to="/julereisen">Gå tilbake til oppgavene</Link>
                <h1>Toppliste</h1>
                <h5>Oppdatert: 05/12/2022</h5>
                {
                    data.sort(function (x, y) { return y.score - x.score; }).map((it, index) => 
                        {
                            switch(index){
                                case 0:
                                    return <First>{index + 1}: {it.navn}: {it.score}</First>
                                case 1:
                                    return <Second>{index + 1}: {it.navn}: {it.score}</Second>
                                case 2:
                                    return <Third>{index + 1}: {it.navn}: {it.score}</Third>
                                default:
                                    return <Entry>{index + 1}: {it.navn}: {it.score}</Entry>
                            }
                        }
                    )
                }
            </Topp>
        </div>
    )
}
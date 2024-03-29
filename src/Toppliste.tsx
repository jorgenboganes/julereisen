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
`;

const data: TopplisteEntry[] = [
    { navn: "Thor Magne Seland", score: 199} ,
    { navn: "Dammen & Madammen", score: 199} ,
    { navn: "Joakim D", score: 198} ,
    { navn: "Runar og Vivian", score: 196} ,
    { navn: "Nora Grøtting", score: 194} ,
    { navn: "Magnus Steigedal", score: 190} ,
    { navn: "Tone&Mensamedlemmet", score: 183} ,
    { navn: "Tonje HG", score: 176} ,
    { navn: "Karoline & Simen", score: 175} ,
    { navn: "Helene Jakobia", score: 175} ,
    { navn: "Yri Helene Ljosdal", score: 168} ,
    { navn: "Åse Mari og Kjell Ole", score: 167} ,
    { navn: "Hildur Nautnes", score: 167} ,
    { navn: "Mia Schrøder", score: 166} ,
    { navn: "Kris og Matta", score: 164} ,
    { navn: "Vidar", score: 163} ,
    { navn: "Elisabeth", score: 160} ,
    { navn: "Anne-Kristin Solheim", score: 155} ,
    { navn: "Helge boganes", score: 149} ,
    { navn: "Marit Granhaug", score: 147} ,
    { navn: "Sigve", score: 142} ,
    { navn: "Aina", score: 142} ,
    { navn: "Ida Jensen", score: 137} ,
    { navn: "Knut og Merete", score: 134} ,
    { navn: "Adam", score: 130} ,
    { navn: "Åge Andersen", score: 126} ,
    { navn: "Lise Rådmannsøy", score: 124} ,
    { navn: "Kjersti Aakre", score: 120} ,
    { navn: "Julie", score: 116} ,
    { navn: "Tonje Nedal", score: 108} ,
    { navn: "Øystein Garli Dragset", score: 107} ,
    { navn: "Bente Renée Holmstad", score: 105} ,
    { navn: "Konrad Slinning", score: 93} ,
    { navn: "Lassepasse", score: 87} ,
    { navn: "Øyvind By Rise", score: 86} ,
    { navn: "Vilde Aakre Lie", score: 83} ,
    { navn: "Vebjørn", score: 80} ,
    { navn: "Lars Lind", score: 76} ,
    { navn: "Torill Lundgren", score: 67} ,
    { navn: "SpeedyPer", score: 65} ,
    { navn: "SMS", score: 65} ,
    { navn: "Henrik Marius Laukli", score: 60} ,
    { navn: "Trygve By Rise", score: 57} ,
    { navn: "Hanne Snerting", score: 57} ,
    { navn: "Sten Even", score: 49} ,
    { navn: "Olve Ellingsen", score: 46} ,
    { navn: "Eirik", score: 39} ,
    { navn: "Daniel King", score: 39} ,
    { navn: "Hege", score: 38} ,
    { navn: "Naja", score: 29} ,
    { navn: "Bernt Nicolai Særsten", score: 29} ,
    { navn: "Kirsti M Olsen", score: 28} ,
    { navn: "Yngve Sommervoll", score: 20} ,
    { navn: "Torunn haugland", score: 20} ,
    { navn: "Stormkjøkkenkokken", score: 20} ,
    { navn: "Stian Salvesen", score: 20} ,
    { navn: "Siri Anshushaug Bouma", score: 20} ,
    { navn: "S.Heggheim", score: 19} ,
    { navn: "Martin Sivertsen", score: 19} ,
    { navn: "Ines", score: 19} ,
    { navn: "Camilla og Are Aune", score: 19} ,
    { navn: "Andres Holmstad Særsten", score: 19} ,
    { navn: "Øyvind og Åshild", score: 10} ,
    { navn: "William Sibbern", score: 10} ,
    { navn: "Wenche SL", score: 10} ,
    { navn: "Veslemøy Malm Landsem", score: 10} ,
    { navn: "Vegard", score: 10} ,
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
    { navn: "espen", score: 10} ,
    { navn: "Erlend og Kari", score: 10} ,
    { navn: "Ellen-Anne Brunstad", score: 10} ,
    { navn: "Elise Duus", score: 10} ,
    { navn: "Cecilie Schrøder", score: 10} ,
    { navn: "Anne Merete Fjeldstad", score: 10} ,
    { navn: "Anna", score: 10} ,
    { navn: "André", score: 10} ,
    { navn: "Anders Aase", score: 10} ,
    { navn: "Trygve", score: 9} ,
    { navn: "Tord Hanevik", score: 9} ,
    { navn: "Susanne Christensen", score: 9} ,
    { navn: "Sebastian Stixrud", score: 9} ,
    { navn: "Lise", score: 9} ,
    { navn: "Gry Merete Moan ", score: 9} ,
    { navn: "Geir Røsvoll", score: 9} ,
    { navn: "Emma&Ed", score: 9} ,
    { navn: "Åse Mari Knudsen ", score: 0} ,
    { navn: "Tuvalo", score: 0} ,
    { navn: "Ragnhild Marie Bøe", score: 0} ,
    { navn: "Merete G", score: 0} ,
    { navn: "Kristin rian", score: 0} ,
    { navn: "KATMANDU", score: 0} ,
    { navn: "Karin ", score: 0} ,
    { navn: "Karen Rosland", score: 0} ,
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
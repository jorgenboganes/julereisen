import React from 'react'; // we need this to make JSX compile
import { Link } from 'react-router-dom';
import styled from "styled-components"

type TopplisteEntry = {
    navn: string;
    score: number;
}


const Topp = styled.div`
  margin-top: 2rem;
`
const data: TopplisteEntry[] = [];//[{ navn: "-", score: 0},]

export const Toppliste = () => {

    return (
        <div className="App">
            <Topp>
                <Link to="/julereisen">Gå tilbake til oppgavene</Link>
                <h1>Toppliste</h1>
                <h5>Oppdatert: 30/11/2022</h5>
                {
                    data.slice(0, 10).sort(function (x, y) { return y.score - x.score; }).map((it, index) => (<p>{index + 1}: {it.navn}: {it.score}p</p>))
                }
            </Topp>
        </div>
    )
}
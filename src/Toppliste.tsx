import React from 'react'; // we need this to make JSX compile
import { Link } from 'react-router-dom';

type TopplisteEntry = {
    navn: string;
    score: number;
}
const data: TopplisteEntry[] = [
    { navn: "-", score: 0},
  ]

export const Toppliste = () => {

    return (
        <div className="App">
            <div>
                <Link to="/julereisen">Gå tilbake til oppgavene</Link>
                <h1>Toppliste</h1>
                <h5>Oppdatert: 01/12/2021</h5>
                {
                    data.slice(0, 10).sort(function (x, y) { return y.score - x.score; }).map((it, index) => (<p>{index + 1}: {it.navn}, {it.score}</p>))
                }
            </div>
        </div>
    )
}
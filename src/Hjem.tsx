import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

type OppgaveEntry = {
    dag: number;
    beskrivelse: string;
    svar: string;
}
const data: OppgaveEntry[] = [
    { dag: 1, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 2, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 3, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 4, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 5, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 6, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 7, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 8, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 9, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 10, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 11, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 12, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 13, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 14, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 15, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 16, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 17, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 18, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 19, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 20, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 21, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 22, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 23, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
    { dag: 24, beskrivelse: "Byen julenissen er født", svar: "Oklahoma"},
]

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: auto;
`
const Item = styled.div`
    flex: 1 0 21%; /* explanation below */
    margin: 5px;
    height: 100px;
    background-color: grey;
    text-align: center;
    color: white;
    font-size: 36px;
    
  line-height: 100px;
`
export const Hjem = () => {
    const d = new Date();
    var dato = d.getDate();
    dato = 5

    const [oppgaveValgt, setOppgaveValgt] = useState<number>(0)

    return (
        <Div>
            {oppgaveValgt === 0 && (
                <div>
            <h3>Velg en luke</h3>
            <Grid>
                {data.map((element) => (
                    <Item
                        onClick={() => { if ((element.dag <= dato)) { setOppgaveValgt(element.dag) } }}
                        style={{
                            backgroundColor: (element.dag === dato) ? "#f8b229" : ((element.dag < dato) ? "#cdd873" : "#901a1a"),
                            color: ((element.dag === dato) ? "white" : "black"),
                            opacity: ((element.dag > dato) ? 0.15 : 1)
                        }}
                    >
                        {element.dag}
                    </Item>
                ))}
            </Grid>
            <Link to="/toppliste">Klikk her for å se topplisten</Link></div>
            )}
            {oppgaveValgt !== 0 && (
                <div>
                    <Link onClick={() => setOppgaveValgt(0)} to={""}>Gå tilbake til oppgavene</Link>
                    <h3>Oppgave for {oppgaveValgt}. Desember:</h3>
                    <p>{data.find((element) => element.dag === oppgaveValgt)?.beskrivelse}</p>
                    {oppgaveValgt < dato && (
                        <div>
                            <h3>Svar:</h3>
                            <p>{data.find((element) => element.dag === oppgaveValgt)?.svar}</p>
                        </div>
                    )}
                </div>
            )}
        </Div>
    )
}
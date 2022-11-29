import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from './logo3.png'; 

type OppgaveEntry = {
    dag: number;
    beskrivelse: string;
    hint: string;
    svar: string;
}
const data: OppgaveEntry[] = [
    { dag: 1, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 2, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 3, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 4, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 5, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 6, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 7, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 8, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 9, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 10, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 11, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 12, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 13, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 14, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 15, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 16, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 17, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 18, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 19, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 20, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 21, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 22, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 23, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
    { dag: 24, beskrivelse: "Kommer snart...", hint: "-", svar: "-"},
]

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
`

const Bordered = styled.div`
  border: 1px solid white;
  padding-bottom: 20px;
  background-color: #43586b;
  border-radius: 15px;
  width: 90%;
  margin: auto;
  margin-top: 20px;
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 15px;
  width: 80%;
`
const ItemLocked = styled.div`
    color: white;
    background-color: black;
    border: 1px solid gold;
    opacity: 0.2;
    user-select: none;

    text-align: center;
    font-size: 36px;
    line-height: 65px;
    border-radius: 15px;
    flex: 1 0 21%; /* explanation below */
    margin: 5px;
    height: 65px;
    width: 25px;
`
const ItemUnlocked = styled.div`
    color: white;
    background-color: black;
    border: 1px solid gold;
    opacity: 0.2;
    cursor: pointer;

    text-align: center;
    font-size: 1rem;
    line-height: 65px;
    border-radius: 15px;
    flex: 1 0 21%; /* explanation below */
    margin: 5px;
    height: 65px;
    width: 25px;
`

const ItemToday = styled.div`
    color: green;
    background-color: white;
    border: 1px solid green;
    cursor: pointer;

    text-align: center;
    font-size: 36px;
    line-height: 65px;
    border-radius: 15px;
    flex: 1 0 21%; /* explanation below */
    margin: 5px;
    height: 65px;
    width: 25px;
`

const LogoImg =  styled.img`
    width: 100%;
    margin: auto;
`


const Text =  styled.p`
    width: 100%;
    margin-top: 50%;
    font-size: 2rem;
`

export const Hjem = () => {
    const d = new Date();
    const klokkeslett = d.getHours()
    const dato = (d.getDate() > 24) ? 0 : d.getDate();
    const [oppgaveValgt, setOppgaveValgt] = useState<number>(0)

    return(
        <Div>
            <LogoImg src={logo}></LogoImg>
            <Text>Kommer snart...</Text>
        </Div>
    )
    return (
        <Div>
            {oppgaveValgt === 0 && (
                <div>
            <h3>Velg en luke</h3>
            <Grid>
                {data.map((element) => {
                    if(element.dag  === 23){
                        return <ItemToday
                        onClick={() => {setOppgaveValgt(element.dag)}}
                        >
                            {element.dag}
                        </ItemToday>
                    }else if(element.dag  !== dato){
                        return <ItemLocked
                        onClick={() => { if ((element.dag <= dato)) { setOppgaveValgt(element.dag) } }}
                        >
                            {element.dag}
                        </ItemLocked>
                    }
                })}
            </Grid>
            <Link to="/toppliste">Klikk her for å se topplisten</Link></div>
            )}
            {oppgaveValgt !== 0 && (
                <div>
                    <Link onClick={() => setOppgaveValgt(0)} to={""}>Gå tilbake til oppgavene</Link>
                    <Bordered>
                        <h3>Oppgave for {oppgaveValgt}. Desember:</h3>
                        <p>{data.find((element) => element.dag === oppgaveValgt)?.beskrivelse}</p>
                        {oppgaveValgt < dato && (
                            <div>
                                <h3>Svar:</h3>
                                <p>{data.find((element) => element.dag === oppgaveValgt)?.svar}</p>
                            </div>
                        )}
                        {oppgaveValgt === dato && (
                            <div>
                                <h3>Hint:</h3>
                                {klokkeslett >= 18 && (
                                    <p>{data.find((element) => element.dag === oppgaveValgt)?.hint}</p>
                                )}
                                {klokkeslett < 18 && (
                                    <p>Kommer klokken 18:00</p>
                                )}
                                <h3>Har du funnet ut løsningen?</h3>
                                <a href="https://forms.gle/z25GJuVRQbXFwzAu8">Send inn svaret ditt her</a>
                            </div>
                        )}
                    </Bordered>
                </div>
            )}
        </Div>
    )
}
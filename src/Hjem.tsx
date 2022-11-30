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
    { dag: 1, beskrivelse: "Julen kommer tidligere og tidligere for hvert eneste år, men noen tradisjoner bryter vi ikke med. Det er første desember og du finner frem dine fineste reisebukser og børster støv av pass og trillekoffert. Årets reise begynner i dét du treffer på Guiellermo som sier at han i nabolandet ble den første i det første selv om han bare ble nest best. Nå vil han ha deg med til der hvor landsmannen ønsker å få det endelige symbolet på at han er best, i det som trolig er hans siste. Du løser reisenøtten, men avstår selve reisen. I stedet reiser du til Bergen hvor du har hørt at reisen fortsetter i morgen.", hint: "Byen du skal til er ikke hovedstad, men vil likevel være i sentrum nå Jules Rimet løftes for 22 gang senere i måneden.", svar: "-"},
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

const Oppgaver = styled.div`
  margin-top: 2rem;
`
const Bordered = styled.div`
  border: 1px solid white;
  background-color: #43586b;
  border-radius: 15px;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  padding: 5px 20px;
  padding-bottom: 20px;
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
    opacity: 0.05;
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
const ItemToday = styled.div`
    color: #936e00;
    background-color: #ffe974;;
    border: 1px solid black;
    user-select: none;
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

const ItemUnlocked = styled.div`
    color: #9bff9b;
    background-color: #57b96f;
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
    const dato = 1; //(d.getDate() > 24) ? 0 : d.getDate();
    const [oppgaveValgt, setOppgaveValgt] = useState<number>(0)

    return (
        <Div>
        <LogoImg src={logo}></LogoImg>
            {oppgaveValgt === 0 && (
                <div>
            <h3>Velg en luke</h3>
            <Grid>
                {data.map((element) => {
                    if(element.dag  === dato){
                        return <ItemToday
                        onClick={() => {setOppgaveValgt(element.dag)}}
                        >
                            {element.dag}
                        </ItemToday>;
                    }else if(element.dag  <= dato){
                        return <ItemUnlocked
                            onClick={() => { if ((element.dag <= dato)) { setOppgaveValgt(element.dag) } }}
                            >
                            {element.dag}
                        </ItemUnlocked>
                    }else{
                        return <ItemLocked>{element.dag}</ItemLocked>
                    }
                })}
            </Grid>
            <Link to="/toppliste">Klikk her for å se topplisten</Link></div>
            )}
            {oppgaveValgt !== 0 && (
                <Oppgaver>
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
                </Oppgaver>
            )}
        </Div>
    )
}
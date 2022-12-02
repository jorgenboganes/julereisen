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
    { dag: 1, beskrivelse: "Julen kommer tidligere og tidligere for hvert eneste år, men noen tradisjoner bryter vi ikke med. Det er første desember og du finner frem dine fineste reisebukser og børster støv av pass og trillekoffert. Årets reise begynner idet du treffer på Guillermo som sier at han en gang i hans naboland, ble den første i det første selv om han bare ble nummer to. Nå vil Guillermo ha deg med dit hvor landsmannen ønsker å få det manglende symbolet på at han er aller best, i det som trolig er hans siste. Du løser reisenøtten, men avstår fra å reise. I stedet reiser du til Bergen hvor du har hørt at reisen fortsetter i morgen.", hint: "Byen du skal til er ikke hovedstad, men vil likevel være i sentrum nå Jules Rimet løftes for 22 gang senere i måneden.", svar: "Lusail, Qatar"},
    { dag: 2, beskrivelse: "På en almenning i Bergen, møter du en mann som her er uten mimikk. Du kjenner kanskje hans verk om bonden som våknet i en annens seng. Verket har ingen direkte betydning i oppgaven, men kanskje den gir hint om ditt neste reisemål likevel?  Den mimikkløse bærer et aristokratisk hodeplagg hvis navn er vesentlig mer sentralt i jakten på ditt neste reisemål. På et språk sør på kontinentet kalles hodeplagget det samme som de kaller ditt neste reisemål. Språkets naboland i nord er hjemland for reisemålet som har fått plass blant landets egne farger.", hint: "Hvis du stokker om på det høyreiste reisemålets mål og legger til 1, får du samme mål som vi har på vårt eget punkt av samme type.", svar: "Triglav, Slovenias høyeste fjell"},
    { dag: 3, beskrivelse: "På Triglav møter du en mann kaller seg John både nå og en gang tidligere da han både koreograferte og beveget seg med rovdyr. Han gir deg en citrin og sier du må dra dit han nå holder til. Stedets landskap er ikke helt ulikt det dere er i, men denne er ikke innlemmet i noe flagg. Dog holder stedet en tittel som det hevder det var den første i verden til å ha. Stedets trofaste viser seg punktlig som en fem minutter for sen klokke. ", hint: "Det spiller ingen rolle om du dra til I, M eller W for dette reisemålet strekker seg over alle.", svar: "Yellowstone National Park"},
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

const Blurry = styled.p`
    color: transparent;
    text-shadow: 0 0 25px #fff;
    font-size: 20px;
    user-select: none;  
`
const Answer = styled.p`
    font-size: 20px;
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
    const dato = (d.getDate() > 24) ? 0 : d.getDate();
    const [oppgaveValgt, setOppgaveValgt] = useState<number>(0)
    const [visSvar, setVisSvar] = useState<boolean>(false)

    return (
        <Div>
        <LogoImg src={logo}></LogoImg>
            {oppgaveValgt === 0 && (
                <div>
            <h3>Velg en luke</h3>
            <Grid>
                {data.map((element) => {
                    if(element.dag  === dato && klokkeslett >= 8){
                        return <ItemToday
                        onClick={() => {setOppgaveValgt(element.dag)}}
                        >
                            {element.dag}
                        </ItemToday>;
                    }else if(element.dag  < dato){
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
                        {((oppgaveValgt === dato && klokkeslett >= 8) || (oppgaveValgt < dato)) && (
                            <p>{data.find((element) => element.dag === oppgaveValgt)?.beskrivelse}</p>
                        )}
                        {(oppgaveValgt === dato && klokkeslett < 8) && (
                            <p>Kommer kl. 08:00</p>
                        )}
                        {oppgaveValgt < dato && (
                            <div>
                                <h3>Hint:</h3>
                                <p>{data.find((element) => element.dag === oppgaveValgt)?.hint}</p>
                                <h3>Svar:</h3>
                                <button onClick={() => setVisSvar(!visSvar)}>{visSvar ? 'Skjul' : 'Vis'} svar</button>
                                {!visSvar && (
                                    <Blurry>{data.find((element) => element.dag === oppgaveValgt)?.svar}</Blurry>
                                )}
                                {visSvar && (
                                    <Answer>{data.find((element) => element.dag === oppgaveValgt)?.svar}</Answer>
                                )}
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
                                <a href="https://forms.gle/4fshYR6F6JTAwfWw9">Send inn svaret ditt her</a>
                            </div>
                        )}
                    </Bordered>
                </Oppgaver>
            )}
        </Div>
    )
}
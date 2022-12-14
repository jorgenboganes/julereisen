import { useState } from "react"
import { Link, useParams } from "react-router-dom";
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
    { dag: 4, beskrivelse: "På kvelden i Yellowstone møter du en person som forteller at hun i en kort periode tidligere i år kunne vært eneste bidragsyter til en amerikansk versjon av programmet til rølpekongen. Mens midnattsdisen legger seg over lavendelbuskene, vandrer samtalen innom både anti-helter og mesterhjerner. Når klokken slår 03.00 disker hun frem enda flere samtale-emner, hvor et av de er ditt neste reisemål.  Den 20-delte byen du skal til var der hun fremførte elskerens by som også ble film.", hint: "Byen vi skal til er størst i landet med diplomatispråk, men det er en annen hovedstad i en annen verdensdel som har flest som snakker språket.", svar: "Paris"},
    { dag: 5, beskrivelse: "I Paris blir du invitert til en middag som skal føre deg videre til neste reisemål. Du vet du skal på middag med fem personer fra henholdsvis Argentina, India, Paraguay, Rwanda og Surinam, men dessverre har de dyre strømprisene også inntatt den franske hovedstaden og middagen må fortæres i mørket. Du ser ikke hver som sier hva, men det første stemmen forteller at hjemlandets flagg deler farger med landet du skal til. Den andre sier landet sitt har like mange bokstaver som landet reisemålet ligger i og at hovedstedene i begge land har like mange ord. Den tredje forteller at hovedstaden i hjemlandet deler forbokstav med landet du skal til.  Den fjerde forteller at den er fra samme verdensdel som ditt reisemål. Den femte forteller at første bokstav i hjemlandets hovedstad også er første bokstav i reisemålet ditt, som også er hovedstad. Like før du skal dra sier en stemme «Der du er ordner veien dit du skal» og du forstår hvor ditt neste reisemål er.", hint: "Byen du skal til ligger i et land som har sitt underverk i flagget, men det er ikke et av de opprinnelige 7 underverkene.", svar: "Phnom Penh"},
    { dag: 6, beskrivelse: "I Phnom Penh finner du et gammelt apparat som spiller av lyd. En mann har spilt inn noe om en teleskoplift, en pakke med sigaretter og en president-yatch. Videre forteller han at du skal til klodens største av sitt slag. Stedet ligger på et landområde som er klodens største av sitt eget slag.  Mannen forteller at det står en statue av han i byen hvor han vokste opp. Byen deler navn med en av «de fem store» og den, som ligger på en landegrense, er bidragsytende til at både reisemålet og landområdet er størst av sine slag. Du ergrer deg litt over at du ikke fikk hjelp av mannen i Paris også, for han har fått mye ære for noe som kunne gjort ditt forrige hodebry vesentlig enklere.", hint: "Rent hydrologisk er det fem store bare fire.", svar: "Lake Manitou"},
    { dag: 7, beskrivelse: "Ved Lake Manitou reflekterer undertegnede litt rundt hvor lett det er å bomme på vanskelighetsgraden for reisemålene. Tid til å dvele lenge har man likevel ikke, og turen må gå videre. Du tar fly til neste reisemål og i det du lander er du framme i kommunen du skal til, som voktes av fabeldyret. Her kan du finne et sted som for de uten morsmålskunnskaper er de fordømtes sted. Der ligger også Øvre, Store og Lille, som egentlig hører til krigs-lederens hjemkommune, og som dermed deler geografisk samlebetegnelse med Letsies rike. Hvilken kommune skal vi til idag?", hint: "Flyplassen har navn etter et høvdingsete og deler det med et av landets eldste bygg som fortsatt er i bruk.", svar: "Stjørdal Kommune"},
    { dag: 8, beskrivelse: "I Stjørdal møter du en mann som sier han tidligere var best kjent gjennom stemmen sammen med verten for utkledningskonkurransen og han som hadde fest i Toscana. De senere årene blir han også gjenkjent på gata etter noen år på skjerm sammen med Elisabeth. Han vil ta deg med til nummer 200, som er endestopp for en sporbane, og hvor han er lukeåpner.", hint: "Stedet har i mange år vært kjent som start- og endepunkt i en svært populær mangemilskonkurranse.", svar: "Frognerseteren"},
    { dag: 9, beskrivelse: "Ved Frognerseteren får du et brev fra en person som sier han skulle vært på vei til å motta en arvsbasert heder. Han er forhindret i hovedstaden til landet hvis fargebetegnelse har blitt avviklet. Hovedstaden du skal til ligger på sporet som går fra en hovedstad til grenselandet i vest, til en annen hovedstad i grenselandet i øst. Hovedstaden ga også navn til avtalene som skulle stoppe konflikter som i år har blusset opp og eskalert.", hint: "Etter oktober-endringen ble reisemålet hovedstad i en av de til sammen 15 som utgjorde den røde makten i nesten 7 tiår.", svar: "Minsk"},
    { dag: 10, beskrivelse: "I Minsk sitter du på en pub og drikker øl. Ølen er ikke lokal og plutselig setter det seg ned en mann som kaller seg Frederick som forteller deg at du drikker et øl som opprinnelig ble laget av han. Han vil ta deg med til byen som er godt kjent for sine bryggerikunster. Han gir deg også et bukkehorn med to ringer på, den ene med påskriften 2021. Monsteret som spredde frykt og dødsangst i byen og områdene rundt for noen tiår siden, har i år trollbundet en hel verden og gjenfortellingen ble den tredje i et univers, til å nå en milliard.", hint: "Byen grenser til noe som også har vært omtalt tidligere i reisen, og monsteret var også kjent for å være kannibal.", svar: "Milwaukee"},
    { dag: 11, beskrivelse: "I Milwaukee møter du en ond figur på en bok fra serien som etterfulgte filmen som var basert på eventyret om troens adel og lampen. Figuren sier du skal til en hovedstad hvor den hvite møter den blå og er dermed et veiskille for en av de lengste. Hovedstaden ligger i et land som grenser til det røde og tidligere inkluderte landet også verdens nyeste. En med navn satt sammen av den nye monarken og hans andre etterfølger har kallenavn etter reisemålet ditt. Han kjempet der, og også døde i kampene, mot den selvutnevnte profeterte frelseren.", hint: "Reisemålet ditt er syvende største by i et kontinent vi enda ikke har besøkt", svar: "Khartoum"},
    { dag: 12, beskrivelse: "I Khartoum finner du en avis og inni avisen har de en konkurranse hvor du kan vinne en tur. Konkurransen er et julekryssord som skal ta deg til hovedstaden du kan vinne tur til. Overrasket over hvor godt dette passer til din egen reise, bestemmer du deg for å løse kryssordet og reise til hovedstaden.", hint: "Alle hintene skal på en eller annen måte knyttes til julen, kan det hjelpe å sette «jul(e)» foran ordene du er usikker på? ", svar: "Santiago"},
    { dag: 13, beskrivelse: "Fra Santiago blir du invitert til å dra videre til sjøs. I medvinden brukes et stort og trekantet seil for å fart mot neste reisemål.  Litt malplassert, men like fullt komfortabelt står det en hvilestol laget av Otto og Minor. På reisen får du tid til å lese historiene om den foreldreløse fattiggutten og julesangen om det å være en spøkelseshistorie om julen. Reisen din i stolen med seilet ender ved tårnet med samme navn, i byen hvor han som underholdt deg på turen ble født. Tårnet og byen ligger på en øy. Øya er den tredje største i øygruppa den ligger i, hvor den nest største er et eget land, mens den største øya er hele tre land, der det største også er landet til byen du skal til. Her står også noe tørt som ble brukt i et slag med et navn bedre kjent som tre-gaveplass.", hint: "En Henrik var en gang i byen og fikk se den som nå står tørr. Besøket satt spor og ble til en fortellende tekst om en lods.", svar: "Portsmouth"},
    { dag: 14, beskrivelse: "I Portsmouth møter du en mann som sier han i år fikk noe av sin mor og ga videre sin egen til sønnen. Huset hans kan knytes, men er ikke beboelig. Et bygg med samme navn er derimot beboelig, og ligger i nærheten av ditt neste reisemål. Reisemålet er en såkalt ombordstigningsinstutisjon og har navn etter byen den ligger i. Samme navn har også noe du kan ha under om du har knyttet. ", hint: "I disse tider er det mange som velger kombinasjonen av knytt og det du kan under til periodens festlige lag.", svar: "Eton Boarding School"},
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
    text-shadow: 0 0 25px #c0e7ff;
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
    background-color: #62a2bba1;
    border-radius: 10px;
    width: 80%;
    margin: 20px auto 20px auto;
    padding: 5px 20px 20px;
    color: #c0e7ff;

    h3 {
        color: #fff;
    }
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 15px;
  width: 80%;
  justify-content: space-around;

  a{
    text-decoration: none;
  }
`;
const ItemLocked = styled.div`
  color: black;
  background-color: #0000008a;
  opacity: 0.18;
  user-select: none;
  font-weight: 600;
  box-shadow: inset -1px -1px 3px black;

  text-align: center;
  font-size: 36px;
  line-height: 60px;
  border-radius: 5px;
  margin: 5px;
  height: 60px;
  width: 60px;
  a{
    text-decoration: none;
  }
`;
const ItemToday = styled.div`
  color: #39506f;
  background-color: #bfedff;
  user-select: none;
  font-weight: 600;
  cursor: pointer;

  text-align: center;
  font-size: 36px;
  line-height: 60px;
  border-radius: 5px;
  margin: 5px;
  height: 60px;
  width: 60px;
  a{
    text-decoration: none;
  }
`;

const ItemUnlocked = styled.div`
  color: white;
  background-color: #62a2bba1;
  cursor: pointer;
  font-weight: 600;

  text-align: center;
  font-size: 36px;
  line-height: 60px;
  border-radius: 5px;
  margin: 5px;
  height: 60px;
  width: 60px;
  a{
    text-decoration: none;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  margin: auto;
`;
const A =  styled.td`
    width: 13px;
    height: 7px;
    background-color: white;
    border: 1px solid black
`
const B =  styled.td`
    width: 13px;
    height: 7px;
`
const C =  styled.td`
    width: 13px;
    height: 7px;
    background-color: yellow;
    border: 1px solid black
`

const Kryssord = styled.table`
    width: 100%;
    text-align:left;
    color: black;
    border-top: 2px dotted black;
    border-bottom: 2px dotted black;
    padding-top: 10px;
    padding-bottom: 10px;
`


export const Hjem = () => {
  const d = new Date();
  const klokkeslett = d.getHours();
  const dato = d.getDate() > 24 ? 0 : d.getDate();
  const [visSvar, setVisSvar] = useState<boolean>(false);

  const { id } = useParams();
  const oppgaveValgt = id ? Number(id) : 0;

  return (
    <Div>
      <LogoImg src={logo}></LogoImg>
      {oppgaveValgt === 0 && (
        <div>
          <h3>Velg en luke</h3>
          <Grid>
            {data.map((element) => {
              if (element.dag === dato && klokkeslett >= 8) {
                return (
                    <Link to={"/" + element.dag}>
                      <ItemToday>{element.dag}</ItemToday>
                    </Link>
                );
              } else if (element.dag < dato) {
                return (
                  <Link to={"/" + element.dag}>
                    <ItemUnlocked>{element.dag}</ItemUnlocked>
                  </Link>
                );
              } else {
                return <ItemLocked>{element.dag}</ItemLocked>;
              }
            })}
          </Grid>
          <Link to="/toppliste">Klikk her for å se topplisten</Link>
        </div>
      )}
      {oppgaveValgt !== 0 && (
        <Oppgaver>
        <Link to="/">Gå tilbake til oppgavene</Link>
        <Bordered>
            <h3>Oppgave for {oppgaveValgt}. Desember:</h3>
            {((oppgaveValgt === dato && klokkeslett >= 8) || (oppgaveValgt < dato)) && (
                <p>{data.find((element) => element.dag === oppgaveValgt)?.beskrivelse}</p>
            )}
            {oppgaveValgt === 12 && (
            <div>
                <Kryssord>
                    <tr>
                        <td>1. Ny juleserie</td><B></B><A></A><A></A><A></A><A></A><C></C><A></A><A></A><A></A><A></A>
                    </tr>
                    <tr>
                        <td>2. Reinsdyr</td><B></B><B></B><B></B><B></B><A></A><C></C><A></A><A></A><A></A><A></A>
                    </tr>
                    <tr>
                        <td>3. Kalender</td><B></B><B></B><B></B><B></B><A></A><C></C><A></A><A></A><A></A><A></A><A></A>
                    </tr>
                    <tr>
                        <td>4. Ventetid</td><A></A><A></A><A></A><A></A><A></A><C></C>
                    </tr>
                    <tr>
                        <td>5. Julereisen</td><B></B><B></B><A></A><A></A><A></A><C></C><A></A><A></A>
                    </tr>
                    <tr>
                        <td>6. Jomfru</td><B></B><A></A><A></A><A></A><A></A><C></C>
                    </tr>
                    <tr>
                        <td>7. Drikke</td><B></B><B></B><B></B><B></B><B></B><C></C><A></A><A></A><A></A><A></A>
                    </tr>
                    <tr>
                        <td>8. Kake</td><B></B><B></B><A></A><A></A><A></A><C></C>
                    </tr>
                </Kryssord>
            </div>
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
  );
};

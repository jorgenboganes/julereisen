(this.webpackJsonpjulereisen=this.webpackJsonpjulereisen||[]).push([[0],{21:function(e,n,r){},22:function(e,n,r){},28:function(e,n,r){"use strict";r.r(n);var t,s,a,i,d,l,o,c,b=r(0),j=r.n(b),h=r(13),g=r.n(h),v=(r(21),r(4)),m=(r(22),r(7)),p=r(1),u=[{navn:"-",score:0}],k=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{children:[Object(p.jsx)(m.b,{to:"/julereisen",children:"G\xe5 tilbake til oppgavene"}),Object(p.jsx)("h1",{children:"Toppliste"}),Object(p.jsx)("h5",{children:"Oppdatert: 01/12/2021"}),u.slice(0,10).sort((function(e,n){return n.score-e.score})).map((function(e,n){return Object(p.jsxs)("p",{children:[n+1,": ",e.navn,", ",e.score]})}))]})})},x=r(6),f=r(5),O=[{dag:1,beskrivelse:"P\xe5 samme kaf\xe9 som i fjor sitter du i \xe5r igjen. Med et sterkt h\xe5p om at du nok en gang skal f\xe5 oppleve adventens magi, og dra ut p\xe5 en ny reise. Inn d\xf8ren p\xe5 kaf\xe9en kommer en ener du drar kjensel p\xe5 og som sjefer der han tidligere triumferte. Personen viser deg bilde fra en av de farligste arbeidsplassene han har hatt. Den er svart, men det er ikke hos fris\xf8ren. En av hans verste dager p\xe5 jobb var akkurat her. Selv om han da kom seg helskinnet forbi b\xe5de musefella og karusellen, gikk det fryktelig galt ved kanten av husfjellet. Han forteller videre at det blir utf\xf8rt ulike former av jobben her, og at i hans spesialitet har han v\xe6rt best p\xe5 jobb tre ganger. Du skj\xf8nner at du har f\xe5tt ditt f\xf8rste reisem\xe5l og vil komme deg av g\xe5rde, men f\xf8r du drar videre gir han deg adgang til det han er aktuell med n\xe5 om dagen. Kanskje du kan benytte deg av den etter du er hjemme igjen fra reisen? Hvilken by skal vi til?",hint:"-",svar:"-"},{dag:2,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:3,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:4,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:5,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:6,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:7,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:8,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:9,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:10,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:11,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:12,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:13,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:14,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:15,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:16,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:17,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:18,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:19,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:20,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:21,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:22,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:23,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:24,beskrivelse:"Kommer snart",hint:"-",svar:"-"}],K=f.a.div(t||(t=Object(v.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 350px;\n  margin-bottom: 15px;\n"]))),w=f.a.div(s||(s=Object(v.a)(["\n  border: 1px solid white;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  background-color: #43586b;\n"]))),y=f.a.div(a||(a=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  margin: auto;\n  margin-bottom: 50px;\n"]))),D=f.a.div(i||(i=Object(v.a)(["\n  padding: 0px 20px 5px 20px;\n  text-align: justify;\n"]))),S=f.a.div(d||(d=Object(v.a)(["\n  padding-bottom: 10px;\n"]))),C=f.a.div(l||(l=Object(v.a)(["\n  margin-top: -30px;\n"]))),F=f.a.div(o||(o=Object(v.a)(["\n    flex: 1 0 21%; /* explanation below */\n    margin: 5px;\n    height: 75px;\n    background-color: grey;\n    text-align: center;\n    color: white;\n    font-size: 36px;\n    \n  line-height: 75px;\n"]))),H=function(){var e,n,r,t=new Date,s=t.getHours(),a=t.getDate()>24?0:t.getDate(),i=Object(b.useState)(0),d=Object(x.a)(i,2),l=d[0],o=d[1];return Object(p.jsxs)(K,{children:[0===l&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Velg en luke"}),Object(p.jsx)(y,{children:O.map((function(e){return Object(p.jsx)(F,{onClick:function(){e.dag<=a&&o(e.dag)},style:{backgroundColor:e.dag===a?"#fedfb0":e.dag<a?"#344d2f":"#5c1111",color:e.dag<a?"#e9e5e1":"black",opacity:e.dag>a?.15:1,cursor:e.dag<=a?"pointer":"default"},children:e.dag})}))}),Object(p.jsxs)(C,{children:[1!==a&&Object(p.jsx)(S,{children:Object(p.jsx)(m.b,{to:"/toppliste",children:"Sjekk topplisten her"})}),Object(p.jsx)(S,{children:Object(p.jsx)("a",{href:"https://www.facebook.com/groups/131845715156441",children:"G\xe5 til Facebook-siden"})})]})]}),0!==l&&Object(p.jsxs)("div",{children:[Object(p.jsx)(m.b,{onClick:function(){return o(0)},to:"",children:"G\xe5 tilbake til oppgavene"}),Object(p.jsxs)(w,{children:[Object(p.jsxs)("h3",{children:["Oppgave for ",l,". Desember:"]}),Object(p.jsx)(D,{children:null===(e=O.find((function(e){return e.dag===l})))||void 0===e?void 0:e.beskrivelse}),l<a&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Svar:"}),Object(p.jsx)("p",{children:null===(n=O.find((function(e){return e.dag===l})))||void 0===n?void 0:n.svar})]}),l===a&&Object(p.jsxs)("div",{children:[Object(p.jsxs)(D,{children:[s>=18&&Object(p.jsx)("p",{children:Object(p.jsxs)("i",{children:["Hint: ",null===(r=O.find((function(e){return e.dag===l})))||void 0===r?void 0:r.hint]})}),s<18&&Object(p.jsx)("p",{children:Object(p.jsx)("i",{children:"St\xe5r du fast? Hint kommer klokken 18:00"})})]}),Object(p.jsx)("h3",{children:"Har du funnet l\xf8sningen?"}),Object(p.jsx)("a",{href:"https://forms.gle/z25GJuVRQbXFwzAu8",children:"Send inn svaret ditt her"})]})]})]})]})},z=r(2),G=f.a.h1(c||(c=Object(v.a)(["\n  font-size: 48px;\n  margin-bottom: 15px\n  color: pink;\n"])));var J=function(){return Object(p.jsxs)("div",{className:"App",style:{height:"100%"},children:[Object(p.jsx)(G,{children:"Den Magiske Julereisen"}),Object(p.jsx)(m.a,{children:Object(p.jsxs)(z.c,{children:[Object(p.jsx)(z.a,{path:"/",element:Object(p.jsx)(H,{})}),Object(p.jsx)(z.a,{path:"/julereisen",element:Object(p.jsx)(H,{})}),Object(p.jsx)(z.a,{path:"/toppliste",element:Object(p.jsx)(k,{})})]})})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,29)).then((function(n){var r=n.getCLS,t=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;r(e),t(e),s(e),a(e),i(e)}))};g.a.render(Object(p.jsx)(j.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),P()}},[[28,1,2]]]);
//# sourceMappingURL=main.3de0f40e.chunk.js.map
(this.webpackJsonpjulereisen=this.webpackJsonpjulereisen||[]).push([[0],{21:function(e,n,r){},22:function(e,n,r){},28:function(e,n,r){"use strict";r.r(n);var t,s,a,i,d,l=r(0),o=r.n(l),c=r(13),h=r.n(c),b=(r(21),r(22),r(5)),j=r(1),v=[{navn:"-",score:0}],g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(b.b,{to:"/julereisen",children:"G\xe5 tilbake til oppgavene"}),Object(j.jsx)("h1",{children:"Toppliste"}),Object(j.jsx)("h5",{children:"Oppdatert: 01/12/2021"}),v.slice(0,10).sort((function(e,n){return n.score-e.score})).map((function(e,n){return Object(j.jsxs)("p",{children:[n+1,": ",e.navn,", ",e.score]})}))]})})},m=r(4),u=r(6),k=r(7),p=[{dag:1,beskrivelse:"P\xe5 samme kaf\xe9 som i fjor sitter du i \xe5r igjen. Med et sterkt h\xe5p om at du nok en gang skal f\xe5 oppleve adventens magi, og dra ut p\xe5 en ny reise. Inn d\xf8ren p\xe5 kaf\xe9en kommer en ener du drar kjensel p\xe5 og som sjefer der han tidligere triumferte. Personen viser deg bilde fra en av de farligste arbeidsplassene han har hatt. Den er svart, men det er ikke hos fris\xf8ren. En av hans verste dager p\xe5 jobb var akkurat her. Selv om han da kom seg helskinnet forbi b\xe5de musefella og karusellen, gikk det fryktelig galt ved kanten av husfjellet. Han forteller videre at det blir utf\xf8rt ulike former av jobben her, og at i hans spesialitet har han v\xe6rt best p\xe5 jobb tre ganger. Du skj\xf8nner at du har f\xe5tt ditt f\xf8rste reisem\xe5l og vil komme deg av g\xe5rde, men f\xf8r du drar videre gir han deg adgang til det han er aktuell med n\xe5 om dagen. Kanskje du kan benytte deg av den etter du er hjemme igjen fra reisen? Hvilken by skal vi til?",hint:"-",svar:"-"},{dag:2,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:3,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:4,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:5,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:6,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:7,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:8,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:9,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:10,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:11,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:12,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:13,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:14,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:15,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:16,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:17,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:18,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:19,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:20,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:21,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:22,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:23,beskrivelse:"Kommer snart",hint:"-",svar:"-"},{dag:24,beskrivelse:"Kommer snart",hint:"-",svar:"-"}],f=k.a.div(t||(t=Object(u.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 350px;\n"]))),x=k.a.div(s||(s=Object(u.a)(["\n  border: 1px solid white;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  background-color: #43586b;\n"]))),O=k.a.div(a||(a=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  margin: auto;\n  margin-bottom: 50px;\n"]))),K=k.a.div(i||(i=Object(u.a)(["\n  padding: 20px;\n  text-align: justify;\n"]))),y=k.a.div(d||(d=Object(u.a)(["\n    flex: 1 0 21%; /* explanation below */\n    margin: 5px;\n    height: 75px;\n    background-color: grey;\n    text-align: center;\n    color: white;\n    font-size: 36px;\n    \n  line-height: 75px;\n"]))),w=function(){var e,n,r,t=new Date,s=t.getHours(),a=t.getDate()>24?0:t.getDate(),i=Object(l.useState)(0),d=Object(m.a)(i,2),o=d[0],c=d[1];return Object(j.jsxs)(f,{children:[0===o&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Velg en luke"}),Object(j.jsx)(O,{children:p.map((function(e){return Object(j.jsx)(y,{onClick:function(){e.dag<=a&&c(e.dag)},style:{backgroundColor:e.dag===a?"#fedfb0":e.dag<a?"#344d2f":"#a81817",color:e.dag<a?"#e9e5e1":"black",opacity:e.dag>a?.2:1,cursor:e.dag<=a?"pointer":"default"},children:e.dag})}))}),1!==a&&Object(j.jsx)(b.b,{to:"/toppliste",children:"Klikk her for \xe5 se topplisten"})]}),0!==o&&Object(j.jsxs)("div",{children:[Object(j.jsx)(b.b,{onClick:function(){return c(0)},to:"",children:"G\xe5 tilbake til oppgavene"}),Object(j.jsxs)(x,{children:[Object(j.jsxs)("h3",{children:["Oppgave for ",o,". Desember:"]}),Object(j.jsx)(K,{children:null===(e=p.find((function(e){return e.dag===o})))||void 0===e?void 0:e.beskrivelse}),o<a&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Svar:"}),Object(j.jsx)("p",{children:null===(n=p.find((function(e){return e.dag===o})))||void 0===n?void 0:n.svar})]}),o===a&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Hint:"}),s>=18&&Object(j.jsx)("p",{children:null===(r=p.find((function(e){return e.dag===o})))||void 0===r?void 0:r.hint}),s<18&&Object(j.jsx)("p",{children:"Kommer klokken 18:00"}),Object(j.jsx)("h3",{children:"Har du funnet l\xf8sningen?"}),Object(j.jsx)("a",{href:"https://forms.gle/z25GJuVRQbXFwzAu8",children:"Send inn svaret ditt her"})]})]})]})]})},D=r(2);var S=function(){return Object(j.jsxs)("div",{className:"App",style:{height:"100%"},children:[Object(j.jsx)("h1",{style:{fontSize:48},children:"Den magiske Julereisen"}),Object(j.jsx)(b.a,{children:Object(j.jsxs)(D.c,{children:[Object(j.jsx)(D.a,{path:"/",element:Object(j.jsx)(w,{})}),Object(j.jsx)(D.a,{path:"/julereisen",element:Object(j.jsx)(w,{})}),Object(j.jsx)(D.a,{path:"/toppliste",element:Object(j.jsx)(g,{})})]})})]})},C=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,29)).then((function(n){var r=n.getCLS,t=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;r(e),t(e),s(e),a(e),i(e)}))};h.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),C()}},[[28,1,2]]]);
//# sourceMappingURL=main.90d1b8c2.chunk.js.map
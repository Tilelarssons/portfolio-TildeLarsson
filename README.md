📁 **demo** – Mini Issue System

Ett litet ärendehanteringssystem byggt med Spring Boot och H2-databas. Frontend är enkel HTML/JS som kommunicerar med backend via REST API.

![Demo](demo/demo.png)

## Funktioner
- Skapa nya ärenden
- Lista alla ärenden
- Stäng ärenden

## Byggt med
- Java 17 + Spring Boot 3.5.5
- Maven
- H2 in-memory database
- HTML / JS

## Beskrivning
Projektet demonstrerar grundläggande REST API-integration, enkel frontend-backend-kommunikation samt användning av in-memory databas för snabba tester.


---

📁 **MVC** – Ritverktyg

Ett ritverktyg byggt med Java och Swing, strukturerat enligt MVC-designmönstret.

![Ritning](MVC/ritning.png)

## Funktioner
- Rita linjer, ovaler och rektanglar
- Välja linjefärg och fyllningsfärg
- Justera linjebredd, höjd och bredd
- Spara ritningen som PNG
- Radera allt eller ångra senaste ändringar

## Byggt med
- Java 21
- Java Swing
- Maven
- MVC-designmönster
- Facade-mönster

## Beskrivning
Projektet demonstrerar grundläggande användning av Java Swing för GUI-utveckling, tydlig separation av ansvar enligt MVC-designmönstret. Applikationen möjliggör interaktiv ritning av former, färgval och dynamisk hantering av ritobjekt. För att ytterligare strukturera koden används **Facade-mönstret**, vilket ger ett förenklat gränssnitt mot komplexa delar av modellen och bidrar till ökad modularitet och testbarhet.


---

📁 **chatbot** – AI Chatbot

En enkel chatbot byggd med Node.js och Express.js. Frontend (HTML, CSS, JS) hanterar gränssnittet, medan backend kommunicerar med OpenAI:s API för att generera svar. API-nyckeln lagras säkert i en .env-fil.

## Funktioner
- Skicka meddelanden till chatboten
- Ta emot AI-genererade svar via OpenAI API
- Visa dialogen i en chattruta

## Byggt med
- Node.js
- Express.js
- OpenAI API
- JavaScript (ES6+)
- HTML & CSS

## Beskrivning
Projektet demonstrerar hur en chatbot kan implementeras i en Node.js-miljö med Express.js som backend och OpenAI:s API för AI-genererade svar. Användarens meddelanden skickas till OpenAI:s API, som genererar svar och returnerar dessa till frontend-delen. Applikationen möjliggör en interaktiv dialog i en chattruta, där kommunikationen mellan användare och bot sker i realtid. För att säkerställa säker hantering av API-nyckeln används miljövariabler via .env, vilket underlättar både vidareutveckling och driftsättning.

----

📁 **game-ttt** – Tic-tac-toe

Ett Tic Tac Toe-spel byggt helt som frontend med HTML, CSS och JavaScript.

![tic-tac-toe](game-ttt/ttt.png)


## Funktioner
- Ange namn och färg för två spelare
- Växla tur mellan spelare automatiskt
- Kontrollera vinster, oavgjort och avsluta spelet korrekt
- Valfri timer som begränsar tiden per drag
- Återställ spelet för att spela igen
- Responsiv layout som fungerar på både mobil, surfplatta och desktop

## Byggt med
- HTML för spelplan och formulär
- CSS för layout, färger och stilar
- JavaScript för spel-logik, turhantering och timer

## Beskrivning
Projektet demonstrerar hur ett interaktivt spel kan implementeras helt i frontend. Speldata lagras i ett globalt objekt (oGameData), vilket gör det enkelt att hålla koll på spelplan, spelare och aktuell tur. Timer-funktionen visar hur man kan kombinera DOM-manipulation med asynkron logik, och spelets modulära uppbyggnad underlättar vidareutveckling, t.ex. fler spelregler eller AI-motståndare. Den responsiva designen säkerställer att spelet fungerar smidigt på olika enheter och skärmstorlekar.

----

📁 **Ecommerce** – Enkel e-handel

En enkel e-handel byggd helt i frontend med HTML, CSS och JavaScript. Användaren kan se produkter, lägga till dem i en varukorg och se totalpris och antal artiklar i varukorgen.

![Ecommerce](Ecommerce/ecommerce.png)

## Funktioner
- Visa lista över produkter med bild, namn och pris
- Lägg produkter i varukorgen
- Visa antal produkter och totalpris i varukorgen
- Visa och dölja varukorgen med knapp
- All logik hanteras i frontend med JavaScript

## Byggt med
- HTML för layout och struktur
- CSS för design och stil
-JavaScript för produktlogik och varukorgshantering

## Beskrivning
Projektet demonstrerar hur man kan bygga en enkel webbutik utan backend. Produktdata lagras i en JavaScript-array och varukorgens innehåll uppdateras dynamiskt i DOM:en. Designen är modulär och gör det enkelt att lägga till fler produkter eller funktioner, exempelvis filtrering eller sortering.

---

# Resultat från Analys
## Use case diagram
![test.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/test.png)

## Sekvensdiagram för 📁analys
### Skapa Fil (Analys)
![skapaFil.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/skapaFil.drawio.png)
### Öppna Fil (Analys)
![openFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/openFile.drawio.png)
### Spara Fil (Analys)
![saveFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/saveFile.drawio.png)
### Ändra Fil (Analys)
![editFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/editFile.drawio.png)
### Skriva Text (Analys)
![writeFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/writeText.drawio.png)
### Klippa Ut Text (Analys)
![cutText.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/cutText.drawio.png)
### Kopiera Text (Analys)
![copyText.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/copyText.drawio.png)
### Klistra in Text (Analys)
![pasteText.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/pasteText.drawio.png)
### Spara Fil Som (Analys)
![saveFileAs.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/saveFileAs.drawio.png)
### Stäng Fil (Analys)
![exitFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/analys/exitFile.drawio.png)

# Resultat från 📁design
## Klassdiagram för Design
![Klassdiagram.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/Klassdiagram.drawio.png)
  
## Sekvensdiagram för Design
<div style="border: 1px solid #f2c411; background-color: #fff9c4; padding: 15px; border-radius: 8px; font-size: 14px; width: fit-content; max-width: 300px; margin: 10px auto; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">

**💡 Förklaring av metoder mellan :FileManager ---> :File:** 
###### new File() – Skapar en ny fil. 
###### readFile() – Läser in filen.
###### readText() – Hämtar textinnehållet från en fil.
###### getContent() - Hämtar det innehåll som ska klistras in vid pasteText()
###### getContent() - Sätter det innehållet som getContent() hämtat.
###### setFileName() och getFileName() – Hanterar filens namn.

</div>


### Skapa Fil (Design)
![createFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/createFile.drawio.png)
### Öppna Fil (Design)
![openFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/openFile.drawio.png)
### Spara Fil (Design)
![saveFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/saveFile.drawio.png)
### Ändra Fil (Design)
![editFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/editFile.drawio.png)
### Skriva Text (Design)
![writeText.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/writeText.drawio.png)
### Klippa Ut Text (Design)
![cutText.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/cutText.drawio.png)
### Kopiera Text (Design)
![copyText.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/copyText.drawio.png)
### Klistra In Text (Design)
![minasparadefilerförGIT.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/mina%20sparade%20filer%20för%20GIT.drawio.png)
### Spara Fil Som (Design)
![nysaveAsFile.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/nySaveAsFile.drawio.png)
### Stäng fil (Design)
![exitFile2.drawio.png](https://github.com/tildeelarsson/2024-isgc08-larsson/blob/main/design/exitFile2.drawio.png)


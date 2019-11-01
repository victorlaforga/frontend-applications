# Frontend applications Tech-track :books:
## Het concept :shirt: :womans_clothes:

Het idee achter mijn concept is om **_kledingontwerpers/designers_** (mensen in de kledingwereld) te inspireren door oude kledingstukken te laten zien. Oude kledingstukken hebben vaak iets aparts, het zijn niet zomaar basic t-shirts om het zomaar te zeggen. Hierdoor hoop ik mijn doelgroep te inspireren zodat zij aan een nieuw kledingontwerp kunnen werken.
![](https://user-images.githubusercontent.com/37700441/67013246-16198080-f0f3-11e9-9d19-3ab7ef7e11f4.png)

![](https://user-images.githubusercontent.com/37700441/67942928-3fe5a380-fbd9-11e9-9b74-131a31d84a5b.png)

## Opdracht 
Wij hebben van Cindy Zalm (Hoofd Collectiemanagement) de opdracht gekregen om een concept te bedenken waarbij we [de data](https://collectie.wereldculturen.nl/) van de NMVW gebruiken voor een bepaalde doelgroep.


## Waar komt de data vandaan?
Deze 4 musea hebben 1 grote database samen waarin bijna alle voorwerpen in staan die hierbij horen.

![](https://user-images.githubusercontent.com/37700441/67966655-91efee80-fc04-11e9-9d4b-543a5d4df321.png)

De NMVW werkt met sparql als database omgeving.
Om de collectie te bekijken verwijs ik je naar: [https://collectie.wereldculturen.nl/](https://collectie.wereldculturen.nl/)

## Query
Dit is een van me queries die ik heb gebruikt voor mijn opdracht. Ik heb in totaal 4 verschillende queries gebruikt, elk kledingonderdeel heeft ze eigen query. In me query haal ik de volgende onderdelen uit de database: plek (locatie), titel, foto & regio.

`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster1852> .
?cho dct:spatial ?place .
?cho dc:title ?title .
?cho edm:isShownBy ?pic .
?place skos:broader ?placeRegio .
?placeRegio skos:prefLabel ?placeRegioName .
} LIMIT 50`

## Wat moet je doen om het project werkend te krijgen op je eigen laptop? :computer:
1. Open je terminal
2. Kopier de volgende regel en zet die in je terminal `git clone https://github.com/victorlaforga/frontend-applications.git`
3. Ga naar je folder doormiddel van `cd frontend-applications`
4. Om de Node modules te installeren, typ het volgende in je terminal `npm install`
5. Om de applicatie te runnen typ `npm start`

## Mijn Wiki :notebook_with_decorative_cover:
Als je meer wilt weten over mijn keuzes en mijn proces van dit project, verwijs ik je naar [Mijn Wiki](https://github.com/victorlaforga/frontend-applications/wiki)

## Bronnen :information_source:
[Bronnen & Credits](https://github.com/victorlaforga/frontend-applications/wiki/Bronnen)



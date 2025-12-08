export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
  file?: string;
  detailedDescription?: string;
  processDescription?: string;
  extraLinks?: {
    label: string;
    url: string;
    download?: boolean;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Ansøgning og CV",
    description: "Komplet ansøgningspakke med personligt CV og præsentation af kompetencer.",
    detailedDescription:
      "Ansøgningen og CV'et er udarbejdet til praktik- og jobansøgninger med fokus på mine faglige styrker, projekter og erfaringer. Materialet er designet til at give et professionelt førstehåndsindtryk.",
    processDescription:
      "Materialet er produceret i Canva og efterfølgende tilpasset i HTML/CSS for at sikre et konsistent visuelt udtryk. Jeg har arbejdet med layout, typografi og billedredigering for at matche min personlige profil.",
    date: "2025",
    technologies: ["Canva", "HTML", "CSS", "Kommunikation"],
    file: "CV/index.html"
  },
  {
    id: "2",
    title: "Plakat Design Projekt",
    description: "Kreativt plakatdesign med moderne grafiske elementer og effektiv kommunikation.",
    detailedDescription:
      "Dette projekt fokuserer på at skabe en visuelt tiltalende plakat, der effektivt kommunikerer et budskab til målgruppen. Plakaten kombinerer moderne designprincipper med kreative grafiske elementer for at fange opmærksomheden og formidle informationen på en klar og engagerende måde.",
    processDescription:
      "Jeg startede med grundige skitser på papir for at udforske forskellige idéer og layoutkombinationer. Efter at have valgt det bedste koncept, brugte jeg Canva til at skabe det endelige design. Processen involverede flere iterationer baseret på feedback og egne observationer.",
    date: "2025",
    technologies: ["Canva", "Grafisk Design", "Skitsering", "Typografi", "Farvesammensætning"],
    file: "plakat.pdf"
  },
  {
    id: "3",
    title: "Nyhedsartikel: Johann Friedrich Struensee",
    description: "Historisk nyhedsartikel om henrettelsen af Johann Friedrich Struensee.",
    detailedDescription:
      "Nyhedsartiklen er skrevet som en tidsaktuel reportage fra 1700-tallet om Struensees fald. Jeg har fokuseret på historisk research, journalistisk formidling og et tidstro sprog.",
    processDescription:
      "Artiklen er udviklet gennem kildestudier og omsat til en moderne lay-outet PDF med fokus på læsevenlig typografi og struktur.",
    date: "2025",
    technologies: ["Historiefortælling", "Research", "Tekstproduktion", "Layout"],
    file: "Portfolio%20arbejde/Johan%20Struensee%20Halvshugget.pdf"
  },
  {
    id: "4",
    title: "Mission Phishing Guard",
    description: "CampfireSecurity-forløb: træning i cybersikkerhed via analyse af metadata og krypterede beskeder.",
    detailedDescription:
      "Jeg fulgte forløbet på CampfireSecurity for at øve og træne mine cybersikkerhedsevner ved at finde og lokalisere en forsvunden influencer ved hjælp af metadata, krypterede beskeder og mere.",
    processDescription:
      "Arbejdet foregik i et virtuelt lab (Kali Linux). Jeg brugte ExifTool til metadataanalyse, forskellige online dekrypteringsværktøjer til at afkode beskeder og CampfireSecurity som ramme for missionens opgaver og hints.",
    date: "2025",
    technologies: ["Kali Linux", "ExifTool", "CampfireSecurity", "Dekrypteringsværktøjer", "Digital Sikkerhed", "OSINT"],
    file: "Portfolio%20arbejde/Cybermissionen%202025%20Hashtag%20Forsvundet%20%281%29.pdf"
  },
  {
    id: "5",
    title: "Kolding Racing Roblox Experience",
    description: "Racing-spil i Roblox med integreret quiz, der påvirker tempo og giver et twist.",
    detailedDescription:
      "Kolding Racing er en online Roblox-oplevelse, hvor en sammenhængende quiz er vævet ind i gameplayet. Quiz-svar påvirker løbets tempo og progression, hvilket skaber et uventet twist på det klassiske racerspil.",
    processDescription:
      "Jeg har designet spilsystemet i Roblox Studio og implementeret quiz-logik i Lua, så spørgsmål og svar påvirker fart/regler dynamisk. Dokumentation og præsentation findes i Produktbeskrivelse.docx.",
    date: "2025",
    technologies: ["Roblox Studio", "Lua Scripting", "Level Design", "Projektledelse"],
    link: "https://www.roblox.com/games/98093756511520/Kolding-Racing",
    file: "Portfolio%20arbejde/Produktbeskrivelse.docx"
  },
  {
    id: "6",
    title: "Eventyrgenerator: Algoritmeanalyse",
    description: "Algoritmisk gennemgang af logikken bag eventyrgenerator-projektet.",
    detailedDescription:
      "Dokumentet beskriver den anvendte algoritme til at generere eventyr. Det indeholder en trinvis forklaring af strukturen, beslutningspunkter og de tekniske overvejelser, der ligger til grund for løsningen.",
    processDescription:
      "Analysen blev udarbejdet ved først at skitsere flowet for eventyrgeneratoren, hvorefter algoritmen blev dokumenteret og evalueret for effektivitet og variation i output.",
    date: "2025",
    technologies: ["Algoritmedesign", "Dokumentation", "Analyse"],
    file: "Algoritmeanalyse_Gustav-EventyrGeneratorPDF.pdf"
  },
  {
    id: "7",
    title: "Eventyrgenerator: Projektbeskrivelse",
    description: "Projektbeskrivelse med mål, scope og resultater for eventyrgeneratoren.",
    detailedDescription:
      "Projektbeskrivelsen giver et overblik over visionen for eventyrgeneratoren, de vigtigste funktioner, og hvordan projektet er planlagt og udført. Der er fokus på læringsmål og anvendte metoder.",
    processDescription:
      "Beskrivelsen er udarbejdet på baggrund af projektets planlægnings- og udviklingsfaser, hvor der blev afholdt refleksioner og evalueringer for at sikre et sammenhængende produkt.",
    date: "2025",
    technologies: ["Projektledelse", "Refleksion", "Kommunikation"],
    file: "ProjektbeskrivelseAfEventyrGeneratorPDF.pdf"
  },
  {
    id: "8",
    title: "Adventure Generator",
    description: "Python-eventyrgenerator der udfylder historier med brugerdefinerede variabler.",
    detailedDescription:
      "Adventure Generator er et terminalbaseret Python-projekt, der læser historier med placeholders som #CharacterName1 og beder brugeren om input, når teksten udskrives. Besvarelser gemmes og genbruges automatisk, så historien føles sammenhængende.",
    processDescription:
      "Jeg byggede generatoren med fokus på tekstbehandling i Python. Først beskrev jeg konceptet i README, lavede historiefiler i Word og implementerede logikken i Python. Filstrukturen ligger i public/Adventure generator, så projektet kan åbnes direkte fra porteføljen.",
    date: "2025",
    technologies: ["Python", "Tekstbehandling", "Brugerinput"],
    file: "Adventure%20generator/README.md"
  },
  {
    id: "9",
    title: "Ansøgning: IT-supporter elev",
    description: "Ansøgning til VFU-plads som IT-supporter elev hos Bluebyte ApS.",
    detailedDescription:
      "Ansøgningen er skrevet til en VFU-plads hos Bluebyte ApS, hvor jeg søger mulighed for at lære om IT-support og cybersikkerhed. Ansøgningen formidler mine interesser, ambitioner og motivation for at arbejde med IT.",
    processDescription:
      "Ansøgningen er struktureret med fokus på at præsentere mine faglige interesser og motivation for at arbejde med IT og cybersikkerhed. Jeg har fokuseret på at være konkret og professionel i formidlingen.",
    date: "2025",
    technologies: ["Skriftlig Kommunikation", "Ansøgning"],
    file: "Portfolio%20arbejde/Ansøgning.pdf"
  },
  {
    id: "10",
    title: "Coraline Forside",
    description: "Grafisk design af forside til Coraline-projekt.",
    detailedDescription:
      "Dette er en grafisk forside designet til et Coraline-relateret projekt. Forsiden kombinerer visuelle elementer og typografi for at skabe et stærkt førstehåndsindtryk.",
    processDescription:
      "Forsiden er designet med fokus på visuel kommunikation og æstetik, hvor jeg har arbejdet med layout, farver og typografi for at skabe et sammenhængende design.",
    date: "2025",
    technologies: ["Grafisk Design", "Layout", "Typografi"],
    file: "Portfolio%20arbejde/Coraline%20forside.pdf"
  },
  {
    id: "11",
    title: "Forside til Avis",
    description: "Design af avisforside med fokus på layout og visuel hierarki.",
    detailedDescription:
      "Dette projekt viser en designet avisforside, hvor jeg har arbejdet med layout, typografi og visuelt hierarki for at skabe en professionel og læsevenlig forside.",
    processDescription:
      "Forsiden er designet med fokus på at balancere tekst og visuelle elementer, så informationen præsenteres klart og engagerende.",
    date: "2025",
    technologies: ["Layout Design", "Typografi", "Visuelt Hierarki"],
    file: "Portfolio%20arbejde/Forside%20af%20til%20avis.png"
  },
  {
    id: "12",
    title: "Kod et Eventyr - Variabel Tekst",
    description: "Dokument med variabel struktur til eventyrgenerator-projektet.",
    detailedDescription:
      "Dette dokument indeholder en eventyrhistorie med variabler som #CharacterName1, #Item1 osv. Dokumentet viser strukturen bag eventyrgeneratoren og hvordan variabler integreres i historien.",
    processDescription:
      "Teksten er skrevet med placeholders for variabler, der senere udfyldes dynamisk. Dette gør det muligt at generere unikke eventyr baseret på brugerinput.",
    date: "2025",
    technologies: ["Tekststrukturering", "Variabel Design"],
    file: "Portfolio%20arbejde/Kod%20et%20eventyr%20%28Variable%20Tekst%29.pdf"
  },
  {
    id: "13",
    title: "Kommentar: Orthoreksi",
    description: "Kommentarartikel om orthoreksi og unges forhold til sundhed.",
    detailedDescription:
      "Artiklen handler om orthoreksi - en spiseforstyrrelse der fokuserer på 'perfekt sundhed'. Jeg diskuterer problemet med unges ekstreme fokus på kost og træning, og hvordan dette kan påvirke deres mentale og fysiske sundhed negativt.",
    processDescription:
      "Artiklen er skrevet som en kommentar med fokus på at belyse et vigtigt problem blandt unge. Jeg har brugt research og eksempler for at understøtte argumentationen.",
    date: "2025",
    technologies: ["Skrivning", "Research", "Argumentation"],
    file: "Portfolio%20arbejde/Kommentar%20p%C3%A5%20sundhed.pdf"
  },
  {
    id: "15",
    title: "Portræt Artikel",
    description: "Visuelt designet portrætartikel med fokus på layout og typografi.",
    detailedDescription:
      "Dette er en grafisk designet portrætartikel, hvor jeg har kombineret tekst og visuelle elementer for at skabe en engagerende læseoplevelse.",
    processDescription:
      "Artiklen er designet med fokus på at balancere tekst og billeder, så indholdet præsenteres på en klar og visuelt tiltalende måde.",
    date: "2025",
    technologies: ["Layout Design", "Typografi", "Visuelt Design"],
    file: "Portfolio%20arbejde/Portr%C3%A6t%20Artikel.png"
  },
  {
    id: "16",
    title: "Poster: Your Vote Matters This Year",
    description: "Kampagneposter designet til at opfordre til demokratisk deltagelse.",
    detailedDescription:
      "Posteren er designet som en del af en kampagne der opfordrer til demokratisk deltagelse. Designet kombinerer stærke visuelle elementer med et klart budskab om vigtigheden af at stemme.",
    processDescription:
      "Posteren er designet med fokus på at skabe et stærkt visuelt udtryk der fanger opmærksomheden og formidler budskabet effektivt til målgruppen.",
    date: "2025",
    technologies: ["Kampagnedesign", "Poster Design", "Visuelt Kommunikation"],
    file: "Portfolio%20arbejde/Poster%20-%20Your%20Vote%20Matters%20This%20Year%20%281%29%20%281%29.png"
  },
  {
    id: "17",
    title: "Eventyrgenerator: Projektbeskrivelse (Word)",
    description: "Projektbeskrivelse i Word-format for eventyrgenerator-projektet.",
    detailedDescription:
      "Dette er projektbeskrivelsen for eventyrgeneratoren i Word-format. Dokumentet beskriver projektets mål, scope og resultater.",
    processDescription:
      "Beskrivelsen er udarbejdet på baggrund af projektets planlægnings- og udviklingsfaser, hvor der blev afholdt refleksioner og evalueringer.",
    date: "2025",
    technologies: ["Projektledelse", "Dokumentation", "Kommunikation"],
    file: "Portfolio%20arbejde/ProjektbeskrivelseAfEventyrGenerator.docx"
  },
  {
    id: "18",
    title: "Reklame og Kampagneelement",
    description: "Grafisk design af reklame- og kampagneelementer.",
    detailedDescription:
      "Dette projekt viser designet af reklame- og kampagneelementer, hvor jeg har arbejdet med visuel kommunikation og branding for at formidle et budskab effektivt.",
    processDescription:
      "Elementerne er designet med fokus på at skabe et sammenhængende visuelt udtryk der styrker kampagnens budskab og fanger målgruppens opmærksomhed.",
    date: "2025",
    technologies: ["Reklamedesign", "Kampagnedesign", "Branding"],
    file: "Portfolio%20arbejde/Reklame%20og%20Kampagneelement.pdf"
  },
  {
    id: "19",
    title: "Reklame og Kampagneelement (PNG)",
    description: "Grafisk design af reklame- og kampagneelementer i PNG-format.",
    detailedDescription:
      "Dette er reklame- og kampagneelementer designet i PNG-format. Designet fokuserer på visuel kommunikation og branding.",
    processDescription:
      "Elementerne er designet med fokus på at skabe et stærkt visuelt udtryk der effektivt formidler kampagnens budskab.",
    date: "2025",
    technologies: ["Reklamedesign", "Kampagnedesign", "Visuelt Design"],
    file: "Portfolio%20arbejde/Reklame%20og%20Kampagneelement.png"
  },
  {
    id: "20",
    title: "Virksomhed simuleret (Webbureau)",
    description: "Fiktivt webbureau-projekt hvor vi byggede og markedsførte en samlet løsning for en kunde.",
    detailedDescription:
      "Børnehaven Fyrtøjet har vi arbejdet med og kreeret følgende hjemmeside for: https://fyrtoejetsbørnehave.framer.website. Vi har brugt vores egen hjemmeside samt reklamer til at showcase vores skills som kan ses her: https://sahurtech.site, og udover det har vi også lavet reklamevisningen \"Reklamepng.png\" fra public mappen.",
    processDescription:
      "Vi agerede bureau fra start til slut: behovsafdækning, wireframes, udvikling i Framer og efterfølgende eksponering via vores egen side og dedikeret reklamegrafik. Projektet er dokumenteret med CTA-knapper, så alt materiale kan åbnes direkte fra porteføljen.",
    date: "2025",
    technologies: ["Framer", "Webdesign", "Branding", "Markedsføring", "Canva"],
    link: "https://fyrtoejetsbørnehave.framer.website",
    linkLabel: "Se børnehave-sitet",
    extraLinks: [
      {
        label: "Besøg SahurTech.site",
        url: "https://sahurtech.site"
      },
      {
        label: "Åbn reklame",
        url: "/Reklamepng.png"
      }
    ]
  }
];
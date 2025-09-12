export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  link?: string;
  file?: string;
  detailedDescription?: string;
  processDescription?: string;
}

export const projects: Project[] = [

  {
    id: "2",
    title: "Plakat Design Projekt",
    description: "Kreativt plakatdesign med moderne grafiske elementer og effektiv kommunikation.",
    detailedDescription: "Dette projekt fokuserer på at skabe en visuelt tiltalende plakat, der effektivt kommunikerer et budskab til målgruppen. Plakaten kombinerer moderne designprincipper med kreative grafiske elementer for at fange opmærksomheden og formidle informationen på en klar og engagerende måde.",
    processDescription: "Jeg startede med grundige skitser på papir for at udforske forskellige idéer og layoutkombinationer. Efter at have valgt det bedste koncept, brugte jeg Canva til at skabe det endelige design. I Canva arbejdede jeg med forskellige skrifttyper, farvepaletter og grafiske elementer for at opnå det ønskede visuelle udtryk. Processen involverede flere iterationer, hvor jeg justerede og forbedrede designet baseret på feedback og mine egne observationer.",
    date: "Oktober 2024",
    technologies: ["Canva", "Grafisk Design", "Skitsering", "Typografi", "Farvesammensætning"],
    file: "plakat.pdf"
  },
  {
    id: "3",
    title: "Eksempel Projekt #1",
    description: "Interaktiv webapplikation med dynamisk indholdshåndtering og brugerautentificeringssystemer.",
    detailedDescription: "Dette projekt demonstrerer udvikling af en moderne webapplikation med fokus på brugeroplevelse og funktionalitet. Applikationen inkluderer avancerede funktioner som realtidsdata, brugerautentificering og responsivt design.",
    processDescription: "Projektet startede med wireframing og prototyping. Jeg udviklede frontend med React og backend med Node.js. Jeg implementerede brugerautentificering og testede applikationen grundigt før lancering.",
    date: "Oktober 2024",
    technologies: ["React", "Node.js", "MongoDB", "JWT Authentication"],
    link: "#"
  },
  {
    id: "4",
    title: "Eksempel Projekt #2",
    description: "Mobil applikation til produktivitet og opgavehåndtering med offline funktionalitet.",
    detailedDescription: "En mobil applikation designet til at hjælpe brugere med at organisere deres daglige opgaver og forbedre produktiviteten. Appen fungerer både online og offline med synkronisering af data.",
    processDescription: "Jeg udviklede appen med React Native for cross-platform kompatibilitet. Jeg implementerede offline funktionalitet og synkronisering med backend systemet.",
    date: "September 2024",
    technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
    link: "#"
  },
  {
    id: "5",
    title: "Eksempel Projekt #3",
    description: "Data visualiseringsdashboard med interaktive grafer og realtidsanalyser.",
    detailedDescription: "Et avanceret dashboard til visualisering af komplekse datasæt med interaktive grafer og realtidsopdateringer. Dashboardet giver indsigt i data gennem intuitive visualiseringer.",
    processDescription: "Jeg brugte D3.js til at skabe interaktive visualiseringer og implementerede realtidsdataopdateringer. Dashboardet er responsivt og fungerer på alle enheder.",
    date: "August 2024",
    technologies: ["D3.js", "JavaScript", "CSS3", "REST APIs"],
    link: "#"
  },
  {
    id: "6",
    title: "Eksempel Projekt #4",
    description: "E-commerce platform med sikker betalingshåndtering og produktkatalog.",
    detailedDescription: "En komplet e-commerce løsning med produktkatalog, indkøbskurv, sikker betalingshåndtering og ordrehåndtering. Platformen er optimeret for konvertering og brugeroplevelse.",
    processDescription: "Jeg udviklede platformen med fokus på sikkerhed og brugeroplevelse. Jeg implementerede Stripe til betalingshåndtering og oprettede et admin-panel til produktstyring.",
    date: "Juli 2024",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    link: "#"
  },
  {
    id: "7",
    title: "Eksempel Projekt #5",
    description: "Social media aggregator der kombinerer feeds fra forskellige platforme.",
    detailedDescription: "En applikation der samler og viser indhold fra forskellige sociale medier på ét sted. Brugere kan tilpasse deres feed og få notifikationer om nye indlæg.",
    processDescription: "Jeg brugte forskellige API'er til at hente data fra sociale medier og implementerede realtidsopdateringer. Appen inkluderer personalisering og notifikationssystem.",
    date: "Juni 2024",
    technologies: ["Vue.js", "WebSockets", "Social APIs", "PWA"],
    link: "#"
  },
  {
    id: "8",
    title: "Eksempel Projekt #6",
    description: "Machine learning model til billedklassificering og objektgenkendelse.",
    detailedDescription: "En avanceret machine learning løsning der kan klassificere billeder og genkende objekter. Modellen er trænet på store datasæt og kan bruges i realtidsapplikationer.",
    processDescription: "Jeg samlede og forberedte et stort billeddataset og trænede en CNN model. Jeg optimerede modellen for hastighed og nøjagtighed og implementerede den i en webapplikation.",
    date: "Maj 2024",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    link: "#"
  },
  {
    id: "9",
    title: "Eksempel Projekt #7",
    description: "IoT system til miljøovervågning med sensorer og realtidsdata.",
    detailedDescription: "Et Internet of Things system der overvåger miljøforhold som temperatur, luftfugtighed og luftkvalitet. Data sendes til en cloud platform og visualiseres i realtid.",
    processDescription: "Jeg byggede hardware med Arduino og forskellige sensorer. Jeg udviklede firmware til dataindsamling og implementerede cloud integration til datalagring og visualisering.",
    date: "April 2024",
    technologies: ["Arduino", "IoT", "Cloud Computing", "Data Visualization"],
    link: "#"
  },
  {
    id: "10",
    title: "Eksempel Projekt #8",
    description: "Blockchain applikation til sikker dokumenthåndtering og verifikation.",
    detailedDescription: "En decentraliseret applikation der bruger blockchain teknologi til sikker håndtering og verifikation af dokumenter. Systemet giver uforanderlig registrering og transparente transaktioner.",
    processDescription: "Jeg udviklede smart contracts med Solidity og byggede frontend med Web3.js. Jeg implementerede dokumenthashing og verifikationssystemer for at sikre integritet.",
    date: "Marts 2024",
    technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
    link: "#"
  }
];
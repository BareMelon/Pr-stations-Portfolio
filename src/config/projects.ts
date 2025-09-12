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
    id: "1",
    title: "Johan Struensee Halvshugget",
    description: "Analyse af nyhedsartikler og film med fokus på tekststruktur og argumentation.",
    detailedDescription: "I dansk har vi arbejdet med nyhedsartikler og i sammenhæng med det så vi filmen 'En Kongelig Affære'. Baseret på filmen opbyggede jeg en artikel, hvor jeg lærte meget om opbygningen af artikler og tekster generelt. Dette projekt gav mig en dybere forståelse for, hvordan sådanne tekster skrives og struktureres.",
    processDescription: "Jeg analyserede filmen 'En Kongelig Affære' og dens historiske kontekst om Johan Struensee. Baseret på denne analyse skabte jeg en strukturerede artikel, der demonstrerer min forståelse af tekstopbygning og argumentation. Processen involverede research, strukturering af indhold og udvikling af en sammenhængende tekst.",
    date: "",
    technologies: ["Tekstanalyse", "Artikelstruktur", "Historisk Research", "Argumentation"],
    file: "Johan Struensee Halvshugget.pdf"
  },
  {
    id: "2",
    title: "Plakat Design Projekt",
    description: "Kreativt plakatdesign med moderne grafiske elementer og effektiv kommunikation.",
    detailedDescription: "Dette projekt fokuserer på at skabe en visuelt tiltalende plakat, der effektivt kommunikerer et budskab til målgruppen. Plakaten kombinerer moderne designprincipper med kreative grafiske elementer for at fange opmærksomheden og formidle informationen på en klar og engagerende måde.",
    processDescription: "Jeg startede med grundige skitser på papir for at udforske forskellige idéer og layoutkombinationer. Efter at have valgt det bedste koncept, brugte jeg Canva til at skabe det endelige design. I Canva arbejdede jeg med forskellige skrifttyper, farvepaletter og grafiske elementer for at opnå det ønskede visuelle udtryk. Processen involverede flere iterationer, hvor jeg justerede og forbedrede designet baseret på feedback og mine egne observationer.",
    date: "",
    technologies: ["Canva", "Grafisk Design", "Skitsering", "Typografi", "Farvesammensætning"],
    file: "plakat.pdf"
  }
];
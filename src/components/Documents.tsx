import React from 'react';

const Documents: React.FC = () => {
  const documents: Array<{
    title: string;
    description: string;
    type: string;
    date: string;
    path: string;
    download?: boolean;
  }> = [
    {
      title: "Algoritmeanalyse: Eventyrgenerator",
      description: "Analyse af algoritmen bag eventyrgenerator-projektet.",
      type: "Dokumentation",
      date: "2025",
      path: "/Algoritmeanalyse_Gustav-EventyrGenerator.docx",
      download: true
    },
    {
      title: "Projektbeskrivelse: Eventyrgenerator",
      description: "Kort projektbeskrivelse og mål for eventyrgeneratoren.",
      type: "Projektbeskrivelse",
      date: "2025",
      path: "/ProjektbeskrivelseAfEventyrGenerator.docx",
      download: true
    },
    {
      title: "Adventure Generator",
      description: "Historieudkast til eventyrgeneratoren, klar til udfyldning.",
      type: "Manuskript",
      date: "2025",
      path: "/Adventure%20generator/SigmaStory.docx",
      download: true
    },
    {
      title: "Projektbeskrivelse: Eventyrgenerator",
      description: "Skabelon til nye historier med plads til variabler.",
      type: "Skabelon",
      date: "2025",
      path: "/Adventure%20generator/story.docx",
      download: true
    }
  ];

  return (
    <section id="documents" className="documents">
      <div className="container">
        <h2>Dokumenter & Ressourcer</h2>
        <div className="documents-grid">
          {documents.map((doc, index) => (
            <div key={index} className="document-card">
              <h3>{doc.title}</h3>
              <p className="document-description">{doc.description}</p>
              <div className="document-meta">
                <span className="document-type">{doc.type}</span> 
                <span className="document-date">{doc.date}</span>
              </div>
              <a
                href={doc.path}
                className="download-button"
                {...(doc.download ? { download: true } : { target: "_blank", rel: "noreferrer" })}
              >
                "Download"
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
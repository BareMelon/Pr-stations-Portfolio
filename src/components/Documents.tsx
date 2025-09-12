import React from 'react';

const Documents: React.FC = () => {
  const documents = [
    {
      title: "Johan Struensee Halvshugget",
      description: "Analyse af nyhedsartikler og film med fokus på tekststruktur og argumentation.",
      type: "Dansk Projekt",
      date: "",
      downloadPath: "/Johan Struensee Halvshugget.pdf"
    },
    {
      title: "Plakat Design Projekt",
      description: "Kreativt plakatdesign med moderne grafiske elementer og effektiv kommunikation.",
      type: "Design Projekt",
      date: "",
      downloadPath: "/plakat.pdf"
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
                  href={doc.downloadPath} 
                  download 
                  className="download-button"
                >
                  Download Dokument
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
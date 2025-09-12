import React from 'react';

const Documents: React.FC = () => {
  const documents = [
    {
      title: "Sådan Bruger Du Moodle",
      description: "Omfattende guide til effektiv brug af Moodle e-læringsplatformen.",
      type: "Dokumentation",
      date: "November 2024",
      downloadPath: "/How to Moodle.docx"
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
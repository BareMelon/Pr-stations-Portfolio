import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "Fyhngustav3@gmail.com",
      icon: "📧"
    },
    {
      type: "Discord", 
      value: "Baremelon",
      icon: "💬"
    },
    {
      type: "Telefon",
      value: "53379153",
      icon: "📱"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Kontakt Mig</h2>
        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-details">
                <h3>{contact.type}</h3>
                <p>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';

const CssConcept = ({ title, example, code }) => (
    <div className="css-concept">
        <h3>{title}</h3>
        <div className="example">
            <div className="example-preview">{example}</div>
            <div className="example-code">
                <pre>{code}</pre>
            </div>
        </div>
    </div>
);

const CssBasicsSection = () => (
    <section>
        <h2>CSS Basics</h2>
        <CssConcept
            title="Flexbox"
            example={<div className="flex-container">{/* Votre exemple Flexbox ici */}</div>}
            code={`
        .flex-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
        />
        <CssConcept
            title="Grid"
            example={<div className="grid-container">{/* Votre exemple Grid ici */}</div>}
            code={`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
      `}
        />
        {/* Ajoutez d'autres composants CssConcept ici */}
    </section>
);

export default CssBasicsSection;

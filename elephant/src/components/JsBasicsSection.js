import React from 'react';

const JsConcept = ({ title, example, code }) => (
    <div className="js-concept">
        <h3>{title}</h3>
        <div className="example">
            <div className="example-preview">{example}</div>
            <div className="example-code">
                <pre>{code}</pre>
            </div>
        </div>
    </div>
);

const JsBasicsSection = () => (
    <section>
        <h2>JavaScript Basics</h2>
        <JsConcept
            title="Arrow Function"
            example={<p>{/* Affichez votre exemple d'animation ici */}</p>}
            code={`const add = (a, b) => a + b;`}
        />
        <JsConcept
            title="Variables"
            example={<p>{/* Affichez votre exemple d'animation ici */}</p>}
            code={`let name = "John";`}
        />
        {/* Ajoutez d'autres composants JsConcept ici */}
    </section>
);

export default JsBasicsSection;

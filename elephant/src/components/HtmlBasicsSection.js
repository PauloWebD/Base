import React from 'react';

const HtmlTag = ({ tag, description }) => (
    <div className="html-tag">
        <h3>{`<${tag}>`}</h3>
        <p>{description}</p>
    </div>
);

const HtmlBasicsSection = () => (
    <section>
        <h2>HTML Basics</h2>
        <HtmlTag
            tag="div"
            description="Élément de conteneur générique utilisé pour regrouper d'autres éléments."
        />
        <HtmlTag
            tag="h1"
            description="Titre de niveau 1, généralement utilisé pour les titres de section."
        />
        {/* Ajoutez d'autres composants HtmlTag ici */}
    </section>
);

export default HtmlBasicsSection;

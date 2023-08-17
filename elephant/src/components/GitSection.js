import React, { useState } from 'react';
import gitCommands from '../data/gitCommands.json';
import './styles.css'; // Importez le fichier de styles CSS

const GitCommand = ({ title, command, description }) => (
    <div className="git-command">
        <h3>{title}</h3>
        <p><code>{command}</code></p>
        <p>{description}</p>
    </div>
);

const GitSection = () => {
    const [modalContent, setModalContent] = useState(null);

    const handleTitleHover = (cmd) => {
        setModalContent(cmd);
    };

    const handleTitleLeave = () => {
        setModalContent(null);
    };

    return (
        <section className="git-section">
            {gitCommands.categories.map((category, index) => (

                <h3
                    className="git-category-title"
                    onMouseEnter={() => handleTitleHover(category)}
                    onMouseLeave={handleTitleLeave}
                >
                    {category.name}
                </h3>

            ))}

            {modalContent && (
                <div className=" modal">
                    <div className="git-category">
                        <h3 className="git-category-title">
                            {modalContent && modalContent.name}</h3>
                        {modalContent && modalContent.commands.map((cmd, idx) => (
                            <div key={idx}>
                                <p><code>{cmd.command}</code></p>
                                <p>{cmd.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default GitSection;

import React, { useState } from 'react';
import gitCommands from '../data/gitCommands.json';
import './styles.css'; // Importez le fichier de styles CSS

const GitCommand = ({ title, command, description }) => (
    <div className="command">
        <h3>{title}</h3>
        <p><code>{command}</code></p>
        <p>{description}</p>
    </div>
);

const Modal = ({ content, onClose }) => (
    <div className="modal-overlay">
        <div className="modal">
            <button className="close-button" onClick={onClose}>Close</button>
            {content}
        </div>
    </div>
);

const GitSection = () => {
    const [modalContent, setModalContent] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleTitleClick = (cmd) => {
        setModalContent(cmd);
        setIsModalVisible(true);
    };

    const handleCloseButtonClick = () => {
        setIsModalVisible(false);
    };

    return (
        <section className="section">
            {gitCommands.categories.map((category, index) => (
                <div
                    key={index}
                    className="category"
                >
                    <h3
                        className="category-title"
                        onClick={() => handleTitleClick(category)}
                    >
                        {category.name}
                    </h3>
                </div>
            ))}

            {isModalVisible && modalContent && (
                <Modal
                    content={
                        <div className="category">
                            <h3 className="category-title">
                                {modalContent.name}
                            </h3>
                            {modalContent.commands.map((cmd, idx) => (
                                <div key={idx}>
                                    <p><code>{cmd.command}</code></p>
                                    <p>{cmd.description}</p>
                                </div>
                            ))}
                        </div>
                    }
                    onClose={handleCloseButtonClick}
                />
            )}
        </section>
    );
};

export default GitSection;

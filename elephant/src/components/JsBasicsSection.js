import React, { useState } from 'react';
import jsBasics from '../data/jsBasics.json';
import './styles.css'; // Importez le fichier de styles CSS

const JsCommand = ({ title, code, description }) => (
    <div className="command">
        <h3>{title}</h3>
        <pre><code>{code}</code></pre>
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

const JsBasicsSection = () => {
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
            {jsBasics.categories.map((category, index) => (
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
                                    <h4>{cmd.title}</h4>
                                    <pre><code>{cmd.code}</code></pre>
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

export default JsBasicsSection;

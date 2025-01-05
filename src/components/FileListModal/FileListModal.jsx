import React from 'react';
import Modal from '../Modal/Modal';
import { DocsList } from '../../data/docs';
import './FileListModal.scss'; // Импортируем стили
import { FaFileAlt } from 'react-icons/fa'; // Иконка для файлов
import { Link } from 'react-router-dom';

const FileListModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="file-list-modal">
        <h2>Формы для заявок</h2>
        <ul className="doc-list">
          {DocsList.map((file, index) => (
            <li key={index} className="doc-item">
              <Link to={`/doc/${file.name}`} className="doc-link">
                <FaFileAlt className="doc-icon" />
                <span>{file.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default FileListModal;

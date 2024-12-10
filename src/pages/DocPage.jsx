import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mammoth from 'mammoth';
import { DocsList } from './../data/docs';
import './DocPage.scss'; // Импортируем стили

const DocPage = () => {
  const { fileName } = useParams();
  const decodedFileName = decodeURIComponent(fileName);
  const [htmlContent, setHtmlContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const file = DocsList.find(f => f.name === decodedFileName);
    if (file) {
      fetch(file.url)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          mammoth.convertToHtml({ arrayBuffer: buffer })
            .then(result => {
              setHtmlContent(result.value);
            })
            .catch(err => {
              console.error(err);
              setError(`Ошибка при конвертации файла ${file.name}: ${err.message}`);
            });
        })
        .catch(err => {
          console.error(err);
          setError(`Ошибка при загрузке файла ${file.name}: ${err.message}`);
        });
    } else {
      setError('Файл не найден');
    }
  }, [decodedFileName]);

  return (
    <div className="doc-page">
      {error && <div className="error">{error}</div>}
      {htmlContent && (
        <div className="paper-container">
          <div className="paper" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      )}
    </div>
  );
};

export default DocPage;

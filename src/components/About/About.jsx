import React from 'react';
import Bg from './../../images/bg/bg1.jpg'

import './About.scss';

const About = () => {
  const handleLinkContact = () =>{
    window.location.href = '/contacts';
  }
  return (
    <div className="fire-safety-header">
      <div className="fire-safety-header__content">
        <h1 className="fire-safety-header__title">Пожарная безопасность</h1>
        <h2 className="fire-safety-header__subtitle">официальный сайт Трио</h2>
        <p className="fire-safety-header__description">
          Компания ТРИО занимается разработкой, монтажом и обслуживанием комплексных систем по пожарной безопасности
          на объектах любого уровня. Обратившись к нам, можно решить сразу весь комплекс вопросов по защите зданий от связанных с
          угрозой чрезвычайных ситуаций, техногенных катастроф, и обеспечить полное выполнение нормативно-правовых
          требований.
        </p>
        <button className="fire-safety-header__cta" onClick={handleLinkContact}>Контакты</button>
      </div>
      <div className="fire-safety-header__image-container">
        <img 
          className="fire-safety-header__image" 
          src={Bg} 
          alt="Планирование пожарной безопасности" 
        />
      </div>
    </div>
  );
};

export default About;
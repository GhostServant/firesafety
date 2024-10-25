import React from 'react';
import Bg from './../../images/bg/bg1.jpg';
import './About.scss';

const About = () => {
  const handleLinkContact = () => {
    window.location.href = '/contacts';
  };

  return (
    <div className="fire-safety-header">
      <div className="fire-safety-header__content">
        <h1 className="fire-safety-header__title">Пожарная безопасность</h1>
        <p className="fire-safety-header__description">
          Наша компания имеет богатый опыт работы в области пожарной безопасности. Квалифицированные монтажные бригады и профессиональные сотрудники могут предложить вам удобный, быстрый и качественный сервис. Мы обладаем всей необходимой разрешительной документацией, лицензиями и сертификатами, так что вы можете быть спокойны за любой этап и стадию выполняемой нами услуги.
        </p>
        <p className="fire-safety-header__subtext">
          «На нашем сайте, обратившись к соответствующему разделу, вы найдете более подробную информацию по всем услугам в области пожарной безопасности».
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

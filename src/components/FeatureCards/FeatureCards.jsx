import React from 'react';
import './FeatureCards.scss';

function FeatureCards() {
  const features = [
    { id: 1, icon: '👥', title: 'Клиентский сервис', description: 'Контакт-центр 24/7, консультация специалистов' },
    { id: 2, icon: '📦', title: 'Наличие на складе', description: 'Все товары в наличии на собственном складе' },
    { id: 3, icon: '🏆', title: 'Гарантия качества', description: 'Многоступенчатый контроль качества' },
  ];

  return (
    <div className="feature-cards">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-content">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
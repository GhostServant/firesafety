import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../data/servicesList';
import styles from './ServicesItem.module.scss';
import OrderForm from './../OrderForm/OrderForm';
import Modal from './../Modal/Modal';
import FireTable from './../FireTable/FireTable';
import { fireExtinguisherServices, inspectionOfFireEscapes,
  securitySystem, evacuationPlanDevelopment,inspectionOfFireHoses } from '../../data/fireExtinguisherServices';

const PriceCalculator = () => {
  const [area, setArea] = useState('');
  const [price, setPrice] = useState(0);

  const calculatePrice = (value) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setPrice(numValue * 35);
    } else {
      setPrice(0);
    }
  };

  const handleAreaChange = (e) => {
    const value = e.target.value;
    setArea(value);
    calculatePrice(value);
  };

  return (
    <div className={styles.calculator}>
      <h3 className={styles.calculatorTitle}>Калькулятор стоимости</h3>
      <h5 className={styles.calculatorSubtitle}>Стоимость приблизительная</h5>
      <div className={styles.calculatorContent}>
        <input
          type="number"
          value={area}
          onChange={handleAreaChange}
          placeholder="Введите площадь (м²)"
          className={styles.calculatorInput}
        />
        <p className={styles.calculatorResult}>
          Стоимость: {price.toFixed(2)} руб.
        </p>
      </div>
    </div>
  );
};

const ServicesItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name } = useParams();
  const service = services.find(s => s.linkTo === `/services/${name}`);

  if (!service) {
    return <div className={styles.notFound}>Услуга не найдена</div>;
  }

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const showCalculator = name === 'fire-protective-coating';
  const showFireTable = ['fire-extinguisher-recharging', 'fire-protection-systems-maintenance', 'ladders-and-roof-guards-testing', 'fire-water-sources-check', 'evacuation-plans'].includes(name);

  let tableData = [];

  if (name === 'fire-extinguisher-recharging') {
    tableData.push(fireExtinguisherServices[1]);
  } else if (name === 'ladders-and-roof-guards-testing') {
    tableData.push(inspectionOfFireEscapes[1], inspectionOfFireEscapes[2],inspectionOfFireEscapes[3]);
  } else if (name === 'fire-water-sources-check') {
    tableData.push(inspectionOfFireHoses[1],inspectionOfFireHoses[2],);
  } else if (name === 'evacuation-plans') {
    tableData.push(evacuationPlanDevelopment[1]);
  }else if (name === 'fire-protection-systems-maintenance') {
    tableData.push(securitySystem[1]);
  }
  

  return (
    <div className={styles.servicePage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{service.name}</h1>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={service.imageSrc} alt={service.name} className={styles.image} />
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{service.fullDescription}</p>
            <button className={styles.orderButton} onClick={handleOrderClick}>Заказать услугу</button>
          </div>
        </div>
        {showCalculator && <PriceCalculator />}
        {showFireTable && tableData.map((data, index) => (
          <FireTable key={index} headers={data.headers} rows={data.rows} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <OrderForm
          serviceName={service.name}
          showPhone={false}
          showQuantity={false}
          showBid={false}
          showInn={true}
          scenario={3}
        />
      </Modal>
    </div>
  );
};

export default ServicesItem;

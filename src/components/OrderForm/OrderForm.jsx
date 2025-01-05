import { useState } from 'react';
import Select from 'react-select';
import styles from './OrderForm.module.scss';
import Modal from './../Modal/Modal';
import { servicesName } from '../../data/servicesList';
import useEmailJs from './../../hook/useEmailJs';

const TOKEN_KEY = "4ef233740a2f74c14694a474fda11cbf4c0b82d9";

const OrderForm = ({
  title = "Заказать услугу",
  serviceName = null,
  showName = true,
  showPhone = true,
  showEmail = true,
  showMessage = true,
  showFileUpload = true,
  showQuantity = true,
  showServiceSelect = false,
  showInn = false,
  scenario
}) => {
  const [formData, setFormData] = useState({
    titleTemplate: title,
    name: '',
    phone: '',
    email: '',
    serviceName: serviceName || '',
    message: '',
    file_data: [],
    file_name: '',
    agreed: false,
    quantity: 1,
    inn: '',
    add_data: '',
    companyName: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { sendEmail, isSending } = useEmailJs();

  const validate = () => {
    const newErrors = {};

    if (showName && !formData.name) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    if (showPhone && !formData.phone) {
      newErrors.phone = 'Телефон обязателен для заполнения';
    }

    if (showEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный E-mail';
    }

    if (showQuantity && (formData.quantity < 1 || isNaN(formData.quantity))) {
      newErrors.quantity = 'Количество должно быть больше нуля';
    }

    if (!formData.agreed) {
      newErrors.agreed = 'Вы должны согласиться на обработку данных';
    }

    if (showServiceSelect && !formData.serviceName) {
      newErrors.serviceName = 'Выберите услугу';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'inn' && value) {
      fetchCompanyInfo(value);
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      serviceName: selectedOption ? selectedOption.value : ''
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      convertFileToBase64(file).then(base64File => {
        setFormData(prevData => ({
          ...prevData,
          file_data: [base64File], // Теперь это массив с одним элементом
          file_name: file.name
        }));
      });
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result
          .replace('data:', '')
          .replace(/^.+,/, '');
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const payload = {
        subject: formData.titleTemplate,
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        recipient_email: formData.email,
        inn: formData.inn,
        add_data: formData.add_data || formData.companyName || '—',
        file_data: formData.file_data.length > 0 ? formData.file_data[0] : '',
        file_name: formData.file_name,
        service: formData.serviceName,
        scene: scenario
      };

      try {
        await sendEmail(payload);
        setModalMessage('Форма успешно отправлена!');
        setIsModalOpen(true);
        setFormData({
          titleTemplate: title,
          name: '',
          phone: '',
          email: '',
          serviceName: '',
          message: '',
          file_data: [],
          file_name: '',
          agreed: false,
          quantity: 1,
          inn: '',
          add_data: '',
          companyName: ''
        });
      } catch (error) {
        setModalMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
        setIsModalOpen(true);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCompanyInfo = async (inn) => {
    try {
      const response = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Token ${TOKEN_KEY}`
        },
        body: JSON.stringify({ query: inn })
      });
      const data = await response.json();
      if (data.suggestions && data.suggestions.length > 0) {
        const companyData = data.suggestions[0];
        setFormData(prevData => ({
          ...prevData,
          companyName: companyData.value,
          add_data: `${companyData.unrestricted_value ?? companyData.value}, ${`КПП - ${companyData.data.kpp || '—'}`}, ${companyData.data.address.value || '—'}`
        }));
      } else {
        setFormData(prevData => ({
          ...prevData,
          companyName: 'Компания не найдена',
          add_data: '—'
        }));
      }
    } catch (error) {
      console.error('Ошибка при получении данных о компании:', error);
      setFormData(prevData => ({
        ...prevData,
        companyName: 'Ошибка при получении данных',
        add_data: '—'
      }));
    }
  };

  return (
    <>
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>{title}</h2>

        {showName && (
          <div className={styles.field}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя *"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
        )}


        {showEmail && (
          <div className={styles.field}>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail *"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        )}

        {showServiceSelect && (
          <div className={styles.field}>
            <Select
              options={servicesName}
              onChange={handleSelectChange}
              placeholder="Выберите услугу *"
              value={servicesName.find(option => option.value === formData.serviceName)}
            />
            {errors.serviceName && <span className={styles.error}>{errors.serviceName}</span>}
          </div>
        )}

        {showQuantity && (
          <div className={styles.field}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              placeholder="Количество *"
            />
            {errors.quantity && <span className={styles.error}>{errors.quantity}</span>}
          </div>
        )}

{showPhone && (
          <div className={styles.field}>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телефон *"
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
        )}

        {showInn && (
          <div className={styles.field}>
            <input
              type="text"
              id="inn"
              name="inn"
              value={formData.inn}
              onChange={handleChange}
              placeholder="ИНН"
            />
            {formData.companyName && (
              <span className={styles.companyName}>{formData.companyName}</span>
            )}
          </div>
        )}

        {showMessage && (
          <div className={styles.field}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Сообщение"
            />
          </div>
        )}

        {showFileUpload && (
          <div className={styles.fileUpload}>
            <label htmlFor="file" className={styles.fileLabel}>
              <span className={styles.fileIcon}>📎</span>
              Прикрепить файл
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept=".docx,.txt"
              className={styles.fileInput}
            />
            {formData.file_name && (
              <div className={styles.selectedFiles}>
                <p>Выбранный файл: {formData.file_name}</p>
              </div>
            )}
          </div>
        )}

        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="agreed"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label htmlFor="agreed">
            <span className={styles.checkboxControl}>
              <span className={styles.checkboxToggle}></span>
            </span>
            <span className={styles.checkboxLabel}>Я согласен на обработку персональных данных</span>
          </label>
          {errors.agreed && <span className={styles.error}>{errors.agreed}</span>}
        </div>

        <button type="submit" className={styles.submit} disabled={isSending}>
          {isSending ? 'Отправка...' : 'Отправить'}
        </button>
      </form>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p>{modalMessage}</p>
        </Modal>
      )}
    </>
  );
};

export default OrderForm;
import { useState } from 'react';
import { API_BASE_URL } from './../constants/apiConstants';

const useEmailJs = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  // Определение маршрута для каждого сценария
  const determineRoute = (formData) => {
    if (formData.scene === 1) {
      return `${API_BASE_URL}/mailing/send-email/scene1`;
    } else if (formData.scene === 2) {
      return `${API_BASE_URL}/mailing/send-email/scene2`;
    } else if (formData.scene === 3) {
      return `${API_BASE_URL}/mailing/send-email/scene3`;
    }
    return null;
  };

  const sendEmail = async (formData) => {
    setIsSending(true);
    setIsSent(false);
    setError(null);
  
    try {
      const url = determineRoute(formData);
      if (!url) throw new Error('Неизвестный сценарий отправки');
  
      const payload = {};
      if (formData.scene === 1) {
        payload.subject = formData.subject || '—';
        payload.phone = formData.phone || '—';
        payload.service = formData.service || '—';
        payload.inn = formData.inn || '—';
        payload.add_data = formData.add_data || '—';
        payload.file_data = formData.file_data || '—';
        payload.file_name = formData.file_name || '—';  // добавляем file_name
      } else if (formData.scene === 2) {
        payload.subject = formData.subject || '—';
        payload.name = formData.name || '—';
        payload.phone = formData.phone || '—';
      } else if (formData.scene === 3) {
        payload.subject = formData.subject || '—';
        payload.name = formData.name || '—';
        payload.recipient_email = formData.recipient_email || '—';
        payload.inn = formData.inn || '—';
        payload.message = formData.message || '—';
        payload.add_data = formData.add_data || '—';
        payload.file_data = formData.file_data || '—';
        payload.file_name = formData.file_name || '—';  // добавляем file_name
      }
      console.log(payload);
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      setIsSent(true);
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      
    } catch (err) {
      console.error('Ошибка при отправке email:', err);
      setError(err);
    } finally {
      setIsSending(false);
    }
  };
  

  return { sendEmail, isSending, isSent, error };
};

export default useEmailJs;

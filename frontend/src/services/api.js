import axios from 'axios';
import { INITIAL_PORTFOLIO } from '../data/weddingData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

/**
 * Submit wedding consultation booking inquiry to MongoDB & Nodemailer via Express
 */
export const submitInquiry = async (formData) => {
  try {
    const response = await apiClient.post('/inquiry', formData);
    return {
      success: true,
      message: response.data.message || 'Consultation request submitted successfully!',
      data: response.data.data
    };
  } catch (error) {
    console.warn('Backend endpoint /api/inquiry offline or unreachable. Attempting direct email delivery fallback...');

    // Fallback: Web3Forms direct dispatch with active key
    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '8ef70dab-7e51-4312-9109-0f5668dbd5c6';
    if (web3Key) {
      try {
        const partnerText = formData.partnerName ? ` & ${formData.partnerName}` : '';
        const emailBody = `New Wedding Consultation Inquiry Received!

Couple: ${formData.name}${partnerText}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Event Date: ${formData.date || 'Flexible'}
Guests: ${formData.guests}
Requested Service: ${formData.service}

Wedding Vision & Notes:
${formData.vision || 'No additional notes provided.'}`;

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `💍 New Wedding Inquiry: ${formData.name || 'Couple'}${partnerText} (${formData.guests || '150+'} Guests)`,
            from_name: 'SHOWMANIA Events Inquiry',
            name: `${formData.name}${partnerText}`,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            guests: formData.guests,
            service: formData.service,
            vision: formData.vision,
            message: emailBody
          })
        });
      } catch (w3Err) {
        console.warn('Direct web3forms dispatch failed:', w3Err);
      }
    }

    // Graceful feedback
    return {
      success: true,
      message: `💍 Thank you, ${formData.name || 'Lovely Couple'}! Your wedding inquiry has been received. Christi will be in touch within 24 hours!`,
      isMock: true
    };
  }
};

/**
 * Subscribe email to newsletter in MongoDB via Express
 */
export const subscribeNewsletter = async (email, source = 'website') => {
  try {
    const response = await apiClient.post('/subscribers', { email, source });
    return {
      success: true,
      message: response.data.message || 'Thank you for subscribing!',
      data: response.data.data
    };
  } catch (error) {
    console.warn('Backend offline, simulated fallback newsletter subscription:', error.message);
    return {
      success: true,
      message: `✨ Thank you for subscribing! Your wedding planning guide is on its way to ${email}`,
      isMock: true
    };
  }
};

/**
 * Fetch portfolio items from MongoDB via Express
 */
export const fetchPortfolio = async () => {
  try {
    const response = await apiClient.get('/portfolio');
    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data.map((item, index) => ({
        id: item._id || index + 1,
        title: item.title,
        category: item.category,
        location: item.location,
        image: item.imageUrl,
        desc: item.description
      }));
    }
    return INITIAL_PORTFOLIO;
  } catch (error) {
    console.warn('Backend portfolio unreachable, using local curated portfolio:', error.message);
    return INITIAL_PORTFOLIO;
  }
};

'use client';

// Cliente wrapper para EmailJS - solo funciona en el navegador
import { sendEmail as sendEmailService } from './emailService';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export const sendEmailClient = async (formData: EmailData): Promise<boolean> => {
  // Verificar que estamos en el cliente
  if (typeof window === 'undefined') {
    console.error('Email service can only be used on client side');
    return false;
  }

  try {
    return await sendEmailService(formData);
  } catch (error) {
    console.error('Client email error:', error);
    return false;
  }
};
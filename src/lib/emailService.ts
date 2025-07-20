// EmailJS - Servicio gratuito para envío de emails
// Hasta 200 emails/mes gratis
// Registro en: https://www.emailjs.com/

interface EmailData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') {
      throw new Error('EmailJS only works on client side');
    }

    // Configuración de EmailJS (necesitas registrarte y obtener estas keys)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

    // Validar configuración
    if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
      throw new Error('EmailJS configuration missing');
    }

    // Datos para el template de email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      category: getCategoryLabel(formData.category),
      message: formData.message,
      to_email: 'zerowasteai4@gmail.com',
      reply_to: formData.email
    };

    // Importar EmailJS dinámicamente para evitar problemas SSR
    const { default: emailjs } = await import('@emailjs/browser');
    
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

const getCategoryLabel = (category: string): string => {
  const categories: Record<string, string> = {
    'support': 'Soporte Técnico',
    'bug': 'Reportar Error',
    'feature': 'Sugerir Función',
    'feedback': 'Comentarios Generales'
  };
  return categories[category] || 'Consulta General';
};

// Alternativas gratuitas para envío de emails:

/*
1. **EmailJS** (Recomendado) - https://www.emailjs.com/
   - 200 emails/mes gratis
   - Fácil integración
   - No necesita backend
   
   Instalación: npm install @emailjs/browser

2. **Resend** - https://resend.com/
   - 3,000 emails/mes gratis
   - API moderna y simple
   - Necesita backend API
   
   Instalación: npm install resend

3. **Brevo (ex-Sendinblue)** - https://www.brevo.com/
   - 300 emails/día gratis
   - Dashboard completo
   - API REST
   
4. **Mailgun** - https://www.mailgun.com/
   - 5,000 emails/mes por 3 meses gratis
   - Muy confiable
   - Para aplicaciones serias

5. **Nodemailer + Gmail SMTP** (Gratis)
   - Usando tu cuenta Gmail
   - Límite: ~100 emails/día
   - Configuración más técnica

Configuración recomendada para EmailJS:

1. Regístrate en emailjs.com
2. Crea un servicio (Gmail, Outlook, etc.)
3. Crea un template de email
4. Obtén las keys: Service ID, Template ID, Public Key
5. Agrégalas a tu .env.local:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx

Template example para EmailJS:
---
Asunto: [{{category}}] {{subject}}

Nombre: {{from_name}}
Email: {{from_email}}
Categoría: {{category}}

Mensaje:
{{message}}

---
Responder a: {{reply_to}}
---
*/
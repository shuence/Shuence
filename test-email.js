import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env.local') });
dotenv.config(); // Also load .env as fallback

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: `Shuence <${process.env.FROM_EMAIL_USER || 'hello@shuence.com'}>`,
      to: process.env.TO_EMAIL_OWNER || 'shubhampitekar2323@gmail.com', // Use your email from env
      subject: 'Email API Test',
      html: '<h1>This is a test email from Resend</h1><p>If you receive this email, your Resend API setup is working correctly!</p>',
    });

    if (error) {
      console.error('Error sending test email:', error);
      return;
    }

    console.log('Test email sent successfully!');
    console.log('Email ID:', data?.id);
  } catch (error) {
    console.error('Exception when sending test email:', error);
  }
}

testEmail();

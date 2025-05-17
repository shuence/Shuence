import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config(); // Also load .env as fallback

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Get directory name using ESM approach
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  
  // Add middleware to parse JSON requests
  app.use(express.json());

  // In development, use Vite's dev server
  let vite;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });

    // Use Vite's connect middleware
    app.use(vite.middlewares);
  } else {
    // In production, serve the built files
    app.use(express.static(path.resolve(__dirname, 'dist')));
  }

  // API route for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false,
          message: 'Please provide name, email, and message'
        });
      }      // Send email to site owner with form data
      const { data: ownerEmailData, error: ownerEmailError } = await resend.emails.send({
        from: `Contact Form <${process.env.FROM_EMAIL_OWNER || 'website@shuence.com'}>`,
        to: process.env.TO_EMAIL_OWNER || 'shubhampitekar2323@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (ownerEmailError) {
        console.error('Error sending email to owner:', ownerEmailError);
        return res.status(500).json({ 
          success: false,
          message: 'Failed to process your submission'
        });
      }

      // Send confirmation email to the user
      const { data: userEmailData, error: userEmailError } = await resend.emails.send({
        from: `Shuence <${process.env.FROM_EMAIL_USER || 'hello@shuence.com'}>`,
        to: email,
        subject: 'Thank you for contacting us',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hello ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <blockquote>${message}</blockquote>
          <p>Best regards,</p>
          <p>Shuence</p>
        `,
      });

      if (userEmailError) {
        console.error('Error sending confirmation email to user:', userEmailError);
        // Continue execution even if confirmation email fails
      }

      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      });

    } catch (error) {
      console.error('Error processing contact form submission:', error);
      res.status(500).json({ 
        success: false,
        message: 'An unexpected error occurred'
      });
    }
  });

  // Handle all other routes by serving index.html for SPA
  app.get('*', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    } else {
      // In development, let Vite handle the request
      res.status(404).send('Not found');
    }
  });

  const PORT = process.env.PORT || 5173;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();

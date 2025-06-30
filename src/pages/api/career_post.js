import nodemailer from 'nodemailer';
import multer from 'multer';
import { promisify } from 'util';

// Multer config for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  },
});

const uploadMiddleware = promisify(upload.single('resume'));

export const config = {
  api: {
    bodyParser: false, // needed for multer
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await uploadMiddleware(req, res);

    const {
      name,
      email,
      phone,
      aboutYourself,
      githubLink,
      portfolioLink,
      linkedinLink,
      otherLinks,
    } = req.body;

    // Validation
    if (!name || !email || !phone || !aboutYourself) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume file is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Email setup
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Build links section
    const links = [];
    if (githubLink) links.push(`GitHub: ${githubLink}`);
    if (portfolioLink) links.push(`Portfolio: ${portfolioLink}`);
    if (linkedinLink) links.push(`LinkedIn: ${linkedinLink}`);
    if (otherLinks) links.push(`Other: ${otherLinks}`);

    const emailText = `
You received a new career application:

===========================
Name: ${name}
Email: ${email}
Phone: ${phone}

About:
${aboutYourself}

${links.length ? 'Links:\n' + links.join('\n') : ''}

Resume is attached as PDF.

---
Submitted from the website.
    `.trim();

    await transporter.sendMail({
      from: `"Career Application" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // or your HR email
      subject: `New Application from ${name}`,
      text: emailText,
      attachments: [
        {
          filename: `Resume_${name.replace(/\s+/g, '_')}.pdf`,
          content: req.file.buffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return res.status(200).json({ success: true, message: 'Application submitted successfully!' });

  } catch (error) {
    console.error('Application error:', error);

    if (error.message === 'Only PDF files are allowed') {
      return res.status(400).json({ error: 'Only PDF files are allowed' });
    }

    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'Resume exceeds 10MB limit' });
    }

    return res.status(500).json({ error: 'An error occurred while submitting your application' });
  }
}

const nodemailer = require('nodemailer');
const Inquiry = require('../models/Inquiry');

/**
 * Configure Nodemailer Transporter
 */
const createTransporter = async () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const isMock = !pass || pass === 'mock-app-password-for-development' || pass.includes('your-');

  // If real credentials are provided
  if (user && pass && !isMock) {
    const isGmail = (process.env.EMAIL_SERVICE || 'gmail').toLowerCase() === 'gmail';
    if (isGmail) {
      return {
        transporter: nodemailer.createTransport({
          service: 'gmail',
          auth: { user, pass }
        }),
        isLive: true
      };
    }

    return {
      transporter: nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: { user, pass }
      }),
      isLive: true
    };
  }

  // Fallback: Create dynamic Ethereal test account
  const testAccount = await nodemailer.createTestAccount();
  return {
    transporter: nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    }),
    isLive: false,
    isEthereal: true
  };
};

// @desc    Submit a wedding consultation inquiry & send notification email
// @route   POST /api/inquiry (or /api/inquiries)
// @access  Public
exports.createInquiry = async (req, res) => {
  try {
    // 1. Extract all 8 fields from request body
    const {
      name,
      partnerName = '',
      email,
      phone = '',
      date = '',
      weddingDate,
      guests = '150+',
      guestCount,
      service = 'Full Wedding Planning',
      vision = '',
      notes
    } = req.body;

    const finalDate = date || weddingDate || '';
    const finalGuests = guests || guestCount || '150+';
    const finalVision = vision || notes || '';

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and Email Address are required fields.'
      });
    }

    // 2. Save inquiry to MongoDB
    let savedInquiry = null;
    try {
      savedInquiry = await Inquiry.create({
        name: name.trim(),
        partnerName: partnerName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        date: finalDate,
        guests: finalGuests,
        service: service.trim(),
        vision: finalVision.trim()
      });
      console.log(`✨ [Database] Saved inquiry for ${name} (${email})`);
    } catch (dbError) {
      console.warn('⚠️ MongoDB save notice:', dbError.message);
    }

    // 3. Prepare Plain Text & HTML Email for Site Owner
    const partnerDisplay = partnerName.trim() ? ` & ${partnerName.trim()}` : '';
    const phoneDisplay = phone.trim() ? phone.trim() : 'Not provided';
    const dateDisplay = finalDate ? finalDate : 'Flexible / TBD';
    const visionDisplay = finalVision.trim() ? finalVision.trim() : 'No additional vision notes shared.';

    const plainTextEmail = `New Wedding Inquiry Received!

Name: ${name.trim()}${partnerDisplay}

Contact: ${email.trim()} | ${phoneDisplay}

Event Details: ${dateDisplay} | Guests: ${finalGuests}

Requested Service: ${service}

Vision: ${visionDisplay}
`;

    const htmlEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FAF6F3; margin: 0; padding: 25px; color: #2E282A; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(176, 125, 135, 0.15); border: 1px solid #EBD7DF; }
        .header { background: #B07D87; padding: 30px 20px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 2px; }
        .header p { margin: 6px 0 0; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; color: #F5EBEF; }
        .content { padding: 30px; }
        .item-card { background: #FAF6F3; border-radius: 12px; padding: 16px; margin-bottom: 14px; border-left: 4px solid #B07D87; }
        .item-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #8C5662; font-weight: bold; margin-bottom: 4px; }
        .item-value { font-size: 15px; color: #2E282A; font-weight: 500; }
        .vision-box { background: #FAF6F3; border-radius: 12px; padding: 18px; border: 1px dashed #B07D87; margin-top: 18px; }
        .footer { text-align: center; padding: 18px; font-size: 12px; color: #8C5662; border-top: 1px solid #FAF6F3; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SHOWMANIA EVENTS & ENTERTAINMENT</h1>
          <p>New Luxury Wedding Consultation Request</p>
        </div>
        <div class="content">
          <div class="item-card">
            <div class="item-label">Couple's Names</div>
            <div class="item-value">${name.trim()}${partnerDisplay}</div>
          </div>
          
          <div class="item-card">
            <div class="item-label">Contact Information</div>
            <div class="item-value">
              <a href="mailto:${email.trim()}" style="color: #B07D87; text-decoration: none;">${email.trim()}</a> | ${phoneDisplay}
            </div>
          </div>
          
          <div class="item-card">
            <div class="item-label">Event Details & Guest Count</div>
            <div class="item-value">📅 Date: ${dateDisplay} &nbsp;•&nbsp; 👥 Guests: ${finalGuests}</div>
          </div>
          
          <div class="item-card">
            <div class="item-label">Requested Planning Service</div>
            <div class="item-value">${service}</div>
          </div>
          
          <div class="vision-box">
            <div class="item-label">Wedding Vision & Notes</div>
            <div style="font-size: 14px; line-height: 1.6; color: #423E40; margin-top: 8px; white-space: pre-wrap;">${visionDisplay}</div>
          </div>
        </div>
        <div class="footer">
          <p>© 2026 Élan Weddings Lead System. Received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // 4. Check for Web3Forms Access Key (Instant No-Password Delivery)
    let emailStatus = 'pending';
    let previewUrl = null;

    if (process.env.WEB3FORMS_ACCESS_KEY && !process.env.WEB3FORMS_ACCESS_KEY.includes('your-')) {
      try {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `💍 New Wedding Inquiry: ${name.trim()}${partnerDisplay} (${finalGuests} Guests)`,
            from_name: 'Élan Weddings Concierge',
            name: `${name.trim()}${partnerDisplay}`,
            email: email.trim(),
            phone: phoneDisplay,
            date: dateDisplay,
            guests: finalGuests,
            service: service,
            vision: visionDisplay,
            message: plainTextEmail
          })
        });

        const web3Data = await web3Res.json();
        if (web3Data.success) {
          emailStatus = 'sent_via_web3forms';
          console.log(`✅ [Web3Forms] Real Email notification delivered directly to your inbox!`);
        } else {
          console.warn('⚠️ [Web3Forms] Response:', web3Data.message);
        }
      } catch (w3Err) {
        console.error('⚠️ [Web3Forms] Dispatch error:', w3Err.message);
      }
    }

    // 5. If not sent via Web3Forms, try Nodemailer SMTP or Ethereal test inbox
    if (emailStatus !== 'sent_via_web3forms') {
      try {
        const { transporter, isLive, isEthereal } = await createTransporter();
        const emailRecipient = process.env.EMAIL_TO || process.env.EMAIL_USER || 'hello@elanweddings.com';
        const emailSender = process.env.EMAIL_USER || 'leads@elanweddings.com';

        const mailInfo = await transporter.sendMail({
          from: `"${process.env.EMAIL_FROM_NAME || 'SHOWMANIA Events & Entertainment'}" <${isLive ? emailSender : 'concierge@showmaniaevents.com'}>`,
          to: isLive ? emailRecipient : 'planner-test@showmaniaevents.com',
          replyTo: email.trim(),
          subject: `💍 New Wedding Inquiry: ${name.trim()}${partnerDisplay} (${finalGuests} Guests)`,
          text: plainTextEmail,
          html: htmlEmail,
        });

        if (isLive) {
          emailStatus = 'sent_to_real_inbox';
          console.log(`✅ [Nodemailer] LIVE EMAIL DELIVERED to: ${emailRecipient}`);
        } else if (isEthereal) {
          previewUrl = nodemailer.getTestMessageUrl(mailInfo);
          emailStatus = 'sent_to_test_inbox';
          console.log('📬 [Nodemailer - Test Inbox Generated]');
          console.log(`🔗 Click to view preview: ${previewUrl}`);
        }
      } catch (mailError) {
        console.error('⚠️ [Nodemailer] Dispatch error:', mailError.message);
        emailStatus = 'error: ' + mailError.message;
      }
    }

    // 6. Response to Frontend
    res.status(201).json({
      success: true,
      message: `💍 Thank you, ${name.trim()}! Your wedding inquiry has been received. Christi will be in touch within 24 hours!`,
      emailStatus,
      previewUrl,
      data: savedInquiry || {
        name,
        partnerName,
        email,
        phone,
        date: finalDate,
        guests: finalGuests,
        service,
        vision: finalVision
      }
    });

  } catch (error) {
    console.error('❌ [Error] createInquiry failed:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error processing wedding inquiry.'
    });
  }
};

// @desc    Get all inquiries for admin / planner dashboard
// @route   GET /api/inquiry (or /api/inquiries)
// @access  Private / Internal
exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

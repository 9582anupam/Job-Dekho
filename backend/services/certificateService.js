const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const createError = require('http-errors');

// Function to generate a certificate
exports.generateCertificate = async (data) => {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    const { title, recipient, date } = data;
    
    page.drawText(title, {
      x: 50,
      y: 350,
      size: 30,
      color: rgb(0, 0, 0)
    });

    page.drawText(`Recipient: ${recipient}`, {
      x: 50,
      y: 300,
      size: 20,
      color: rgb(0, 0, 0)
    });

    page.drawText(`Date: ${date}`, {
      x: 50,
      y: 250,
      size: 20,
      color: rgb(0, 0, 0)
    });

    const pdfBytes = await pdfDoc.save();
    const filePath = path.join(__dirname, '..', 'uploads', 'certificates', `${recipient}-${Date.now()}.pdf`);

    fs.writeFileSync(filePath, pdfBytes);

    return filePath;
  } catch (error) {
    throw createError(500, 'Error generating certificate: ' + error.message);
  }
};

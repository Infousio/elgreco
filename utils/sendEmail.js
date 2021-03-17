require('dotenv').config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (firstName, lastName, email) => {
  const msg = {
    templateId: "d-d21888a8d9bf4a558ee3c43cbbc976a9",
    to: email,
    from: "no-reply@elgrecovrasna.gr",
    subject: "El Greco Vrasna rooms inquiry",
    dynamic_template_data: {
      first_name: firstName,
      last_name: lastName,
    },
  };

  try {
    await sgMail.send(msg);
    console.log("Email send!");
  } catch (err) {
    console.log(err.response.body.errors);
  }
};

export const sendEmailBase = async(
  firstName,
  lastName,
  email,
  number,
  message,
  checkin,
  checkout
) => {
  const msg = {
    to: "elgreco@elgrecovrasna.gr",
    from: "no-reply@elgrecovrasna.gr",
    subject: `Room Inquiry ${firstName} ${lastName}`,
    html: `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Mobile Number: ${number}</p>
      <p>Message: ${message}</p>
      <p>Check In: ${checkin}</p>
      <p>Check Out: ${checkout}</p>
    `
  };

  try {
    await sgMail.send(msg);
    console.log("email loca send");
  } catch(err) {
    console.log(err);
  }
};

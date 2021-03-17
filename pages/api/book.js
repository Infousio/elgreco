import { sendEmail, sendEmailBase } from "../../utils/sendEmail";

export default async (req, res) => {
  const {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    NUMBER,
    MESSAGE,
    CHECKIN,
    CHECKOUT,
  } = req.body;

  try {
    await sendEmail(FIRST_NAME, LAST_NAME, EMAIL);
    await sendEmailBase(
      FIRST_NAME,
      LAST_NAME,
      EMAIL,
      NUMBER,
      MESSAGE,
      CHECKIN,
      CHECKOUT
    );
    res.status(200).send('Message sent successfully!');
  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong.');
  }
};

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SendEmail = async (updatedEmployee, toEmail, data, emailSentFlag) => {
  if (emailSentFlag.current) return; // Prevent email sending if already triggered

  emailSentFlag.current = true; // Set flag to prevent further email sends

  for (let i = 0; i < data.length; i++) {
    try {
      const item = data[i];
      const approveLink = `http://202.21.34.221:8090/authenticate?action=approve&toEmail=${toEmail}&id=${item.id}`;
      const rejectLink = `http://202.21.34.221:8090/authenticate?action=reject&toEmail=${toEmail}&id=${item.id}`;

      const templateParams = {
        empName: updatedEmployee,
        toEmail,
        expenceId: item.expenceId,
        name: item.name,
        amount: item.amount,
        currency: item.currency,
        description: item.description || "N/A",
        docId: item.docId,
        docDate: item.docDate,
        outstanding: item.outStanding,
        creditLimit: item.creditLimit,
        approveLink,
        rejectLink,
      };

      const response = await emailjs.send(
        "service_9y1nnmh",
        "template_823h83c",
        templateParams,
        "A7IEQ6ucoMSeZNw--"
      );

      console.log(`Email sent successfully for item ${i + 1}:`, response);
      await delay(1000); // Delay 1 second between emails
    } catch (error) {
      console.error(`Error sending email for item ${i + 1}:`, error);
    }
  }
};

const EmailConfig = ({ updatedEmployee, toEmail, data }) => {
  const [emailSent, setEmailSent] = useState(false);
  const emailSentFlag = useRef(false); // useRef should be inside the component

  useEffect(() => {
    // Check if email has already been sent, to prevent triggering the email again
    if (emailSentFlag.current) return; // Skip if email has already been sent

    // Call SendEmail
    SendEmail(updatedEmployee, toEmail, data, emailSentFlag);
    setEmailSent(true); // Mark email as sent after the first call
    console.log("function called");
  }, [updatedEmployee, toEmail, data]); // Removed emailSent from dependencies

  return null;
};

export default EmailConfig;

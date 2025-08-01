import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [
    {
      email,
    },
  ];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: " Verify Your Email Address",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Verification email sent successfully:", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [
    {
      email,
    },
  ];
  try {
    const response=await mailtrapClient.send({
      from:sender,
      to: recipient,
      template_uuid: "3c3c377c-c25c-4c9f-9545-c28a168fed99",
      template_variables:{
      "company_info_name": "Auth App",
      "name": name
    },
    
    })
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};

// 

//     template_variables: {

//       "company_info_name": "Test_Company_info_name",

//       "name": "Test_Name"

//     }
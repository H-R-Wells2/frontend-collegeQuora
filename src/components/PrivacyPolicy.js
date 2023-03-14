import React, { useContext } from "react";
import modeContext from "../context/mode/modeContext";

const PrivacyPolicy = () => {

  const { textMain, mainBox } = useContext(modeContext);

  return (
    <div className={`flex justify-center items-center`}>
      <div className={`w-full max-w-4xl transition ease-in-out duration-500 p-8 my-4 rounded-lg ${mainBox} ${textMain}`}>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At College-Quora, we take your privacy seriously. We collect only the
          information necessary to provide you with a seamless and secure user
          experience. This Privacy Policy outlines what information we collect,
          how we use it, and your choices and rights regarding your personal
          data.
        </p>
        <h2 className="text-lg font-bold mb-2">What information do we collect?</h2>
        <p className="mb-4">
          We collect the following information when you sign up for a College-Quora
          account: name, email address, password, college name, and batch name.
        </p>
        <h2 className="text-lg font-bold mb-2">How do we use your information?</h2>
        <p className="mb-4">
          We use your information to create and maintain your College-Quora
          account, and to personalize your user experience. We may also use your
          information to send you important account-related messages, such as
          password reset emails or notifications of policy changes.
        </p>
        <h2 className="text-lg font-bold mb-2">How do we protect your information?</h2>
        <p className="mb-4">
          We use industry-standard security measures to protect your information
          from unauthorized access or disclosure. We also regularly review and
          update our security practices to ensure your information is always
          safe.
        </p>
        <h2 className="text-lg font-bold mb-2">Your choices and rights</h2>
        <p className="mb-4">
          You have the right to access and modify your personal information at
          any time. You can do so by logging in to your College-Quora account and
          visiting the "Settings" page. If you wish to delete your account and
          all associated data, please contact us at privacy@college-quora.com.
        </p>
        <h2 className="text-lg font-bold mb-2">Changes to this policy</h2>
        <p className="mb-4">
          We reserve the right to modify this Privacy Policy at any time. If we
          make significant changes to the policy, we will notify you via email
          or by posting a notice on our website. By continuing to use our
          website after any changes to this policy, you agree to the updated
          policy.
        </p>
        <p className="text-xs text-gray-500 mt-10">
          Last updated: March 9, 2023
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

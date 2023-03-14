import React, { useContext } from "react";
import modeContext from "../context/mode/modeContext";

const TermsConditions = () => {

    const { textMain, mainBox } = useContext(modeContext);

    return (
        <div className={`flex justify-center items-center`}>
            <div className={`w-full max-w-4xl transition ease-in-out duration-500 p-8 my-4 rounded-lg ${mainBox} ${textMain}`}>
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
                <p className="mb-4">
                    Welcome to College-Quora. By accessing or using our platform, you agree to be bound by the following terms and conditions:
                </p>
                <h2 className="text-lg font-bold mb-2">Use of Our Platform</h2>
                <p className="mb-4">
                    College-Quora is a platform for college students to connect with each other by asking questions and answering them. By using our platform, you agree to use it in a lawful manner and not for any unlawful or unauthorized purpose.
                </p>
                <h2 className="text-lg font-bold mb-2">Intellectual Property</h2>
                <p className="mb-4">
                    All content and materials on College-Quora, including but not limited to text, graphics, logos, images, and software, are the property of College-Quora or its content suppliers and are protected by United States and international copyright laws.
                </p>
                <h2 className="text-lg font-bold mb-2">Privacy</h2>
                <p className="mb-4">
                    We take your privacy seriously. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.
                </p>
                <h2 className="text-lg font-bold mb-2">Indemnification</h2>
                <p className="mb-4">
                    You agree to indemnify and hold College-Quora, its affiliates, officers, directors, agents, and employees harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of or related to your use of our platform or your violation of these terms and conditions.
                </p>
                <h2 className="text-lg font-bold mb-2">Governing Law</h2>
                <p className="mb-4">
                    These terms and conditions shall be governed by and construed in accordance with the laws of the United States, without giving effect to any principles of conflicts of law.
                </p>
                <h2 className="text-lg font-bold mb-2">Changes to These Terms and Conditions</h2>
                <p className="mb-4">
                    We reserve the right to modify or update these terms and conditions at any time. Your continued use of our platform after any such changes constitutes your acceptance of the new terms and conditions.
                </p>
            </div>
        </div>
    );
};

export default TermsConditions;

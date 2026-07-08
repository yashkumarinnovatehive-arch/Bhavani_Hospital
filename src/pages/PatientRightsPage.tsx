import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaHandHoldingHeart, FaInfoCircle, FaGavel, FaBookOpen, FaUserCheck, FaClipboardList, FaUsers } from 'react-icons/fa';

const PatientRightsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 lg:pt-48 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-accent-light text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            Patient Guide
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Patients Rights and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Responsibilities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600"
          >
            At Bhavani Hospital, we believe in a transparent and respectful partnership with our patients. Here are your rights and responsibilities.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Rights Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
              <FaUserShield className="text-primary" /> Patient Rights
            </h2>

            <div className="space-y-6">
              {/* Right 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaHandHoldingHeart className="text-accent" /> Right of Care
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Right to receive treatment irrespective of socio-economic status, age, gender, religion, caste, cultural preferences, linguistic and geographical origins.</li>
                  <li>Right to be heard with satisfaction without interruption while narrating concerns and problems.</li>
                  <li>Right to receive a legible prescription and explanation about medicines, dosage, options, side effects, food-drug interaction, and dos and don'ts.</li>
                  <li>Right to information and access on whom to contact in case of emergency.</li>
                  <li>Right to respectful and compassionate care at the end of life.</li>
                </ul>
              </div>

              {/* Right 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaUserCheck className="text-accent" /> Right to Confidentiality and Dignity
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Right to personal dignity while receiving care without stigma or discrimination.</li>
                  <li>Right to privacy during examination, procedure, and treatment.</li>
                  <li>Right to protection from physical abuse and neglect.</li>
                  <li>Right to accommodation for special, spiritual, and cultural needs.</li>
                  <li>Right to confidentiality about medical treatment and condition.</li>
                </ul>
              </div>

              {/* Right 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaInfoCircle className="text-accent" /> Right to Information
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Right to receive information in the patient's preferred language and in an easy-to-understand manner.</li>
                  <li>Right to know the name of the treating doctor, care plan, and patient progress.</li>
                  <li>Right to decide what information regarding care can be provided to next of kin.</li>
                  <li>Right to be educated on risks, benefits, expected treatment outcomes, and possible complications.</li>
                  <li>Right to request access to medical records and receive a copy of clinical records.</li>
                  <li>Right to information on expected cost of treatment, including itemized expenses and charges.</li>
                  <li>Right to information on how to raise a complaint.</li>
                </ul>
              </div>

              {/* Right 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaGavel className="text-accent" /> Right of Choice
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Right to seek a second opinion.</li>
                  <li>Right to refuse treatment.</li>
                  <li>Right to informed consent before blood transfusion, anesthesia, surgery, research protocol, invasive procedures, or high-risk treatment.</li>
                </ul>
              </div>

              {/* Right 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaBookOpen className="text-accent" /> Right to Education
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Right to be educated on safe and effective use of medication and possible side effects.</li>
                  <li>Right to be educated on diet, nutrition, immunization, and pain management.</li>
                  <li>Right to be educated about disease process, complications, and prevention strategies.</li>
                  <li>Right to be educated about preventing healthcare-associated infections.</li>
                  <li>Right to education based on special educational needs.</li>
                </ul>
              </div>

              {/* Right 6 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaClipboardList className="text-accent" /> Right to Redressal of Complaint
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Patient has the right to raise a complaint through the dedicated hospital authority.</li>
                  <li>Patient has the right to fair and prompt hearing of their concern.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Responsibilities Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3 mt-12 md:mt-0">
              <FaUsers className="text-primary" /> Patient Responsibilities
            </h2>

            <div className="space-y-6">
              {/* Responsibility 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaInfoCircle className="text-secondary" /> Honesty in Disclosure
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Responsibility to provide complete and accurate information about health condition, present and past illness, medications, and medical history.</li>
                  <li>Responsibility to provide accurate personal information including full name and address.</li>
                  <li>Responsibility to provide complete and accurate information for insurance claims.</li>
                </ul>
              </div>

              {/* Responsibility 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaClipboardList className="text-secondary" /> Treatment Compliance
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Responsibility to be punctual for appointments and inform in case of cancellation or rescheduling.</li>
                  <li>Responsibility to attend follow-up consultations as suggested by the doctor.</li>
                  <li>Responsibility to comply with the doctor's treatment plan.</li>
                  <li>Responsibility to understand that another patient's medical condition may be more urgent.</li>
                  <li>Responsibility not to take or omit medicines without the doctor's consent.</li>
                  <li>Responsibility for actions if treatment is refused or treatment plan is not followed.</li>
                  <li>Responsibility to keep realistic expectations from the doctor and treatment.</li>
                  <li>Responsibility to inform the doctor about any change in condition.</li>
                </ul>
              </div>

              {/* Responsibility 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaUserCheck className="text-secondary" /> Conduct as Patient
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px] md:text-base leading-relaxed">
                  <li>Do not ask for false bills, false certificates, or unlawful changes in medical records.</li>
                  <li>Bear the agreed treatment expenses explained in advance.</li>
                  <li>Pay for services on time as per hospital policy.</li>
                  <li>Accept hospital measures to ensure privacy and confidentiality of medical records.</li>
                  <li>Treat hospital staff, other patients, and visitors with respect and courtesy.</li>
                  <li>Follow visitor policy, no-smoking policy, and hospital rules and regulations.</li>
                  <li>Do not act in a way that puts the patient or others at risk, and cooperate with safety measures.</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PatientRightsPage;

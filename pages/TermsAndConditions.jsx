import React from 'react'
import styles from '@/styles/style';
import { motion } from "framer-motion";

const TermsAndConditions = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4,
            delay: 0.2
        }
    }

    const titleEffect = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.2
        },
    };

    return (
        <section id="top" className={`px-6 lg:px-[120px] py-[40px] md:py-[70px] text-white bg-greenGrow font-MTS`}>
            <motion.header
                // whileInView={fade}
                // initial={{ opacity: 0 }}
                className='text-center pb-[25px] md:pb-[60px]'>
                <h1 className='font-extrabold text-[45px]'>Terms of Service</h1>
            </motion.header>

            <header className='pb-[25px] md:pb-[60px]'>
                <h4 className='font-semibold text-[20px] md:text-[25px]'>Terms of Service (Website)</h4>
            </header>
            <header className='pb-[25px] md:pb-[60px]'>
                <p className='pb-[20px] md:pd-[60px]'>These Terms of Service is an agreement between you and Grow Intelligence and Technologies Ltd, doing business as Grow (hereinafter referred to as “we”, “us”, or “Grow”). “You” refers to you as a user of our Site. These Terms apply to users and visitors to our Website and governs your use of our Website. . </p>
            </header>

            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>ABOUT US</h3>
                <p className='pb-[20px] md:pd-[60px]'>Grow is a platform that provides on-demand access to educational extension services for crop farmers, and productivity tools to plan, record, and evaluate their operations. The Product includes without limitation to the Grow mobile app, www.growng.company (the “Site”) and any other websites, mobile applications, and other interactive properties through which our Services are delivered. Collectively, these Services are owned, operated, and distributed by Grow Intelligence and Technologies Ltd. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>BINDING EFFECT</h3>
                <p className='pb-[20px] md:pd-[60px]'>The Terms form a legally binding agreement between you and Grow, so we advise that you take the time to read them carefully. By accessing or using our Site, you confirm that you can enter a binding contract with Grow, and you accept and will comply with these Terms. By visiting our Site or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by our Terms of Service and Privacy Policy. We will treat your visit to our Site as acceptance of the Terms from that point onwards. If you do not agree, do not access or use our Site. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>CHANGES TO OUR TERMS</h3>
                <p className='pb-[20px] md:pd-[60px]'>We amend these Terms from time to time. For instance when we update our Site or when there are regulatory changes. We will use commercially reasonable efforts to generally notify all users of any material changes to these Terms, such as through an e-mail. However, you should look at the Terms regularly to check for such changes.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>YOUR ACCOUNT WITH US</h3>
                <p className='pb-[20px] md:pd-[60px]'>To access or use the Knowledge hub on our Site, you must create an account with us. When you create this account, or the Grow team helps you create the account, you agree to provide accurate and up-to-date information. It is important that you maintain and promptly update your details and any other information you provide to us, to keep such information current and complete.</p>
                <p className='pb-[20px] md:pd-[60px]'>It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must promptly notify us at support@growng.company</p>
                <p className='pb-[20px] md:pd-[60px]'>You agree that you are solely responsible (to us and to others) for activities that occur under your account. When creating an account, you must provide accurate information about yourself and create only one account strictly for personal purposes.</p>
                <p className='pb-[20px] md:pd-[60px]'>We take the protection of your privacy very seriously, and hence we accord all information related to your account with high standards of data protection and security measures. If you no longer want to use the knowledge hub and would like your account deleted, we can take care of this for you. Please contact us via support@growng.comany, and we will provide you with further assistance and guide you through the process. Once you choose to delete your account, you will not be able to reactivate your account or retrieve any of the content or information you have added.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>VERIFIED ACCOUNT</h3>
                <p className='pb-[20px] md:pd-[60px]'>We look at a number of factors when evaluating accounts to determine accounts that are in the public interest and meet our verification criteria.</p>
                <p className='pb-[20px] md:pd-[60px]'>Your account needs to be:</p>
                <p className='pb-[20px] md:pd-[60px]'>Authentic: Your account must represent a real person, registered business, or entity.</p>
                <p className='pb-[20px] md:pd-[60px]'>Unique: Your account must be the unique presence of the person or business it represents. Only one account per person or business may be verified. We may not verify general interest accounts.</p>
                <p className='pb-[20px] md:pd-[60px]'>Complete: Your account must be public and have a bio, you may upload a profile photo or use an avatar.  </p>
                <p className='pb-[20px] md:pd-[60px]'>Keep in mind that if you provide false or misleading information during the verification process, your account may not be verified and we may take additional action to delete your account.</p>
                <p className='pb-[20px] md:pd-[60px]'>Once you create an account, we review your sign-up request and you will receive a verification code via the phone number used for sign-up. You are required to verify your phone number to enable us fully activate your account and also so that you can receive promotional information about our Product and its services.</p>
                <p className='pb-[20px] md:pd-[60px]'>Keep in mind that Grow can deactivate and delete your account if you:</p>
                <p className='pb-[20px] md:pd-[60px]'>Advertise, transfer or sell your account.</p>
                <p className='pb-[20px] md:pd-[60px]'>Use your profile picture, bio, or name section to promote other services without prior permission from Grow.</p>
                <p className='pb-[20px] md:pd-[60px]'>Attempt to verify your account through a third party. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>YOUR ACCESS TO AND USE OF OUR SERVICES</h3>
                <p className='pb-[20px] md:pd-[60px]'>Your access to and use of our Site is subject to these Terms and all applicable laws and regulations. You may not: </p>
                <ul className='list-disc pl-10'>
                    <li className='pb-[20px] md:pd-[60px]'>Carry out any activity during the access or use of our Site which is unlawful, misleading, discriminatory, or fraudulent in any way;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Make unauthorized copies, modify, adapt, translate, reverse engineer, disassemble, decompile or create any derivative works of our Site or any content included therein, including any files, tables, or documentation (or any portion thereof) or determine or attempt to determine any source code, algorithms, methods or techniques embodied by the Site or any derivative works thereof;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Distribute, license, transfer, or sell, in whole or in part, any of our Site or any derivative works thereof;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Market, rent, or lease your account for free or a charge;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Use our Site without our express written consent, for any commercial or unauthorized purpose, including communicating or facilitating any commercial advertisement or solicitation or spamming except to the extent stated in these Terms;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Interfere with or attempt to interfere with the proper working of our Site, disrupt our Site or any networks connected to our mobile application, or bypass any measures we may use to prevent or restrict access to our Site;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Incorporate our Site or any portion thereof into any other program or product. In such case, we reserve the right to refuse service, terminate accounts, or limit access to the Site at our sole discretion;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Use automated scripts to collect information from or otherwise interact with our Site;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Impersonate any person or entity, or falsely state or otherwise misrepresent yourself or affiliations with any person or entity, including giving the impression that any content you post, transmit, distribute or otherwise make available on any other platform emanated from our Site; </li>
                    <li className='pb-[20px] md:pd-[60px]'>Use or attempt to use another’s account, service, or system without authorization from Grow, or create a false identity on our Site;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Use our Site in a manner that may create a conflict of interest or undermine the purposes of the services offered on the Site; </li>
                </ul>
                <p className='pb-[20px] md:pd-[60px]'>We reserve the right, at any time and without prior notice, to deactivate or delete any account at our discretion. Some of the reasons we may deactivate or delete an account may include finding the account harmful to our Site or our users if reported and/or flagged by us or the users as objectionable and harmful. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>FEES AND PAYMENT</h3>
                <p className='pb-[20px] md:pd-[60px]'>This Site is currently available for free for any personal, commercial and non-commercial use. In accordance with the terms contained herein, Grow reserves the right to edit the Site, take it down or begin charging for the use of the Site for its services at any time without notice and for any reason.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>CHARGING OF FEES</h3>
                <p className='pb-[20px] md:pd-[60px]'>We reserve the right, at any time, to begin charging fees for any hitherto free service provided on our mobile or web platform. We also reserve the right to charge fees for new features on our mobile and web platform without offering such features for free when added to our mobile and web platform.   </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>COPYRIGHT AND INTELLECTUAL PROPERTY RIGHTS</h3>
                <p className='pb-[20px] md:pd-[60px]'>All legal rights, titles, interests, and intellectual property on the Site, (irrespective of whether those rights are registered or not), belong to Grow. The curated contents in the Knowledge Hub of our Site are owned by Grow exclusively. By using our Site, you agree not to violate or infringe any of our Intellectual Property parts.</p>
                <p className='pb-[20px] md:pd-[60px]'>The software running the Site, the Site design, the logo, and other graphics, articles, and other texts as well as the database are the property of Grow and protected by Nigeria's Intellectual Property laws.</p>
                <p className='pb-[20px] md:pd-[60px]'>All information published on this Site is subject to the Nigeria Intellectual Property Laws. Any use not permitted by these Laws requires the prior written consent of Grow. This applies specifically to the reproduction, storage, dissemination, adaptation, or translation of the content on the Site in other databases, systems, Sites, and electronic media platforms.</p>
                <p className='pb-[20px] md:pd-[60px]'>The unauthorized reproduction, download, or distribution of the content on our Site for private, personal, commercial, non-commercial, or public use is not permitted and will be subject to the requisite legal action.</p>
                <p className='pb-[20px] md:pd-[60px]'>Display of our Site in external frames is only allowed and subject to prior written permission from Grow. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>PRE-ACTION NOTICE AND TAKEDOWN</h3>
                <p className='pb-[20px] md:pd-[60px]'>If a user feels that any content or information provided on the Site infringes on his/her rights, such user shall notify Grow before taking any further action, legal or otherwise. Such notification can be done via an e-mail to info@growng.company</p>
                <p className='pb-[20px] md:pd-[60px]'>Grow will respond to such notification within 14 working days.</p>
                <p className='pb-[20px] md:pd-[60px]'>Subject to the notification, Grow will check the objectionable information and will, where confirmed, take down this information subject to our notice and takedown process.</p>
                <p className='pb-[20px] md:pd-[60px]'>The aggrieved user shall not take any further action, legal or otherwise, before Grow has dismissed the notification, taken down the content or information, or 14 working days have elapsed without a response.</p>
                <p className='pb-[20px] md:pd-[60px]'>Grow shall not be liable for any cost incurred by the aggrieved user except where Grow has caused the infringement recklessly and intentionally. Such costs shall include legal costs.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>CHANGES TO OUR WEBSITE</h3>
                <p className='pb-[20px] md:pd-[60px]'>We reserve the right to make changes to our Site and services without notice or liability. We have the right to terminate a user’s account, or other affiliation with the web service at any time should we identify that the user’s account is associated with behaviour that we deem to be in violation of our rules or guidelines. Grow is not liable for any damages as a result of any of these actions, and it is our policy not to comment on the reasons for any such action.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>LINKS TO OTHER WEBSITES</h3>
                <p className='pb-[20px] md:pd-[60px]'>Our Services may contain links to third-party websites or services that are not owned or controlled by us. Grow has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Grow shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>TERMINATION AND RESERVATION OF RIGHTS</h3>
                <p className='pb-[20px] md:pd-[60px]'>You may cancel your website account at any time by contacting us at support@growng.company. We reserve the right to terminate access to our website to any person, at any time, for any reason. If you violate any of the Terms contained herein, your account on the website will be automatically terminated.</p>
                <p className='pb-[20px] md:pd-[60px]'>We reserve the right to change, suspend, or discontinue any of the services on our Site at any time, for any reason. We shall not be liable for the effect that any change may have on you, including your income or ability to generate revenue through any terminated services. All provisions of the Terms which by their nature should survive termination including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability, shall survive termination.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>INDEMNITY</h3>
                <p className='pb-[20px] md:pd-[60px]'>You agree to defend, indemnify, and hold Grow, its affiliates, and each of their respective officers, directors, employees, agents, and advisors harmless from any and all claims, liabilities, costs, and expenses, including, but not limited to, attorneys’ fees and expenses, arising out of a breach of these Terms by you or any user with your account or arising out of a breach of your obligations, representation, and warranties under these Terms.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>DISCLAIMER OF WARRANTIES</h3>
                <p className='pb-[20px] md:pd-[60px]'>The service and all materials included on our Site are provided on an “AS IS” and “AS AVAILABLE” basis without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability or fitness for a particular purpose, or the warranty of non-infringement. We assume no responsibility for the timeliness to update, deletion of, or misdelivery of any information, and failure to store any user communications or personalization settings.</p>
                <p className='pb-[20px] md:pd-[60px]'>Without limiting the foregoing, we make no warranty that:</p>
                <p className='pb-[20px] md:pd-[60px]'>(a) The services and materials on the Site will meet your requirements; </p>
                <p className='pb-[20px] md:pd-[60px]'>(b) The service and materials will be uninterrupted, timely, secure, or error-free; </p>
                <p className='pb-[20px] md:pd-[60px]'>Our Site may include technical or other mistakes, inaccuracies, or typographical errors. We may make changes to any of the content or features included on our Site, including the prices and access rules for any functionality, at any time without notice. The content included in the service may be out of date, and we make no commitment to update such content.</p>
                <p className='pb-[20px] md:pd-[60px]'>The use and other acquisition of any materials through our Site are done at your own discretion and risk and with your agreement that you will be solely responsible for any damage or loss of data that results from such activities.</p>
                <p className='pb-[20px] md:pd-[60px]'>You understand and agree that temporary interruptions of our Site may occur as normal events.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>LIMITATION OF LIABILITY</h3>
                <p className='pb-[20px] md:pd-[60px]'>Nothing in these terms shall exclude or limit Grow’s liability for losses that may not be lawfully excluded or limited by applicable law. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents, or subcontractors and for fraud or fraudulent misrepresentation.</p>
                <p className='pb-[20px] md:pd-[60px]'>Subject to the paragraph above, we shall not be liable to you for:</p>
                <p className='pb-[20px] md:pd-[60px]'>(i) Any loss of profit (whether incurred directly or indirectly);</p>
                <p className='pb-[20px] md:pd-[60px]'>(ii) Any loss of goodwill; </p>
                <p className='pb-[20px] md:pd-[60px]'>(iii) Any loss of opportunity; </p>
                <p className='pb-[20px] md:pd-[60px]'>(iv) Any loss of data suffered by you; or</p>
                <p className='pb-[20px] md:pd-[60px]'>(v) Any indirect or consequential losses which may be incurred by you.</p>
                <p className='pb-[20px] md:pd-[60px]'>Any loss or damage which may be incurred by you as a result of: </p>
                <p className='pb-[20px] md:pd-[60px]'>(i) Any changes which we may make to our Site, or for any permanent or temporary cessation in the provision of the services (or any features within the services);</p>
                <p className='pb-[20px] md:pd-[60px]'>(ii) The deletion of, corruption of, or failure to store, any content and other communications data maintained or transmitted by or through your use of our Site;</p>
                <p className='pb-[20px] md:pd-[60px]'>(iii) Any action or conduct of another user;</p>
                <p className='pb-[20px] md:pd-[60px]'>(iv) Your failure to provide us with accurate account information or your failure to keep your password or account details secure and confidential.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>PRIVACY POLICY</h3>
                <p className='pb-[20px] md:pd-[60px]'>We are committed to protecting your privacy. All the personal data gathered on our Site is used to identify users of our platforms. The information will not be used for anything other than what is stated in the Terms & Conditions of use of our Site. You can read our Privacy Policy to understand how we use your information and the steps we take to protect your information. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>COOKIE/TRACKING TECHNOLOGY</h3>
                <p className='pb-[20px] md:pd-[60px]'>Our website may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for information such as browser type and operating system, tracking the number of visitors to our Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology. However, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>FORCE MAJEURE</h3>
                <p className='pb-[20px] md:pd-[60px]'>Under no circumstances shall Grow be liable for any delay or failure in the performance of its obligations in its Terms of Use or Privacy policy due in whole or in part to any acts of God (such as earthquakes, storms, floods, etc.), unavoidable accidents, laws, rules, regulations, or orders of government authorities, acts of war (declared or not), terrorism, hostilities, blockades, civil disturbances, embargoes, strikes, or any other event or cause beyond the reasonable control of Grow.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>APPLICABLE LAW</h3>
                <p className='pb-[20px] md:pd-[60px]'>Our Terms of Use and Privacy policy shall be exclusively governed by and construed in accordance with the laws of Lagos State of the Federal Republic of Nigeria whose Courts will have exclusive jurisdiction in any dispute arising out of our Terms of Use and Privacy Policy, save that we have the right, at our sole discretion, to commence and pursue proceedings in alternative jurisdictions.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>LEGAL DISPUTE</h3>
                <p className='pb-[20px] md:pd-[60px]'>Parties shall in good faith attempt to settle any dispute arising out of our Terms of Use and Privacy policy amicably by mutual agreement or negotiation within three months from when the dispute arose, after which any of the parties may refer the dispute to a court of competent jurisdiction under the Applicable Law for resolution.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>SEVERABILITY</h3>
                <p className='pb-[20px] md:pd-[60px]'>If any provision of our Terms of Use or Privacy Policy is found to be invalid or unenforceable, that provision will be deemed appropriately modified to give effect to the intent of the provision or, if modification is not possible, will be severed from these Terms and will not affect the enforceability of any other provision.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>NO WAIVER OR AMENDMENT</h3>
                <p className='pb-[20px] md:pd-[60px]'>Failure by Grow to enforce any right or provision contained in the Terms of Use or Privacy policy will not prevent Grow from enforcing such right or provision in the future and will not be deemed as a waiver or modification of these Terms.</p>
            </div>
            <header className='pb-[25px] md:pb-[60px] pt-[45px] md:pt-[75px]'>
                <h4 className='font-semibold text-[20px] md:text-[25px]'>Terms of Service (App)</h4>
            </header>
            <header className='pb-[25px] md:pb-[60px]'>
                <p className='pb-[20px] md:pd-[60px]'>Last Updated and Effective ……</p>
                <p className='pb-[20px] md:pd-[60px]'>These Terms of Service is an agreement between you and Grow Intelligence and Technologies Ltd, doing business as Grow (hereinafter referred to as “we”, “us”, or “Grow”). “You” refers to you as a user of our App. These Terms apply to users of our App and governs the use of our App. </p>
            </header>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>ABOUT US</h3>
                <p className='pb-[20px] md:pd-[60px]'>Grow is a platform that provides on-demand access to educational extension services for crop farmers, and productivity tools to plan, record, and evaluate their operations. The Product includes without limitation to the Grow mobile app, www.growng.company (the “Site”) and any other websites, mobile applications, and other interactive properties through which our Services are delivered. Collectively, these Services are owned, operated, and distributed by Grow Intelligence and Technologies Ltd.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>BINDING EFFECT</h3>
                <p className='pb-[20px] md:pd-[60px]'>These Terms form a legally binding agreement between you and Grow, so we advise that you take the time to read them carefully. By using our App, you confirm that you can enter a binding contract with Grow, and you accept and will comply with these Terms. By using our App or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by our Terms of Service and Privacy Policy. We will treat your use of our App as acceptance of the Terms from that point onwards. If you do not agree, do not use our App. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>ACCEPTING THE TERMS</h3>
                <p className='pb-[20px] md:pd-[60px]'>The Terms form a legally binding agreement between you and us, so we advise that you take the time to read them carefully. By accessing or using our mobile application, you confirm that you can enter a binding contract with Grow, and you accept and will comply with these Terms. By using our Mobile Application or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by by our Terms of Service and Privacy Policy.. We will treat the use of our Mobile Application as acceptance of the Terms from that point onwards. If you do not agree, do not use our Mobile Application. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>CHANGES TO THE TERMS</h3>
                <p className='pb-[20px] md:pd-[60px]'>We may amend these Terms from time to time. For instance when we update/upgrade our App or when there are regulatory changes. We will use commercially reasonable efforts to generally notify all users of any material changes to these Terms, such as through an e-mail. However, you should look at the Terms regularly to check for such changes.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>YOUR ACCOUNT WITH US</h3>
                <p className='pb-[20px] md:pd-[60px]'>To access or use our Mobile Application, you must create an account with us. When you create this account, or the Grow team helps you create the account, you agree to provide accurate and up-to-date information. It is important that you maintain and promptly update your details and any other information you provide to us, to keep such information current and complete.</p>
                <p className='pb-[20px] md:pd-[60px]'>It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must promptly notify us at support@growng.company</p>
                <p className='pb-[20px] md:pd-[60px]'>You agree that you are solely responsible (to us and to others) for activities that occur under your account. When creating an account, you must provide accurate information about yourself and create only one account strictly for personal purposes.</p>
                <p className='pb-[20px] md:pd-[60px]'>We take the protection of your privacy very seriously, and hence we accord all information related to your account with high standards of data protection and security measures. If you no longer want to use the Mobile Application and would like your account deleted, we can take care of this for you. Please contact us via support@growng.comany, and we will provide you with further assistance and guide you through the process. Once you choose to delete your account, you will not be able to reactivate your account or retrieve any of the content or information you have added.</p>
                <p className='pb-[20px] md:pd-[60px]'>You represent and warrant that you will use the Mobile Application in a manner consistent with and in compliance with any and all applicable laws and regulations. Grow reserves the right to refuse, suspend and terminate access to the use of its Mobile Application to new or existing users. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>VERIFIED ACCOUNT</h3>
                <p className='pb-[20px] md:pd-[60px]'>We look at a number of factors when evaluating accounts to determine accounts that are in the public interest and meet our verification criteria.</p>
                <p className='pb-[20px] md:pd-[60px]'>Your account needs to be:</p>
                <p className='pb-[20px] md:pd-[60px]'>Authentic: Your account must represent a real person, registered business, or entity.</p>
                <p className='pb-[20px] md:pd-[60px]'>Unique: Your account must be the unique presence of the person or business it represents. Only one account per person or business may be verified. We may not verify general interest accounts.  </p>
                <p className='pb-[20px] md:pd-[60px]'>Complete: Your account must be public and have a bio, you may upload a profile photo or use an avatar. </p>
                <p className='pb-[20px] md:pd-[60px]'>Keep in mind that if you provide false or misleading information during the verification process, your account may not be verified and we may take additional action to delete your account.</p>
                <p className='pb-[20px] md:pd-[60px]'>Once you create an account, we review your sign-up request and you will receive a verification code via the phone number used for sign-up. You are required to verify your phone number to enable us fully activate your account and also so that you can receive promotional information about the mobile application.</p>
                <p className='pb-[20px] md:pd-[60px]'>Keep in mind that Grow can deactivate and delete your account if you:</p>
                <p className='pb-[20px] md:pd-[60px]'>Advertise, transfer or sell your account.</p>
                <p className='pb-[20px] md:pd-[60px]'>Use your profile picture, bio, or name section to promote other services without prior written permission from Grow.</p>
                <p className='pb-[20px] md:pd-[60px]'>Attempt to verify your account through a third party.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>YOUR ACCESS TO AND USE OF OUR SERVICES</h3>
                <p className='pb-[20px] md:pd-[60px]'>Your use of our Mobile Application is subject to these Terms and all applicable laws and regulations. You may not: </p>
                <ul>
                    <li className='pb-[20px] md:pd-[60px]'>Carry out any activity during the use of our Mobile Application which is unlawful, misleading, discriminatory, or fraudulent in any way;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Make unauthorized copies modify, adapt, translate, reverse engineer, disassemble, decompile or create any derivative works of our Mobile Application or any content included therein, including any files, tables, or documentation (or any portion thereof) or determine or attempt to determine any source code, algorithms, methods or techniques embodied by the Mobile Application or any derivative works thereof;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Distribute, license, transfer, or sell, in whole or in part, any of our Mobile Applications or any derivative works thereof;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Market, rent, or lease your account for free or a charge;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Use our Mobile Application without our express written consent, for any commercial or unauthorized purpose, including communicating or facilitating any commercial advertisement or solicitation or spamming except to the extent stated in these Terms;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Interfere with or attempt to interfere with the proper working of our Mobile Application, disrupt our Mobile Application or any networks connected to our Mobile Application, or bypass any measures we may use to prevent or restrict the use of our Mobile Application;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Incorporate our Mobile Application or any portion thereof into any other program or product. In such case, we reserve the right to refuse service, terminate accounts, or limit access to the Mobile Application at our sole discretion;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Use automated scripts to collect information from or otherwise interact with our Mobile Application;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Impersonate any person or entity, or falsely state or otherwise misrepresent yourself or affiliations with any person or entity, including giving the impression that any content you post, transmit, distribute or otherwise make available on any other platform emanated from our Mobile Application; </li>
                    <li className='pb-[20px] md:pd-[60px]'>Use or attempt to use another’s account, service, or system without authorization from Grow, or create a false identity on our Mobile Application;</li>
                    <li className='pb-[20px] md:pd-[60px]'>Use our Mobile Application in a manner that may create a conflict of interest or undermine the purposes of the services offered on the Mobile Application; </li>
                    <p className='pb-[20px] md:pd-[60px]'>We reserve the right, at any time and without prior notice, to deactivate or delete any account at our discretion. Some of the reasons we may deactivate or delete an account may include finding the account harmful to our Mobile Application or our users if reported and/or flagged by us or the users as objectionable and harmful.</p>
                    <p className='pb-[20px] md:pd-[60px]'>By registering on the application, and providing your personal data including but not limited to your name, phone number, e-mail address, or any other personal information, you provide consent to Grow, its affiliates, representatives, and its business partners, to collect, process, store, transfer and use your personal data for the purpose of managing, enhancing, maintaining, and administration of the App and to contact you for promotional information and updates about our app and the services it provides. The collection, processing, storing, transferring and usage of your personal data shall be governed in accordance with our privacy policy.  </p>
                </ul>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>FEES AND PAYMENT</h3>
                <p className='pb-[20px] md:pd-[60px]'>All features on the Mobile Application is currently available for free for any personal and commercial, and non-commercial use. In accordance with the terms contained herein, Grow reserves the right to edit the Mobile Application, take it down or begin charging for the use of the Mobile Application for its services at any time without notice and for any reason.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>CHARGING OF FEES</h3>
                <p className='pb-[20px] md:pd-[60px]'>We reserve the right, at any time, to begin charging fees for any hitherto free service provided on our Mobile Application. We also reserve the right to charge fees for new features on our Mobile Application without offering such features for free when added to the Mobile Application. </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>COPYRIGHT AND INTELLECTUAL PROPERTY RIGHTS</h3>
                <p className='pb-[20px] md:pd-[60px]'>All legal rights, titles, interests, and intellectual property on our Mobile Application, (irrespective of whether those rights are registered or not), belong to Grow. The curated content in the Knowledge Hub and the Productivity Tools of our Mobile Application are owned by Grow exclusively. By using our Mobile Application, you agree not to violate or infringe any of our Intellectual Property rights.</p>
                <p className='pb-[20px] md:pd-[60px]'>The software running the Mobile Application, the Site design, the logo, and other graphics, articles, and other texts as well as the database are the properties of Grow and protected by Nigeria's Intellectual Property laws.</p>
                <p className='pb-[20px] md:pd-[60px]'>All information published on our Mobile Application is subject to the Nigeria Intellectual Property Laws. Any use not permitted by these Laws requires the prior written consent of Grow. This applies specifically to the reproduction, storage, dissemination, adaptation, or translation of the content, features, and software on the Mobile Application in other databases, systems, Sites, mobile applications, and electronic media platforms.</p>
                <p className='pb-[20px] md:pd-[60px]'>The unauthorized reproduction, download, or distribution of the content on our Mobile Application for private, personal, commercial, non-commercial, or public use is not permitted and will attract legal action from Grow.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>PRE-ACTION NOTICE AND TAKEDOWN</h3>
                <p className='pb-[20px] md:pd-[60px]'>If a user feels that any content or information provided on the Application infringes on his/her rights, such user shall notify Grow before taking any further action, legal or otherwise. Such notification can be done via an e-mail to info@growng.company</p>
                <p className='pb-[20px] md:pd-[60px]'>Grow will respond to such notification within 14 working days.</p>
                <p className='pb-[20px] md:pd-[60px]'>Subject to the notification, Grow will check the objectionable information and will, where confirmed, take down this information subject to our notice and takedown process.</p>
                <p className='pb-[20px] md:pd-[60px]'>The aggrieved user shall not take any further action, legal or otherwise, before Grow has dismissed the notification, taken down the content or information, or 14 working days have elapsed without a response.</p>
                <p className='pb-[20px] md:pd-[60px]'>Grow shall not be liable for any cost incurred by the aggrieved user except where Grow has caused the infringement recklessly and intentionally. Such costs shall include legal costs.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>CHANGES TO OUR MOBILE APPLICATION</h3>
                <p className='pb-[20px] md:pd-[60px]'>We reserve the right to make changes to our Application and its features without notice or liability. We have the right to terminate a user’s account, or other affiliation with the Application at any time should we identify that the user’s account is associated with behaviour that we deem to be in violation of our rules or guidelines. Grow is not liable for any damages as a result of any of these actions, and it is our policy not to comment on the reasons for any such action.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>LINKS TO OTHER WEBSITES</h3>
                <p className='pb-[20px] md:pd-[60px]'>Our Services may contain links to third-party websites or services that are not owned or controlled by us. Grow has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Grow shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>TERMINATION AND RESERVATION OF RIGHTS</h3>
                <p className='pb-[20px] md:pd-[60px]'>You may cancel your account on the Application at any time by contacting us at support@growng.company. We reserve the right to terminate access to our Mobile Application to any person, at any time, for any reason. If you violate any of the Terms contained herein, your account on the website will be automatically terminated.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>INDEMNITY</h3>
                <p className='pb-[20px] md:pd-[60px]'>YYou agree to defend, indemnify, and hold Grow, its affiliates, and each of their respective officers, directors, employees, agents, and advisors harmless from any and all claims, liabilities, costs, and expenses, including, but not limited to, attorneys’ fees and expenses, arising out of a breach of these Terms by you or any user with your account or arising out of a breach of your obligations, representation, and warranties under these Terms.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>DISCLAIMER OF WARRANTIES</h3>
                <p className='pb-[20px] md:pd-[60px]'>The service and all materials included on our Application are provided on an “AS IS” and “AS AVAILABLE” basis without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability or fitness for a particular purpose, or the warranty of non-infringement. We assume no responsibility for the timeliness to update, deletion of, or misdelivery of any information or feature, and failure to store any user communications or personalization settings.</p>
                <p className='pb-[20px] md:pd-[60px]'>Without limiting the foregoing, we make no warranty that: </p>
                <p className='pb-[20px] md:pd-[60px]'>(a) The service and materials on the App will meet your requirements; </p>
                <p className='pb-[20px] md:pd-[60px]'>(b) The service and materials will be uninterrupted, timely, secure, or error-free; </p>
                <p className='pb-[20px] md:pd-[60px]'>Our Application may include technical or other mistakes, inaccuracies, or typographical errors. We may make changes to any of the content or features included in our Application, including the prices and access rules for any functionality, at any time without notice. The content and feature included in the service may be out of date, and we make no commitment to update such content and feature.</p>
                <p className='pb-[20px] md:pd-[60px]'>The use of our Application orand other acquisition of any materials through our serviceson our App is done at your own discretion and risk and with your agreement that you will be solely responsible for any damage or loss of data that results from such activities.</p>
                <p className='pb-[20px] md:pd-[60px]'>You understand and agree that temporary interruptions of our Mobile Application may occur as normal events.  </p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>LIMITATION OF LIABILITY</h3>
                <p className='pb-[20px] md:pd-[60px]'>Nothing in these terms shall exclude or limit Grow’s liability for losses that may not be lawfully excluded or limited by applicable law. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents, or subcontractors and for fraud or fraudulent misrepresentation.</p>
                <p className='pb-[20px] md:pd-[60px]'>Subject to the paragraph above, we shall not be liable to you for:</p>
                <p className='pb-[20px] md:pd-[60px]'>(i) Any loss of profit (whether incurred directly or indirectly);</p>
                <p className='pb-[20px] md:pd-[60px]'>(ii) Any loss of goodwill; </p>
                <p className='pb-[20px] md:pd-[60px]'>(iii) Any loss of opportunity; </p>
                <p className='pb-[20px] md:pd-[60px]'>(iv) Any loss of data suffered by you; or </p>
                <p className='pb-[20px] md:pd-[60px]'>(v) Any indirect or consequential losses which may be incurred by you.</p>
                <p className='pb-[20px] md:pd-[60px]'>Any loss or damage which may be incurred by you as a result of: </p>
                <p className='pb-[20px] md:pd-[60px]'>(i) Any changes which we may make to our Mobile Application, or for any permanent or temporary cessation in the provision of the services (or any features within the services);</p>
                <p className='pb-[20px] md:pd-[60px]'>(ii) The deletion of, corruption of, or failure to store, any content and other communications data maintained or transmitted by or through your use of our Mobile Application;</p>
                <p className='pb-[20px] md:pd-[60px]'>(iii) Any action or conduct of another user;</p>
                <p className='pb-[20px] md:pd-[60px]'>(iv) Your failure to provide us with accurate account information or your failure to keep your password or account details secure and confidential.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>PRIVACY POLICY</h3>
                <p className='pb-[20px] md:pd-[60px]'>We are committed to protecting your privacy. All the personal data gathered on our App is used to identify our users. The information will not be used for anything other than what is stated in the Terms & Conditions of use of our App. You can read our Privacy Policy to understand how we use your information and the steps we take to protect your information.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>FORCE MAJEURE</h3>
                <p className='pb-[20px] md:pd-[60px]'>Under no circumstances shall Grow be liable for any delay or failure in the performance of its obligations in its Terms of Use or Privacy policy due in whole or in part to any acts of God (such as earthquakes, storms, floods, etc.), unavoidable accidents, laws, rules, regulations, or orders of government authorities, acts of war (declared or not), terrorism, hostilities, blockades, civil disturbances, embargoes, strikes, or any other event or cause beyond the reasonable control of Grow.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>APPLICABLE LAW</h3>
                <p className='pb-[20px] md:pd-[60px]'>Our Terms of Use and Privacy policy shall be exclusively governed by and construed in accordance with the laws of Lagos State of the Federal Republic of Nigeria whose Courts will have exclusive jurisdiction in any dispute arising out of our Terms of Use and Privacy Policy, save that we have the right, at our sole discretion, to commence and pursue proceedings in alternative jurisdictions.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>LEGAL DISPUTE</h3>
                <p className='pb-[20px] md:pd-[60px]'>Parties shall in good faith attempt to settle any dispute arising out of our Terms of Use or Privacy policy amicably by mutual agreement or negotiation within three months from when the dispute arose, after which any of the parties may refer the dispute to a court of competent jurisdiction under the Applicable Law for resolution.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>SEVERABILITY</h3>
                <p className='pb-[20px] md:pd-[60px]'>If any provision of our Terms of Use or Privacy Policy is found to be invalid or unenforceable, that provision will be deemed appropriately modified to give effect to the intent of the provision or, if modification is not possible, will be severed from these Terms and will not affect the enforceability of any other provision.</p>
            </div>
            <div className='py-[10px]'>
                <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>NO WAIVER OR AMENDMENT</h3>
                <p className='pb-[20px] md:pd-[60px]'>Failure by Grow to enforce any right or provision contained in the Terms of Use or Privacy policy will not prevent Grow from enforcing such right or provision in the future and will not be deemed as a waiver or modification of these Terms.</p>
            </div>
        </section>
    )
}

export default TermsAndConditions
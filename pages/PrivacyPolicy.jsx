import React from 'react'
import styles from '@/styles/style';
import { motion } from "framer-motion";


const PrivacyPolicy = () => {

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
        <h1 className='font-extrabold font-MTS text-[45px]'>Privacy Policy</h1>
      </motion.header>

      <header className='pb-[25px] md:pb-[60px]'>
        <h4 className='font-semibold text-[20px] md:text-[25px]'>Privacy Policy (Website)</h4>
      </header>
      <header className='pb-[25px] md:pb-[60px]'>
        <p className='pb-[20px] md:pd-[60px]'>Last Updated and Effective</p>
        <p className='pb-[20px] md:pd-[60px]'>This Privacy Policy is an agreement between you and Grow Intelligence and Technologies Ltd, doing business as Grow (hereinafter referred to as “we”, “us”, or “Grow”). “You” refers to you as a user of our Site. This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your Personal Data when you visit and use our Site and tells you about your privacy rights and how the law protects you. We use your Personal Data to provide custom services on and improve our Site. By using our Site, you agree to the collection and use of your Personal Data in accordance with this Privacy Policy.</p>
      </header>

      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>ABOUT US</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow is a platform that provides on-demand access to educational extension services for crop farmers, and productivity tools to plan, record, and evaluate their operations. The Product includes without limitation to the Grow mobile app, www.growng.company (the “Site”) and any other websites, mobile applications, and other interactive properties through which our Services are delivered. Collectively, these Services are owned, operated, and distributed by Grow Intelligence and Technologies Ltd. </p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>BINDING EFFECT</h3>
        <p className='pb-[20px] md:pd-[60px]'>This Policy forms a legally binding agreement between you and Grow, so we advise that you take the time to read them carefully. By visiting our Site or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by our Terms of Service and Privacy Policy. We will treat your visit to our Site as acceptance of our Privacy Policy from that point onwards. If you do not agree, do not access or use our Site.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Scope of our Privacy Policy</h3>
        <p className='pb-[20px] md:pd-[60px]'>This Privacy Policy applies to all aspects of our Website and any information we may collect while you visit and use the Site.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Information Collected While Visiting and Using Our Website</h3>
        <p className='pb-[20px] md:pd-[60px]'>While visiting Our Site and in order to access the Knowledge Hub feature on the Site, we may collect, with Your prior permission:</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Personal Data</h5>
        <p className='pb-[20px] md:pd-[60px]'>When you sign up to use our Site, we will ask you to provide your Personal Data. We may collect, use, store and transfer different kinds of personal data about you. These Personal Data may include, but are not limited to the following:</p>
        <p className='pb-[20px] md:pd-[60px]'>First name and last name;</p>
        <p className='pb-[20px] md:pd-[60px]'>Email;</p>
        <p className='pb-[20px] md:pd-[60px]'>Phone number;</p>
        <p className='pb-[20px] md:pd-[60px]'>Residential Address, City, and State.</p>
        <p className='pb-[20px] md:pd-[60px]'>Farm location.  </p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Information we may automatically collect when you use or visit our Website</h5>
        <p className='pb-[20px] md:pd-[60px]'>Some Personal Data may be automatically collected when you use our Site. They include but are not limited to: </p>
        <p className='pb-[20px] md:pd-[60px]'>Device identifiers.</p>
        <p className='pb-[20px] md:pd-[60px]'>Date of user account creation.</p>
        <p className='pb-[20px] md:pd-[60px]'>Date and time of the request</p>
        <p className='pb-[20px] md:pd-[60px]'>Content of the request i.e. the URL of the page</p>
        <p className='pb-[20px] md:pd-[60px]'>Page view statistics.</p>
        <p className='pb-[20px] md:pd-[60px]'>Cookies and other tracking technologies (e.g. web beacons, pixel tags, SDKs, etc.). For more information, please review this Information About Cookies. </p>
        <p className='pb-[20px] md:pd-[60px]'>Location information (e.g. IP address).</p>
        <p className='pb-[20px] md:pd-[60px]'>Log data (e.g. access times, hardware and software information).</p>
        <p className='pb-[20px] md:pd-[60px]'>Usage Data - Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Platform that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        <p className='pb-[20px] md:pd-[60px]'>Other diagnostic data.</p>
        <p className='pb-[20px] md:pd-[60px]'>The legal basis for the collection of these above-mentioned data is to be able to carry out our service to users and the legitimate necessity of keeping the Website and the underlying system secure and improving the usability and performance of our Site. Under no circumstances do we use the data collected to invade your privacy.</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>These data will be used for the following purposes:</h5>
        <p className='pb-[20px] md:pd-[60px]'>Evaluation of system security and stability</p>
        <p className='pb-[20px] md:pd-[60px]'>Provision and management of the Website</p>
        <p className='pb-[20px] md:pd-[60px]'>Compilation of usage statistics to improve the Site.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How do we collect your data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>You directly provide Grow with most of the data we collect. We collect data and process data when you:</p>
        <p className='pb-[20px] md:pd-[60px]'>Create an account.</p>
        <p className='pb-[20px] md:pd-[60px]'>Voluntarily complete a customer survey, join our mailing list or provide feedback on any of our message boards or via email.</p>
        <p className='pb-[20px] md:pd-[60px]'>Use or view our website via your browser's cookies.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How will we use your data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow collects your data to:</p>
        <p className='pb-[20px] md:pd-[60px]'>Create and manage your account. The Personal Data you provide will allow us to manage your registration as a user of the Knowledge Hub on our Site. </p>
        <p className='pb-[20px] md:pd-[60px]'>Contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as our mobile application's push notifications regarding updates or informative communications related to functionalities, or contracted services, including security updates, when necessary or reasonable for their implementation. When you contact us, we will store and process your e-mail address, and if you provide it, your name and phone number in order to respond to your message. We will restrict the processing of data arising from contacting us after processing is no longer necessary. Your message and our response will also be stored on our server for reference and will be kept in strict confidence.</p>
        <p className='pb-[20px] md:pd-[60px]'>Provide you with news, special offers, announcements, relevant features, and updates on our Sites and the services it offers unless you have opted not to receive such information.</p>
        <p className='pb-[20px] md:pd-[60px]'>Provide support and assistance for our Site.</p>
        <p className='pb-[20px] md:pd-[60px]'>Respond to and fulfill user inquiries and requests.</p>
        <p className='pb-[20px] md:pd-[60px]'>Resolve disputes.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect against or deter fraudulent, illegal, or harmful actions.</p>
        <p className='pb-[20px] md:pd-[60px]'>Enforce our Terms of Service.</p>
        <p className='pb-[20px] md:pd-[60px]'>Evaluate or conduct, if the need arises, a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by us about our Site’s users are among the assets to be transferred.</p>
        <p className='pb-[20px] md:pd-[60px]'>The 3rd party service providers we use may have access to your Personal Data. They may collect, store, use, process, and transfer information about your activity on our Site in accordance with their Privacy Policies.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving our Site, marketing, and your experience. We may use third-party service providers to monitor and analyze the use of our Website.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How and With Whom Do We Share Your Data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>We share Personal Data with third-party service providers who work on our behalf and provide us with services related to the purposes described in this Privacy Policy or our Terms of Service. These  3rd parties include:</p>
        <p className='pb-[20px] md:pd-[60px]'>Analytics service providers.</p>
        <p className='pb-[20px] md:pd-[60px]'>Engineering and development tools providers.</p>
        <p className='pb-[20px] md:pd-[60px]'>Staff augmentation and contract personnel.</p>
        <p className='pb-[20px] md:pd-[60px]'>Hosting service providers.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may share your Personal Data with 3rd party service providers to monitor and analyze the use of our Site or to contact you.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may share your Personal Data with our affiliates, in which case, we will require those affiliates to honor this Privacy Policy. Affiliates include any subsidiary, joint venture partners, or other companies that we control or that are under common control with us.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may share your Personal Data with our business partners to offer you certain services or promotions.</p>
        <p className='pb-[20px] md:pd-[60px]'>When you share your Personal Data or otherwise interact in public areas with other users, and such information may be viewed by all users and may be publicly distributed outside, such Data is no longer protected under our Privacy Policy.</p>
        <p className='pb-[20px] md:pd-[60px]'>Personal Data when deemed necessary as requested and authorized by you to provide you with a Service/functionality/feature on the Site in addition to the Knowledge Hub.</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>We also share Personal Data when we believe it is necessary to: </h5>
        <p className='pb-[20px] md:pd-[60px]'>Comply with applicable law or respond to valid legal processes, including from law enforcement or other government agencies;</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect us, our business, or other users. For example, to enforce our terms of service, prevent spam or other unwanted communications and investigate or protect against fraud.</p>
        <p className='pb-[20px] md:pd-[60px]'>Maintain the security of our Site.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Transfer of Your Personal Data</h3>
        <p className='pb-[20px] md:pd-[60px]'>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the 3rd party service providers involved in the processing are located. It means that this information may be transferred to and maintained on computers located outside of your local government, state, region, country, or other governmental jurisdiction where the data protection laws may differ from that of your jurisdiction.</p>
        <p className='pb-[20px] md:pd-[60px]'>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <p className='pb-[20px] md:pd-[60px]'>The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How will we store your data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow securely stores your data. We will retain your information for as long as our Site is active or as necessary to comply with our legal obligations, resolve issues and address queries.</p>
        <p className='pb-[20px] md:pd-[60px]'>If you no longer wish to use our Site, you may request that your account be deactivated and data be deleted by contacting support@growng.company</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Information Stored On Your Device</h3>
        <p className='pb-[20px] md:pd-[60px]'>When you visit our Website, we use software to store information on your device. The software is known as cookies and HTML 5 storage objects. Our web server supplying the website can store cookies on your device. The cookie data are then transmitted back if your device requests information from our servers so that the cookie data can be processed in order to provide the requested information. You can inspect the cookies in your browser. You can also change your browser settings to accept cookies or not. We also ask you whether you want to accept cookies or not on our Website.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>What are cookies?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Cookies are text files placed on your device to collect standard Internet log information and visitor behaviour information. When you visit our website, we may collect information from you automatically through cookies or similar technology.</p>
        <p className='pb-[20px] md:pd-[60px]'>For further information, visit http://www.allaboutcookies.org/.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How do we use cookies?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow uses cookies in a range of ways to improve your experience on our website, including: </p>
        <p className='pb-[20px] md:pd-[60px]'>Understanding how you use our website.</p>
        <p className='pb-[20px] md:pd-[60px]'>Tracking the type of information we would be fetching for you.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>What types of cookies do we use?</h3>
        <p className='pb-[20px] md:pd-[60px]'>There are a number of different types of cookies our website uses:</p>
        <p className='pb-[20px] md:pd-[60px]'>Essential Cookies: Essential Cookies are required for providing you with features or services that you have requested on our Site. For example, certain Cookies enable you to log into secure areas of our Site. Disabling these Cookies may make certain features and services unavailable. </p>
        <p className='pb-[20px] md:pd-[60px]'>Functionality Cookies: Functional cookies are used to record your choices and settings regarding our Site, maintain your preferences over time and recognize you when you return to our Site. These Cookies help us to personalize our content for you, greet you by name, and remember your preferences (for example, your most viewed section of the Site).</p>
        <p className='pb-[20px] md:pd-[60px]'>Performance/Analytical Cookies. Performance/Analytical Cookies allow us to understand how visitors use our Site such as by collecting information about the daily number of visitors to the Site, the daily activities of the users on the Site, and what geographical areas the users are from.</p>
        <p className='pb-[20px] md:pd-[60px]'>These aggregated statistics are used internally to better provide services to the public and may also be provided to others. Performance/Analytical Cookies also help us measure the performance of our advertising campaigns in order to help us improve our campaigns and the Service contents of our Website for those who engage with our advertising. For example, Google, Inc. (“Google”) uses cookies in connection with its Google Analytics services. Google’s ability to use and share information collected by Google Analytics about your visits to the Site is subject to the Google Analytics Terms of Use and the Google Privacy Policy. You have the option to opt out of Google's use of cookies by visiting the Google advertising opt-out page at https://www.google.com/privacy_ads.html or the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout/.</p>
        <p className='pb-[20px] md:pd-[60px]'>You can decide whether or not to accept Cookies. One way you can do this is through your internet browser’s settings. Most browsers have an option for turning off the Cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new Cookie in a variety of ways. You can also delete all Cookies that are already on your computer. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
        <p className='pb-[20px] md:pd-[60px]'>To explore what Cookie settings are available to you, look in the “preferences” or “options” section of your browser’s menu. To find out more information about Cookies, including information about how to manage and delete Cookies, please visit https://ico.org.uk/for-the-public/online/cookies/ or http://www.allaboutcookies.org/.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Marketing</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow would like to send you information that you may need about our Site.</p>
        <p className='pb-[20px] md:pd-[60px]'>If you have agreed to receive marketing information, you can always opt-out at a later date.</p>
        <p className='pb-[20px] md:pd-[60px]'>You have the right at any time to stop Grow from contacting you for marketing purposes.</p>
        <p className='pb-[20px] md:pd-[60px]'>If you no longer wish to be contacted for marketing purposes, please contact us at support@growng.company.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Third-Party Advertising</h3>
        <p className='pb-[20px] md:pd-[60px]'>We use third-party providers, including Facebook and Google AdWords, Twitter, to advertise our Service across the internet. These providers may use cookies, web beacons, and other storage technologies to collect or receive information from our Site and elsewhere on the internet and use that information to provide measurement services and display targeted ads to you. We only work with providers who undertake not to provide advertising to persons under 18 years of age.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Other Sites</h3>
        <p className='pb-[20px] md:pd-[60px]'>Our website may contain links to other websites or services. We are not responsible for the privacy practices or the content of such websites or services, and you should review the privacy policy of each such website or service to make sure that you are comfortable with it before providing any Personal Data.  </p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Disclosure of Your Personal Data</h3>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Business Transfer</h5>
        <p className='pb-[20px] md:pd-[60px]'>In the event that we are acquired by or merged with a third-party entity, we reserve the right to transfer or assign the information we have collected from users, including without limitation Personal Data, as part of such merger, acquisition, sale, or other change of control. In the unlikely event of our bankruptcy, insolvency, reorganization, receivership, or assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors' rights generally, we may not be able to control how your Personal Data is treated, transferred, or used.</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Law enforcement</h5>
        <p className='pb-[20px] md:pd-[60px]'>Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a Court or a government agency).</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Other legal requirements</h5>
        <p className='pb-[20px] md:pd-[60px]'>The Company may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
        <p className='pb-[20px] md:pd-[60px]'>Comply with a legal obligation.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect and defend the rights or property of the Company.</p>
        <p className='pb-[20px] md:pd-[60px]'>Prevent or investigate possible wrongdoing in connection with our Site.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect the personal safety of users of our Site or the public.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect against legal liability.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Data security</h3>
        <p className='pb-[20px] md:pd-[60px]'>We have put in place appropriate security measures to prevent your Personal Data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your Personal Data to those employees, agents, contractors, and other third-party service providers who have a business with us on a need-to-know basis. They will only process your Personal Data on our instructions and they are subject to a duty of confidentiality.</p>
        <p className='pb-[20px] md:pd-[60px]'>We have put in place procedures to deal with any suspected Personal Data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
        <p className='pb-[20px] md:pd-[60px]'>What Security Measures Do We Use? We seek to protect Personal Data using appropriate technical and organizational measures based on the type of Personal Data and applicable processing activity.</p>
        <p className='pb-[20px] md:pd-[60px]'>The security of Your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Data retention</h3>
        <p className='pb-[20px] md:pd-[60px]'>How long will we use your personal data?</p>
        <p className='pb-[20px] md:pd-[60px]'>We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you Services. In some cases, we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes, or as otherwise permitted or required by applicable law, rule, or regulation. Afterwards, we retain some information in a depersonalized or aggregated form that may not in a way identify you specifically.</p>
        <p className='pb-[20px] md:pd-[60px]'>To determine the appropriate retention period for Personal Data, we consider the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>
        <p className='pb-[20px] md:pd-[60px]'>Details of retention periods for different aspects of your Personal Data can be requested from us by contacting us at support@growng.company.</p>
        <p className='pb-[20px] md:pd-[60px]'>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Site, or we are legally obligated to retain this data for a longer period</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>What are your data protection rights?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to access - You have the right to request Grow for copies of your personal data.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to rectification - You have the right to request that Grow correct any information you believe is inaccurate. You also have the right to request Grow to complete information you believe is incomplete.</p>
        {/* here */}
        <p className='pb-[20px] md:pd-[60px]'>The right to erasure - You have the right to request that Grow erase your personal data.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to restrict processing - You have the right to request that Grow restrict the processing of your personal data for a period during which your request for the erasure or rectification of your data is been assessed.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to object to processing - You have the right to object to Grow processing of your personal data for a period during which your request for the erasure or rectification of your data is been assessed.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to data portability - You have the right to request Grow to transfer the data that we have collected to another organization, or directly to you.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to withdraw consent - You have the right to withdraw your consent for data processing with effect in the future. We may ask you to give your reasons for the withdrawal of your consent. In the event of this, we will assess your reason for withdrawal and either adjust or stop the processing of your data or point out to you our overriding interest, on the basis of which we will continue our processing.</p>
        <p className='pb-[20px] md:pd-[60px]'>If you make a request, we have 30 days to respond to you. If you would like to exercise any of these rights, please contact us at our email: support@growng.company</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Changes to our Privacy Policy</h3>
        <p className='pb-[20px] md:pd-[60px]'>From time to time, Grow may revise this Privacy Policy. We may give you notice by posting the revised Privacy Policy on our Site and updating the "Last Updated and Effective" date at the top of this Privacy Policy. We may also notify you in other ways, such as through the contact information you have provided or via a pop-up notification on our Mobile Application. You are advised to review this Privacy Policy periodically for any changes. Any changes to this Privacy Policy will be effective immediately on posting the updated Privacy Policy unless otherwise stated or as required by applicable terms or law. By continuing to use our Site, you agree to the revised Privacy Policy to the fullest extent permitted by any applicable law.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How to contact us</h3>
        <p className='pb-[20px] md:pd-[60px]'>If you have any questions about this privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us</p>
        <p className='pb-[20px] md:pd-[60px]'>Email us at support@growng.company</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>N.B</h3>
        <p className='pb-[20px] md:pd-[60px]'>Please also review our Terms of Use, which also apply to the use of our Site. Terms that are defined in the Terms of Service have the same meaning in this Privacy Policy. It is also important that you read this Privacy Policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing Personal Data about you so that you are fully aware of how and why we are using your data.  </p>
      </div>

      <header className='pb-[25px] md:pb-[60px]'>
        <h4 className='font-semibold text-[20px] md:text-[25px]'>Privacy Policy (App)</h4>
      </header>
      <header className='pb-[25px] md:pb-[60px]'>
        <p className='pb-[20px] md:pd-[60px]'>Last Updated and Effective</p>
        <p className='pb-[20px] md:pd-[60px]'>This Privacy Policy is an agreement between you and Grow Intelligence and Technologies Ltd, doing business as Grow (hereinafter referred to as “we”, “us”, or “Grow”). “You” refers to you as a user of our Mobile Application (‘App’). This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your Personal Data when you use our App and tells you about your privacy rights and how the law protects you. We use your Personal Data to provide custom services and improve our App. By using our App, you agree to the collection and use of your Personal Data in accordance with this Privacy Policy. </p>
      </header>

      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>ABOUT US</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow is a platform that provides on-demand access to educational extension services for crop farmers, and productivity tools to plan, record, and evaluate their operations. The Product includes without limitation to the Grow mobile app, www.growng.company (the “Site”) and any other websites, mobile applications, and other interactive properties through which our Services are delivered. Collectively, these Services are owned, operated, and distributed by Grow Intelligence and Technologies Ltd.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>BINDING EFFECT</h3>
        <p className='pb-[20px] md:pd-[60px]'>This Policy forms a legally binding agreement between you and Grow, so we advise that you take the time to read them carefully. By using our App or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by our Terms of Service and Privacy Policy. We will treat your use of our App as acceptance of our Privacy Policy from that point onwards. If you do not agree, do not use our App.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Scope of our Privacy Policy</h3>
        <p className='pb-[20px] md:pd-[60px]'>This Privacy Policy applies to all aspects of our Mobile Application and any information we may collect while you use the Mobile Application.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Information Collected While Using Our Mobile Application</h3>
        <p className='pb-[20px] md:pd-[60px]'>In order to access all the features on our Mobile Application, we may collect, with your prior permission</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Personal Data</h3>
        <p className='pb-[20px] md:pd-[60px]'>When you sign up to use our Mobile Application, we will ask you to provide your Personal Data. We may collect, use, store and transfer different kinds of personal data about you. These Personal Data may include, but are not limited to the following:</p>
        <p className='pb-[20px] md:pd-[60px]'>First name and last name;</p>
        <p className='pb-[20px] md:pd-[60px]'>Email;</p>
        <p className='pb-[20px] md:pd-[60px]'>Phone number;</p>
        <p className='pb-[20px] md:pd-[60px]'>Residential Address, City, and State.</p>
        <p className='pb-[20px] md:pd-[60px]'>Farm location.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Log Data</h3>
        <p className='pb-[20px] md:pd-[60px]'>Whenever you use our Mobile Application, in case of an error in the app, we collect the data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when you use it, the time and date of your use of the app, and other statistics.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Cookies</h3>
        <p className='pb-[20px] md:pd-[60px]'>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. Our app does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some parts of our app.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Mobile Application Download</h3>
        <p className='pb-[20px] md:pd-[60px]'>When you download our app, the necessary information is transferred to Play store and App store, especially your username, e-mail address, and customer ID of your account with Play store and App store, the individual device identification number, and the time of download. The data processing in this context happens during the usage of your Play store and App store and within the legal framework of your relationship with your Play store and App store. We do not control this data processing and we have no access to this data. However, we may receive anonymous statistical data from the Play store and App store providers based on this personal data.  </p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How do we collect your data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>You directly provide Grow with most of the data we collect. We collect data and process data when you:</p>
        <p className='pb-[20px] md:pd-[60px]'>Create an account.</p>
        <p className='pb-[20px] md:pd-[60px]'>Voluntarily complete a customer survey, join our mailing list or provide feedback on any of our message boards or via email.</p>
        <p className='pb-[20px] md:pd-[60px]'>Use or Mobile Application.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How will we use your data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow collects your data to:</p>
        <p className='pb-[20px] md:pd-[60px]'>Create and manage your account. The Personal Data you provide will allow us to manage your registration as a user of the features on the Mobile Application. </p>
        <p className='pb-[20px] md:pd-[60px]'>Contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as our mobile application's push notifications regarding updates or informative communications related to functionalities, or contracted services, including security updates, when necessary or reasonable for their implementation. When you contact us, we will store and process your e-mail address, and if you provide it, your name and phone number in order to respond to your message. We will restrict the processing of data arising from contacting us after processing is no longer necessary. Your message and our response will also be stored on our server for reference and will be kept in strict confidence.</p>
        <p className='pb-[20px] md:pd-[60px]'>Provide you with news, special offers, announcements, relevant features, and updates on our Mobile Application and the services it offers unless you have opted not to receive such information.</p>
        <p className='pb-[20px] md:pd-[60px]'>Provide support and assistance for our Mobile Application.</p>
        <p className='pb-[20px] md:pd-[60px]'>Respond to and fulfill user inquiries and requests.</p>
        <p className='pb-[20px] md:pd-[60px]'>Resolve disputes.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect against or deter fraudulent, illegal, or harmful actions.</p>
        <p className='pb-[20px] md:pd-[60px]'>Enforce our Terms of Service.</p>
        <p className='pb-[20px] md:pd-[60px]'>Evaluate or conduct, if the need arises, a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by us about our Mobile Application users are among the assets to be transferred.</p>
        <p className='pb-[20px] md:pd-[60px]'>The 3rd party service providers we use may have access to your Personal Data. They may collect, store, use, process, and transfer information about your activity on our Mobile Application in accordance with their Privacy Policies.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving our Mobile Application, marketing, and your experience. We may use third-party service providers to monitor and analyze the use of our Mobile Application.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How and With Whom Do We Share Your Data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>We share Personal Data with third-party service providers who work on our behalf and provide us with services related to the purposes described in this Privacy Policy or our Terms of Service. These  3rd parties include:</p>
        <p className='pb-[20px] md:pd-[60px]'>Analytics service providers.</p>
        <p className='pb-[20px] md:pd-[60px]'>Engineering and development tools providers.</p>
        <p className='pb-[20px] md:pd-[60px]'>Staff augmentation and contract personnel.</p>
        <p className='pb-[20px] md:pd-[60px]'>Hosting service providers.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may share your Personal Data with 3rd party service providers to monitor and analyze the use of our Mobile Application or to contact you.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may share your Personal Data with our affiliates, in which case, we will require those affiliates to honor this Privacy Policy. Affiliates include any subsidiary, joint venture partners, or other companies that we control or that are under common control with us.</p>
        <p className='pb-[20px] md:pd-[60px]'>We may share your Personal Data with our business partners to offer you certain services or promotions.</p>
        <p className='pb-[20px] md:pd-[60px]'>When you share your Personal Data or otherwise interact in public areas with other users, and such information may be viewed by all users and may be publicly distributed outside, such Data is no longer protected under our Privacy Policy.</p>
        <p className='pb-[20px] md:pd-[60px]'>We also share Personal Data when deemed necessary as requested and authorized by you to provide you with a Service/functionality/feature on the app.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>We also share Personal Data when we believe it is necessary to: </h3>
        <p className='pb-[20px] md:pd-[60px]'>Comply with applicable law or respond to valid legal processes, including from law enforcement or other government agencies;</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect us, our business, or other users. For example, to enforce our terms of service, prevent spam or other unwanted communications and investigate or protect against fraud.</p>
        <p className='pb-[20px] md:pd-[60px]'>Maintain the security of our Mobile Application.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Transfer of Your Personal Data</h3>
        <p className='pb-[20px] md:pd-[60px]'>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the 3rd party service providers involved in the processing are located. It means that this information may be transferred to and maintained on computers located outside of your local government, state, region, country, or other governmental jurisdiction where the data protection laws may differ from that of your jurisdiction.</p>
        <p className='pb-[20px] md:pd-[60px]'>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <p className='pb-[20px] md:pd-[60px]'>The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How will we store your data?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow securely stores your data. We will retain your information for as long as our Mobile Application is active or as necessary to comply with our legal obligations, resolve issues and address queries.</p>
        <p className='pb-[20px] md:pd-[60px]'>If you no longer wish to use our Mobile Application, you may request that your account be deactivated and data be deleted by contacting support@growng.company</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Analytics</h3>
        <p className='pb-[20px] md:pd-[60px]'>For our Mobile Application, we use Google Analytics services provided by Google LLC. with this service, we are able to track the health of the app (performance and crash reports) and your usage of the app. This includes clickstreams, which tells us which functions of the App you use in which order. You can check out the privacy policy of Google Analytics to be sure of the terms. Using Google Analytics, we collect the following data:</p>
        <p className='pb-[20px] md:pd-[60px]'>Special pseudonyms ID</p>
        <p className='pb-[20px] md:pd-[60px]'>Unique Identifier</p>
        <p className='pb-[20px] md:pd-[60px]'>Clickstream</p>
        <p className='pb-[20px] md:pd-[60px]'>App performance data</p>
        <p className='pb-[20px] md:pd-[60px]'>Basic information about your device</p>
        <p className='pb-[20px] md:pd-[60px]'>IP address</p>
        <p className='pb-[20px] md:pd-[60px]'>We collect this data in order to collect anonymous statistics, fix issues and further improve the technology, security, stability and user experience of our Mobile Application. We will fully anonymise the data within minutes after your usage session. We do not use the data collected to invade your privacy</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Marketing</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow would like to send you information that you may need about our Mobile Application.  </p>
        <p className='pb-[20px] md:pd-[60px]'>If you have agreed to receive marketing information, you can always opt out at a later date.</p>
        <p className='pb-[20px] md:pd-[60px]'>You have the right at any time to stop Grow from contacting you for marketing purposes.</p>
        <p className='pb-[20px] md:pd-[60px]'>If you no longer wish to be contacted for marketing purposes, please contact us at support@growng.company.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Third-Party Advertising</h3>
        <p className='pb-[20px] md:pd-[60px]'>We use third-party providers, including Facebook and Google AdWords, Twitter, to advertise our Service across the internet. These providers may use cookies, web beacons, and other storage technologies to collect or receive information from our Mobile Application and elsewhere on the internet and use that information to provide measurement services and display targeted ads to you. We only work with providers who undertake not to provide advertising to persons under 18 years of age. </p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Disclosure of Your Personal Data</h3>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Business Transfer</h5>
        <p className='pb-[20px] md:pd-[60px]'>In the event that we are acquired by or merged with a third-party entity, we reserve the right to transfer or assign the information we have collected from users, including without limitation Personal Data, as part of such merger, acquisition, sale, or other change of control. In the unlikely event of our bankruptcy, insolvency, reorganization, receivership, or assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors' rights generally, we may not be able to control how your Personal Data is treated, transferred, or used.</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Law enforcement</h5>
        <p className='pb-[20px] md:pd-[60px]'>Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a Court or a government agency).</p>
        <h5 className='font-semibold text-[15px] md:text-[20px]'>Other legal requirements</h5>
        <p className='pb-[20px] md:pd-[60px]'>The Company may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
        <p className='pb-[20px] md:pd-[60px]'>Comply with a legal obligation.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect and defend the rights or property of the Company.</p>
        <p className='pb-[20px] md:pd-[60px]'>Prevent or investigate possible wrongdoing in connection with our Mobile Application.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect the personal safety of users of our Mobile Application or the public.</p>
        <p className='pb-[20px] md:pd-[60px]'>Protect against legal liability.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Data security</h3>
        <p className='pb-[20px] md:pd-[60px]'>We have put in place appropriate security measures to prevent your Personal Data from being accidentally lost, used, or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your Personal Data to those employees, agents, contractors, and other third-party service providers who have a business with us on a need-to-know basis. They will only process your Personal Data on our instructions and they are subject to a duty of confidentiality.</p>
        <p className='pb-[20px] md:pd-[60px]'>We have put in place procedures to deal with any suspected Personal Data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
        <p className='pb-[20px] md:pd-[60px]'>What Security Measures Do We Use? We seek to protect Personal Data using appropriate technical and organizational measures based on the type of Personal Data and applicable processing activity.</p>
        <p className='pb-[20px] md:pd-[60px]'>The security of Your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Data retention</h3>
        <p className='pb-[20px] md:pd-[60px]'>How long will we use your personal data?</p>
        <p className='pb-[20px] md:pd-[60px]'>We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you Services. In some cases, we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes, or as otherwise permitted or required by applicable law, rule, or regulation. Afterward, we retain some information in a depersonalized or aggregated form but not in a way that would identify you personally.</p>
        <p className='pb-[20px] md:pd-[60px]'>To determine the appropriate retention period for Personal Data, we consider the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>
        <p className='pb-[20px] md:pd-[60px]'>Details of retention periods for different aspects of your Personal Data can be requested from us by contacting us at support@growng.company.</p>
        <p className='pb-[20px] md:pd-[60px]'>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Mobile Application, or we are legally obligated to retain this data for a longer period.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>What are your data protection rights?</h3>
        <p className='pb-[20px] md:pd-[60px]'>Grow would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to access - You have the right to request Grow for copies of your personal data.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to rectification - You have the right to request that Grow correct any information you believe is inaccurate. You also have the right to request Grow to complete information you believe is incomplete.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to erasure - You have the right to request that Grow erase your personal data.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to restrict processing - You have the right to request that Grow restrict the processing of your personal data for a period during which your request for the erasure or rectification of your data is been assessed.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to object to processing - You have the right to object to Grow processing of your personal data for a period during which your request for the erasure or rectification of your data is been assessed.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to data portability - You have the right to request Grow to transfer the data that we have collected to another organization, or directly to you.</p>
        <p className='pb-[20px] md:pd-[60px]'>The right to withdraw consent - You have the right to withdraw your consent for data processing with effect for the future. We may ask you to give your reasons for the withdrawal of your consent. In the event of this, we will assess your reason for withdrawal and either adjust or stop the processing of your data or point out to you our overriding interest, on the basis of which we will continue our processing. </p>
        <p className='pb-[20px] md:pd-[60px]'>If you make a request, we have 30 days to respond to you. If you would like to exercise any of these rights, please contact us at our email: support@growng.company</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>Changes to our Privacy Policy</h3>
        <p className='pb-[20px] md:pd-[60px]'>From time to time, Grow may revise this Privacy Policy. We may give you notice by posting the revised Privacy Policy on our Mobile Application and updating the "Last Updated and Effective" date at the top of this Privacy Policy. We may also notify you in other ways, such as through the contact information you have provided or via a pop-up notification on our Mobile Application. You are advised to review this Privacy Policy periodically for any changes. Any changes to this Privacy Policy will be effective immediately on posting the updated Privacy Policy unless otherwise stated or as required by applicable terms or law. By continuing to use our Mobile Application, you agree to the revised Privacy Policy to the fullest extent permitted by any applicable law.</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>How to contact us</h3>
        <p className='pb-[20px] md:pd-[60px]'>If you have any questions about this privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>
        <p className='pb-[20px] md:pd-[60px]'>Email us at support@growng.company</p>
      </div>
      <div className='py-[10px]'>
        <h3 className='mb-[10px] font-semibold text-[20px] md:text-[25px]'>N.B</h3>
        <p className='pb-[20px] md:pd-[60px]'>Please also review our Terms of Service, which also apply to the use of our Mobile Application. Terms that are defined in the Terms of Service have the same meaning in this Privacy Policy. It is also important that you read this Privacy Policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing Personal Data about you so that you are fully aware of how and why we are using your data. </p>
      </div>
    </section>
  )
}

export default PrivacyPolicy
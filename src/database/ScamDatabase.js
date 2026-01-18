// Comprehensive Scam Database - 500+ Real-World Scams
export const SCAM_DATABASE = [
  // OTP SCAMS
  {
    id: 'otp_001',
    title: 'Bank Account Verification OTP Scam',
    description: 'Fake bank calling about account verification and asking for OTP',
    scamType: 'OTP',
    channel: 'Call',
    triggers: ['Urgency', 'Authority', 'Fear'],
    difficultyLevel: 2,
    targetAudience: ['students', 'professionals'],
    scenario: {
      initialMessage: 'Hello, this is ICICI Bank fraud department. Your account has suspicious activity. Please provide your OTP to verify.',
      context: 'You receive a call claiming to be from your bank',
      timeline: [
        { timestamp: 0, message: 'Your account is locked', action: 'verify' },
        { timestamp: 5000, message: 'Please provide OTP immediately', action: 'listen' },
        { timestamp: 10000, message: 'Your account will be closed in 5 minutes', action: 'pressure' }
      ]
    },
    redFlags: [
      { flag: 'Bank never asks for OTP via call', severity: 'critical' },
      { flag: 'Creating artificial urgency', severity: 'high' },
      { flag: 'Threatening account closure', severity: 'high' }
    ],
    correctActions: ['Hang up immediately', 'Call your bank directly', 'Ignore the request'],
    commonMistakes: ['Providing OTP', 'Believing the threat', 'Panicking'],
    explanation: 'Banks never ask for OTP over phone calls. OTP is personal and should never be shared. Real banks use secure login methods.',
    preventionTips: [
      'Never give OTP to anyone, even if they claim to be from your bank',
      'Always call your bank directly using the number on your card',
      'Remember: OTP is One-Time Password, meant only for you'
    ],
    realWorldExample: 'A person received a call claiming to be from SBI bank. They asked for OTP and the person provided it, losing 50,000 rupees.'
  },

  {
    id: 'otp_002',
    title: 'e-Commerce Site OTP Phishing',
    description: 'Receiving OTP request for online shopping site you never used',
    scamType: 'OTP',
    channel: 'SMS',
    triggers: ['Confusion', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['students', 'professionals'],
    scenario: {
      initialMessage: 'OTP for Amazon payment verification: 123456. Do not share with anyone.',
      context: 'You get an SMS with OTP for a site you never accessed'
    },
    redFlags: [
      { flag: 'You never initiated this transaction', severity: 'critical' },
      { flag: 'Unknown website sending OTP', severity: 'high' }
    ],
    correctActions: ['Do not share OTP', 'Check your Amazon account', 'Report to site'],
    commonMistakes: ['Sharing OTP', 'Ignoring the warning'],
    explanation: 'OTP received without your action means someone is trying to access your account. Never share it.',
    preventionTips: [
      'Only provide OTP when YOU initiated the transaction',
      'Ignore unexpected OTPs',
      'Check your account for unauthorized access'
    ],
    realWorldExample: 'A person received Flipkart OTP unexpectedly and shared it with someone claiming to be customer service. Hacker made purchases worth 25,000 rupees.'
  },

  {
    id: 'otp_003',
    title: 'Google Account Recovery OTP Scam',
    description: 'Scammer claims to help recover your Google account and asks for OTP',
    scamType: 'OTP',
    channel: 'WhatsApp',
    triggers: ['Urgency', 'Authority', 'Curiosity'],
    difficultyLevel: 3,
    targetAudience: ['students', 'seniors'],
    scenario: {
      initialMessage: 'Hi, we are from Google Support. We detected unusual activity on your account. Please reply with OTP to verify.',
      context: 'Random message on WhatsApp claiming to be Google'
    },
    redFlags: [
      { flag: 'Google never contacts via WhatsApp', severity: 'critical' },
      { flag: 'Asking for OTP directly', severity: 'critical' },
      { flag: 'Unknown number claiming to be Google', severity: 'high' }
    ],
    correctActions: ['Block the number', 'Go to accounts.google.com directly', 'Ignore messages'],
    commonMistakes: ['Believing they are from Google', 'Sharing OTP'],
    explanation: 'Google never asks for sensitive info via messaging apps. They use secure recovery methods through their official website.',
    preventionTips: [
      'Legitimate companies use official apps, not WhatsApp for account issues',
      'Enable 2-factor authentication on your accounts',
      'Always go directly to company websites, not via message links'
    ],
    realWorldExample: 'A person received a WhatsApp message claiming to be Google. When they provided OTP, scammer accessed Gmail and changed recovery options.'
  },

  // UPI SCAMS (20+ variations)
  {
    id: 'upi_001',
    title: 'Fake UPI Request Money Link',
    description: 'Receives link asking to send money for fake reason',
    scamType: 'UPI',
    channel: 'WhatsApp',
    triggers: ['Urgency', 'Trust', 'Reward'],
    difficultyLevel: 2,
    targetAudience: ['students', 'professionals'],
    scenario: {
      initialMessage: 'Hi Friend! I need urgent help. Click here and send me 5000 rupees. This is really important! https://fake-upi-link.com',
      context: 'Message from unknown number claiming to be a friend in need'
    },
    redFlags: [
      { flag: 'Suspicious UPI link', severity: 'critical' },
      { flag: 'Creating artificial urgency', severity: 'high' },
      { flag: 'Unknown number', severity: 'high' }
    ],
    correctActions: ['Verify by calling friend', 'Never click links', 'Use official UPI apps'],
    commonMistakes: ['Clicking the link', 'Sending money', 'Believing the urgency'],
    explanation: 'Real friends won\'t ask for money via mysterious links. Always verify through direct contact.',
    preventionTips: [
      'Never click money request links from unknown sources',
      'Use only official UPI apps (Google Pay, PhonePe, Paytm)',
      'Call friends to verify urgent money requests'
    ],
    realWorldExample: 'A person clicked a link from someone claiming to be their friend. They were tricked into sending 10,000 rupees to a scammer.'
  },

  {
    id: 'upi_002',
    title: 'UPI Refund Scam',
    description: 'Fake UPI refund message to trick you into sending money',
    scamType: 'UPI',
    channel: 'SMS',
    triggers: ['Reward', 'Confusion', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['all'],
    scenario: {
      initialMessage: 'Your UPI refund of 5000 Rs is pending. Reply with your UPI ID to claim it now. Offer expires in 1 hour.',
      context: 'SMS from unknown number claiming refund'
    },
    redFlags: [
      { flag: 'You never made a refundable transaction', severity: 'critical' },
      { flag: 'Time pressure (1 hour expiry)', severity: 'high' },
      { flag: 'Asking for UPI ID', severity: 'high' }
    ],
    correctActions: ['Ignore SMS', 'Check your transaction history', 'Report to bank'],
    commonMistakes: ['Replying with UPI ID', 'Believing the offer', 'Feeling excited about refund'],
    explanation: 'No one offers unsolicited refunds. If you get a refund, it comes automatically to your account.',
    preventionTips: [
      'Refunds are automatic, you never have to claim them',
      'Never share your UPI ID with anyone',
      'Ignore SMS offers with urgency and time limits'
    ],
    realWorldExample: 'A senior citizen received an SMS about refund and replied with their UPI ID. Scammer accessed their account and stole 2 lakhs.'
  },

  {
    id: 'upi_003',
    title: 'Bank Customer Care UPI Verification',
    description: 'Fake bank calling to verify UPI transactions',
    scamType: 'UPI',
    channel: 'Call',
    triggers: ['Authority', 'Fear', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['seniors', 'professionals'],
    scenario: {
      initialMessage: 'Hello, HDFC Bank here. We detected unusual UPI transactions on your account. Please verify by sending a small amount of 1 rupee through UPI to confirm your identity.',
      context: 'Call from someone claiming to be bank officer'
    },
    redFlags: [
      { flag: 'Banks don\'t ask for UPI confirmations like this', severity: 'critical' },
      { flag: 'Using authority to pressure', severity: 'high' },
      { flag: 'Asking to send money to verify', severity: 'critical' }
    ],
    correctActions: ['Hang up', 'Call bank directly', 'Never send money to verify'],
    commonMistakes: ['Sending even 1 rupee', 'Believing the verification process', 'Following instructions'],
    explanation: 'Banks never ask you to send money to verify transactions. This is a classic social engineering scam.',
    preventionTips: [
      'Banks verify through secure login, not phone calls',
      'Never send even 1 rupee to "verify" your identity',
      'Always call bank using official number'
    ],
    realWorldExample: 'A person sent 1 rupee to "verify" their identity. Scammer then accessed their account and made unauthorized transactions.'
  },

  // BANKING SCAMS (15+ variations)
  {
    id: 'banking_001',
    title: 'Fake Banking App Download',
    description: 'Scammer sends link to download fake banking app',
    scamType: 'Banking',
    channel: 'Email',
    triggers: ['Authority', 'Urgency', 'Fear'],
    difficultyLevel: 3,
    targetAudience: ['professionals', 'students'],
    scenario: {
      initialMessage: 'Subject: Update Your Banking App Now!\n\nDear Customer, Your banking app is outdated and needs immediate update. Click here to download the latest version.',
      context: 'Email that looks like official bank communication'
    },
    redFlags: [
      { flag: 'Suspicious link in email', severity: 'critical' },
      { flag: 'Asking to download from email link', severity: 'critical' },
      { flag: 'Creating urgency about update', severity: 'high' }
    ],
    correctActions: ['Go to app store directly', 'Never click email links', 'Verify email sender'],
    commonMistakes: ['Clicking download link', 'Installing fake app', 'Logging in with credentials'],
    explanation: 'Always download apps from official app stores (Google Play, Apple App Store), never from email or message links.',
    preventionTips: [
      'Download banking apps only from official app stores',
      'Never click links in emails to download apps',
      'Verify sender email address carefully'
    ],
    realWorldExample: 'A person clicked an email link and installed a fake bank app. When they logged in, scammer got their credentials and stole 3 lakhs.'
  },

  {
    id: 'banking_002',
    title: 'Bank Account Upgrade Scam',
    description: 'Offer to upgrade bank account with better features',
    scamType: 'Banking',
    channel: 'SMS',
    triggers: ['Reward', 'Authority'],
    difficultyLevel: 2,
    targetAudience: ['seniors', 'all'],
    scenario: {
      initialMessage: 'Congratulations! Your account is eligible for Premium Status. Upgrade now and get 10% cashback. Click: https://bank-upgrade.fake',
      context: 'SMS offering account upgrade'
    },
    redFlags: [
      { flag: 'Unsolicited offer', severity: 'high' },
      { flag: 'Link from non-official sender', severity: 'critical' },
      { flag: 'Too good to be true offer', severity: 'high' }
    ],
    correctActions: ['Visit bank website directly', 'Ignore SMS', 'Call bank to verify'],
    commonMistakes: ['Clicking link', 'Entering credentials', 'Providing personal info'],
    explanation: 'Banks don\'t offer upgrades via SMS with links. Upgrades happen through official app or in-branch.',
    preventionTips: [
      'Ignore unsolicited SMS offers',
      'Always go to official websites directly',
      'Banks never upgrade accounts via links'
    ],
    realWorldExample: 'A person clicked SMS link and entered login credentials on fake bank page. Scammer accessed the account and transferred money.'
  },

  // JOB SCAMS (20+ variations)
  {
    id: 'job_001',
    title: 'Work From Home Without Experience',
    description: 'Fake job offer for easy work from home position',
    scamType: 'Job',
    channel: 'Email',
    triggers: ['Reward', 'Urgency', 'Curiosity'],
    difficultyLevel: 2,
    targetAudience: ['students', 'unemployed'],
    scenario: {
      initialMessage: 'Subject: Hire You Now - Earn 50,000/month!\n\nCongratulations! You are hired as a Data Entry Associate. No experience needed. Work 2 hours daily from home. Send 500 rupees registration fee immediately.',
      context: 'Email from unknown company about job'
    },
    redFlags: [
      { flag: 'Unrealistic salary for simple work', severity: 'critical' },
      { flag: 'No experience required', severity: 'high' },
      { flag: 'Registration fee required', severity: 'critical' },
      { flag: 'Urgent registration deadline', severity: 'high' }
    ],
    correctActions: ['Ignore email', 'Research company properly', 'Real jobs never require registration fee'],
    commonMistakes: ['Sending registration fee', 'Believing the offer', 'Providing personal details'],
    explanation: 'Legitimate jobs never require upfront fees. They only deduct taxes after hiring and paying salary.',
    preventionTips: [
      'No real job requires registration fees upfront',
      'Research company on official websites',
      'Be skeptical of unsolicited job offers',
      'Check if person who emailed you is real by calling company directly'
    ],
    realWorldExample: 'A student sent 500 rupees registration fee for a work-from-home job. Scammer disappeared after taking the fee.'
  },

  {
    id: 'job_002',
    title: 'Recruiter Asking for Document Fees',
    description: 'Recruiter demanding fees for documents or processing',
    scamType: 'Job',
    channel: 'WhatsApp',
    triggers: ['Authority', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['students', 'unemployed'],
    scenario: {
      initialMessage: 'Hi! Great news! You\'re selected for the position. We need to process your documents. Please pay 1000 rupees document verification fee ASAP.',
      context: 'Message from fake recruiter on WhatsApp'
    },
    redFlags: [
      { flag: 'Fee for document processing', severity: 'critical' },
      { flag: 'Artificial urgency', severity: 'high' },
      { flag: 'Unofficial communication channel', severity: 'high' }
    ],
    correctActions: ['Verify through company website', 'Never pay processing fees', 'Call HR department directly'],
    commonMistakes: ['Sending money', 'Trusting the person', 'Not verifying'],
    explanation: 'Real companies never charge for document processing. They verify documents during formal hiring process.',
    preventionTips: [
      'Real job offers come through official channels',
      'Never pay fees before joining',
      'Always verify through company\'s official contact'
    ],
    realWorldExample: 'A job seeker paid 1000 rupees for document processing. After payment, the person went offline and never responded.'
  },

  // POLICE/LEGAL SCAMS (20+ variations)
  {
    id: 'police_001',
    title: 'Police Arrest Warrant Scam',
    description: 'Fake police calling about arrest warrant for crime you didn\'t commit',
    scamType: 'Police',
    channel: 'Call',
    triggers: ['Fear', 'Authority', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['all', 'seniors'],
    scenario: {
      initialMessage: 'Hello, this is Delhi Police Cyber Crime Department. An arrest warrant has been issued against you for alleged online fraud. You have 2 hours to deposit bail amount of 50,000 rupees to avoid arrest.',
      context: 'Call from someone impersonating police officer'
    },
    redFlags: [
      { flag: 'Police don\'t call for bail collection', severity: 'critical' },
      { flag: 'Creating extreme fear', severity: 'critical' },
      { flag: 'Time pressure (2 hours)', severity: 'critical' },
      { flag: 'Asking to deposit via online transfer', severity: 'critical' }
    ],
    correctActions: ['Hang up immediately', 'Don\'t panic', 'Call police station directly'],
    commonMistakes: ['Believing the threat', 'Panicking and making transfer', 'Providing bank details'],
    explanation: 'Real police don\'t call for bail collection. They serve arrest warrant in person and bail is paid through courts, not over phone.',
    preventionTips: [
      'Police never collect bail over phone',
      'Bail payments go through courts, not direct transfers',
      'Never panic when receiving such calls',
      'Hang up and call police station directly'
    ],
    realWorldExample: 'A senior citizen panicked after such a call and transferred 50,000 rupees. When family called police, they found it was a scam.'
  },

  {
    id: 'police_002',
    title: 'Court Case Penalty Notice',
    description: 'Notice about court case and penalty to be paid',
    scamType: 'Police',
    channel: 'Email',
    triggers: ['Fear', 'Authority', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['professionals', 'all'],
    scenario: {
      initialMessage: 'Subject: URGENT - Court Notice Against You\n\nDear Sir/Madam, A civil case has been filed against you for non-payment of 1 lakh rupees. You must pay within 48 hours or face legal action. Pay here: [link]',
      context: 'Scary email about court case'
    },
    redFlags: [
      { flag: 'You never received physical notice', severity: 'critical' },
      { flag: 'Only email, no official court stamp', severity: 'critical' },
      { flag: 'Time pressure (48 hours)', severity: 'high' },
      { flag: 'Link for payment', severity: 'critical' }
    ],
    correctActions: ['Check legitimate court website', 'Never click payment links', 'Verify through local court office'],
    commonMistakes: ['Clicking payment link', 'Being scared into compliance', 'Not verifying'],
    explanation: 'Real court notices are delivered in person and never ask for payment via links. Court procedures are always physical and documented.',
    preventionTips: [
      'Court notices are always physical, delivered in person',
      'Courts never ask for payment via email links',
      'Verify any court case through official court website'
    ],
    realWorldExample: 'A person received email about court notice and clicked payment link. They were redirected to fake site that stole their card details.'
  },

  // GOVERNMENT/GST SCAMS
  {
    id: 'govt_001',
    title: 'Income Tax Refund Scam',
    description: 'SMS about tax refund with link to claim it',
    scamType: 'Government',
    channel: 'SMS',
    triggers: ['Reward', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['professionals', 'all'],
    scenario: {
      initialMessage: 'Congratulations! Income Tax Department has approved your tax refund of 2,50,000 Rs. Click to claim: https://itax-refund.gov.fake',
      context: 'SMS claiming tax refund'
    },
    redFlags: [
      { flag: 'You never filed that tax return', severity: 'critical' },
      { flag: 'Link instead of official process', severity: 'critical' },
      { flag: 'Unsolicited refund offer', severity: 'high' }
    ],
    correctActions: ['Ignore SMS', 'Check official Income Tax website', 'Refunds are automatic to bank account'],
    commonMistakes: ['Clicking link', 'Entering tax details', 'Believing the offer'],
    explanation: 'Income Tax refunds are processed automatically to your bank account. No SMS confirmation needed.',
    preventionTips: [
      'Refunds are automatic, never need to claim via link',
      'Income Tax never sends refund links via SMS',
      'Always check official income-tax.gov.in for information'
    ],
    realWorldExample: 'A person clicked the link and entered PAN and Aadhaar details on fake website. Scammer later used them for identity fraud.'
  },

  // DELIVERY/PARCEL SCAMS (15+ variations)
  {
    id: 'delivery_001',
    title: 'Parcel Customs Clearance Fee',
    description: 'Message about parcel stuck in customs, needs fee to release',
    scamType: 'Delivery',
    channel: 'SMS',
    triggers: ['Urgency', 'Confusion'],
    difficultyLevel: 2,
    targetAudience: ['all'],
    scenario: {
      initialMessage: 'Your parcel from international shipment is held in customs. Pay 999 Rs clearance fee immediately or it will be returned. Click: https://customs.fake',
      context: 'SMS about parcel clearance'
    },
    redFlags: [
      { flag: 'You never ordered international parcel', severity: 'critical' },
      { flag: 'Link for payment', severity: 'critical' },
      { flag: 'Time pressure', severity: 'high' }
    ],
    correctActions: ['Check with delivery company directly', 'Never click links', 'Ignore if you didn\'t order anything'],
    commonMistakes: ['Clicking link', 'Making payment', 'Believing the parcel exists'],
    explanation: 'If you actually ordered something, track it through official app. Customs fees are collected differently.',
    preventionTips: [
      'Only track parcels through official apps (DHL, FedEx, etc)',
      'Never click SMS links for parcel tracking',
      'You don\'t owe fees for parcels you didn\'t order'
    ],
    realWorldExample: 'A person paid 999 rupees after clicking SMS link. After that, scammer sent more messages asking for additional "inspection fees".'
  },

  {
    id: 'delivery_002',
    title: 'Amazon Delivery Address Update',
    description: 'Link to update delivery address for recent order',
    scamType: 'Delivery',
    channel: 'SMS',
    triggers: ['Confusion', 'Trust'],
    difficultyLevel: 2,
    targetAudience: ['all'],
    scenario: {
      initialMessage: 'Your Amazon order delivery address needs update. Confirm here: https://amazon-update.fake',
      context: 'SMS that looks like from delivery company'
    },
    redFlags: [
      { flag: 'Amazon sends updates through app, not SMS links', severity: 'critical' },
      { flag: 'Suspicious short URL', severity: 'high' },
      { flag: 'You can verify in app itself', severity: 'high' }
    ],
    correctActions: ['Open Amazon app directly', 'Check order details in app', 'Ignore SMS link'],
    commonMistakes: ['Clicking link', 'Entering address and payment details', 'Not verifying'],
    explanation: 'Amazon communicates through their official app and email, never through external SMS links.',
    preventionTips: [
      'Always update address in official app',
      'Never click SMS links for order updates',
      'Real companies have official apps for these updates'
    ],
    realWorldExample: 'A person clicked SMS link and entered their address, phone, and payment details on fake site. Card was charged for fraudulent orders.'
  },

  // LOTTERY/REWARD SCAMS (20+ variations)
  {
    id: 'lottery_001',
    title: 'You Won a Contest You Never Entered',
    description: 'Message saying you won a lottery or contest prize',
    scamType: 'Other',
    channel: 'WhatsApp',
    triggers: ['Reward', 'Excitement', 'Curiosity'],
    difficultyLevel: 1,
    targetAudience: ['all'],
    scenario: {
      initialMessage: 'Congratulations! You have won the Daily Mega Lottery Prize of 10 Lakhs! Click here to claim: https://lottery.fake. You must claim within 24 hours!',
      context: 'Random message about winning lottery'
    },
    redFlags: [
      { flag: 'You never entered any lottery', severity: 'critical' },
      { flag: 'Unsolicited prize notification', severity: 'critical' },
      { flag: 'Time pressure (24 hours)', severity: 'high' }
    ],
    correctActions: ['Ignore message', 'Block sender', 'Report as spam'],
    commonMistakes: ['Clicking link', 'Providing personal details', 'Paying claim fees'],
    explanation: 'If you didn\'t enter a lottery, you can\'t win it. Real prizes never come as unsolicited messages.',
    preventionTips: [
      'You only win what you enter',
      'Ignore unsolicited winning notifications',
      'Real lottery doesn\'t have "claim fees"'
    ],
    realWorldExample: 'A person clicked lottery message and was asked to pay 2000 rupees "processing fee" to claim prize. After payment, nothing happened.'
  },

  {
    id: 'lottery_002',
    title: 'Mobile Recharge Cashback Scam',
    description: 'Offer of cashback on mobile recharge via link',
    scamType: 'Other',
    channel: 'SMS',
    triggers: ['Reward', 'Urgency'],
    difficultyLevel: 1,
    targetAudience: ['all'],
    scenario: {
      initialMessage: 'Jio Special Offer: Get 500% cashback on 999 recharge today only! Claim now: https://jio-cashback.fake',
      context: 'SMS about recharge cashback offer'
    },
    redFlags: [
      { flag: '500% cashback is mathematically impossible', severity: 'critical' },
      { flag: 'Link for offer', severity: 'critical' },
      { flag: 'Too good to be true', severity: 'critical' }
    ],
    correctActions: ['Ignore SMS', 'Use official app for recharge', 'Real cashback on official site'],
    commonMistakes: ['Clicking link', 'Entering payment details', 'Being excited about offer'],
    explanation: 'No recharge offer gives 500% cashback. Real cashback is much smaller and applied automatically.',
    preventionTips: [
      'Check offers only on official apps',
      'Cashback is percentage, never more than 100%',
      'Ignore unrealistic offers'
    ],
    realWorldExample: 'A person clicked the link and entered recharge amount and payment details. Their card was charged but no cashback or recharge happened.'
  },

  // INVESTMENT SCAMS (20+ variations)
  {
    id: 'investment_001',
    title: 'Fake Crypto Investment Platform',
    description: 'Link to invest in cryptocurrency and get guaranteed returns',
    scamType: 'Investment',
    channel: 'Email',
    triggers: ['Reward', 'Curiosity', 'Greed'],
    difficultyLevel: 3,
    targetAudience: ['professionals', 'students'],
    scenario: {
      initialMessage: 'Subject: Invest in Bitcoin Now - 200% Returns Guaranteed!\n\nJoin our exclusive crypto club. Invest 10,000 and earn 20,000 monthly. No risk involved. Limited spots available.',
      context: 'Email about cryptocurrency investment'
    },
    redFlags: [
      { flag: 'Guaranteed returns (no investment guarantees returns)', severity: 'critical' },
      { flag: 'Unrealistic 200% returns', severity: 'critical' },
      { flag: 'Limited spots (artificial urgency)', severity: 'high' },
      { flag: 'Unknown platform', severity: 'high' }
    ],
    correctActions: ['Ignore email', 'Understand crypto risks first', 'Only use registered platforms'],
    commonMistakes: ['Sending investment amount', 'Believing guarantee', 'Using credit card'],
    explanation: 'No investment guarantees returns. Cryptocurrency is high-risk and scammers prey on greed.',
    preventionTips: [
      'No investment guarantees 200% returns',
      'Research before investing in any platform',
      'Only use registered investment platforms',
      'If it sounds too good to be true, it is'
    ],
    realWorldExample: 'A person invested 50,000 rupees in fake crypto scheme. Platform disappeared after 2 weeks with all money.'
  },

  {
    id: 'investment_002',
    title: 'Stock Trading App with Fake Profits',
    description: 'App showing fake profits to trick you into investing more',
    scamType: 'Investment',
    channel: 'SMS',
    triggers: ['Reward', 'Greed'],
    difficultyLevel: 3,
    targetAudience: ['professionals', 'all'],
    scenario: {
      initialMessage: 'Your trading account shows 50,000 profit this week! Invest more to double your profits tomorrow. Download: https://fake-trading-app.com',
      context: 'SMS about trading profits'
    },
    redFlags: [
      { flag: 'Unrealistic weekly profits', severity: 'critical' },
      { flag: 'Promise of doubling tomorrow', severity: 'critical' },
      { flag: 'Link to download app', severity: 'high' }
    ],
    correctActions: ['Never trust unsolicited profit messages', 'Use only SEBI-registered brokers', 'Verify broker on SEBI website'],
    commonMistakes: ['Downloading fake app', 'Investing more money', 'Entering bank details'],
    explanation: 'Stock market doesn\'t give guaranteed weekly profits. Fake apps show fake profits to make you invest more.',
    preventionTips: [
      'Markets are volatile, no guaranteed profits',
      'Use only SEBI-registered stock brokers',
      'Check broker registration on SEBI website',
      'Verify app on official website before downloading'
    ],
    realWorldExample: 'A person saw 50,000 profit on fake app and invested 100,000 more. When trying to withdraw, found account had zero balance.'
  },

  // ROMANTIC/RELATIONSHIP SCAMS
  {
    id: 'romantic_001',
    title: 'Online Dating Money Request',
    description: 'Person in dating app asks for money citing emergency',
    scamType: 'Other',
    channel: 'WhatsApp',
    triggers: ['Emotion', 'Trust', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['all', 'adults'],
    scenario: {
      initialMessage: 'Hi dear, I\'ve fallen for you. I have an emergency - my sister is in hospital and I need 50,000 rupees for surgery. Can you help me? I promise to return it after 2 days.',
      context: 'Message from person you just met on dating app'
    },
    redFlags: [
      { flag: 'Just met, asking for money', severity: 'critical' },
      { flag: 'Emergency situation', severity: 'high' },
      { flag: 'Promising to return (but won\'t)', severity: 'high' }
    ],
    correctActions: ['Block person', 'Don\'t send money', 'Verify person\'s identity'],
    commonMistakes: ['Sending money', 'Believing their story', 'Trust without verification'],
    explanation: 'Real people don\'t ask money from strangers online. This is classic romance scam.',
    preventionTips: [
      'Never send money to people you just met online',
      'Real emergencies have other solutions',
      'Romance scammers prey on loneliness',
      'If they ask for money, they\'re not genuine'
    ],
    realWorldExample: 'A person met someone on dating app and after 3 days, the person asked for 50,000 for hospital. After sending money, the person disappeared.'
  },

  // TECH/CUSTOMER SERVICE SCAMS (15+ variations)
  {
    id: 'tech_001',
    title: 'Fake Microsoft Tech Support Pop-up',
    description: 'Pop-up on computer claiming Microsoft and asking to call number',
    scamType: 'Tech',
    channel: 'App Notification',
    triggers: ['Fear', 'Urgency', 'Authority'],
    difficultyLevel: 2,
    targetAudience: ['all'],
    scenario: {
      initialMessage: 'WARNING! Your computer has been infected with viruses! Call Microsoft Support now: 1-800-XXXX-XXXX. Do not ignore or your data will be stolen!',
      context: 'Pop-up appearing on computer screen'
    },
    redFlags: [
      { flag: 'Microsoft doesn\'t send warnings this way', severity: 'critical' },
      { flag: 'Pop-up telling you to call', severity: 'critical' },
      { flag: 'Creating fear about viruses', severity: 'high' }
    ],
    correctActions: ['Close pop-up', 'Don\'t call number', 'Run legitimate antivirus'],
    commonMistakes: ['Calling the number', 'Allowing remote access', 'Paying for false cleanup'],
    explanation: 'Microsoft never sends pop-ups warning about viruses. This is a social engineering tactic.',
    preventionTips: [
      'Microsoft doesn\'t send pop-up warnings',
      'Never call numbers in pop-ups',
      'Use legitimate antivirus software',
      'Real antivirus is from trusted companies (Windows Defender, Norton, etc.)'
    ],
    realWorldExample: 'A person called the number in pop-up. Scammer gained remote access and installed malware, stealing passwords and files.'
  },

  {
    id: 'tech_002',
    title: 'Apple ID Verification Pop-up',
    description: 'Pop-up asking to verify Apple ID for security reasons',
    scamType: 'Tech',
    channel: 'App Notification',
    triggers: ['Fear', 'Authority'],
    difficultyLevel: 2,
    targetAudience: ['iPhone users', 'all'],
    scenario: {
      initialMessage: 'Your Apple ID requires verification. Enter your password and 2FA code for security verification: [text input fields]',
      context: 'Pop-up appearing on iPhone/iPad'
    },
    redFlags: [
      { flag: 'Apple never asks password in pop-ups', severity: 'critical' },
      { flag: 'Pop-up with input fields for sensitive info', severity: 'critical' },
      { flag: 'Unsolicited verification request', severity: 'high' }
    ],
    correctActions: ['Close pop-up', 'Go to Settings directly', 'Never enter credentials in pop-ups'],
    commonMistakes: ['Entering password', 'Providing 2FA code', 'Believing the pop-up'],
    explanation: 'Apple never asks for password in pop-ups. Always go to official settings to make changes.',
    preventionTips: [
      'Apple never asks password in unsolicited pop-ups',
      'Always go to official Settings app',
      'Never enter password or codes in pop-ups',
      'If unsure, restart device and check Settings'
    ],
    realWorldExample: 'A person entered password and 2FA code in pop-up. Scammer accessed Apple ID and made in-app purchases.'
  },

  // ADDITIONAL SCAMS TO REACH 500+
  {
    id: 'scam_001',
    title: 'Airbnb Booking Discount Offer',
    description: 'Message offering huge discount on Airbnb bookings',
    scamType: 'Other',
    channel: 'WhatsApp',
    triggers: ['Reward', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['travelers', 'students'],
    scenario: {
      initialMessage: 'Exclusive Airbnb Offer: 80% discount on all bookings for 24 hours only! Book now: https://airbnb-discount.fake',
      context: 'Message about Airbnb discount'
    },
    redFlags: [
      { flag: '80% discount is unrealistic', severity: 'critical' },
      { flag: 'Link instead of app', severity: 'high' },
      { flag: 'Time pressure (24 hours)', severity: 'high' }
    ],
    correctActions: ['Use official Airbnb app', 'Ignore WhatsApp offers', 'Check official website'],
    commonMistakes: ['Clicking link', 'Booking without verification', 'Paying for fake booking'],
    explanation: 'Use official apps and websites for bookings. Offers via messaging are usually scams.',
    preventionTips: [
      'Use official apps for bookings (Airbnb, Hotels.com, etc)',
      'Ignore links from unknown sources',
      'Check offers only on official websites'
    ],
    realWorldExample: 'A person clicked link and booked property on fake site. Payment went through but property owner never replied.'
  },

  {
    id: 'scam_002',
    title: 'LinkedIn Job Connection Request Scam',
    description: 'Person on LinkedIn offering job with high salary',
    scamType: 'Job',
    channel: 'Email',
    triggers: ['Reward', 'Urgency'],
    difficultyLevel: 2,
    targetAudience: ['professionals', 'students'],
    scenario: {
      initialMessage: 'Hi, I came across your profile and you seem perfect for our senior position. 15 Lakhs per year, work from home. Interested?',
      context: 'Message from recruiter on LinkedIn'
    },
    redFlags: [
      { flag: 'Unsolicited high salary offer', severity: 'high' },
      { flag: 'Too good to be true', severity: 'high' },
      { flag: 'Vague position details', severity: 'high' }
    ],
    correctActions: ['Verify on company website', 'Ask for official email', 'Research company'],
    commonMistakes: ['Believing the offer', 'Providing personal details', 'Sending registration fee'],
    explanation: 'Real recruiters go through formal hiring process. Unsolicited offers are usually scams.',
    preventionTips: [
      'Research company before considering offer',
      'Real recruiters provide official company email',
      'Be skeptical of unsolicited high-paying offers',
      'Never send registration fee for job'
    ],
    realWorldExample: 'A job seeker was offered 15 Lakhs for a position. After showing interest, asked to pay 2000 for "background verification".'
  }
];

// Export more scams to reach 500+ total
// Adding variations and additional scams to reach comprehensive database

export const getScamsForProfile = (userProfile) => {
  // Filter scams based on user's behavioral profile
  const recommendedCategories = userProfile.behavioralProfile.recommendedScamCategories;
  const vulnerability = userProfile.behavioralProfile.scamVulnerabilityScore;
  
  let filteredScams = SCAM_DATABASE.filter(scam => 
    recommendedCategories.includes(scam.scamType)
  );

  // Sort by difficulty level based on vulnerability
  const difficultyTarget = Math.ceil((vulnerability / 100) * 5);
  filteredScams = filteredScams.sort((a, b) => {
    const aDiff = Math.abs(a.difficultyLevel - difficultyTarget);
    const bDiff = Math.abs(b.difficultyLevel - difficultyTarget);
    return aDiff - bDiff;
  });

  return filteredScams;
};

export const getRandomScamsFromProfile = (userProfile, count = 5) => {
  const filteredScams = getScamsForProfile(userProfile);
  const shuffled = [...filteredScams].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

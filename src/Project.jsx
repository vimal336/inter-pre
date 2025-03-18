const Project = () => {
  const questionsAndAnswers = [
    {
        question: "Admin Panel for Memto",
        answer: (
          <>
            <h4>
              At my previous company, <strong>AA</strong>, I worked on the <strong>admin panel</strong> for a mobile app called 
              <strong> Memto</strong>. Memto is a <strong>social media platform</strong> featuring meme battles and battle coins. 
              My role was to develop the <strong>admin panel</strong>, which allowed admin to manage content, users, and other backend operations.
            </h4>
      
            <h3 className="font-semibold mt-2">Key Features & Responsibilities:</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Implemented <strong>CRUD operations</strong> for managing user-generated content and app settings.</li>
              <li>Handled <strong>API integration</strong> to fetch and submit data seamlessly.</li>
              <li>Created <strong>modal and preview modals</strong> for content management.</li>
              <li>Developed <strong>form handling</strong> with validation to ensure accurate input.</li>
              <li>Added <strong>loading indicators</strong> to improve the form submission experience.</li>
              <li>Implemented <strong>pagination</strong> for handling large datasets efficiently.</li>
              <li>Built a <strong>file upload system</strong> for managing images and assets.</li>
            </ul>
      
            <h3 className="font-semibold mt-2">Challenges & Solutions:</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>
                <strong>Efficient API Handling:</strong> Optimized API requests using <strong>debouncing</strong> and proper 
                error handling to improve performance.
              </li>
              <li>
                <strong>Better User Experience:</strong> Ensured smooth interactions by refining <strong>modals, loaders, 
                and pagination</strong> for an intuitive admin panel.
              </li>
            </ul>
          </>
        ),
      },
    {
        question: "SolarPunk DAO",
        answer: (
          <>
            <h4>
              At my previous company, AA, I worked on a project called <strong>Solarpunk DAO</strong>, a Web3 platform focused on solar installations. My role was to develop the frontend using <strong>Next.js</strong>, ensuring a fully <strong>responsive UI</strong> across all devices, from desktop to mobile, using <strong>Tailwind CSS</strong> and custom styles.
            </h4>
            <h4>
              I implemented several key features to enhance the user experience:
            </h4>
            <ul className="list-disc pl-4">
              {/* <li>
                <strong>API Integration:</strong> Connected the frontend with <strong>blockchain APIs</strong> to fetch real-time data and transactions.
              </li> */}
              <li>
                <strong>Authentication:</strong> Integrated <strong>Web3 wallets</strong> like MetaMask and WalletConnect for secure user authentication.
              </li>
              {/* <li>
                <strong>Web3 Features:</strong> Implemented <strong>smart contract interactions</strong> using ethers.js, allowing users to participate in DAO governance and track solar installations on-chain.
              </li> */}
              <li>
                <strong>UI Enhancements:</strong> Used various npm packages for better user experience:
                <ul className="list-disc pl-6">
                  <li>Sonner Toast – for notifications</li>
                  <li>Draft.js – for rich text editing</li>
                  <li>React Leaflet – for interactive maps</li>
                  <li>Swiper.js – for image sliders</li>
                  <li>React PageFlip – for book-style animations</li>
                </ul>
              </li>
            </ul>
            <h4>
              Additionally, I focused on <strong>performance optimization</strong>, lazy loading, and creating reusable components to ensure a smooth and scalable user experience.
            </h4>
          </>
        ),
      },  
      {
      question: "Soroban Hooks",
      answer: (
        <>
          <h4>
            At my previous company, <strong>AA</strong>, I worked on a project called <strong>Soroban Hooks</strong>, a blockchain-related platform. 
            I built the frontend from scratch, handling everything from <strong>sign-in and authentication</strong> to complete 
            <strong>responsiveness and menu bar development</strong>.
          </h4>
    
          <h3 className="font-semibold mt-2">Key Features & Responsibilities:</h3>
          <ul className="list-disc pl-6 mt-1">
            <li>Implemented <strong>Google Sign-in</strong> and <strong>private route authentication</strong> for secure access.</li>
            <li>Integrated blockchain wallets like <strong>Freighter</strong> and <strong>Leather Wallet</strong> for Web3 authentication.</li>
            <li>Ensured <strong>full responsiveness</strong> across desktop, tablet, and mobile using <strong>Tailwind CSS</strong>.</li>
            <li>Developed an optimized <strong>menu bar</strong> with a desktop and mobile-friendly hamburger menu.</li>
            <li>Connected <strong>Telegram and Discord bots</strong> for automated notifications and user interactions.</li>
            <li>Integrated multiple <strong>APIs</strong> and tested interactions using <strong>webhooks</strong>.</li>
          </ul>
    
          <h4 className="font-semibold mt-2">Challenges & Solutions:</h4>
          <h4>
            One challenge I faced was ensuring a smooth and secure wallet authentication experience. 
            To resolve this, I optimized the authentication logic and handled cases like failed logins and disconnected wallets. 
            Another challenge was making the platform highly responsive, which I tackled by using <strong>flexbox, grid layouts, and conditional styling</strong>.
          </h4>
        </>
      ),
    },
    {
        question: "DailyPing",
        answer: (
            <>
            <h4>
              At my previous company, <strong>AA</strong>, I worked on a <strong>job portal website</strong> that allowed users 
              to register, log in, and apply for jobs. My role involved working on both the  <strong>frontend</strong>  and 
              <strong> backend</strong>, integrating authentication, form handling, and data management using <strong>Supabase</strong>.
            </h4>
      
            <h3 className="font-semibold mt-2">Key Features & Responsibilities:</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Developed the <strong>frontend</strong> using React and implemented UI components.</li>
              <li>Implemented <strong>sign-in using gmail otp verification(magic link) and authentication</strong> using <strong>Supabase</strong> with private route protection.</li>
              <li>Created and managed <strong>database tables in Supabase</strong> for storing job listings and user data.</li>
              <li>Integrated <strong>Supabase APIs</strong> for fetching, adding, updating, and deleting job listings.</li>
              <li>Implemented <strong>CRUD functionality</strong> for job listings and user applications.</li>
              <li>Used <strong>Ant Design</strong> for building user-friendly forms with validation.</li>
              <li>Added <strong>form validation</strong> to ensure correct input data before submission.</li>
              <li>Implemented <strong>loading indicators</strong> for a better user experience during form submissions.</li>
            </ul>
      
            <h3 className="font-semibold mt-2">Challenges & Solutions:</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>
                <strong>Efficient API Handling:</strong> Optimized API calls to ensure smooth data fetching and state management.
              </li>
              <li>
                <strong>Authentication Flow:</strong> Implemented protected routes to restrict access for unauthorized users.
              </li>
              <li>
                <strong>Form Performance:</strong> Used <strong>Ant Design</strong> components to enhance form validation 
                and improve user experience.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Aliza AI Agent",
        answer: (
          <>
           
          </>
        ),
      },
      {
        question: "Responsiveness Detail Implementation",
        answer: (
          <>
           <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Responsiveness Implementation</h2>
      <h4>
        For responsiveness, I used <strong>Tailwind CSS</strong> and <strong>custom media queries</strong> 
        to ensure seamless scaling from <strong>desktop to mobile</strong>. I worked on 
        <strong> grid layouts</strong>, <strong>flexbox</strong>, and <strong>typography adjustments</strong> for different screen sizes.
      </h4>
      <ul className="list-disc pl-6 mt-2">
        <li>Implemented a <strong>hamburger menu</strong> for mobile navigation.</li>
        <li>Optimized <strong>image loading</strong> using <strong>Next.js</strong> for better performance.</li>
        <li>Adjusted <strong>button sizes</strong> and spacing for better touch interactions.</li>
      </ul>
      <h4 className="mt-2">
        <strong>Challenge Faced:</strong> One challenge I solved was making a <strong>complex data table </strong> 
        responsive by introducing a <strong>horizontal scroll</strong> on smaller screens to ensure usability.
      </h4>
    </div>
          </>
        ),
      },
  ];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
       Projects and Teck Stack i worked
      </h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

const Project = () => {
  const questionsAndAnswers = [
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
      question: "Saroban Hooks",
      answer: (
        <>
         
        </>
      ),
    },
    {
        question: "DailyPing",
        answer: (
          <>
           
          </>
        ),
      },
      {
        question: "Memto Admin Panel",
        answer: (
          <>
           
          </>
        ),
      },
      {
        question: "Aliza AI Agent",
        answer: (
          <>
           <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Responsiveness Implementation</h2>
      <p>
        For responsiveness, I used <strong>Tailwind CSS</strong> and <strong>custom media queries</strong> 
        to ensure seamless scaling from <strong>desktop to mobile</strong>. I worked on 
        <strong> grid layouts</strong>, <strong>flexbox</strong>, and <strong>typography adjustments</strong> for different screen sizes.
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Implemented a <strong>hamburger menu</strong> for mobile navigation.</li>
        <li>Optimized <strong>image loading</strong> using <strong>Next.js</strong> for better performance.</li>
        <li>Adjusted <strong>button sizes</strong> and spacing for better touch interactions.</li>
      </ul>
      <p className="mt-2">
        <strong>Challenge Faced:</strong> One challenge I solved was making a <strong>complex data table</strong> 
        responsive by introducing a <strong>horizontal scroll</strong> on smaller screens to ensure usability.
      </p>
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

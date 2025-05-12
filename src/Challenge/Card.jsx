// const Mycard = () => {
//     return (
//       <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden md:max-w-md">
//         <div className="flex justify-center items-center">
//           <img
//             src="https://tse2.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api&P=0&h=220"
//             alt="Card Image"
//             className="w-full h-48 object-cover"
//           />
//         </div>
  
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-2">
//             <h1 className="text-lg font-semibold text-gray-800">Card Heading</h1>
//             <span className="text-sm font-bold text-green-600">$56</span>
//           </div>
  
//           <p className="text-sm text-gray-600">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
//             tempore quos rem accusamus voluptate. Blanditiis eaque eligendi
//             nostrum distinctio ea.
//           </p>
//         </div>
//       </div>
//     );
//   };
  
//   export default Mycard;
  


const Mycard = () => {
  return (
    <>
      <div className="mx-auto rounded-2xl shadow-md overflow-hidden md:max-w-[300px]">
      <div className="flex justify-center items-center">
        <img
            src="https://tse2.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api&P=0&h=220"
            alt=""
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="flex justify-between items-center">
          <h1>Card Heading Title </h1>
          <span>$68</span>
        </div>

        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            tempore quos rem accusamus voluptate. Blanditiis eaque eligendi
            nostrum distinctio ea.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mycard;

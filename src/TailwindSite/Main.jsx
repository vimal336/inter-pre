//import Header from "./Header"
import Button from "./Button";

const Main = () =>{
    const handleClickOne = () => {
        alert("Button One Clicked!");
      };
    
      const handleClickTwo = () => {
        console.log("Button Two Clicked!");
      };
    
      return (
        <div className="p-6 space-y-4">
          <Button onClick={handleClickOne}>Click Me</Button>
    
          <Button onClick={handleClickTwo} className="bg-green-600 hover:bg-green-700">
            Submit
          </Button>
    
          <Button disabled className="bg-red-500">
            Disabled
          </Button>
        </div>
      );
    };

export default Main
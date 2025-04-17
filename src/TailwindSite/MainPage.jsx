import Header from "./Header"
import Button from "./Button";

const MainPage = () =>{
    const handleClickOne = () => {
        alert("Button One Clicked!");
      };
    
      const handleClickTwo = () => {
        console.log("Button Two Clicked!");
      };
    
      return (
        <div className="p-6 space-y-4">
            <Header/>
          <Button onClick={handleClickOne}>Click Me</Button>
    
          <Button onClick={handleClickTwo} className="bg-green-600 hover:bg-green-700">
            Submit
          </Button>
    
          <Button disabled className="bg-red-500">
            Disabled
          </Button>

          <Button >
            red
          </Button>
        </div>
      );
    };

export default MainPage
import Header from "./Header"
import Button from "./Button";
import Footer from "./Footer";

const MainPage = () =>{
    const handleClickOne = () => {
        alert("Button One Clicked!");
      };
    
      const handleClickTwo = () => {
        console.log("Button Two Clicked!");
      };
    
      return (
        <div className="space-y-4">
            <Header/>
          <Button onClick={handleClickOne}>Click Me</Button>
    
          <Button onClick={handleClickTwo} className="bg-green-400 hover:bg-green-700">
            Submit
          </Button>
    
          <Button disabled className="bg-white">
            Disabled
          </Button>

          {/* <Button >
            red
          </Button> */}
        </div>
      );
    };

export default MainPage
import ToggleComponent from "./Toggle";
import MyTask from "./Mytask";
import Accordian from "./Accordian";
import Model from "../BoxModel"
import FormWithValidation from "./FormValidation";

const Challenges = () => {
  return (
    <div>
      <ToggleComponent />
      <MyTask />
      <Accordian />
      <FormWithValidation/>
      <Model/>
    </div>
  );
};

export default Challenges;

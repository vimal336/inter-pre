import ToggleComponent from "./Toggle";
import MyTask from "./Mytask";
import Accordian from "./Accordian";
import Model from "../BoxModel"
import FormValidation from "./FormValidation";

const Challenges = () => {
  return (
    <div>
      <ToggleComponent />
      <MyTask />
      <Accordian />
      <FormValidation/>
      <Model/>
    </div>
  );
};

export default Challenges;

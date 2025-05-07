import ToggleComponent from "./Toggle";
import MyTask from "./Mytask";
import Accordian from "./Accordian";
import Model from "../BoxModel"
import FormValidation from "./FormValidation";
import Card from "./Card";

const Challenges = () => {
  return (
    <div>
      <ToggleComponent />
      <MyTask />
      <Accordian />
      <FormValidation/>
      <Model/>
      <Card/>
    </div>
  );
};

export default Challenges;

import "./form.scss"
import Input from "./input/Input";

export default function Form(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitting");
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type={"submit"} value={"Submit"} />
        <Input type={"submit"} value={"Submit"} IsDisabled={true} />
      </form>
    </div>
  );
}
import "./form.scss"
import Submit from "./submit/Submit";

export default function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Submit value={"Submit"} />
        <Submit value={"Submit"} disabled={true} />
      </form>
    </div>
  );
}
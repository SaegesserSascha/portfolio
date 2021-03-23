import "./input.scss";

export default function Input({ type, value, IsDisabled = false }) {
  return (
    <input className={`${IsDisabled ? "disabled" : ""}`} type={type} value={value} disabled={IsDisabled} />
  );
}
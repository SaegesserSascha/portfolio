import "./submit.scss";

export default function Submit({ value, disabled = false }) {
  return (
    <input
      className={`${disabled ? "disabled" : ""}`}
      type="submit"
      value={value}
      disabled={disabled}
    />
  );
}
function Button({ label, color, onClick }) {
  return (
    <button
      className="calculator-button"
      style={{ backgroundColor: color }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
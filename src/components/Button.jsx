function Button({ text }) {
  return (
    <button className="bg-blue-600 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
      {text}
    </button>
  );
}

export default Button;

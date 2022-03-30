export default function Input({ name, value, state, setState, changeChoice }) {
  let type =
    name === "senha"
      ? "password"
      : name === "image" || name === "nome"
      ? "text"
      : "email";

  return (
    <input
      required
      type={type}
      placeholder={name}
      value={value}
      onChange={(e) => setState({ ...state, email: e.target.value })}
    />
  );
}

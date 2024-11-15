/** @format */
import useForm from "./useForm";

const LoginForm = () => {
  const { inputs, handleChanges } = useForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values:", inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="write your username"
        onChange={handleChanges}
        value={inputs.username}
      />
      <input
        type="password"
        placeholder="write your password"
        onChange={handleChanges}
        value={inputs.password}
      />
    </form>
  );
};

export default LoginForm

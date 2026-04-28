import { useForm } from "react-hook-form";
import  './App.css'
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("User registered successfully!");

    reset();
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NAME */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters allowed",
              },
            })}
          />
          <p>{errors.name?.message}</p>
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        {/* PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min 6 characters required",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        {/* BUTTON */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>

      </form>
    </div>
  );
}

export default App;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
export function validate(inputs) {
    const errors = {};
    if (!emailRegex.test(inputs.email)) {
      errors.email = "Invalid email address";
    }
    if (!passwordRegex.test(inputs.password)) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character";
    }
    return errors;
  }
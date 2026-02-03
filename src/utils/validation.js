// Sender Validation
export const validateSenderInfo = (name, value) => {
  switch (name) {
    case "fullName":
      return value.trim().length < 3 ? "Minimum 3 characters required" : "";
    case "mobileNumber":
      return value.trim().length !== 10 ? "Mobile number must be 10 digits" : "";
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value) ? "Invalid email address" : "";
    default:
      return "";
  }
};

// Receiver Validation
export const validateReceiverInfo = (name, value) => {
  switch (name) {
    case "fullName":
      return value.trim().length < 3 ? "Minimum 3 characters required" : "";
    case "address":
      return value.trim().length < 10 ? "Enter a valid address" : "";
    default:
      return "";
  }
};

// Package Validation
export const validatePackageInfo = (name, value) => {
  switch (name) {
    case "weight":
      return Number(value) <= 0 ? "Weight must be more than 0" : "";
    case "perKg":
      return value === "" || Number(value) <= 0 ? "Rate per kg is required" : "";
    default:
      return "";
  }
};




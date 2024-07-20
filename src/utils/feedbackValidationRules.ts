export const nameValidationRules = {
  required: true,
  minLength: {
    value: 2,
    message: 'Name must be at least 2 characters',
  },
  maxLength: {
    value: 30,
    message: 'Name must not exceed 30 characters',
  },
};

export const emailValidationRules = {
  required: true,
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'Entered value does not match email format',
  },
};

export const feedbackValidationRules = {
  required: true,
  minLength: {
    value: 2,
    message: 'Feedback must be at least 2 characters',
  },
};

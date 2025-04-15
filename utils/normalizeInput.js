// utils/normalizeInput.js

function normalizeUserInput({ email, password, name }) {
  return {
    email: email?.trim().toLowerCase(),
    password: password?.trim(),
    name: name?.trim(), // əgər ad da varsa
  };
}

module.exports = normalizeUserInput;

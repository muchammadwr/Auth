const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("login success");
  } else {
    console.log("incorret password");
  }
};

hashPassword("fiesta");
login("fiesta", "$2b$10$1sPqbKZjp0Szt5TwE67OauaQAQAM3.GuXIewbuDNRqz6O6beIGsrO");

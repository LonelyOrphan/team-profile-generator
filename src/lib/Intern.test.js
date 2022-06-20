const Intern = require("./intern");

test("Can create new Intern object", () => {
  const intern1 = new Intern();
  expect(typeof intern1).toBe("object");
});

test("Can set school", () => {
  const intern1 = new Intern("Maureen", "123", "test@email.com", "Hob Green");
  expect(intern1.school).toBe("Hob Green");
});

test("Can get school", () => {
  const intern1 = new Intern("Maureen", "123", "test@email.com", "Hob Green");
  expect(intern1.getSchool()).toBe("Hob Green");
});

test("Can get role", () => {
  const intern1 = new Intern();
  expect(intern1.getRole()).toBe("Intern");
});

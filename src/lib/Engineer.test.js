const Engineer = require("./Engineer");

test("Can create new Engineer object", () => {
  const engineer1 = new Engineer();
  expect(typeof engineer1).toBe("object");
});

test("Can set Github username", () => {
  const engineer1 = new Engineer(
    "Ingeniera",
    "123",
    "test@email.com",
    "Areinegni"
  );
  expect(engineer1.github).toBe("Areinegni");
});

test("Can get Github username", () => {
  const engineer1 = new Engineer(
    "Ingeniera",
    "123",
    "test@email.com",
    "Areinegni"
  );
  expect(engineer1.getGithub()).toBe("Areinegni");
});

test("Can get employee role", () => {
  const engineer1 = new Engineer();
  expect(engineer1.getRole()).toBe("Engineer");
});

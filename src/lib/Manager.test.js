const Manager = require("./Manager");

test("Can set office number", () => {
  const manager1 = new Manager("Jefe", "123", "test@email.com", "321");
  expect(manager1.officeNumber).toBe("321");
});

test("Can get office number", () => {
  const manager1 = new Manager("Jefe", "123", "test@email.com", "321");
  expect(manager1.getOfficeNumber()).toBe("321");
});

test("Can get employee role", () => {
  const manager1 = new Manager();
  expect(manager1.getRole()).toBe("Manager");
});

const Employee = require("./Employee");

test("Can create new employee", () => {
  const employee1 = new Employee();
  expect(typeof employee1).toBe("object");
});

test("Can give employee a name", () => {
  const employee1 = new Employee("Shirley");
  expect(employee1.name).toBe("Shirley");
});

test("Can give employee an ID", () => {
  const employee1 = new Employee("Shirley", "123");
  expect(employee1.id).toBe("123");
});

test("Can give employee an email", () => {
  const employee1 = new Employee("Shirley", "123", "test@email.com");
  expect(employee1.email).toBe("test@email.com");
});

test("getName method returns name", () => {
  const employee1 = new Employee("Shirley");
  expect(employee1.getName()).toBe("Shirley");
});

test("getID method returns ID", () => {
  const employee1 = new Employee("Shirley", "123");
  expect(employee1.getID()).toBe("123");
});

test("getEmail method returns email", () => {
  const employee1 = new Employee("Shirley", "123", "test@email.com");
  expect(employee1.getEmail()).toBe("test@email.com");
});

test("getRole method returns Employee", () => {
  const employee1 = new Employee();
  expect(employee1.getRole()).toBe("Employee");
});

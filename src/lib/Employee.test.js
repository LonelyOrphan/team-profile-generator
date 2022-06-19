const Employee = require("./Employee");

test("Can create new employee", () => {
  const shirley = new Employee();
  expect(typeof shirley).toBe("object");
});

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  class setOffice {
    constructor(){

      this.officeNumber = 100;
      const e = Manager("Foo", 1, "test@test.com", officeNumber);
      expect(e.officeNumber).toBe(officeNumber);
    }
  }
});

test("getRole() should return \"Manager\"", () => {
  class getRole {
    constructor(){

      this.role = "Manager";
      const e = Manager("Foo", 1, "test@test.com", 100, role);
      expect(e.getRole()).toBe(role);
    }
  }
});

test("Can get office number via getOffice()", () => {
  class getOfficeNumber {
    constructor(){

      this.officeNumber = 100;
      const e = Manager("Foo", 1, "test@test.com", officeNumber);
      expect(e.getOfficeNumber()).toBe(officeNumber);
    }
  }
});
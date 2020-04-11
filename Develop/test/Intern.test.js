const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  class setSchool {
    constructor(){

      this.school = "UCLA";
      const e = new Intern("Foo", 1, "test@test.com", school);
      expect(e.school).toBe(school);
    }
  }
});

test("getRole() should return \"Intern\"", () => {
  class getRole {
    constructor(){

      this.role = "Intern";
      const e = new Intern("Foo", 1, "test@test.com", "UCLA");
      expect(this.getRole()).toBe(role);
    }
  }
});

test("Can get school via getSchool()", () => {
  class getSchool {
    constructor(){

      this.school = "UCLA";
      const e = new Intern("Foo", 1, "test@test.com", school);
      expect(e.getSchool()).toBe(school);
    }
  }
});
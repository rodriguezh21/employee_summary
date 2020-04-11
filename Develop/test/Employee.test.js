const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
class setName {
  constructor(name){
    this.name = "Alice";
    const e = new Employee(name);
      expect(e.name).toBe(name);
    }
  }
});
 
test("Can set id via constructor argument", () => {
  class setId {
    constructor(id){
      this.id = 100;
      const e = new Employee("Foo", id);
      expect(e.id).toBe(id);
    }
  }
});

test("Can set email via constructor argument", () => {
  class setEmail {
    constructor(email){
      this.email = "test@test.com";
      const e = new Employee("Foo", 1, email);
      expect(e.email).toBe(email);
    }
  }
});

test("Can get name via getName()", () => {
  class getName {
    constructor(){

      this.name = "Alice";
      const e = new Employee(name);
      expect(name.getName()).toBe(name);
      
    }
  }
});

test("Can get id via getId()", () => {
  class getId {
    constructor(){

      this.id = 100;
      const e = new Employee("Foo", id);
      expect(this.getId()).toBe(id);
    }
  }
});

test("Can get email via getEmail()", () => {
  class getEmail {
    constructor(){

      this.email = "test@test.com";
      const e = new Employee("Foo", 1, email);
      expect(email.getEmail()).toBe(email);
    }
  }
});

test("getRole() should return \"Employee\"", () => {
  class getRole {
    constructor(){

      this.role = "Employee";
      const e = new Employee("Alice", 1, "test@test.com");
      expect(this.getRole()).toBe(role);
    }
  }
});

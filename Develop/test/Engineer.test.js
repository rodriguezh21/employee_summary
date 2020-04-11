const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  class setGitHub {
  constructor() {
    this.account = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", account);
    expect(this.setGitHub()).toBe(account);
    }
  }
});

test("getRole() should return \"Engineer\"", () => {
  class getRole {
    constructor(){

      this.role = "Engineer";
      const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser", role);
      expect(e.getRole()).toBe(role);
    }
  }
});

test("Can get GitHub username via getGithub()", () => {
  class getGitHub {
    constructor(){

      this.user = "GitHubUser";
      const e = new Engineer("Foo", 1, "test@test.com", user);
      expect(this.getGithub()).toBe(user);
    }
  }
});
const message = require("./myTest");
describe("My message", () => {
  test("works", () => {
    expect(messaage.message()).toEqual("TestingCiCd");
  });
});

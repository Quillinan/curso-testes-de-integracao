import calculator from "calculator";

describe("Calculator", () => {
  it("returns 3 for 2 and 1 params", () => {
    const resultado = calculator.sum(2, 1);
    expect(resultado).toEqual(3);
  });
  it("returns 1 for 3 and 2 params", () => {
    const resultado = calculator.sub(3, 2);
    expect(resultado).toEqual(1);
  });
  it("returns 2 for 6 and 3 params", () => {
    const resultado = calculator.div(6, 3);
    expect(resultado).toEqual(2);
  });
  it("returns 4 for 2 and 2 params", () => {
    const resultado = calculator.mul(2, 2);
    expect(resultado).toEqual(4);
  });
});

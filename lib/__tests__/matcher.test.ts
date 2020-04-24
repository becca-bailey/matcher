import matcher, { match } from "../matcher";

describe("matcher", () => {
  it("matches truthy values", () => {
    expect(matcher({ one: "one", two: "two" }, { one: true, two: "two" })).toBe(
      true
    );
  });

  it("does not match unequal values", () => {
    expect(matcher({ one: "one" }, { one: 1 })).toBe(false);
  });

  it("matches a function that returns true", () => {
    expect(matcher({ two: 2 }, { two: (value) => value % 2 === 0 })).toBe(true);
  });

  it("does not match a function that returns false", () => {
    expect(matcher({ two: 2 }, { two: (value) => value === 1 })).toBe(false);
  });

  describe("with helpers", () => {
    it("matches on any value", () => {
      expect(matcher({ one: "one" }, { one: match.anything() })).toBe(true);
    });

    it("matches by type", () => {
      expect(
        matcher(
          { one: "one", two: 2 },
          { one: match.any(String), two: match.any(Number) }
        )
      ).toBe(true);
    });
  });
});

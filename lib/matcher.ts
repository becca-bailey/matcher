type MatcherFn = (value: any) => boolean;
type ValueType = boolean | string | number | MatcherFn;

type Matchers = {
  [key: string]: ValueType;
};

function anything(): MatcherFn {
  return () => true;
}

function any(
  matchType: String | Number | Boolean | Object | Function
): MatcherFn {
  return function (value: ValueType) {
    switch (matchType) {
      case String: {
        return typeof value === "string";
      }
      case Number: {
        return typeof value === "number";
      }
      case Boolean: {
        return typeof value === "boolean";
      }
      case Object: {
        return typeof value === "object";
      }
      case Function: {
        return typeof value === "function";
      }
      default: {
        return false;
      }
    }
  };
}

export const match = {
  anything,
  any,
};

function isMatcherFn(matchValue: ValueType): matchValue is MatcherFn {
  return typeof matchValue === "function";
}

function matcher(objectToMatch: object, matchers: Matchers) {
  return Object.entries(objectToMatch)
    .map(([key, value]) => {
      const matchValue = matchers[key];
      if (isMatcherFn(matchValue)) {
        return matchValue(value);
      }
      if (typeof matchValue === "boolean") {
        return !!value === !!matchValue;
      }
      return value === matchValue;
    })
    .every((value) => value);
}

export default matcher;

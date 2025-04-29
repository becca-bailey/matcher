# Simple Type Matcher

A lightweight pattern matching utility for JavaScript/TypeScript that provides flexible object matching capabilities.

## Installation

```bash
npm install simple-type-matcher
# or
yarn add simple-type-matcher
```

## Features

- Simple and intuitive API
- TypeScript support
- Flexible matching patterns
- Built-in matcher helpers
- Support for custom matching functions

## Usage

### Basic Matching

```typescript
import matcher from "simple-type-matcher";

// Simple value matching
matcher({name: "John"}, {name: "John"}); // true
matcher({age: 25}, {age: 30}); // false

// Truthy value matching
matcher({active: true}, {active: true}); // true
matcher({active: "yes"}, {active: true}); // true
```

### Using Matcher Helpers

```typescript
import matcher, {match} from "simple-type-matcher";

// Match any value
matcher({data: "anything"}, {data: match.anything()}); // true

// Match by type
matcher(
  {name: "John", age: 25},
  {
    name: match.any(String),
    age: match.any(Number),
  }
); // true
```

### Custom Matching Functions

```typescript
import matcher from "simple-type-matcher";

// Using custom matching functions
matcher({number: 42}, {number: (value) => value % 2 === 0}); // true

matcher({text: "Hello"}, {text: (value) => value.length > 10}); // false
```

## API Reference

### `matcher(objectToMatch: object, matchers: Matchers): boolean`

The main function that performs the matching operation.

- `objectToMatch`: The object to be matched against
- `matchers`: An object containing the matching rules
- Returns: `true` if all matchers pass, `false` otherwise

### Matcher Helpers

#### `match.anything(): MatcherFn`

Returns a matcher function that always returns `true`.

#### `match.any(type: String | Number | Boolean | Object | Function): MatcherFn`

Returns a matcher function that checks if a value is of the specified type.

## TypeScript Support

The library is written in TypeScript and includes type definitions. The main types are:

- `MatcherFn`: A function that takes any value and returns a boolean
- `ValueType`: Union type of possible matcher values
- `Matchers`: Type for the matchers object

## License

MIT © Becca Bailey

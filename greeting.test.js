const Greeting = require("./greeting");

describe("GreetingKata", () => {
  test("Requirement 1", () => {
    const greeting = new Greeting();

    const result = greeting.greet("nicolás");

    expect(result).toBe("Hello, nicolás.");
  });

  test("Requirement 2", () => {
    const greeting = new Greeting();

    const result = greeting.greet(null);

    expect(result).toBe("Hello, my friend.");
  });

  test("Requirement 3", () => {
    const greeting = new Greeting();

    const result = greeting.greet("NICOLÁS");

    expect(result).toBe("HELLO NICOLÁS!");
  });

  test("Requirement 4", () => {
    const greeting = new Greeting();

    const result = greeting.greet(["Nicolás", "Pepe"]);

    expect(result).toBe("Hello, Nicolás and Pepe.");
  });

  test("Requirement 5", () => {
    const greeting = new Greeting();

    const result = greeting.greet([
      "Nicolás",
      "Pepe",
      "Juan",
      "Pedro",
      "Tomás",
    ]);

    expect(result).toBe("Hello, Nicolás, Pepe, Juan, Pedro, and Tomás.");
  });

  test("Requirement 6", () => {
    const greeting = new Greeting();

    const result = greeting.greet(["Amy", "BRIAN", "Charlotte"]);

    expect(result).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
  });

  test("Requirement 7", () => {
    const greeting = new Greeting();

    const result = greeting.greet(["Bob", "Charlie, Dianne"]);

    expect(result).toBe("Hello, Bob, Charlie, and Dianne.");
  });

  test("Requirement 8", () => {
    const greeting = new Greeting();

    const result = greeting.greet(["Bob", '"Charlie, Dianne"']);

    expect(result).toBe("Hello, Bob and Charlie, Dianne.");
  });
});

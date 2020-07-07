class Greeting {
  greet = (name) => {
    if (Array.isArray(name)) {
      let findcomma = name.find((elem) => elem.includes(","));

      if (findcomma !== undefined) {
        let nameaux;
        try {
          nameaux = JSON.parse(findcomma);
        } catch (e) {
          nameaux = null;
        }

        if (nameaux === null) {
          let split = findcomma.split(",");
          let filter = name.filter((elem) => !elem.includes(","));

          return (
            "Hello, " +
            filter.join(", ") +
            ", " +
            split[0].trim() +
            ", and " +
            split[1].trim() +
            "."
          );
        } else {
          return `Hello, ${name[0]} and ${nameaux}.`;
        }
      } else {
        if (name.length > 2) {
          let find = name.find((elem) => elem === elem.toUpperCase());
          if (find !== undefined) {
            let filter = name.filter((elem) => elem !== elem.toUpperCase());
            return `Hello, ${filter[0]} and ${filter[1]}. AND HELLO ${find}!`;
          }

          return name.reduce((text, elem, index) => {
            if (name.length === index + 1) return text + "and " + elem + ".";
            return text + elem + ", ";
          }, "Hello, ");
        }

        if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
      }
    }
    return name === null
      ? "Hello, my friend."
      : name === name.toUpperCase()
      ? `HELLO ${name.toUpperCase()}!`
      : `Hello, ${name}.`;
  };
}

module.exports = Greeting;

import CaughtPokemonController from "./Controllers/CaughtPokemonController.js";
import PokemonController from "./Controllers/PokemonController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  pokemonController = new PokemonController()
  caughtPokemonController = new CaughtPokemonController()
}

window["app"] = new App();

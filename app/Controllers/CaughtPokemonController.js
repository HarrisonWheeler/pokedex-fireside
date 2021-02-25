import { ProxyState } from "../AppState.js"
import { caughtPokemonService } from "../Services/CaughtPokemonService.js"

function drawCaughtPokemon(){
  let caughtPokemon = ProxyState.myPokemon
  let template = ''
  caughtPokemon.forEach(c => template += `<li onclick="app.pokemonController.setActivePokemon('${c.name}')">${c.name}</li>` )
  document.getElementById('caught-pokemon').innerHTML = template
}

export default class CaughtPokemonController {
  constructor(){
    ProxyState.on("myPokemon", drawCaughtPokemon)
  }

  catchPokemon(){
    caughtPokemonService.catchPokemon()
  }


}
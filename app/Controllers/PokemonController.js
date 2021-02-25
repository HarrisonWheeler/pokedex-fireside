import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"


function drawWildPokemon(){
  let wildPokemon = ProxyState.wildPokemon
  let template = ""
  wildPokemon.forEach(p => template += `<li onclick="app.pokemonController.setActivePokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('wild-pokemon').innerHTML = template
}


function drawActivePokemon(){
  
}
export default class PokemonController{
constructor(){
  ProxyState.on("wildPokemon", drawWildPokemon)
}

setActivePokemon(name){
  pokemonService.setActivePokemon(name)
}

}
import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"


function drawWildPokemon(){
  let wildPokemon = ProxyState.wildPokemon
  let template = ""
  wildPokemon.forEach(p => template += `<li onclick="app.pokemonController.setActivePokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('wild-pokemon').innerHTML = template
}


function drawActivePokemon(){
  if(ProxyState.activePokemon){
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
  } else {
    document.getElementById('active-pokemon').innerHTML = ""
  }
}
export default class PokemonController{
constructor(){
  ProxyState.on("wildPokemon", drawWildPokemon)
  ProxyState.on("activePokemon", drawActivePokemon)
}

setActivePokemon(name){
  pokemonService.setActivePokemon(name)
}

catchPokemon(){
  pokemonService.catchPokemon()
}

}
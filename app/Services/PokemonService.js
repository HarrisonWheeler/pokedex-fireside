import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js"


class PokemonService{

  constructor(){
    this.getWildPokemon()
  }

  async getWildPokemon(){
    try {
      const res = await api.get("")
      ProxyState.wildPokemon = res.data.results
      console.log(ProxyState.wildPokemon);
    } catch (error) { 
      console.error(error);
    }
  }

  async setActivePokemon(name){
    try {
      const res = await api.get(name)
      ProxyState.activePokemon = res.data
      console.log(ProxyState.activePokemon);
    } catch (error) {
      console.error(error);
    }
  }

}

export const pokemonService = new PokemonService()
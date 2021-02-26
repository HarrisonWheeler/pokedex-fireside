import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { api } from "./AxiosService.js"


class PokemonService{

  constructor(){
    this.getWildPokemon()
  }

  async getWildPokemon(){
    try {
      const res = await api.get("")
      ProxyState.wildPokemon = res.data.results
    } catch (error) { 
      console.error(error);
    }
  }

  async setActivePokemon(name, isCaught){
    try {
      const res = await api.get(name)
      ProxyState.activePokemon = new Pokemon(res.data, isCaught)
      console.log(ProxyState.activePokemon);
    } catch (error) {
      console.error(error);
    }
  }

}

export const pokemonService = new PokemonService()
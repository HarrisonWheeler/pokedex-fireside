import { sandboxApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";


class CaughtPokemonService{
  constructor(){
    this.getCaughtPokemon()
  }

  async catchPokemon(){
    try {
      const res = await sandboxApi.post("", ProxyState.activePokemon)
      console.log(res.data);
      ProxyState.myPokemon = res.data
    } catch (error) {
      console.error(error);
    }
  }

  async getCaughtPokemon(){
    try {
      const res = await sandboxApi.get("")
      console.log(res.data);
      ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
      console.log(ProxyState.myPokemon)
    } catch (error) {
      console.error(error);
    }
  }

  
}

export const caughtPokemonService = new CaughtPokemonService()
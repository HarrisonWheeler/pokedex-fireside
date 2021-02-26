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
      this.getCaughtPokemon()
    } catch (error) {
      console.error(error);
    }
  }

  async getCaughtPokemon(){
    try {
      const res = await sandboxApi.get("")
      console.log(res.data);
      ProxyState.myPokemon = res.data.map(p => new Pokemon(p, true))
      console.log(ProxyState.myPokemon)
    } catch (error) {
      console.error(error);
    }
  }

  async releasePokemon(){
    try {
      const res = await sandboxApi.delete("" + ProxyState.activePokemon._id)
      console.log(res);
      this.getCaughtPokemon()
      ProxyState.activePokemon = null
    } catch (error) {
      console.error(error);
    }
  }

  async setActivePokemon(id, isCaught){
    try {
      const res = await sandboxApi.get(id)
      ProxyState.activePokemon = new Pokemon(res.data, isCaught)
      console.log(ProxyState.activePokemon);
    } catch (error) {
      console.error(error);
    }
  }

  
}

export const caughtPokemonService = new CaughtPokemonService()
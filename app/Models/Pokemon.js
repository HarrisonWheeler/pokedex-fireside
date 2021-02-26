

export default class Pokemon{

  constructor(data, isCaught = false){
    this.name = data.name
    this.img = data.img || data.sprites.front_shiny
    this.description = data.description || "Unknown"
    this.weight = data.weight
    this.height = data.height
    this.types = data.type
    this.user = "harrison"
    this.isCaught = isCaught
    this._id = data._id
  }


  get Template(){
    return /*html*/ `
    <div class="card">
        <div class="card-body">
           <h4 class="card-title">${this.name}</h4>
           <img src="${this.img}" alt=""/>
           <p class="card-text">${this.description}</p>
           <p class="card-text">Weight: ${this.weight}</p>
           <p class="card-text">Height: ${this.height}</p>
           <p class="card-text">Type(s): ${this.Type}</p>
        </div>
        ${this.Buttons}
     </div>
    `
  }

  get Buttons(){
    if(this.isCaught){
      return /*html*/ `
      <button class="btn btn-danger" onclick="app.caughtPokemonController.releasePokemon()">Release Pokemon</button>
      `
    } else {
      return /*html*/ `
      <button class="btn btn-success" onclick="app.caughtPokemonController.catchPokemon()">Catch Pokemon</button>
      `
    }
  }

  get Types(){
    let template = ''
    this.types.forEach(t => template += t.type.name)
  }


}
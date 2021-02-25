

export default class Pokemon{

  constructor(data){
    this.name = data.name
    this.img = data.sprites.front_shiny
    this.description = data.description || "Unknown"
    this.weight = data.weight
    this.height = data.height
    this.type = data.types[0].type.name //this may cause issues with other data being formatted differently
    this.user = "harrison"
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
           <p class="card-text">Type(s): ${this.type}</p>
        </div>
     </div>
    `
  }

}
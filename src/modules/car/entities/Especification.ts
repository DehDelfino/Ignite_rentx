import {v4 as uuidV4} from 'uuid'

class Especification{
  private id?: string
  private name: string
  private description: string
  private created_at: Date

  constructor(name, description){

    if(!this.id){
      this.id = uuidV4()
    }

    this.name = name
    this.description = description
    this.created_at = new Date()
  }


  getName():string{
    return this.name
  }

  getDescription():string{
    return this.description
  }

  getCreated_at():Date{
    return this.created_at
  }



}

export {Especification}
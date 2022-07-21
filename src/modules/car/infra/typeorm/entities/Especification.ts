import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("Especifications")
class Especification {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor(name, description) {

    if (!this.id) {
      this.id = uuidV4()
    }

    this.name = name
    this.description = description
    this.created_at = new Date()
  }


  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  getCreated_at(): Date {
    return this.created_at
  }



}

export { Especification }
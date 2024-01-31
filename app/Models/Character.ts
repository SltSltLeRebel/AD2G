import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export type Ability =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'wisdom'
  | 'intelligence'
  | 'charisma'
export type skills =
  | 'acrobatics'
  | 'animal_Handling'
  | 'arcana'
  | 'athletics'
  | 'deception'
  | 'history'
  | 'insight'

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  // Abilities score value
  @column()
  public abilities: Record<Ability, number>
  //save throws abilities mastery
  @column()
  public abilityMastery: Ability[]

  @column()
  public skills: {
    name: string
    mastery: boolean
    ability: string
  }[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

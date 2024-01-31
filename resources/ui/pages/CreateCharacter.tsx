import React, { useRef } from 'react'
import AbilityField from '../components/AbilityField'
import SkillField from '../components/SkillField'
import Field from '../components/Field'
import RacesSelector from '../components/RacesField'
import Selector from '../components/SelectField'
import { Inertia } from '@inertiajs/inertia'

var classes = require('../json/class.json')
var alignment = require('../json/alignement.json')
export default function CreateCharacter() {
  const [formValues, setFormValues] = React.useState<{
    name: string

    strength: number
    dexterity: number
    constitution: number
    wisdom: number
    intelligence: number
    charisma: number
  }>({
    name: '',

    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    })
  }
  const RandomizeAbilityValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const ability = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0,
    }
    Object.keys(ability).forEach((key) => {
      const randomArray: number[] = []
      for (let idx = 0; idx < 4; idx++) {
        randomArray.push(Math.round(Math.random() * 6))
      }
      randomArray.sort().reverse()
      ability[key] = randomArray[0] + randomArray[1] + randomArray[2]
    })
    setFormValues({ ...formValues, ...ability })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    Inertia.post('/characters/store', formValues)
  }

  return (
    <div className="sm:max-w-5xl mx-auto m-4">
      <form className="space-y-2" onSubmit={handleSubmit}>
        {/* Global Information */}
        <h2 className="text-3xl font-bold text-primary">Global information</h2>
        <Field id="name" label="Name" value={formValues.name} onChange={handleChange} />
        <div className="grid sm:grid-cols-3 gap-4">
          <RacesSelector />
          <Selector
            id="Alignment"
            label="Alignment"
            list={alignment.map((alignmentItems: any) => alignmentItems.label)}
          ></Selector>
          <Selector id="background" label="Background" list={['choose a background']}></Selector>
          <Selector
            id="classes"
            list={classes.map((element: any) => element.name)}
            label="Classes"
          />
          <Field type="number" min={0} id="Xp" label="Experience Point"></Field>
          <Field id="playerName" label="Player Name"></Field>
        </div>
        {/* Ability Score */}
        <div className="display flex inline-block items-center">
          <h2 className="text-3xl font-bold text-primary">Ability</h2>
          <button
            className="bg-primary flex justify-center items-center py-2 my-1 mx-2 px-2 text-white hover:opacity-75 transition-opacity rounded-md "
            onClick={(e) => RandomizeAbilityValue(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dice"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
              <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
              <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <AbilityField
            id="strength"
            min={0}
            max={20}
            placeholder="0"
            label="Strength"
            value={formValues.strength}
            onChange={handleChange}
          />

          <AbilityField
            id="dexterity"
            min={0}
            max={20}
            placeholder="0"
            label="Dexterity"
            value={formValues.dexterity}
            onChange={handleChange}
          />

          <AbilityField
            id="constitution"
            min={0}
            max={20}
            placeholder="0"
            label="Constitution"
            value={formValues.constitution}
            onChange={handleChange}
          />

          <AbilityField
            id="wisdom"
            min={0}
            max={20}
            placeholder="0"
            label="Wisdom"
            value={formValues.wisdom}
            onChange={handleChange}
          />

          <AbilityField
            id="intelligence"
            min={0}
            max={20}
            placeholder="0"
            label="Intelligence"
            value={formValues.intelligence}
            onChange={handleChange}
          />

          <AbilityField
            id="charisma"
            min={0}
            max={20}
            placeholder="0"
            label="Charisma"
            value={formValues.charisma}
            onChange={handleChange}
          />
        </div>
        {/* Skills */}
        <h2 className="text-3xl font-bold text-primary">Skills</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <SkillField ability="Strength" skillList={['Athletics']} />
          <SkillField
            ability={'Dexterity'}
            skillList={['Acrobatics', 'Sleight of Hand', 'Stealth']}
          />
          <SkillField ability="Constitution" />
          <SkillField
            ability="Wisdom"
            skillList={['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']}
          />
          <SkillField
            ability="Intelligence"
            skillList={['Arcana', 'History', 'Investigation', 'Nature', 'Religion']}
          />
          <SkillField
            ability="Charisma"
            skillList={['Deception', 'Intimidation', 'Performance', 'Persuasion']}
          />
        </div>
        <button type="submit">Create</button>{' '}
        <div className="flex items-end">
          <button
            type="button"
            className="bg-primary flex items-center space-x-2 px-3 py-1.5 text-white hover:opacity-75 transition-opacity rounded-md mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Export</span>
          </button>
        </div>
      </form>
    </div>
  )
}

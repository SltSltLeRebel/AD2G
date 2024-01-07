import React from 'react'
import AbilityField from '../components/AbilityField'
import SkillField from '../components/SkillField'
import Field from '../components/Field'
import RacesSelector from '../components/RacesField'
import Selector from '../components/SelectField'

var classes = require('../json/class.json')
var alignment = require('../json/alignement.json')
export default function CreateCharacter() {
  const [formValues, setFormValues] = React.useState<{
    strength: number
    dexterity: number
    constitution: number
    wisdom: number
    intelligence: number
    charisma: number
  }>({
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

  return (
    <div className="sm:max-w-5xl mx-auto m-4">
      <form className="space-y-2">
        {/* Global Information */}
        <h2 className="text-3xl font-bold text-primary">Global information</h2>
        <Field id="name" label="Name"></Field>
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
        <h2 className="text-3xl font-bold text-primary">Ability</h2>

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
            ability={'Dextew  rity'}
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

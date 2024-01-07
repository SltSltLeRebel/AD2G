import * as React from 'react'

var races = require('../json/races.json')
import Selector from './SelectField'

export default function RacesSelector() {
  return (
    <div className="max-w-fit">
      <label htmlFor="RacesSelector" className="block text-sm font-medium text-gray-700">
        Races and level
      </label>
      <Selector
        id="RacesAndLevel"
        list={races.map((racesItem: any) => {
          return racesItem.name
        })}
        className="rounded-r-none inline-flex"
        children={
          <input
            id="level"
            className="col-span-2 -ml-px relative items-center justify-center space-x-2 px-4 py-2 w-14 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        }
      />
    </div>
  )
}

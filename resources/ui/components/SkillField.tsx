import * as React from 'react'

export interface SkillProps {
  skillList?: Array<string>
  ability: string
}

interface State {}

export default function SkillField({ skillList, ability }: SkillProps) {
  return (
    <div className="border border-gray-300 bg-white rounded-md">
      <div className=" text-center flex items-center border-b border-gray-300 bg-gray-50 rounded-t-md">
        <h3 className="space-x-1 px-2 py-1 font-semibold text-grey ">{ability}</h3>
        <input
          id={ability}
          type="checkbox"
          className="h-4 w-4 px-2 py-1 text-primary border-gray-300 rounded  focus:ring-primary focus:ring-1 hover:opacity-50 transition-opacity "
        />
      </div>
      <div className="grid grid-cols-2 gap-4 px-2 py-1">
        {skillList &&
          skillList.map((element: string) => {
            return (
              <div className="flex items-center space-x-1 ">
                <input
                  id={element}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-gray-300 rounded  focus:ring-primary focus:ring-1 hover:opacity-50 transition-opacity "
                />
                <label htmlFor={element}>{element}</label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

import * as React from 'react'
import Field, { FieldProps } from './Field'
import computeAbilityModifier from '../utils/computeAbilityModifier'

export interface AbilityFieldProps extends Omit<FieldProps, 'type'> {}

export default function AbilityField(props: AbilityFieldProps) {
  const abilityModifier = computeAbilityModifier(props.value as number)
  return (
    <Field {...props} type="number" inputClassName="ability" className="rounded-r-none">
      <div className="-ml-px relative inline-flex items-center justify-center space-x-2 px-4 py-2 w-14 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span className="text-center">{Number.isNaN(abilityModifier) ? '' : abilityModifier}</span>
      </div>
    </Field>
  )
}

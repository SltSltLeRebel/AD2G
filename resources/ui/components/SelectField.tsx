import * as React from 'react'

export interface selectProps {
  id: string
  list: Array<string>
  className?: string
  label?: string
}

export default function Selector({
  id,
  list,
  className,
  label,
  children,
}: React.PropsWithChildren<selectProps>) {
  return (
    <div className="max-w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="mt-1 flex">
        <select
          id={id}
          className={
            'shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md ' +
            className
          }
        >
          {list.map((name: string) => {
            return (
              <option id={name} value={name} className="col-span-12">
                {name}
              </option>
            )
          })}
        </select>
        {children}
      </div>
    </div>
  )
}

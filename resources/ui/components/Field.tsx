import * as React from 'react'

export interface FieldProps {
  id: string
  min?: number
  max?: number
  type?: string
  label?: string
  placeholder?: string
  className?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Field({
  id,
  min,
  max,
  type,
  label,
  placeholder,
  children,
  value,
  className,
  onChange,
}: React.PropsWithChildren<FieldProps>) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="mt-1 flex">
        <input
          type={type}
          name={id}
          id={id}
          min={min}
          max={max}
          className={
            'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md  ' +
            className
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {children}
      </div>
    </div>
  )
}

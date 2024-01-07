import '~/css/app.css'
import React from 'react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { createRoot } from 'react-dom/client'
import { InertiaProgress } from '@inertiajs/progress'

// Initialize Inertia.
InertiaProgress.init()

createInertiaApp({
  resolve: (name) => require(`./pages/${name}.tsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

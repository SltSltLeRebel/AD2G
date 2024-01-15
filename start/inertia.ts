/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors') || {}
  },
  flashMessages: (ctx) => {
    return ctx.session.flashMessages.all() || {}
  },
  user: (ctx) => {
    return ctx.auth.user || null
  },
  qs: (ctx) => {
    return ctx.request.qs()
  },
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))

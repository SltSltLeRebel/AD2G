import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})

Route.get('/characters/create', async ({ inertia }) => {
  return inertia.render('CreateCharacter')
}).as('characters.create')

Route.get('/sign-in', ({ inertia }) => {
  return inertia.render('SignIn')
}).as('sign_in')

Route.post('/sign-in', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    await auth.use('web').attempt(email, password)
    return response.redirect().toRoute('characters.create')
  } catch {
    return response.redirect().back()
  }
})

Route.get('/sign-up', ({ inertia }) => {
  return inertia.render('SignUp')
}).as('sign_up')

Route.post('/sign-up', async ({ auth, request, response }) => {
  const validationSchema = schema.create({
    email: schema.string({ trim: true }, [rules.email()]),
    password: schema.string({ trim: true }, [
      rules.minLength(8),
      rules.confirmed('confirmPassword'),
    ]),
  })

  const { email, password } = await request.validate({ schema: validationSchema })

  try {
    const user = await User.create({ email, password })
    await auth.use('web').login(user)
    return response.redirect().toRoute('characters.create')
  } catch {
    return response.redirect().back()
  }
})

Route.post('/ignore', ({ auth, request, response }) => {
  response.redirect().toRoute('characters.create')
})

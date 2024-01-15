import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})

Route.get('/characters/create', async ({ inertia }) => {
  return inertia.render('CreateCharacter')
}).as('characters.create')

Route.get('/sign-in', 'SignInController.show')
Route.post('/sign-in', 'SignInController.handle')
Route.get('/sign-up', 'SignUpController.show')
Route.post('/sign-up', 'SignUpController.handle')

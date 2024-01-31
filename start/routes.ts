import Route from '@ioc:Adonis/Core/Route'
import Character, { Ability } from 'App/Models/Character'
import puppeteer from 'puppeteer'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})

Route.get('/characters', async ({ inertia }) => {
  const characters = await Character.all()
  return inertia.render('Characters', { characters })
}).as('characters.index')

Route.get('/characters/create', async ({ inertia }) => {
  return inertia.render('CreateCharacter')
}).as('characters.create')

Route.post('/characters/store', async ({ request, inertia }) => {
  const name = request.input('name')
  const abilities = request.only([
    'strength',
    'dexterity',
    'constitution',
    'wisdom',
    'intelligence',
    'charisma',
  ])

  const character = new Character()
  character.name = name
  character.abilities = abilities as Record<Ability, number>
  await character.save()

  // https://github.com/eidellev/inertiajs-adonisjs?tab=readme-ov-file#external-redirects
  console.log('character', character.id)
  return inertia.location(`/characters/${character.id}/sheet`)
}).as('characters.store')

Route.get('/sign-in', 'SignInController.show')
Route.post('/sign-in', 'SignInController.handle')
Route.get('/sign-up', 'SignUpController.show')
Route.post('/sign-up', 'SignUpController.handle')

Route.get('/characters/:id/sheet', async ({ params, view }) => {
  const character = await Character.findOrFail(params.id)
  return view.render('sheet', { character })
}).as('characters.sheet')
Route.get('/characters/:id/sheet/export', async ({ params, response }) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.emulateMediaType('screen')
  await page.goto(`http://localhost:3333/characters/${params.id}/sheet`)
  const pdf = await page.pdf({ format: 'a4' })
  await browser.close()
  response.header('Content-type', 'application/pdf')
  return response.send(pdf)
}).as('characters.sheet.export')

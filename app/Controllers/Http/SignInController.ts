import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignInController {
  public async show({ inertia }: HttpContextContract) {
    return inertia.render('SignIn')
  }

  public async handle({ auth, request, response, session }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      return response.redirect().toRoute('characters.create')
    } catch {
      session.flash('errors.auth', 'Invalid login or password')
      return response.redirect().back()
    }
  }
}

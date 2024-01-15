import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import SignUpValidator from 'App/Validators/SignUpValidator'

export default class SignUpController {
  public async show({ inertia }: HttpContextContract) {
    return inertia.render('SignUp')
  }

  public async handle({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(SignUpValidator)

    try {
      const user = await User.create({ email, password })
      await auth.use('web').login(user)
      return response.redirect().toRoute('characters.create')
    } catch {
      return response.redirect().back()
    }
  }
}

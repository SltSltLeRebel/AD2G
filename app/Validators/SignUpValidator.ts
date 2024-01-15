import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignUpValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [
      rules.minLength(8),
      rules.confirmed('confirmPassword'),
    ]),
  })

  public messages: CustomMessages = {
    'email.required': 'Email is required',
    'email.email': 'Email is invalid',
    'email.unique': 'Email is already taken',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 8 characters',
    'confirmPassword.confirmed': 'Password confirmation does not match',
  }
}

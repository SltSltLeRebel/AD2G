import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function SignIn() {
  return (
    <div>
      <Link href="/sign-up">Sign up</Link>
      <form action="/sign-in" method="POST">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

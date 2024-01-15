import React from 'react'
import { useForm, usePage } from '@inertiajs/inertia-react'

export default function SignUp() {
  const page = usePage()

  const { data, setData, post, processing } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  })

  function submit(e: React.SyntheticEvent) {
    e.preventDefault()
    post('/sign-up')
  }

  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-bg_color">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex items-center flex-col">
              <img className="text-center h-48 w-auto" src="mainLogo.svg" alt="AD2G-MainLogo" />
              <h2 className="mt-6 text-3xl font-extrabold text-red-400">Become an adventurer</h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={submit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-red-200">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-200 focus:border-primary sm:text-sm"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                      />
                    </div>

                    <p className="text-center text-red-600">
                      {page.props.errors.email?.length && page.props.errors.email[0]}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-red-200">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-200 focus:border-red-200 sm:text-sm"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                      />
                      <p className="text-center text-red-600">
                        {page.props.errors.password?.length && page.props.errors.password[0]}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-red-200"
                    >
                      Confirm password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-200 focus:border-red-200 sm:text-sm"
                        value={data.confirmPassword}
                        onChange={(e) => setData('confirmPassword', e.target.value)}
                      />
                      <p className="text-center text-red-600">
                        {page.props.errors.confirmPassword?.length &&
                          page.props.errors.confirmPassword[0]}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-200 bg-primary hover:bg-grey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <a
                  href="/characters/create"
                  className="text-decoration-line underline text-red-200 hover:text-red-500 cursor-pointer"
                >
                  Ignore your destiny
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img className="absolute inset-0 h-full w-full object-cover" src="/bg.png" alt="" />
        </div>
      </div>
    </>
  )
}

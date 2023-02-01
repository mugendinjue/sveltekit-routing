import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  // unexpected errors can contain sensitive information
  // so the error message and stack trace is not exposed to users
  // and shows a more generic error message { message: "Internal error" }
  throw new Error('Yikes! 🤫')

  // expected errors are created using the `error` helper
  // which sets the status and renders a `+error.svelte` component
  // and returns the status and error message
  throw error(404, { message: 'Yikes! 📢' })
}


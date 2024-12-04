'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(email: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: email, 
    options: {
      shouldCreateUser: false,
    },
  });

  if (error) {
    redirect('/error')
  }
}

export async function verifyOtp(
  email: string, 
  token: string
) {
  const supabase = await createClient();
  await supabase.auth.verifyOtp({
    email: email, token: token, type: "email"
  });

  revalidatePath('/', 'layout')
  redirect('/')
}

// export async function signup(formData: FormData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/auth/login");
};
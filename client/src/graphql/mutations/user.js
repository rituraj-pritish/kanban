import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation(
    $name: string!,
    $email: string!,
    $password: string!,
    $confirm_password: string!
  ) {
      signUp (
      name: $name,
      email: $email,
      password: $password,
      confirm_password: $confirm_password
  )}
`
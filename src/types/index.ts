export type UserType = {
  id: number,
  email: string,
  password: string
}

export type AuthData = {
  email: string,
  password: string
}

export type PostType = {
  body: string,
  author_id: any
}
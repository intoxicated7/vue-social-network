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

export type LikeType = {
  user_id: string,
  post_id: number
}
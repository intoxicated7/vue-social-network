import { LikeType } from '../types'
import useDatabase from './sb-hooks-db'

export default function useLikes() {
  const { db } = useDatabase()

  const getLike = async ({ user_id, post_id }: LikeType) => {
    return await db
      .from('likes')
      .insert([
        { user_id: user_id, likeable_id: post_id }
      ])
  }

  const likesCount = async (post_id: number) => {
    const { data } = await db
      .from('likes')
      .select('*')
      .match({ likeable_id: post_id })
    
    return data
  }

  return { getLike, likesCount }
}
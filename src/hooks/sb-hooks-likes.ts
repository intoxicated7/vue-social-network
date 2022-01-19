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

  const hasLikedStatus = async () => {
    
  }

  return { getLike }
}
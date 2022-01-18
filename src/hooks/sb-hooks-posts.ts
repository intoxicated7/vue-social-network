import useDatabase from './sb-hooks-db'
import { ref } from 'vue'
import { PostType } from '../types'

const posts = ref(null)

export default function usePosts() {

  const { db } = useDatabase()

  const posts = db
    .from('posts')
    .select(`id, body, created_at, author_id`)
    .order('created_at')

  const addPost = async ({ body, author_id }: PostType) => {
    return await db
      .from('posts')
      .insert([
        { body: body, author_id: author_id}
      ])
  }

  const myPosts = async () => {
    return await db
      .from('posts')
      .select('id, body, created_at, author_id')
      .eq('id', 6)
  }

  return { posts, addPost, myPosts }
}

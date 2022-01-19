import useDatabase from './sb-hooks-db'
import { ref } from 'vue'
import { PostType } from '../types'

const posts = ref(null)

export default function usePosts() {

  const { db } = useDatabase()

  const getPosts = async () => {
    const { data } = await db
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    return data
  }

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
      .select('id')
  }

  return { getPosts, addPost, myPosts }
}

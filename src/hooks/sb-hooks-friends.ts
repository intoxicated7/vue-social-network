import useDatabase from './sb-hooks-db'

export default function useFriends() {
  const { db } = useDatabase()

  const getFriends = async (user_id: string) => {
    const { data } = await db
      .from('friends')
      .select('*')
      .match({ user_id: user_id })

    return data
  }

  return { getFriends }
}
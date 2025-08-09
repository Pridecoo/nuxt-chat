export function useAuth() {
  const {loggedIn, user, session, fetch, clear} = useUserSession()

  async function logout() {
    await clear()
    await navigateTo('/login')
  } 

  const isAuthenticated = computed(() => loggedIn.value)
  const userName = computed(() => {
    if (!user.value) return 'User'
    const { name, email } = user.value as GitHubUser
    return name || email || 'User'
  })

  const userAvatar = computed(() => {
  if (!user.value) return null
    const { avatar } = user.value as GitHubUser
    return avatar || null 
  })

   const userEmail = computed(() => {
    if (!user.value) return null
    const { email } = user.value as GitHubUser
    return email || null
  })

  return {
    isAuthenticated,
    user: readonly(user),
    session: readonly(session),

    refresh: fetch,
    logout,

    userName,
    userAvatar,
    userEmail
  }
}

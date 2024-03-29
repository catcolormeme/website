export const getDeploymentUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://catcolor.live'
  }
  if (process.env.VERCEL_ENV === 'preview') {
    return process.env.VERCEL_URL
  }
  return 'http://localhost:3000'
}

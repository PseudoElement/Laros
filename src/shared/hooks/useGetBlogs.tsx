import { useEffect, useState } from 'react'
import { BlogPayload, BlogsQueryParams } from '../types/blogs'
import { getBlogs } from '../api/routes/blogs'

export const useGetBlogs = (
  params: Partial<BlogsQueryParams>
): [BlogPayload[], boolean, (reset?: boolean) => void] => {
  const [blogs, setBlogs] = useState<BlogPayload[]>([])
  const [isReady, setIsReady] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleReady = (reset?: boolean) => {
    setIsReady(true)
  }

  useEffect(() => {
    const loadBlogs = async () => {
      setIsReady(false)
      try {
        setIsLoading(true)
        const { data } = await getBlogs(params)
        setBlogs(data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    if (isReady) loadBlogs()
  }, [isReady, params])

  return [blogs, isLoading, handleReady]
}

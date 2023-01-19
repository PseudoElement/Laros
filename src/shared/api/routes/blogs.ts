import { AxiosPromise } from 'axios'
import { api } from '..'
import { endpoints } from '../endpoints'
import { BlogPayload, BlogsQueryParams } from '../../types/blogs'
import { AxiosPaginatedResponse } from '../../types/api'

export const getBlogs = (
  params: Partial<BlogsQueryParams>
): AxiosPromise<AxiosPaginatedResponse<BlogPayload>> => {
  return api.get(endpoints.blogs.all, { params })
}

export const getPostById = (id: number): AxiosPromise<BlogPayload> => {
  return api.get(endpoints.blogs.one(id))
}

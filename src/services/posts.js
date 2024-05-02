// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4000/posts/',
    prepareHeaders:(headers)=>{
      console.log("HI prepheaders")
      headers.set("token",window.localStorage.getItem('token'))
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAllPostss: builder.query({
      query: () => ``,
    }),
    addNewPost:builder.mutation({
      query:(newPost)=>{
        return {
          url:'',
          method:'POST',
          body:newPost
        }
      }
    }),
    deletePost:builder.mutation({
      query:(id)=>{
        return {
          url:id,
          method:'DELETE'
        }
      }
    }),
    updatePost:builder.mutation({
      query:(post)=>{
        return {
          url:`${post.id}`,
          method:'PUT',
          body:post
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUpdatePostMutation,useDeletePostMutation,useLazyGetAllPostssQuery,useGetAllPostssQuery,useAddNewPostMutation } = postsApi
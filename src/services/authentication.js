// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4000/users/',
    prepareHeaders:(headers)=>{
      console.log("HI prepheaders")
      headers.set("authorisation","edupoly")
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ``,
    }),
    userlogin:builder.mutation({
      query:(user)=>{
        return {
          url:'',
          method:'POST',
          body:user
        }
      }
    }),
    // deletePost:builder.mutation({
    //   query:(id)=>{
    //     return {
    //       url:id,
    //       method:'DELETE'
    //     }
    //   }
    // }),
    // updatePost:builder.mutation({
    //   query:(post)=>{
    //     return {
    //       url:`${post.id}`,
    //       method:'PUT',
    //       body:post
    //     }
    //   }
    // })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserloginMutation } = authApi
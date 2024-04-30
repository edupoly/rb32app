import React, { useEffect } from 'react'
import { useAddNewPostMutation, useDeletePostMutation, useGetAllPostssQuery, useLazyGetAllPostssQuery } from '../../services/posts'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Posts() {
    var {isLoading,data:posts}=useGetAllPostssQuery();
    var [getPostsFn]=useLazyGetAllPostssQuery();
    var [addPostFn]=useAddNewPostMutation()
    var [delPostFn] = useDeletePostMutation();
    var navigate = useNavigate();
    var postForm = useFormik({
        initialValues:{
            views:0,
            title:""
        },
        onSubmit:(values)=>{
            addPostFn(values).then((res)=>{
                console.log("res::",res)
                getPostsFn()
            })
        }
    })
    function deletePost(ind){
        delPostFn(ind).then(()=>{
            getPostsFn();
        }).catch()
    }
    function editPost(post){
        navigate("/updatePost",{state:post})
    }
    useEffect(()=>{
        getPostsFn();
    })
  return (
    <div className='border border-2 m-2 p-2 border-info'>
        <h1>Posts</h1>
        <form onSubmit={postForm.handleSubmit}>
            <input type="text" {...postForm.getFieldProps("title")}/>
            <br />
            <input type="text" {...postForm.getFieldProps("views")}/>
            <br />
            <button>Add Post</button>
        </form>
        <ul>
            {
                posts?.map((post)=>{
                    return <li>
                            {post.title}
                            <button onClick={()=>{editPost(post)}}>Edit</button>
                            <button onClick={()=>{deletePost(post.id)}}>Delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Posts
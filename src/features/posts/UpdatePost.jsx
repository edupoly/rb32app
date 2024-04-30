import React from 'react'
import { useUpdatePostMutation } from '../../services/posts'
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePost() {
    var x = useLocation();
    var navigate = useNavigate()
    var [updatePostFn] = useUpdatePostMutation();
    var updatePostForm = useFormik({
        initialValues:{
            id:x.state.id,
            views:x.state.views,
            title:x.state.title
        },
        onSubmit:(values)=>{
            updatePostFn(values)
            navigate("/posts")
        }
    })
    
  return (
    <div className='border border-2 m-2 p-2 border-warning'>
        <h1>Update Post</h1>
        <form onSubmit={updatePostForm.handleSubmit}>
            <input type="text" {...updatePostForm.getFieldProps("title")}/>
            <br />
            <input type="text" {...updatePostForm.getFieldProps("views")}/>
            <br />
            <button>Update Post</button>
        </form>
        
    </div>
  )
}

export default UpdatePost
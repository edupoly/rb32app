import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
function StudentForm() {
    var sform = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("Thammi chusko").max(5,"pedda perlu vaddu"),
            lastname:Yup.string().required()
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div className='border border-2 border-success m-2 p-2'>
        {/* <b>StudentForm-{JSON.stringify(sform.errors)}</b> */}
        {/* <b>StudentForm-{JSON.stringify(sform.touched)}</b> */}
        <form onSubmit={sform.handleSubmit}>
            <input class={sform.touched.firstname && sform.errors?.firstname && "form-control is-invalid"} type="text" {...sform.getFieldProps("firstname")} placeholder='First Name'/>
            <div>
                {
                    sform.touched.firstname && sform.errors?.firstname
                }
            </div>
            <input type="text" name="lastname" value={sform.values.lastname} onChange={sform.handleChange} onBlur={sform.handleBlur} placeholder='Last Name'/>
            <div>
                {
                   sform.touched.lastname && sform.errors?.lastname
                }
            </div>
            <input type="text" name="age" value={sform.values.age} onChange={sform.handleChange} onBlur={sform.handleBlur} placeholder='Age'/>
            <br />
            <button>Register Here</button>
        </form>
    </div>
  )
}

export default StudentForm
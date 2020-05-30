import React from 'react'
import {
    Formik,
    Form,
    Field,
    ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from '../TextError'

const initialValues = {
    name: 'Cecep',
    email: '',
    channel: '',
    comments: '',
    address: ''
}

const onSubmit = values => {
    console.log('-> Form data', values)
}

const validationSchema = Yup.object({
    name : Yup.string().required('Required!'),
    email : Yup.string().email('Invalid email format').required('Required'),
    channel : Yup.string().required('required'),
})

function YoutubeForm() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form >

                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field 
                    type='text'
                    id='name'
                    name='name'
                    />
                    <ErrorMessage name='name' component={TextError}/>
                    {/* {formik.touched.name && 
                     formik.errors.name && 
                     <div className='error'>{formik.errors.name}</div>} */}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field 
                    type='text'
                    id='email'
                    name='email'
                    />
                    <ErrorMessage name='email' >
                        {errorMsg => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
                    {/* {formik.touched.email &&
                     formik.errors.email &&
                     <div className='error'>{formik.errors.email}</div>} */}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                    type='text'
                    id='channel'
                    name='channel'
                    placeholder='Youtube Channel'
                    />
                    <ErrorMessage name='channel'/>
                    {/* {formik.touched.channel &&
                     formik.errors.channel &&
                     <div className='error'>{formik.errors.channel}</div>} */}
                </div>

                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    {/* <Field as='textarea' id='comments' name='comments' /> */}
                    <Field as='textarea' id='comments' name='comments' />
                </div>

                <div className='form-control'>
                   <label htmlFor='adress'>Address</label>
                   <Field name='adress'> 
                    {props => {
                         const {field, form, meta} = props
                         console.log('-> Render props', props)
                        return (
                            <div>
                                <input type='text' id='address' { ...field} />
                                {meta.touched && <div>{meta.error}</div>}
                            </div>
                        )
                     }}
                   </Field>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm

'use client'

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ContactSchema} from "../contact/components/ContactSchema";
import emailJs from '@emailjs/browser'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    // Form Handler
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm({resolver: zodResolver(ContactSchema)})

    const sendEmailHandler = async (formData) => {
        try {
            // Create object from formData to connect EmailJS form
            const paramsFromFormData = {
                from_name: formData.name,
                message: formData.message,
                email: formData.email,
            }
            await emailJs.send('service_ys9784h', 'template_43fp0v1', paramsFromFormData, 'GCZdE1VMjsT3fvwyb');
            toast.success('Thanks for emailing me!')
            setValue('name', '')
            setValue('email', '')
            setValue('message', '')

        } catch (e) {
            toast.error('Error. Please, try again.')
            console.log(e.message)

        }
    }


    return (
        <div className='flex flex-col items-center gap-2 mt-20 lg:mt-0'>
            <ToastContainer
                autoClose={2000}
                position={toast.POSITION.BOTTOM_RIGHT}
            />
            <h2 className='text-3xl lg:text-6xl font-extrabold mb-14'>Or just type here</h2>
            <form className='w-full' onSubmit={handleSubmit(sendEmailHandler)}>
                <div className='w-full lg:flex lg:gap-4'>
                    <fieldset className='pl-4 border-[1px] border-black rounded-md overflow-hidden w-full'>
                        <legend className='px-2'>
                            your name
                        </legend>
                        <input
                            type="text"
                            className='pr-4 pb-4 outline-none'
                            {...register('name')}
                        />
                    </fieldset>
                    <fieldset className='pl-4 border-[1px] border-black rounded-md overflow-hidden w-full'>
                        <legend className='px-2'>
                            your email
                        </legend>
                        <input
                            type="text"
                            className='pr-4 pb-4 outline-none'
                            {...register('email')}
                        />
                    </fieldset>
                </div>
                <div className='lg:mt-4'>
                    <fieldset className='pl-4 border-[1px] border-black rounded-md overflow-hidden w-full'>
                        <legend className='px-2'>
                            your message
                        </legend>
                        <textarea
                            className='pr-4 pb-4 outline-none resize-none h-48 w-full'
                            {...register('message')}
                        />
                    </fieldset>
                </div>
                <input
                    className='mt-7 bg-black py-1.5 px-8 rounded text-yellow-500'
                    type="submit"
                    value='Submit'/>
            </form>
        </div>
    )
}
export default ContactForm;


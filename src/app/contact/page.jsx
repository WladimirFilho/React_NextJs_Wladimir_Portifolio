import {BsGithub} from "react-icons/bs";
import {ImLinkedin2} from "react-icons/im";
import Link from "next/link";
import ContactForm from "../contact/ContactForm";


export const Contact = () => {
    return (
        <section className='lg:flex lg:flex-row justify-around w-full'>

            {/* Get in touch section */}
            <div className='flex flex-col items-center gap-2'>
                <h2 className='text-3xl lg:text-6xl font-extrabold lg:mb-20 mb-7 w-full text-center'>Get in Touch</h2>
                <div className='flex flex-col justify-between items-center h-full'>
                    <div className='flex flex-col gap-2 items-center'>
                        <h3 className='flex'>wladimir@gmail.com</h3>
                        <h3>+61 449 162 083</h3>
                    </div>
                    <div className='flex gap-5 justify-center items-center lg:mt-20 mt-7'>
                        <Link href='https://www.linkedin.com/in/wladimir-wiazowski-filho-70879030/'><ImLinkedin2
                            className='lg:text-3xl text-2xl'/></Link>
                        <Link href='https://github.com/WladimirFilho'><BsGithub
                            className='lg:text-3xl text-2xl'/></Link>
                    </div>
                </div>
            </div>

            {/* Form section */}
            <ContactForm/>

        </section>
    )
}
export default Contact
import {z} from 'zod'

export const ContactSchema = z.object({
    name: z.string().min(1, 'You wont tell me your name!!! I do not believe that!'),
    email: z.string().min(3, 'You have to write your email. We should definitely email each other!').email(),
    message: z.string().min(1, 'Now tell me about you!'),
})
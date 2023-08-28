import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "You have to write your name!"),
  email: z.string().min(3, "You have to write your email!").email(),
  message: z.string().min(1, "You have to write your message!"),
});

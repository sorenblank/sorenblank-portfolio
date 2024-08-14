'use server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-template';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.'
    }),
  email: z
    .string({
      required_error: 'Please enter a valid email.'
    })
    .email(),
  message: z.string().max(380).min(4),
  projectType: z.enum(['Website', 'WebApp', 'Other'], {
    required_error: 'Please select a project type.'
  }),
  projectBudget: z.enum(['<2K', '2-5K', '5-10K', '>10K'], {
    required_error: 'Please select a project budget.'
  })
});

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export async function contactSubmit(prevState: any, formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      projectType: formData.get('projectType'),
      projectBudget: formData.get('projectBudget')
    });

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Please check your entries and try again.'
      };
    }

    const { name, email, message, projectType, projectBudget } =
      validatedFields.data;

    if (!EMAIL_FROM || !EMAIL_TO) {
      return {
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      };
    }

    const { data: res, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Message from ${name} on Portfolio`,
      react: ContactEmail({ name, email, message, projectType, projectBudget })
    });

    if (error) {
      return {
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      };
    }

    return {
      success: true,
      message: 'Thank you for reaching out! Your message has been sent.'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again later.'
    };
  }
}

'use client';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';

import { toast } from '@/components/ui/use-toast';

import ContactForm from './contact-form';

import { contact } from '@/components/sections/contact/config';

import { contactSubmit } from '@/app/actions';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
  };
}

const initialState: ValidationErrors = {
  success: false,
  errors: {},
  message: ''
};

function Contact() {
  const [state, formAction] = useFormState(contactSubmit, initialState);

  useEffect(() => {
    if (state?.message === '') return;

    toast({
      title: state?.message
    });
  }, [state]);

  // Function to chunk the social icons array
  const chunkArray = (arr: any, size: any) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const socialIconRows = chunkArray(contact.socials, 5);

  return (
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="contact"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Send me a message using
              the form.
            </p>
            <p className="text-muted-foreground">
              Email:{' '}
              <a className="hover:underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div className="space-y-2">
              {socialIconRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex space-x-1">
                  {row.map(({ Icon, href }: any, index: any) => (
                    <a
                      target="_blank"
                      href={href}
                      className={cn(
                        buttonVariants({ variant: 'outline', size: 'icon' }),
                        'text-md gap-1'
                      )}
                      key={index}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <form action={formAction} className="grid gap-4">
            <ContactForm state={state} />
          </form>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;

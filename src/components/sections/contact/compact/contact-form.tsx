'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { LoaderCircleIcon } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
    projectType?: string[] | undefined;
    projectBudget?: string[] | undefined;
  };
}

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {
  state: ValidationErrors;
  resetForm: boolean;
}

export default function ContactForm({ state, resetForm }: ContactFormProps) {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (resetForm) {
      const form = document.querySelector('form') as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  }, [resetForm]);

  return (
    <>
      <div className="grid gap-3">
        <Label
          htmlFor="name"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.name && 'text-red-500 dark:text-red-900'
          )}
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Jane Doe"
          required
          disabled={pending}
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.name}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="email"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.email && 'text-red-500 dark:text-red-900'
          )}
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="jane@example.com"
          required
          type="email"
          disabled={pending}
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.email}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="projectType"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.projectType && 'text-red-500 dark:text-red-900'
          )}
        >
          Project Type
        </Label>
        <Select name="projectType" disabled={pending}>
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Website">Website</SelectItem>
            <SelectItem value="WebApp">WebApp</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.projectType}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="projectBudget"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.projectBudget && 'text-red-500 dark:text-red-900'
          )}
        >
          Project Budget (USD)
        </Label>
        <Select name="projectBudget" disabled={pending}>
          <SelectTrigger>
            <SelectValue placeholder="Select project budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<2K">&lt;2K</SelectItem>
            <SelectItem value="2-5K">2-5K</SelectItem>
            <SelectItem value="5-10K">5-10K</SelectItem>
            <SelectItem value=">10K">&gt;10K</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.projectBudget}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="message"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.message && 'text-red-500 dark:text-red-900'
          )}
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          className="min-h-[140px]"
          placeholder={
            'Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!'
          }
          required
          disabled={pending}
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.message}
        </p>
      </div>

      <Button type="submit" disabled={pending}>
        {pending && <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />}
        Submit
      </Button>
    </>
  );
}

import React, { useState } from 'react';
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { budgetOptions, serviceOptions } from '../../data/site';
import { Button } from '../ui/Button';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  description: ''
};

const fieldClasses =
'w-full rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-[14.5px] text-white placeholder:text-mist-faint/70 transition-colors duration-200 ease-premium focus:border-accent/60 focus:outline-none focus:ring-0';

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim()))
  errors.phone = 'Enter a valid phone number, or leave it blank.';
  if (!values.service) errors.service = 'Select the service you need.';
  if (!values.budget) errors.budget = 'Select an indicative budget range.';
  if (values.description.trim().length < 20)
  errors.description = 'A little more detail helps — at least 20 characters.';
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (key: keyof FormState) => (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      // Replace with a POST to your API endpoint.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setValues(initialState);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border border-aqua/30 bg-aqua/[0.06] p-8">
        
        <CheckCircle2Icon className="h-6 w-6 text-aqua" aria-hidden="true" />
        <h3 className="text-[20px] font-medium tracking-tight text-white">Inquiry received</h3>
        <p className="max-w-md text-[14px] leading-relaxed text-mist-dim">
          Thank you — we will review your project and reply within one business day, usually with two
          or three clarifying questions and an indicative approach.
        </p>
        <Button onClick={() => setStatus('idle')} variant="secondary" size="sm">
          Send another inquiry
        </Button>
      </div>);

  }

  const errorList = Object.values(errors).filter(Boolean);

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5" id="form">
      {status === 'error' && errorList.length > 0 &&
      <div
        role="alert"
        className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/[0.07] p-4 text-[13.5px] text-red-200">
        
          <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Please correct {errorList.length} field{errorList.length > 1 ? 's' : ''} below.</span>
        </div>
      }

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            className={fieldClasses}
            placeholder="Jane Fernando" />
          
        </Field>
        <Field label="Company" name="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update('company')}
            className={fieldClasses}
            placeholder="Company name" />
          
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            className={fieldClasses}
            placeholder="you@company.com" />
          
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            className={fieldClasses}
            placeholder="+94 77 000 0000" />
          
        </Field>
        <Field label="Service required" name="service" error={errors.service} required>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={update('service')}
            aria-invalid={Boolean(errors.service)}
            className={fieldClasses}>
            
            <option value="">Select a service</option>
            {serviceOptions.map((option) =>
            <option key={option} value={option} className="bg-ink-800">
                {option}
              </option>
            )}
          </select>
        </Field>
        <Field label="Budget range" name="budget" error={errors.budget} required>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={update('budget')}
            aria-invalid={Boolean(errors.budget)}
            className={fieldClasses}>
            
            <option value="">Select a range</option>
            {budgetOptions.map((option) =>
            <option key={option} value={option} className="bg-ink-800">
                {option}
              </option>
            )}
          </select>
        </Field>
      </div>

      <Field label="Project description" name="description" error={errors.description} required>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={update('description')}
          aria-invalid={Boolean(errors.description)}
          className={`${fieldClasses} resize-y`}
          placeholder="What are you trying to achieve, and what is getting in the way today?" />
        
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ?
          <span className="inline-flex items-center gap-2">
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </span> :

          'Send Project Inquiry'
          }
        </Button>
        <p className="text-[12.5px] text-mist-faint">
          We reply within one business day. No sales sequences.
        </p>
      </div>
    </form>);

}

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, name, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[12.5px] font-medium text-mist-dim">
        {label}
        {required && <span className="ml-1 text-accent-soft">*</span>}
      </label>
      {children}
      {error &&
      <p className="text-[12px] text-red-300" role="alert">
          {error}
        </p>
      }
    </div>);

}
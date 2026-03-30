'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas';

const projectTypes = [
  'Commercial / Ad',
  'Documentary',
  'Corporate Video',
  'Non-Profit',
  'Our Food Legacy',
  'Other',
];

const budgetRanges = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [serverError, setServerError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError('');

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData);

    const result = contactFormSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
        <p className="text-brand-silver">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field name="firstName" label="First Name" error={errors.firstName} required />
        <Field name="lastName" label="Last Name" error={errors.lastName} required />
      </div>

      <Field name="email" label="Email" type="email" error={errors.email} required />
      <Field name="company" label="Company" error={errors.company} />

      {/* Project type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full bg-brand-dark border border-brand-gray/40 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
        >
          <option value="">Select a project type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-2">
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full bg-brand-dark border border-brand-gray/40 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
        >
          <option value="">Select a range</option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell Us About Your Project <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-brand-dark border border-brand-gray/40 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none resize-y"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-red-400 text-sm">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={20} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-brand-dark border border-brand-gray/40 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

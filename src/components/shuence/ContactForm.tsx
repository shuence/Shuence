import { useState, useEffect } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
    subject: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  // Validate form on input change
  useEffect(() => {
    const errors = {
      name: touched.name && !formData.name ? 'Name is required' : '',
      email: touched.email ? validateEmail(formData.email) : '',
      message: touched.message && !formData.message ? 'Message is required' : '',
      subject: touched.subject && !formData.subject ? 'Please select a subject' : '',
    };

    setFormErrors(errors);
  }, [formData, touched]);

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const isFormValid = () => {
    return !formErrors.name && !formErrors.email && !formErrors.message && !formErrors.subject;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to trigger validation
    setTouched({
      name: true,
      email: true,
      message: true,
      subject: true,
    });

    setError('');

    // Check if form is valid
    if (!isFormValid()) {
      setError('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: '',
      });

      setTouched({
        name: false,
        email: false,
        message: false,
        subject: false,
      });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit the form. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark:bg-card-dark rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-md dark:border-border/30 md:p-8">
      <h3 className="dark:text-foreground-dark mb-6 text-2xl font-bold text-foreground">
        Send a Message
      </h3>

      {isSubmitted ? (
        <div className="mb-4 rounded-md border border-green-500/30 bg-green-500/10 p-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <Check size={28} className="text-green-600 dark:text-green-400" />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
            Message sent successfully!
          </h4>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-sm font-medium text-primary hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="mb-4 flex items-start gap-3 rounded-md border border-red-500/30 bg-red-500/10 p-4">
              <AlertCircle
                size={20}
                className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400"
              />
              <div>
                <p className="mb-0.5 font-medium text-red-700 dark:text-red-400">
                  There was a problem
                </p>
                <p className="text-sm text-red-600/80 dark:text-red-400/80">{error}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border px-3 py-2 ${formErrors.name ? 'border-red-400 dark:border-red-500/70' : 'border-border dark:border-border/50'} dark:bg-background-dark rounded-md bg-background transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                  placeholder="John Doe"
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                />
                {formErrors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500 dark:text-red-400">
                    {formErrors.name}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border px-3 py-2 ${formErrors.email ? 'border-red-400 dark:border-red-500/70' : 'border-border dark:border-border/50'} dark:bg-background-dark rounded-md bg-background transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                  placeholder="john@example.com"
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                />
                {formErrors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500 dark:text-red-400">
                    {formErrors.email}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border px-3 py-2 ${formErrors.subject ? 'border-red-400 dark:border-red-500/70' : 'border-border dark:border-border/50'} dark:bg-background-dark rounded-md bg-background transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                aria-invalid={!!formErrors.subject}
                aria-describedby={formErrors.subject ? 'subject-error' : undefined}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Project Collaboration">Project Collaboration</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-500 dark:text-red-400">
                  {formErrors.subject}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`w-full border px-3 py-2 ${formErrors.message ? 'border-red-400 dark:border-red-500/70' : 'border-border dark:border-border/50'} dark:bg-background-dark rounded-md bg-background transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                placeholder="Your message here..."
                aria-invalid={!!formErrors.message}
                aria-describedby={formErrors.message ? 'message-error' : undefined}
              ></textarea>
              {formErrors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500 dark:text-red-400">
                  {formErrors.message}
                </p>
              )}
              <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
                {formData.message.length} characters
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-2 rounded-md px-6 py-2.5 font-medium transition-all duration-300 ${
                isSubmitting
                  ? 'cursor-not-allowed bg-primary/70'
                  : 'bg-primary shadow-lg hover:bg-primary/90 hover:shadow-primary/25'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

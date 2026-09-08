import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-2">
          <i className="fa-solid fa-circle-check text-base"></i>
          <span>{t('contact.form.success')}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-theme-primary mb-1.5">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact.form.namePlaceholder')}
            className="w-full px-4 py-3 rounded-xl border border-theme-color bg-theme-secondary text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-(--primary-color) transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-theme-primary mb-1.5">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.emailPlaceholder')}
            className="w-full px-4 py-3 rounded-xl border border-theme-color bg-theme-secondary text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-(--primary-color) transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-theme-primary mb-1.5">
          {t('contact.form.subject')}
        </label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder={t('contact.form.subjectPlaceholder')}
          className="w-full px-4 py-3 rounded-xl border border-theme-color bg-theme-secondary text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-(--primary-color) transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-theme-primary mb-1.5">
          {t('contact.form.message')}
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contact.form.messagePlaceholder')}
          className="w-full px-4 py-3 rounded-xl border border-theme-color bg-theme-secondary text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-(--primary-color) transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-theme-brand text-white font-semibold text-sm sm:text-base theme-shadow hover:bg-(--brand-dark) transition-all hover:scale-102 active:scale-95 disabled:opacity-50 cursor-pointer"
      >
        <i className="fa-solid fa-paper-plane text-sm"></i>
        <span>{status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}</span>
      </button>
    </form>
  );
}

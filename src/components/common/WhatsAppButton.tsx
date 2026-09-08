import { contactInfo } from '../../data/portfolioData';

export function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo no WhatsApp"
      title="Fale comigo no WhatsApp"
      className="fixed bottom-6 right-20 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#20ba5a]"
    >
      <i className="fa-brands fa-whatsapp text-2xl"></i>
    </a>
  );
}

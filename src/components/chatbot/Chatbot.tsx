import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import type { ChatMessage } from '../../types'

export function Chatbot() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'init-1',
      sender: 'bot',
      text: t('chatbot.greeting'),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isOpen, messages])

  const handleToggle = () => {
    setIsOpen(prev => {
      const next = !prev
      if (next) {
        setHasUnread(false)
      }
      return next
    })
  }

  const generateBotReply = (query: string): string => {
    const q = query.toLowerCase().trim()

    if (['oi', 'olá', 'ola', 'hello', 'hi', 'hey', 'bom dia', 'boa tarde', 'boa noite'].some(w => q.includes(w))) {
      return t('chatbot.responses.greeting')
    }

    if (['obrigado', 'obrigada', 'valeu', 'thanks', 'thank you', 'vlw'].some(w => q.includes(w))) {
      return t('chatbot.responses.thanks')
    }

    if (
      ['habilidade', 'skill', 'react', 'angular', 'java', 'spring', 'typescript', 'tecnologia', 'ferramenta', 'stack'].some(w => q.includes(w))
    ) {
      return t('chatbot.responses.skills')
    }

    if (
      ['experiência', 'experiencia', 'experience', 'trabalho', 'cepein', 'fema', 'carreira', 'job', 'work'].some(
        w => q.includes(w),
      )
    ) {
      return t('chatbot.responses.experience')
    }

    if (['projeto', 'project', 'dashboard', 'website', 'portfólio', 'portfolio'].some(w => q.includes(w))) {
      return t('chatbot.responses.projects')
    }

    if (['contato', 'contact', 'email', 'telefone', 'whatsapp', 'phone', 'linkedin'].some(w => q.includes(w))) {
      return t('chatbot.responses.contact')
    }

    return t('chatbot.responses.fallback')
  }

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim()
    if (!text) return

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
    }

    setMessages(prev => [...prev, userMsg])
    setInputMessage('')

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: generateBotReply(text),
      }
      setMessages(prev => [...prev, botMsg])
    }, 700)
  }

  const handleQuickQuestion = (type: 'skills' | 'experience' | 'projects' | 'contact') => {
    const questions: Record<string, string> = {
      skills: language === 'pt' ? 'Quais são suas habilidades técnicas?' : 'What are your technical skills?',
      experience:
        language === 'pt' ? 'Conte sobre sua experiência profissional' : 'Tell me about your professional experience',
      projects: language === 'pt' ? 'Quais projetos você já desenvolveu?' : 'What projects have you developed?',
      contact: language === 'pt' ? 'Como posso entrar em contato?' : 'How can I get in touch?',
    }

    handleSendMessage(questions[type])
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-137.5 h-130 bg-theme-card border border-theme-color rounded-2xl theme-shadow flex flex-col overflow-hidden animate-fadeIn">
          <div className="p-4 bg-theme-brand text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fa-solid fa-robot text-base"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{t('chatbot.title')}</h4>
                <span className="flex items-center gap-1.5 text-[11px] text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t('chatbot.status')}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar chat"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white"
            >
              <i className="fa-solid fa-xmark text-base"></i>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-theme-secondary text-sm">
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-theme-brand text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl whitespace-pre-line text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-theme-brand text-white rounded-br-none shadow-sm'
                      : 'bg-theme-card border border-theme-color text-theme-primary rounded-bl-none theme-shadow'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div className="pt-2 flex flex-wrap gap-1.5">
              <button
                onClick={() => handleQuickQuestion('skills')}
                className="px-2.5 py-1.5 rounded-lg border border-theme-color bg-theme-card text-xs font-semibold text-theme-primary hover:border-(--primary-color) hover:text-(--primary-color) transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-code text-[10px] mr-1.5 text-(--primary-color)"></i>
                {t('chatbot.btn.skills')}
              </button>
              <button
                onClick={() => handleQuickQuestion('experience')}
                className="px-2.5 py-1.5 rounded-lg border border-theme-color bg-theme-card text-xs font-semibold text-theme-primary hover:border-(--primary-color) hover:text-(--primary-color) transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-briefcase text-[10px] mr-1.5 text-(--primary-color)"></i>
                {t('chatbot.btn.experience')}
              </button>
              <button
                onClick={() => handleQuickQuestion('projects')}
                className="px-2.5 py-1.5 rounded-lg border border-theme-color bg-theme-card text-xs font-semibold text-theme-primary hover:border-(--primary-color) hover:text-(--primary-color) transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-diagram-project text-[10px] mr-1.5 text-(--primary-color)"></i>
                {t('chatbot.btn.projects')}
              </button>
              <button
                onClick={() => handleQuickQuestion('contact')}
                className="px-2.5 py-1.5 rounded-lg border border-theme-color bg-theme-card text-xs font-semibold text-theme-primary hover:border-(--primary-color) hover:text-(--primary-color) transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-envelope text-[10px] mr-1.5 text-(--primary-color)"></i>
                {t('chatbot.btn.contact')}
              </button>
            </div>

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={e => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="p-3 bg-theme-card border-t border-theme-color flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              placeholder={t('chatbot.placeholder')}
              className="flex-1 px-3.5 py-2 rounded-xl border border-theme-color bg-theme-secondary text-xs sm:text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-(--primary-color)"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              aria-label="Enviar mensagem"
              className="w-9 h-9 rounded-xl bg-theme-brand text-white flex items-center justify-center hover:bg-(--brand-dark) transition-colors disabled:opacity-40 cursor-pointer"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        </div>
      )}

      <button
        onClick={handleToggle}
        aria-label="Abrir assistente virtual Neo IA"
        title="Neo IA"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-theme-brand text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-theme-brand text-white font-bold text-[11px] flex items-center justify-center border-2 border-theme-card animate-pulse">
            1
          </span>
        )}
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-xl`}></i>
      </button>
    </>
  )
}

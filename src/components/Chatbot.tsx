import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { ChatMessage } from '../types';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: `Assalam-o-Alaikum! Welcome to Spice Kitchen G-6. How can I assist you with our location, contact numbers, or menu today?`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Suggested prompt questions requested by prompt
  const suggestedQueries = [
    { label: '📍 Restaurant Location', query: 'What is the restaurant location?' },
    { label: '📞 Phone Number', query: 'What is the phone number?' },
    { label: '🧭 Get Directions', query: 'How can I get directions?' },
    { label: '🍽️ Explore Menu', query: 'Where can I see the menu?' },
    { label: '✉️ Contact Details', query: 'How can I contact the restaurant?' },
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');

    // Formulate response strictly using verified information only
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botResponse = '';
      let actionBtn: { label: string; url: string } | undefined = undefined;

      if (lower.includes('location') || lower.includes('where') || lower.includes('address') || lower.includes('road')) {
        botResponse = `Spice Kitchen G-6 is located on Khayaban-e-Suhrawardy Road, Islamabad, Pakistan.`;
        actionBtn = {
          label: 'View on Google Maps',
          url: 'https://www.google.com/maps/search/?api=1&query=Khayaban-e-Suhrawardy+Road+Islamabad+Pakistan',
        };
      } else if (lower.includes('phone') || lower.includes('number') || lower.includes('call') || lower.includes('mobile')) {
        botResponse = `You can call Spice Kitchen G-6 directly at ${RESTAURANT_DATA.phones[0]} or ${RESTAURANT_DATA.phones[1]}.`;
        actionBtn = {
          label: `Call ${RESTAURANT_DATA.primaryPhone}`,
          url: `tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`,
        };
      } else if (lower.includes('direction') || lower.includes('reach') || lower.includes('navigate') || lower.includes('map')) {
        botResponse = `To reach us, head to Khayaban-e-Suhrawardy Road in Islamabad. You can use Google Maps for instant turn-by-turn navigation.`;
        actionBtn = {
          label: 'Get Directions',
          url: 'https://www.google.com/maps/dir/?api=1&destination=Spice+Kitchen+G-6+Khayaban-e-Suhrawardy+Road+Islamabad+Pakistan',
        };
      } else if (lower.includes('menu') || lower.includes('food') || lower.includes('karahi') || lower.includes('biryani') || lower.includes('dish')) {
        botResponse = `We feature traditional Pakistani specialities such as Special Chicken Karahi, Dum Mutton Biryani, Charcoal Seekh Kababs, and freshly baked Tandoori Naan right on our website menu section. For daily fresh dishes and current availability, please give our kitchen a quick call!`;
        actionBtn = {
          label: 'Scroll to Featured Menu',
          url: '#menu',
        };
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('facebook')) {
        botResponse = `You can reach Spice Kitchen G-6 by phone at ${RESTAURANT_DATA.phones[0]} / ${RESTAURANT_DATA.phones[1]}, via email at ${RESTAURANT_DATA.email}, or visit our Facebook page with 1.1K followers.`;
        actionBtn = {
          label: 'Visit Facebook',
          url: RESTAURANT_DATA.facebookUrl,
        };
      } else {
        // Strict fallback for unverified details (prices, hours, delivery, reservations)
        botResponse = `For up-to-date details regarding today's fresh pricing, daily operating hours, seating, or special orders, please contact Spice Kitchen G-6 directly by phone at ${RESTAURANT_DATA.primaryPhone} or ${RESTAURANT_DATA.phones[1]}. Our team on Khayaban-e-Suhrawardy Road, Islamabad will be delighted to assist you!`;
        actionBtn = {
          label: `Call ${RESTAURANT_DATA.primaryPhone}`,
          url: `tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`,
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          actionButton: actionBtn,
        },
      ]);
    }, 300);
  };

  return (
    <aside aria-label="Restaurant assistant" className="fixed bottom-5 right-5 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          id="chatbot-floating-toggle"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open restaurant assistant"
          className="flex items-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] active:bg-[#8F240F] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus:outline-hidden"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="text-xs font-semibold tracking-wide">Restaurant Info</span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          id="chatbot-window"
          role="dialog"
          aria-label="Spice Kitchen G-6 Assistant"
          className="w-[90vw] sm:w-[380px] h-[500px] max-h-[82vh] bg-[#FAF8F5] rounded-2xl border border-[#E0D7C8] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="bg-[#242220] text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B9381E] flex items-center justify-center text-white shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide leading-none">
                  Spice Kitchen G-6
                </h4>
                <p className="text-[11px] text-[#B5AEA5] mt-1 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5" />
                  Verified Restaurant Guide
                </p>
              </div>
            </div>

            <button
              id="chatbot-close-btn"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="text-[#B5AEA5] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF8F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#B9381E] text-white rounded-br-xs'
                      : 'bg-white text-[#242220] border border-[#EAE3D6] shadow-2xs rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.actionButton && (
                    <a
                      href={msg.actionButton.url}
                      target={msg.actionButton.url.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (msg.actionButton?.url.startsWith('#')) {
                          setIsOpen(false);
                        }
                      }}
                      className="mt-2.5 inline-flex items-center space-x-1.5 bg-[#F4EDE2] hover:bg-[#EBE2D4] text-[#842A17] font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>{msg.actionButton.label}</span>
                      {msg.actionButton.url.startsWith('http') ? (
                        <ExternalLink className="w-3 h-3" />
                      ) : (
                        <Phone className="w-3 h-3" />
                      )}
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-2 bg-[#F3EDE3] border-t border-[#EAE3D6] overflow-x-auto whitespace-nowrap flex space-x-1.5 scrollbar-none">
            {suggestedQueries.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSendMessage(item.query)}
                className="text-[11px] font-medium bg-white hover:bg-[#FAF8F5] text-[#4D4740] px-2.5 py-1 rounded-full border border-[#D5CBC0] shrink-0 transition-colors shadow-2xs cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-[#EAE3D6] flex items-center space-x-2"
          >
            <input
              id="chatbot-input-field"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about location, phone, or menu..."
              className="flex-1 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-3 py-2 text-[#242220] placeholder-[#8A8277] focus:outline-hidden focus:border-[#B9381E]"
            />
            <button
              id="chatbot-send-btn"
              type="submit"
              aria-label="Send message"
              disabled={!inputValue.trim()}
              className="p-2 bg-[#B9381E] disabled:bg-[#D5CBC0] text-white rounded-xl transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}

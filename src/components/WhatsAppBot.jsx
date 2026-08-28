import React, { useState, useRef, useEffect } from 'react';
import './WhatsAppBot.css';

const QUICK_QUESTIONS = [
  {
    text: '🏫 What programs do you offer?',
    category: 'programs',
  },
  {
    text: '👶 What is the admission age?',
    category: 'age',
  },
  {
    text: '📍 Where are you located?',
    category: 'location',
  },
  {
    text: '⏰ What are the school timings?',
    category: 'timings',
  },
  {
    text: '📞 How can I contact admissions?',
    category: 'contact',
  },
];

const BOT_RESPONSES = {
  programs:
    'We offer Playgroup (2–3 Yrs), Pre-KG (3–4 Yrs), LKG (4–5 Yrs), UKG (5–6 Yrs), Day Care (from 1 Yr onwards), Summer Camp, and Evening Tuition (KG to 8th Std)! 🎨',

  age:
    'School programs are for children aged 2 to 6 years. Day Care is available for little ones from 1 year onwards. Admissions for 2026–27 are currently OPEN! ⭐',

  location:
    '📍 15C, Artha Royal Gardenia Phase 2, Raniammai 2nd Street, Sri Pachaiammai Nagar, Gerugambakkam, Chennai - 600128 (Opp. Kochar Arjun Garden).',

  timings:
    '⏰ School & Day Care Timings:\n• Monday to Friday: 8:30 AM – 7:00 PM\n• Saturday: 10:00 AM – 1:00 PM\n• Sunday: Closed',

  contact:
    '📞 You can call or WhatsApp us directly at +91 97917 51787 or email us at sunnybearspreschool@gmail.com.',

  default:
    'Thank you for reaching out! For detailed information, feel free to call or message us directly on WhatsApp at +91 97917 51787. 😊',
};

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to Sunny Bears Preschool! How can we help you today?',
      time: 'Just now',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  /*
    Controls whether quick questions are visible.

    true  = show question list
    false = hide question list and show
            "Ask Another Question" button
  */
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);

  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [messages, isOpen, showQuickQuestions]);

  /*
    Handle quick question click.

    Flow:
    Click Question
        ↓
    Add user question
        ↓
    Add bot answer
        ↓
    Hide question list
        ↓
    Show "Ask Another Question"
  */
  const handleQuestionSelect = (qText, category) => {
    const nowTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: qText,
      time: nowTime,
    };

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: BOT_RESPONSES[category] || BOT_RESPONSES.default,
      time: nowTime,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      botMsg,
    ]);

    setShowQuickQuestions(false);
  };

  // Show quick questions again
  const handleAskAnotherQuestion = () => {
    setShowQuickQuestions(true);

    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  /*
    Detect correct response
    for manually typed questions.
  */
  const getResponseCategory = (userQuery) => {
    const lower = userQuery.toLowerCase();

    if (
      lower.includes('program') ||
      lower.includes('course') ||
      lower.includes('class') ||
      lower.includes('offer')
    ) {
      return 'programs';
    }

    if (
      lower.includes('age') ||
      lower.includes('eligib') ||
      lower.includes('year') ||
      lower.includes('old')
    ) {
      return 'age';
    }

    if (
      lower.includes('location') ||
      lower.includes('address') ||
      lower.includes('where') ||
      lower.includes('place')
    ) {
      return 'location';
    }

    if (
      lower.includes('time') ||
      lower.includes('hour') ||
      lower.includes('schedule')
    ) {
      return 'timings';
    }

    if (
      lower.includes('phone') ||
      lower.includes('contact') ||
      lower.includes('call') ||
      lower.includes('number') ||
      lower.includes('admission')
    ) {
      return 'contact';
    }

    return null;
  };

  /*
    Handle manually typed question.
  */
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userQuery = inputValue.trim();

    const nowTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: userQuery,
      time: nowTime,
    };

    const responseCategory = getResponseCategory(userQuery);

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: responseCategory
        ? BOT_RESPONSES[responseCategory]
        : BOT_RESPONSES.default,
      time: nowTime,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      botMsg,
    ]);

    setInputValue('');

    setShowQuickQuestions(false);
  };

  return (
    <div className="whatsapp-bot-wrapper">

      {/* Floating WhatsApp Button */}
      <button
        className="whatsapp-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Assistant"
        title="Chat with Sunny Bears"
        type="button"
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="#ffffff"
        >
          <path d="M16 2a13 13 0 0 0-11 20L3 29l7-2a13 13 0 1 0 6-25zm0 24a11 11 0 0 1-5.5-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.5A11 11 0 1 1 16 26zm6-8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0a8 8 0 0 1-2.4-1.5 8.9 8.9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.4.3-.6s0-.4 0-.5l-.8-2c-.3-.7-.5-.7-.7-.7h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6 2.4 3.7 5.8 5.1c.8.4 1.4.6 1.9.8.8.2 1.5.2 2.1.1.7-.1 2.1-.9 2.4-1.7s.3-1.5.2-1.7c-.1-.1-.3-.2-.6-.3z" />
        </svg>

        <span className="unread-dot"></span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="whatsapp-chat-box">

          {/* Header */}
          <div className="chat-box-header">

            <div className="bot-avatar">
              <svg
                viewBox="0 0 100 100"
                width="38"
                height="38"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="#FBBF24"
                />

                <circle
                  cx="28"
                  cy="30"
                  r="13"
                  fill="#C06C28"
                />

                <circle
                  cx="72"
                  cy="30"
                  r="13"
                  fill="#C06C28"
                />

                <ellipse
                  cx="50"
                  cy="54"
                  rx="34"
                  ry="29"
                  fill="#C06C28"
                />

                <ellipse
                  cx="50"
                  cy="61"
                  rx="18"
                  ry="14"
                  fill="#FDE68A"
                />

                <ellipse
                  cx="50"
                  cy="52"
                  rx="7"
                  ry="5"
                  fill="#3B1E08"
                />
              </svg>
            </div>

            <div className="bot-status-info">
              <h4>Sunny Bears Bot 🧸</h4>
              <p>🟢 Replies instantly</p>
            </div>

            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              type="button"
            >
              ×
            </button>

          </div>

          {/* Scrollable Chat Area */}
          <div className="chat-messages-body">

            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-bubble-row ${message.sender}`}
              >
                <div className="chat-bubble">

                  <p
                    style={{
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {message.text}
                  </p>

                  <span className="bubble-time">
                    {message.time}
                  </span>

                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {showQuickQuestions && (
              <div className="quick-questions-wrapper">

                <p className="chip-prompt">
                  Ask a Question:
                </p>

                <div className="chips-list">

                  {QUICK_QUESTIONS.map((question, index) => (
                    <button
                      key={index}
                      type="button"
                      className="chip-btn"
                      onClick={() =>
                        handleQuestionSelect(
                          question.text,
                          question.category
                        )
                      }
                    >
                      {question.text}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Ask Another Question */}
            {!showQuickQuestions && (
              <div className="ask-another-wrapper">

                <button
                  type="button"
                  className="ask-another-btn"
                  onClick={handleAskAnotherQuestion}
                >
                  <span className="ask-another-icon">
                    💬
                  </span>

                  <span>
                    Ask Another Question
                  </span>
                </button>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Direct WhatsApp Button */}
          <a
            href="https://wa.me/919791751787?text=Hello%20Sunny%20Bears%20Preschool!%20I%20have%20an%20enquiry%20regarding%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="direct-whatsapp-link"
          >
            💬 Chat Directly on WhatsApp (+91 97917 51787)
          </a>

          {/* Input Footer */}
          <form
            className="chat-input-footer"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
              aria-label="Type your question"
            />

            <button
              type="submit"
              aria-label="Send message"
            >
              ➤
            </button>
          </form>

        </div>
      )}

    </div>
  );
};

export default WhatsAppBot;
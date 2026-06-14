import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Sparkles, X, Send, Bot, User, RefreshCw, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaste! 🙏 Welcome to PNS Hostel & PG. I am the **PNS Warden Bot**.\n\nAsk me anything about our room types, monthly rates, food times, check-in rules, or how to get a booking! I don't charge any security deposits or key charges anymore.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined quick questions for the user
  const quickQuestions = [
    "What are the room prices?",
    "Is washing machine free?",
    "Are there any deposits?",
    "What are the dinner times?",
    "How secure is the hostel?"
  ];

  // Auto scroll messages to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    setErrorText(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Build history payload for server-side Gemini API
      // Maps roles to 'user' and 'model'
      const historyPayload = [...messages, userMessage].map((m) => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: historyPayload })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error generating a response.');
      }

      const data = await response.json();
      
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.text || "I apologize, I didn't catch that. Could you request again?",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || 'Connecting to PNS Warden Bot offline. Please check back.');
    } finally {
      setIsTyping(false);
    }
  };

  const clearChatHistory = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: "Namaste! 🙏 Welcome back to PNS Hostel & PG. Ask me any details about accommodations, facilities, food, and we'll help get you set up!",
        timestamp: new Date()
      }
    ]);
    setErrorText(null);
  };

  const formatBotResponse = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Clean leading/trailing spaces for formatting check
      const trimmedLine = line.trim();
      const isBullet = trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ') || trimmedLine.startsWith('• ');
      
      let displayContent = line;
      if (isBullet) {
        // Strip bullet prefix
        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
          displayContent = trimmedLine.substring(2);
        } else if (trimmedLine.startsWith('• ')) {
          displayContent = trimmedLine.substring(2);
        }
      }

      // Format bold markdown (**text**) inside line
      const boldSegments = displayContent.split(/\*\*(.*?)\*\*/g);
      const textNodes = boldSegments.map((segment, seq) => {
        if (seq % 2 === 1) {
          return <strong key={seq} className="font-extrabold text-slate-900">{segment}</strong>;
        }
        return segment;
      });

      if (isBullet) {
        return (
          <li key={index} className="ml-4 list-disc text-sm text-slate-700 mb-1.5 leading-relaxed pl-1">
            {textNodes}
          </li>
        );
      }

      if (trimmedLine === '') {
        return <div key={index} className="h-3" />;
      }

      return (
        <p key={index} className="text-sm text-slate-700 leading-relaxed mb-2">
          {textNodes}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div id="ai-chat-trigger" className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center p-4 rounded-full shadow-2xl transition-colors cursor-pointer text-white relative group ${
            isOpen ? 'bg-slate-800 hover:bg-slate-900' : 'bg-teal-600 hover:bg-teal-700'
          }`}
          title="Virtual Warden Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-none" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 text-[9px] font-mono font-bold px-1 rounded-full animate-bounce">
                AI
              </span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-window"
            initial={{ opacity: 0, y: 35, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-white rounded-3xl border border-slate-200/80 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header / Brand identity bar */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-teal-600 rounded-xl relative">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 border border-slate-900 rounded-full animate-pulse" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold tracking-tight">PNS Warden Bot</h4>
                  <p className="text-[10px] font-mono text-teal-400 font-medium">Virtual Assistant • Online</p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={clearChatHistory}
                  title="Reset conversation"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Core panel */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2.5 max-w-[85%] ${
                    msg.role === 'user' ? 'ml-auto flex-row-reverse space-x-reverse' : 'mr-auto'
                  }`}
                >
                  {/* Chat Avatar bubble */}
                  <div
                    className={`p-1.5 rounded-lg shrink-0 ${
                      msg.role === 'user' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-white'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble content */}
                  <div
                    className={`p-3.5 rounded-2xl text-left border shadow-xs ${
                      msg.role === 'user'
                        ? 'bg-amber-400/10 border-amber-400/20 text-slate-800 rounded-tr-none'
                        : 'bg-white border-slate-200 text-slate-700 rounded-tl-none'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    ) : (
                      formatBotResponse(msg.text)
                    )}
                    <span className="block mt-1.5 text-[8.5px] font-mono text-slate-400 text-right leading-none">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Loader feedback dot bubble */}
              {isTyping && (
                <div className="flex items-start space-x-2.5 max-w-[85%] mr-auto">
                  <div className="p-1.5 rounded-lg shrink-0 bg-slate-800 text-white">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3.5 bg-white border border-slate-200 rounded-2xl rounded-tl-none flex items-center space-x-1.5 shadow-xs">
                    <motion.div
                      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </div>
              )}

              {/* Error boundary alert */}
              {errorText && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-2xl text-xs text-red-600 text-center leading-normal">
                  {errorText}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* In-chat suggestion chips block when no active loading */}
            {!isTyping && messages.length <= 2 && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-200/50">
                <div className="text-[10px] font-mono text-slate-400 text-left font-bold mb-1.5 uppercase tracking-wider">
                  Quick Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1 text-[11px] bg-white hover:bg-slate-100 border border-slate-200 text-slate-650 rounded-full cursor-pointer transition-all leading-tight font-medium hover:border-slate-350"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form field bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3.5 bg-white border-t border-slate-250 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask the Warden Bot..."
                className="flex-1 px-4 py-2 bg-slate-50 text-slate-800 text-sm rounded-full border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white transition-all overflow-ellipsis"
                maxLength={400}
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

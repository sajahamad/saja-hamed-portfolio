import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiSparkles, HiX } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

function matchAnswer(input, quickQuestions, lang) {
  const normalized = input.trim().toLowerCase();
  const match = quickQuestions.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match ? match.answer[lang] : portfolioData.aiAssistant.fallbackAnswer[lang];
}

function AIAssistant({ lang }) {
  const { aiAssistant, ui } = portfolioData;
  const { buttonLabel, widgetTitle, widgetSubtitle, placeholder, quickQuestions } = aiAssistant;
  const { aiAssistantUi } = ui;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const panelId = useId();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const askQuestion = (question, answer) => {
    setMessages((prev) => [...prev, { role: "user", text: question }, { role: "ai", text: answer }]);
  };

  const handleQuickQuestion = (item) => askQuestion(item.question[lang], item.answer[lang]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = inputValue.trim();
    if (!question) return;
    askQuestion(question, matchAnswer(question, quickQuestions, lang));
    setInputValue("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label={widgetTitle[lang]}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[28rem] w-[90vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card/90 shadow-2xl backdrop-blur-md"
          >
            <header className="flex items-start justify-between gap-3 border-b border-border-subtle px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-text">{widgetTitle[lang]}</p>
                <p className="text-xs text-muted">{widgetSubtitle[lang]}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={aiAssistantUi.closeLabel[lang]}
                className="rounded-md p-1 text-muted transition-colors hover:text-text"
              >
                <HiX size={18} />
              </button>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {aiAssistantUi.quickQuestionsLabel[lang]}
                  </p>
                  {quickQuestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleQuickQuestion(item)}
                      className="rounded-xl border border-border bg-background px-3 py-2 text-left text-sm text-text transition-colors hover:border-primary"
                    >
                      {item.question[lang]}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] whitespace-pre-line rounded-xl px-3 py-2 text-sm ${
                    message.role === "user"
                      ? "ml-auto bg-primary text-on-primary"
                      : "bg-background text-text"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border-subtle p-3">
              <label htmlFor={`${panelId}-input`} className="sr-only">
                {aiAssistantUi.inputLabel[lang]}
              </label>
              <input
                id={`${panelId}-input`}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={placeholder[lang]}
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-text focus-visible:border-primary"
              />
              <button
                type="submit"
                aria-label={aiAssistantUi.sendLabel[lang]}
                className="inline-flex items-center justify-center rounded-full bg-primary p-2.5 text-on-primary transition-colors hover:bg-blue-500"
              >
                <FiSend size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="inline-flex items-center gap-2 rounded-full bg-ai px-5 py-3 text-sm font-semibold text-on-ai shadow-lg transition-transform hover:scale-105"
      >
        <HiSparkles size={18} />
        {buttonLabel[lang]}
      </button>
    </div>
  );
}

export default AIAssistant;

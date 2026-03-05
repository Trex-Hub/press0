export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 'item-1',
    question: 'What does Press0 do?',
    answer:
      "An AI agent that analyzes videos and claims, then verifies them against real-time knowledge. You get clear verdicts with confidence ratings and links to sources—so you know what's true and what isn't.",
  },
  {
    id: 'item-2',
    question: 'How does verification work?',
    answer:
      'You send a claim, headline, or question. Our engine searches verified sources, fact-checking databases, and trusted publications, then returns a sourced verdict with direct links to the evidence.',
  },
  {
    id: 'item-3',
    question: 'What can I verify?',
    answer:
      'Videos, headlines, quotes, or any claim you want checked. Paste a link or type your question—the agent extracts the key claims and runs verification against current, real-time data.',
  },
  {
    id: 'item-4',
    question: 'Is my data private and secure?',
    answer:
      "Yes. Your inputs and usage are handled with security and privacy in mind. We don't use your data to train models or share it with third parties.",
  },
  {
    id: 'item-5',
    question: 'How can I try it?',
    answer:
      'Use the demo to ask a claim or question and see a real verdict with sources and confidence. No signup required to try it.',
  },
];

export default faqItems;

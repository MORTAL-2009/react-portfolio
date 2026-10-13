const skills = [
  {
    category: 'Frontend Development',
    description: 'Core building blocks for creating modern, responsive, and accessible user interfaces.',
    items: [
      { name: 'HTML5', level: 'Semantic Markup', icon: 'html' },
      { name: 'CSS3', level: 'Responsive & Flexbox/Grid', icon: 'css' },
      { name: 'JavaScript (ES6+)', level: 'Core Logic & DOM', icon: 'js' },
      { name: 'React', level: 'Component Architecture & Hooks', icon: 'react' },
    ],
  },
  {
    category: 'Styling & Tooling',
    description: 'Modern styling frameworks and development environments for fast, consistent iteration.',
    items: [
      { name: 'Tailwind CSS', level: 'Utility-first Styling (v4)', icon: 'tailwind' },
      { name: 'Vite', level: 'Next-gen Build Tool', icon: 'vite' },
      { name: 'Git & GitHub', level: 'Version Control & Hosting', icon: 'git' },
      { name: 'VS Code', level: 'Primary Editor & Extensions', icon: 'vscode' },
    ],
  },
  {
    category: 'Workflow & Experimentation',
    description: 'Methods and technologies used to conceptualize, prototype, and refine digital experiences.',
    items: [
      { name: 'UI / UX Prototyping', level: 'Wireframes & Layout Structure', icon: 'design' },
      { name: 'Responsive Design', level: 'Mobile-first Mindset', icon: 'responsive' },
      { name: 'AI-Assisted Dev', level: 'Prompt Engineering & Rapid Prototyping', icon: 'ai' },
      { name: 'Motion & Micro-interactions', level: 'CSS Transitions & Keyframes', icon: 'motion' },
    ],
  },
]

export default skills

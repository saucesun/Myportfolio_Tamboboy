// All editable content lives here.

export const FACEBOOK_URL = 'https://www.facebook.com/share/1Ps1u1xYa9/';
export const INSTAGRAM_URL =
  'https://www.instagram.com/reiisann_?fbclid=IwY2xjawUaK2FwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMTN4QmxyaWpGZnREY0gzZXBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeWM1fVvyKlD4eLMHFqrnhL4jYhicScOYJPLOsOK0KMGft33_8GkALFWBy6-0_aem_1RZp-X6bhUawbqEZqeRS6g';
export const GITHUB_URL = 'https://github.com/saucesun';

export const TYPED_PHRASES = [
  '> Welcome to my personal website',
  '> Initializing portfolio...',
  '> Access granted // Welcome',
];

export const PROFILE_FIELDS = [
  { label: 'Full Name', value: 'Susan Rhea S. Tamboboy' },
  { label: 'Email', value: 'saucesanreii@gmail.com' },
  { label: 'Age', value: '20' },
  { label: 'Birthdate', value: 'October 21, 2005' },
  { label: 'Phone Number', value: '09350625411' },
  {
    label: 'About Me',
    full: true,
    value:
      'Hi! I am a 3rd-year Computer Science Student focused on learning web development and building clean, functional applications. I enjoy solving programming challenges, creating practical digital tools, and continuously expanding my technical skills.',
  },
];

export const SKILL_GROUPS = [
  {
    title: 'SKILLS',
    tags: [
      'HTML & CSS',
      'JavaScript',
      'Python',
      'Responsive Web Design',
      'Debugging & Troubleshooting',
      'File & Folder Management',
      'Computer Hardware Basics',
      'Microsoft Office',
      'Basic Networking',
    ],
  },
  {
    title: 'AI TOOLS',
    tags: [
      'ChatGPT',
      'Google Gemini',
      'Microsoft Copilot',
      'Claude',
      'GitHub Copilot',
      'Canva AI',
      'Leonardo AI',
      'Suno AI',
    ],
  },
  {
    title: 'CODING TOOLS',
    tags: [
      'Visual Studio Code',
      'Git & GitHub',
      'PyCharm',
      'Replit',
      'Command Line / Terminal',
      'Notepad++',
      'Figma',
    ],
  },
];

export const PROJECTS = [
  {
    id: '01',
    title: 'ALU Operation Demo',
    image: '/images/pic1.jfif',
    alt: 'Project 1',
    desc: "An Arithmetic Logic Unit (ALU) operations demo is a practical simulation or hardware setup that showcases how a computer's CPU performs math and logic. It visually demonstrates how binary inputs are manipulated based on an opcode (operation code) to produce an output and change status flags.",
  },
  {
    id: '02',
    title: 'ADC or Analog Digital Converter',
    image: '/images/adc.jfif',
    alt: 'Project 2',
    desc: 'An Analog-to-Digital Converter (ADC) in sound means a device or circuit that changes continuous physical sound waves (analog signals) into a stream of numbers (digital binary code) that computers and digital audio gear can process.',
  },
];

export const SOCIALS = [
  { name: 'Facebook', url: FACEBOOK_URL, label: 'facebook.com/Saucesan Rei' },
  { name: 'Instagram', url: INSTAGRAM_URL, label: '@reiisan' },
  { name: 'GitHub', url: GITHUB_URL, label: 'github.com/saucesun' },
];

// Navbar dropdowns. `target` switches the page; `href` opens an external link.
export const NAV_DROPDOWNS = [
  {
    id: 'projects-menu',
    label: 'PROJECTS',
    items: [
      { label: 'ALU Operation Demo', target: 'projects' },
      { label: 'ADC / Analog Digital Converter', target: 'projects' },
      { label: 'View All Projects', target: 'projects' },
    ],
  },
  {
    id: 'contacts-menu',
    label: 'CONTACTS',
    items: [
      { label: 'My Contact Page', target: 'contacts' },
      { label: 'Facebook', href: FACEBOOK_URL },
      { label: 'Instagram', href: INSTAGRAM_URL },
      { label: 'GitHub', href: GITHUB_URL },
    ],
  },
];

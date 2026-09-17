export interface PricingTier {
  id: string;
  label: string;
  duration: string;
  amount: number; // in INR rupees (inclusive of GST)
  paise: number; // in paise for Razorpay
  popular?: boolean;
  programType: string;
  learningStructure: string;
  focus: string;
  isResearch?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: '3-days',
    label: '3 Days',
    duration: '3 Days',
    amount: 299,
    paise: 29900,
    programType: 'Masterclass',
    learningStructure: 'Theory',
    focus: 'A short, focused introduction to a specific aerospace or space-technology topic.',
  },
  {
    id: '15-days',
    label: '15 Days',
    duration: '15 Days',
    amount: 3539,
    paise: 353900,
    programType: 'Foundation Program',
    learningStructure: 'Theory',
    focus: 'Build strong fundamental knowledge and understand the core concepts related to the selected technical domain.',
  },
  {
    id: '4-weeks',
    label: '4 Weeks',
    duration: '4 Weeks',
    amount: 5899,
    paise: 589900,
    popular: true,
    programType: 'Innovative Program',
    learningStructure: 'Theory + Design + Simulation',
    focus: 'Move beyond theoretical learning and apply concepts through design activities and engineering simulation.',
  },
  {
    id: '8-weeks',
    label: '8 Weeks',
    duration: '8 Weeks',
    amount: 10619,
    paise: 1061900,
    programType: 'Advanced Program',
    learningStructure: 'Theory + Design + Simulation + Research',
    focus: 'Develop advanced technical knowledge while working on design, simulation, and research-oriented activities.',
  },
  {
    id: '3-months',
    label: '3 Months',
    duration: '3 Months',
    amount: 25370,
    paise: 2537000,
    programType: 'Deep Research Program',
    learningStructure: 'Theory + Design + Simulation + Research + Paper Publication',
    focus: 'A comprehensive research-oriented learning pathway involving technical learning, engineering design, simulation, research methodology, research execution, and preparation/publication of a research paper.',
    isResearch: true,
  },
];

export const STARTING_FEE = 299;

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export interface LearningPath {
  number: string;
  label: string;
  duration: string;
  structure: string;
  icon: string;
  description: string;
  isResearch?: boolean;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    number: '01',
    label: 'Masterclass',
    duration: '3 Days',
    structure: 'Theory',
    icon: 'Zap',
    description: 'Quick, focused technical learning for a specific aerospace or space-technology topic.',
  },
  {
    number: '02',
    label: 'Foundation Program',
    duration: '15 Days',
    structure: 'Theory',
    icon: 'BookOpen',
    description: 'Build your technical foundation and understand core concepts.',
  },
  {
    number: '03',
    label: 'Innovative Program',
    duration: '4 Weeks',
    structure: 'Theory + Design + Simulation',
    icon: 'Wrench',
    description: 'Apply concepts through design activities and engineering simulation.',
  },
  {
    number: '04',
    label: 'Advanced Program',
    duration: '8 Weeks',
    structure: 'Theory + Design + Simulation + Research',
    icon: 'Cpu',
    description: 'Work on design, simulation, and research-oriented activities.',
  },
  {
    number: '05',
    label: 'Deep Research Program',
    duration: '3 Months',
    structure: 'Theory + Design + Simulation + Research + Paper Publication',
    icon: 'FlaskConical',
    description: 'Comprehensive research pathway with paper preparation and publication guidance.',
    isResearch: true,
  },
];

export interface ResearchPhase {
  phase: string;
  title: string;
  description: string;
}

export const RESEARCH_INTERNSHIP_PHASES: ResearchPhase[] = [
  { phase: 'Phase 1', title: 'Theory', description: 'Build advanced conceptual understanding of the selected technical domain.' },
  { phase: 'Phase 2', title: 'Design', description: 'Apply engineering principles to develop and evaluate technical designs.' },
  { phase: 'Phase 3', title: 'Simulation', description: 'Use appropriate engineering/software tools to model, simulate, analyze, and validate the work.' },
  { phase: 'Phase 4', title: 'Research', description: 'Identify a research problem, conduct literature review, formulate methodology, perform technical analysis, and develop research findings.' },
  { phase: 'Phase 5', title: 'Research Paper', description: 'Prepare a research manuscript based on the completed work.' },
  { phase: 'Phase 6', title: 'Paper Publication', description: 'Guidance for research paper preparation and publication submission through an appropriate academic or research publication route.' },
];

export interface ResearchGain {
  title: string;
  description: string;
  icon: string;
}

export const RESEARCH_INTERNSHIP_GAINS: ResearchGain[] = [
  { title: 'Advanced Technical Knowledge', description: 'Develop deeper knowledge in the selected aerospace or space-technology domain.', icon: 'Cpu' },
  { title: 'Engineering Design Experience', description: 'Work on technical design and engineering problem-solving.', icon: 'Wrench' },
  { title: 'Simulation Experience', description: 'Apply relevant engineering and simulation tools to analyze technical systems.', icon: 'Monitor' },
  { title: 'Research Experience', description: 'Learn how to identify problems, review literature, develop methodology, and conduct technical research.', icon: 'Search' },
  { title: 'Research Paper Development', description: 'Learn how to structure technical findings into a professional research manuscript.', icon: 'FileText' },
  { title: 'Research Portfolio', description: 'Build a stronger technical and research profile for higher education, internships, and future career opportunities.', icon: 'Award' },
];

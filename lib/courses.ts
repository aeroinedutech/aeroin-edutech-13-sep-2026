import { PRICING_TIERS, STARTING_FEE } from './pricing';

export type LearnerCategory = 'professional' | 'school' | 'research';
export type ProgramLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type SubjectCategory =
  | 'Space Technology'
  | 'AI & Machine Learning'
  | 'Robotics'
  | 'Earth Observation'
  | 'Aerospace Engineering'
  | 'UAV & Drones'
  | 'Astronomy';

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Program {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  level: ProgramLevel;
  learnerCategory: LearnerCategory;
  subjectCategories: SubjectCategory[];
  image: string;
  topics: string[];
  curriculum: CurriculumModule[];
  practicalProject: string;
  whoShouldJoin: string[];
  skills: string[];
  certification: string;
  recommendedAge?: string;
  learningMode?: string;
  internshipFocus?: string;
  isResearchInternship?: boolean;
  isNew?: boolean;
  customPricing?: {
    duration: string;
    amount: number;
    paise: number;
    schedule?: string;
  };
  paymentLink?: string;
}

// Backward-compatible alias
export type Course = Program;

export const PROFESSIONAL_PROGRAMS: Program[] = [
  {
    slug: 'ai-powered-space-mission-planning',
    name: 'AI-Powered Space Mission Planning',
    isNew: true,
    shortDescription:
      'Learn how AI and machine learning can be applied to space mission design, orbital mechanics, trajectory optimization, autonomous decision-making and mission operations.',
    description:
      'This advanced program bridges artificial intelligence and space mission design. You will explore how modern ML and reinforcement learning techniques are transforming trajectory optimization, resource budgeting, autonomous spacecraft decision-making and multi-satellite constellation planning. Through a hands-on lunar transfer mission project, you will design and develop an AI-assisted space mission planner.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['AI & Machine Learning', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Space Mission Lifecycle & ConOps',
      'Orbital Mechanics Fundamentals',
      "Kepler's Laws & Orbital Elements",
      'AI & Machine Learning for Aerospace',
      'Mission Requirements & Constraints',
      'AI-Driven Trajectory Optimization',
      'Reinforcement Learning for Maneuver Planning',
      'Power & Resource Budget Optimization',
      'Mission Risk & Reliability Analysis',
      'Ground Station & Communication Scheduling',
      'Digital Twins for Mission Simulation',
      'Autonomous Spacecraft Decision-Making',
      'AI-Based Fault Detection, Isolation & Recovery',
      'Multi-Satellite Constellation Planning',
      'Safety & Ethics of Autonomous Space Systems',
    ],
    curriculum: [
      { title: 'Mission Fundamentals', topics: ['Space Mission Lifecycle & ConOps', 'Mission Requirements & Constraints', 'Risk & Reliability Analysis'] },
      { title: 'Orbital Mechanics', topics: ['Orbital Mechanics Fundamentals', "Kepler's Laws & Orbital Elements", 'Ground Station & Communication Scheduling'] },
      { title: 'AI for Aerospace', topics: ['AI & Machine Learning for Aerospace', 'Safety & Ethics of Autonomous Space Systems'] },
      { title: 'Trajectory Optimization', topics: ['AI-Driven Trajectory Optimization', 'Reinforcement Learning for Maneuver Planning', 'Power & Resource Budget Optimization'] },
      { title: 'Autonomous Operations', topics: ['Autonomous Spacecraft Decision-Making', 'AI-Based Fault Detection, Isolation & Recovery', 'Digital Twins for Mission Simulation'] },
      { title: 'Constellation Planning', topics: ['Multi-Satellite Constellation Planning', 'Distributed Mission Coordination'] },
    ],
    practicalProject:
      'Design and develop an AI-assisted space mission planner and optimize a lunar transfer mission.',
    whoShouldJoin: [
      'Engineering students interested in space and AI',
      'Working professionals in aerospace and defense',
      'Researchers in orbital mechanics and autonomous systems',
      'Data scientists moving into the space domain',
    ],
    skills: [
      'AI-driven trajectory optimization',
      'Reinforcement learning for maneuver planning',
      'Space mission risk and reliability analysis',
      'Digital twin mission simulation',
      'Autonomous spacecraft decision systems',
      'Multi-satellite constellation planning',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/AI-Space',
  },
  {
    slug: 'satellite-imagery-earth-observation-ai',
    name: 'Satellite Imagery & Earth Observation AI',
    isNew: true,
    shortDescription:
      'Learn how satellite imagery, remote sensing, geospatial analytics and AI can be combined to extract useful information from Earth Observation data.',
    description:
      'Combine satellite remote sensing with modern deep learning. You will work through the full Earth Observation pipeline — from image preprocessing and atmospheric correction to semantic segmentation, object detection and time-series change detection. The capstone project builds an AI-based system for land-cover mapping or disaster monitoring using real satellite datasets.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['Earth Observation', 'AI & Machine Learning'],
    image:
      'https://images.pexels.com/photos/30596893/pexels-photo-30596893.png?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Fundamentals of Remote Sensing',
      'Earth Observation Satellites',
      'Optical, SAR & Multispectral Sensors',
      'Satellite Image Preprocessing',
      'Atmospheric Correction',
      'Georeferencing & Cloud Masking',
      'GIS & QGIS',
      'Google Earth Engine',
      'Machine Learning for Image Classification',
      'Deep Learning & CNNs',
      'Semantic Segmentation',
      'Object Detection in Satellite Imagery',
      'SAR Image Analysis',
      'Change Detection & Time-Series Analysis',
      'Multispectral & Hyperspectral AI',
      'Disaster Monitoring Using AI',
      'Geospatial Foundation Models',
      'Multi-Modal Data Fusion',
      'Onboard AI for Satellite Payloads',
      'Explainable AI for Earth Observation',
    ],
    curriculum: [
      { title: 'Remote Sensing Foundations', topics: ['Fundamentals of Remote Sensing', 'Earth Observation Satellites', 'Optical, SAR & Multispectral Sensors'] },
      { title: 'Image Preprocessing', topics: ['Satellite Image Preprocessing', 'Atmospheric Correction', 'Georeferencing & Cloud Masking'] },
      { title: 'Geospatial Tools', topics: ['GIS & QGIS', 'Google Earth Engine'] },
      { title: 'Machine Learning for EO', topics: ['Machine Learning for Image Classification', 'Deep Learning & CNNs', 'Semantic Segmentation', 'Object Detection in Satellite Imagery'] },
      { title: 'Advanced EO AI', topics: ['SAR Image Analysis', 'Change Detection & Time-Series Analysis', 'Multispectral & Hyperspectral AI', 'Geospatial Foundation Models'] },
      { title: 'Applied EO Systems', topics: ['Disaster Monitoring Using AI', 'Multi-Modal Data Fusion', 'Onboard AI for Satellite Payloads', 'Explainable AI for Earth Observation'] },
    ],
    practicalProject:
      'Develop an AI-based satellite imagery analysis system for land-cover mapping or disaster monitoring.',
    whoShouldJoin: [
      'GIS and remote sensing professionals',
      'ML engineers entering geospatial analytics',
      'Environmental and disaster management researchers',
      'Graduate students in earth sciences',
    ],
    skills: [
      'Satellite image preprocessing and correction',
      'CNN-based image classification and segmentation',
      'SAR image analysis',
      'Change detection and time-series analytics',
      'Google Earth Engine workflows',
      'Disaster monitoring AI systems',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/AI-Satellite',
  },
  {
    slug: 'space-robotics-autonomous-rovers',
    name: 'Space Robotics & Autonomous Rovers',
    isNew: true,
    shortDescription:
      'Learn how planetary rovers are designed, simulated and programmed for autonomous exploration, covering robotics, mobility, sensors, computer vision, navigation and AI-based perception.',
    description:
      'A comprehensive program on planetary rover engineering — from chassis and suspension design to autonomous perception, SLAM and path planning. You will work in ROS/ROS2, fuse IMU, LiDAR and camera data, and implement AI-based terrain analysis. The capstone project is a simulated autonomous rover capable of perception, navigation and obstacle avoidance.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['Robotics', 'Space Technology', 'AI & Machine Learning'],
    image:
      'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Introduction to Space Robotics',
      'Planetary Rover Design',
      'Robotics Fundamentals',
      'Kinematics & Actuators',
      'Sensors for Mobile Robots',
      'ROS & ROS2',
      'Rover Chassis & Mobility Design',
      'Suspension & Rough-Terrain Mobility',
      'Sensor Fusion',
      'IMU, LiDAR & Camera Systems',
      'SLAM & Autonomous Mapping',
      'Path Planning & Obstacle Avoidance',
      'Computer Vision for Terrain Analysis',
      'Robotic Arm Manipulation',
      'Rover Power & Thermal Systems',
      'Telemetry & Remote Communication',
      'Hardware-in-the-Loop Testing',
      'AI-Based Autonomous Decision-Making',
      'Multi-Sensor Deep Learning',
      'Fault-Tolerant Robotics',
      'Extreme-Environment Robotics',
      'Teleoperation Under Communication Latency',
    ],
    curriculum: [
      { title: 'Rover Design Fundamentals', topics: ['Introduction to Space Robotics', 'Planetary Rover Design', 'Robotics Fundamentals', 'Kinematics & Actuators'] },
      { title: 'Mobility & Suspension', topics: ['Rover Chassis & Mobility Design', 'Suspension & Rough-Terrain Mobility', 'Rover Power & Thermal Systems'] },
      { title: 'Sensors & ROS', topics: ['Sensors for Mobile Robots', 'ROS & ROS2', 'IMU, LiDAR & Camera Systems', 'Sensor Fusion'] },
      { title: 'Navigation & Perception', topics: ['SLAM & Autonomous Mapping', 'Path Planning & Obstacle Avoidance', 'Computer Vision for Terrain Analysis'] },
      { title: 'Manipulation & Communication', topics: ['Robotic Arm Manipulation', 'Telemetry & Remote Communication', 'Teleoperation Under Communication Latency'] },
      { title: 'Autonomous & Fault-Tolerant Systems', topics: ['AI-Based Autonomous Decision-Making', 'Multi-Sensor Deep Learning', 'Fault-Tolerant Robotics', 'Extreme-Environment Robotics', 'Hardware-in-the-Loop Testing'] },
    ],
    practicalProject:
      'Build and simulate an autonomous planetary rover capable of perception, navigation and obstacle avoidance.',
    whoShouldJoin: [
      'Robotics and mechatronics engineers',
      'Aerospace systems developers',
      'Computer vision and AI practitioners',
      'Graduate students in autonomous systems',
    ],
    skills: [
      'ROS/ROS2 programming',
      'SLAM and autonomous mapping',
      'Sensor fusion (IMU, LiDAR, cameras)',
      'Path planning and obstacle avoidance',
      'AI-based terrain perception',
      'Fault-tolerant rover design',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/AI-Rovers',
  },
  {
    slug: 'swarm-robotics-multi-agent-systems',
    name: 'Swarm Robotics & Multi-Agent Systems',
    isNew: true,
    shortDescription:
      'Learn how multiple autonomous robots can cooperate using decentralized intelligence, swarm algorithms, multi-agent reinforcement learning and distributed coordination for complex missions.',
    description:
      'Explore decentralized intelligence and collective behavior in multi-robot systems. From boids and flocking to multi-agent reinforcement learning and game-theoretic coordination, you will design and simulate a multi-robot swarm for cooperative exploration and mapping. The program covers consensus algorithms, formation control, collision avoidance and swarm-based satellite constellations.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['Robotics', 'AI & Machine Learning', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/29320998/pexels-photo-29320998.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Introduction to Swarm Intelligence',
      'Biological Inspiration & Collective Behavior',
      'Multi-Agent Systems',
      'Agent Architectures',
      'Communication & Coordination',
      'Boids & Flocking Algorithms',
      'Particle Swarm Optimization',
      'Swarm Simulation',
      'Distributed Coordination',
      'Consensus Algorithms',
      'Leader-Follower Systems',
      'Communication Protocols',
      'Task Allocation & Load Balancing',
      'Reinforcement Learning for Swarms',
      'Formation Control',
      'Collision Avoidance',
      'Swarm Robotics for Space Applications',
      'Fault Tolerance in Decentralized Systems',
      'Cooperative Planetary Exploration',
      'Multi-Agent Reinforcement Learning',
      'Emergent Swarm Behavior',
      'Swarm-Based Satellite Constellations',
      'Game-Theoretic Multi-Agent Systems',
      'Safety & Ethics of Autonomous Swarms',
    ],
    curriculum: [
      { title: 'Swarm Intelligence Foundations', topics: ['Introduction to Swarm Intelligence', 'Biological Inspiration & Collective Behavior', 'Multi-Agent Systems', 'Agent Architectures'] },
      { title: 'Coordination Algorithms', topics: ['Boids & Flocking Algorithms', 'Particle Swarm Optimization', 'Consensus Algorithms', 'Leader-Follower Systems'] },
      { title: 'Distributed Systems', topics: ['Communication & Coordination', 'Communication Protocols', 'Distributed Coordination', 'Task Allocation & Load Balancing'] },
      { title: 'Multi-Agent Learning', topics: ['Reinforcement Learning for Swarms', 'Multi-Agent Reinforcement Learning', 'Game-Theoretic Multi-Agent Systems', 'Emergent Swarm Behavior'] },
      { title: 'Formation & Safety', topics: ['Formation Control', 'Collision Avoidance', 'Fault Tolerance in Decentralized Systems', 'Safety & Ethics of Autonomous Swarms'] },
      { title: 'Space Applications', topics: ['Swarm Robotics for Space Applications', 'Cooperative Planetary Exploration', 'Swarm-Based Satellite Constellations'] },
    ],
    practicalProject:
      'Design and simulate a multi-robot swarm capable of cooperative exploration and mapping of unknown terrain.',
    whoShouldJoin: [
      'Robotics researchers and engineers',
      'AI/ML engineers interested in multi-agent systems',
      'Aerospace professionals working on constellations',
      'Graduate students in distributed systems',
    ],
    skills: [
      'Swarm algorithm design (boids, PSO)',
      'Consensus and formation control',
      'Multi-agent reinforcement learning',
      'Distributed task allocation',
      'Collision avoidance in multi-robot systems',
      'Swarm-based constellation planning',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/AI-Robotics',
  },
  {
    slug: 'ai-planetary-exploration',
    name: 'AI for Planetary Exploration',
    isNew: true,
    shortDescription:
      'Learn how AI can be applied to planetary science and exploration using real planetary datasets for terrain analysis, autonomous science-target selection, hazard prediction and deep-space autonomy.',
    description:
      'Apply AI to real planetary datasets from NASA PDS and ISRO missions. You will build models for terrain classification, hazard detection, mineral mapping and autonomous science-target selection. The capstone project develops an AI model for autonomous planetary target selection using lunar or Martian surface imagery, covering deep-space autonomy and human-AI collaboration.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['AI & Machine Learning', 'Space Technology', 'Astronomy'],
    image:
      'https://images.pexels.com/photos/8474472/pexels-photo-8474472.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Introduction to Planetary Science',
      'Moon, Mars & Deep-Space Missions',
      'Planetary Exploration Systems',
      'NASA Planetary Data System',
      'ISRO Mission Datasets',
      'Scientific Data Processing',
      'Machine Learning for Planetary Data',
      'Geospatial Analysis of Planetary Surfaces',
      'Terrain Classification',
      'Hazard Detection',
      'Mineral & Geological Mapping',
      'Autonomous Science Target Selection',
      'Atmospheric & Climate Data Analysis',
      'Anomaly Detection',
      'AI-Assisted Habitability Assessment',
      'Onboard AI for Deep-Space Probes',
      'Mars Rover Science Autonomy',
      'Multi-Instrument Data Fusion',
      'Deep-Space Autonomous Decision-Making',
      'Environmental Hazard Prediction',
      'AI for Sample Return Missions',
      'AI for ISRU Planning',
      'Human-AI Collaboration',
      'AI for Astrobiology & Exoplanet Research',
    ],
    curriculum: [
      { title: 'Planetary Science Foundations', topics: ['Introduction to Planetary Science', 'Moon, Mars & Deep-Space Missions', 'Planetary Exploration Systems'] },
      { title: 'Planetary Data', topics: ['NASA Planetary Data System', 'ISRO Mission Datasets', 'Scientific Data Processing'] },
      { title: 'ML for Planetary Surfaces', topics: ['Machine Learning for Planetary Data', 'Geospatial Analysis of Planetary Surfaces', 'Terrain Classification', 'Hazard Detection', 'Mineral & Geological Mapping'] },
      { title: 'Autonomous Science', topics: ['Autonomous Science Target Selection', 'Mars Rover Science Autonomy', 'Multi-Instrument Data Fusion'] },
      { title: 'Deep-Space Autonomy', topics: ['Onboard AI for Deep-Space Probes', 'Deep-Space Autonomous Decision-Making', 'Environmental Hazard Prediction'] },
      { title: 'Advanced Applications', topics: ['AI-Assisted Habitability Assessment', 'AI for Sample Return Missions', 'AI for ISRU Planning', 'Human-AI Collaboration', 'AI for Astrobiology & Exoplanet Research'] },
    ],
    practicalProject:
      'Develop an AI model for autonomous planetary target selection using lunar or Martian surface imagery.',
    whoShouldJoin: [
      'Planetary science researchers',
      'AI/ML engineers entering space science',
      'Aerospace professionals in deep-space missions',
      'Graduate students in astrobiology or planetary geology',
    ],
    skills: [
      'ML for planetary terrain classification',
      'Autonomous science-target selection',
      'Hazard detection and prediction',
      'Mineral and geological mapping',
      'Deep-space autonomous decision-making',
      'Multi-instrument data fusion',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/AI-Planet',
  },
  {
    slug: 'cubesat-technology',
    name: 'CubeSat Technology',
    shortDescription:
      'Learn the complete CubeSat development lifecycle — from subsystem design and integration to testing and mission operations.',
    description:
      'A hands-on program covering the full CubeSat development lifecycle. You will explore satellite subsystems including power, communication, ADCS, payload and onboard computing, then design and simulate a CubeSat mission. The program emphasizes practical engineering with industry-standard tools and processes.',
    level: 'Intermediate',
    learnerCategory: 'professional',
    subjectCategories: ['Space Technology', 'Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'CubeSat Standards & Architecture',
      'Satellite Subsystems Overview',
      'Power Systems',
      'Communication Systems',
      'Attitude Determination & Control',
      'Onboard Computing',
      'Payload Design',
      'Structural & Thermal Design',
      'Integration & Testing',
      'Launch Interfaces',
      'Ground Station Operations',
      'Mission Operations',
    ],
    curriculum: [
      { title: 'CubeSat Fundamentals', topics: ['CubeSat Standards & Architecture', 'Satellite Subsystems Overview'] },
      { title: 'Core Subsystems', topics: ['Power Systems', 'Communication Systems', 'Onboard Computing'] },
      { title: 'ADCS & Payload', topics: ['Attitude Determination & Control', 'Payload Design'] },
      { title: 'Structural & Thermal', topics: ['Structural & Thermal Design', 'Launch Interfaces'] },
      { title: 'Integration & Testing', topics: ['Integration & Testing', 'Ground Station Operations'] },
      { title: 'Mission Operations', topics: ['Mission Operations', 'Launch & Early Operations'] },
    ],
    practicalProject:
      'Design and simulate a complete CubeSat mission including subsystem specification and integration plan.',
    whoShouldJoin: [
      'Engineering students interested in satellites',
      'Aerospace professionals',
      'Embedded systems engineers',
      'Space technology enthusiasts',
    ],
    skills: [
      'CubeSat subsystem design',
      'Satellite power and communication systems',
      'ADCS fundamentals',
      'Integration and testing procedures',
      'Ground station operations',
      'Mission operations planning',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/cubesat-tech',
  },
  {
    slug: 'rocket-propulsion-cfd',
    name: 'Rocket Propulsion & CFD',
    shortDescription:
      'Master rocket propulsion systems and computational fluid dynamics for propulsion analysis and design.',
    description:
      'A deep-dive into rocket propulsion theory and CFD simulation. Covering solid, liquid and hybrid propulsion systems, nozzle design, combustion analysis and CFD modeling, this program combines theoretical foundations with practical simulation work.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['Aerospace Engineering', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/586054/pexels-photo-586054.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Rocket Propulsion Fundamentals',
      'Solid Propulsion Systems',
      'Liquid Propulsion Systems',
      'Hybrid Propulsion',
      'Nozzle Theory & Design',
      'Combustion Analysis',
      'Thermodynamics of Propulsion',
      'CFD Fundamentals',
      'Mesh Generation',
      'Turbulence Modeling',
      'Compressible Flow Simulation',
      'Nozzle Flow CFD',
      'Combustion Chamber CFD',
      'Performance Analysis',
      'Propellant Selection',
      'Testing & Validation',
    ],
    curriculum: [
      { title: 'Propulsion Fundamentals', topics: ['Rocket Propulsion Fundamentals', 'Thermodynamics of Propulsion'] },
      { title: 'Propulsion Systems', topics: ['Solid Propulsion Systems', 'Liquid Propulsion Systems', 'Hybrid Propulsion'] },
      { title: 'Nozzle & Combustion', topics: ['Nozzle Theory & Design', 'Combustion Analysis', 'Propellant Selection'] },
      { title: 'CFD Fundamentals', topics: ['CFD Fundamentals', 'Mesh Generation', 'Turbulence Modeling'] },
      { title: 'Propulsion CFD', topics: ['Compressible Flow Simulation', 'Nozzle Flow CFD', 'Combustion Chamber CFD'] },
      { title: 'Performance & Testing', topics: ['Performance Analysis', 'Testing & Validation'] },
    ],
    practicalProject:
      'Design and simulate a rocket propulsion system using CFD, including nozzle and combustion chamber analysis.',
    whoShouldJoin: [
      'Aerospace engineering students',
      'Propulsion engineers',
      'Mechanical engineers in defense and space',
      'CFD analysts',
    ],
    skills: [
      'Rocket propulsion system design',
      'Nozzle theory and design',
      'CFD simulation of compressible flow',
      'Combustion chamber analysis',
      'Turbulence modeling',
      'Propulsion performance analysis',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/rocket-propulsion',
  },
  {
    slug: 'drones-uav-technology',
    name: 'Drones & UAV Technology',
    shortDescription:
      'Learn UAV design, flight dynamics, autopilot systems and autonomous drone programming from scratch.',
    description:
      'A comprehensive UAV technology program covering drone design, flight dynamics, autopilot systems, sensor integration and autonomous programming. You will explore fixed-wing and multirotor platforms, mission planning and autonomous navigation.',
    level: 'Intermediate',
    learnerCategory: 'professional',
    subjectCategories: ['UAV & Drones', 'Robotics', 'Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/3823555/pexels-photo-3823555.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'UAV Fundamentals & Classification',
      'Fixed-Wing vs Multirotor Design',
      'Aerodynamics of UAVs',
      'Flight Dynamics & Control',
      'Propulsion Systems',
      'Sensors & Avionics',
      'GPS & Navigation',
      'Autopilot Systems',
      'Flight Controller Programming',
      'Mission Planning',
      'Autonomous Navigation',
      'Computer Vision for Drones',
      'Swarm Drone Operations',
      'Payload Integration',
      'Regulations & Safety',
    ],
    curriculum: [
      { title: 'UAV Foundations', topics: ['UAV Fundamentals & Classification', 'Fixed-Wing vs Multirotor Design'] },
      { title: 'Aerodynamics & Flight', topics: ['Aerodynamics of UAVs', 'Flight Dynamics & Control', 'Propulsion Systems'] },
      { title: 'Avionics & Navigation', topics: ['Sensors & Avionics', 'GPS & Navigation', 'Autopilot Systems'] },
      { title: 'Programming & Autonomy', topics: ['Flight Controller Programming', 'Mission Planning', 'Autonomous Navigation'] },
      { title: 'Advanced UAV', topics: ['Computer Vision for Drones', 'Swarm Drone Operations', 'Payload Integration'] },
      { title: 'Operations & Safety', topics: ['Regulations & Safety', 'Flight Testing'] },
    ],
    practicalProject:
      'Design and program an autonomous drone mission including navigation, payload integration and flight planning.',
    whoShouldJoin: [
      'Engineering students interested in drones',
      'Robotics and embedded systems engineers',
      'Defense and surveillance professionals',
      'Entrepreneurs in drone technology',
    ],
    skills: [
      'UAV design and aerodynamics',
      'Flight dynamics and control',
      'Autopilot programming',
      'Autonomous drone navigation',
      'Computer vision for drones',
      'Mission planning',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/drones-uav',
  },
  {
    slug: 'space-robotics',
    name: 'Space Robotics',
    shortDescription:
      'Explore robotic systems for space applications including manipulators, rovers and autonomous systems.',
    description:
      'An intermediate-level program focused on robotic systems designed for space environments. Covering robotic manipulators, mobile robots, space mechanisms and autonomous operations, this program prepares you for careers in space robotics and autonomous systems.',
    level: 'Intermediate',
    learnerCategory: 'professional',
    subjectCategories: ['Robotics', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/3913012/pexels-photo-3913012.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Introduction to Space Robotics',
      'Robotic Manipulators',
      'Kinematics & Dynamics',
      'Space Mechanisms',
      'Mobile Robot Systems',
      'Sensors & Perception',
      'Control Systems',
      'Autonomous Operations',
      'Teleoperation',
      'Space Environment Challenges',
      'Robotic Arm Programming',
      'Simulation & Testing',
    ],
    curriculum: [
      { title: 'Space Robotics Overview', topics: ['Introduction to Space Robotics', 'Space Environment Challenges'] },
      { title: 'Manipulators', topics: ['Robotic Manipulators', 'Kinematics & Dynamics', 'Space Mechanisms'] },
      { title: 'Mobile Systems', topics: ['Mobile Robot Systems', 'Sensors & Perception'] },
      { title: 'Control & Autonomy', topics: ['Control Systems', 'Autonomous Operations', 'Teleoperation'] },
      { title: 'Programming', topics: ['Robotic Arm Programming', 'Simulation & Testing'] },
    ],
    practicalProject:
      'Design and simulate a space robotic system for a specified mission scenario.',
    whoShouldJoin: [
      'Robotics engineering students',
      'Mechanical and mechatronics engineers',
      'Space technology enthusiasts',
      'Automation professionals',
    ],
    skills: [
      'Robotic manipulator design',
      'Kinematics and dynamics',
      'Space mechanism engineering',
      'Robotic arm programming',
      'Autonomous operations',
      'Space environment adaptation',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/spacerobo',
  },
  {
    slug: 'orbital-mechanics-mission-design',
    name: 'Orbital Mechanics & Mission Design',
    shortDescription:
      'Master orbital mechanics, mission analysis and spacecraft trajectory design for real space missions.',
    description:
      'A rigorous program in orbital mechanics and mission design. From Keplerian orbits and perturbations to interplanetary trajectory design and mission analysis, you will learn the mathematical foundations and practical tools used in real space mission planning.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['Space Technology', 'Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/23789/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Orbital Mechanics Fundamentals',
      "Kepler's Laws & Orbital Elements",
      'Two-Body Problem',
      'Orbital Perturbations',
      'Orbital Maneuvers',
      'Hohmann Transfers',
      'Gravity Assists',
      'Interplanetary Trajectory Design',
      'Launch Vehicle Dynamics',
      'Mission Analysis',
      'Orbit Determination',
      'Space Mission Design Process',
      'Patched Conic Approximation',
      'Libration Points & Three-Body Problem',
    ],
    curriculum: [
      { title: 'Orbital Fundamentals', topics: ['Orbital Mechanics Fundamentals', "Kepler's Laws & Orbital Elements", 'Two-Body Problem'] },
      { title: 'Perturbations & Maneuvers', topics: ['Orbital Perturbations', 'Orbital Maneuvers', 'Hohmann Transfers'] },
      { title: 'Interplanetary Design', topics: ['Gravity Assists', 'Interplanetary Trajectory Design', 'Patched Conic Approximation'] },
      { title: 'Launch & Mission Analysis', topics: ['Launch Vehicle Dynamics', 'Mission Analysis', 'Orbit Determination'] },
      { title: 'Advanced Mechanics', topics: ['Space Mission Design Process', 'Libration Points & Three-Body Problem'] },
    ],
    practicalProject:
      'Design an interplanetary mission trajectory including launch, transfer and arrival phases.',
    whoShouldJoin: [
      'Aerospace engineering students',
      'Mission design engineers',
      'Space technology professionals',
      'Physics and mathematics students',
    ],
    skills: [
      'Orbital mechanics and trajectory design',
      'Interplanetary mission planning',
      'Orbital maneuver analysis',
      'Launch vehicle dynamics',
      'Orbit determination',
      'Mission analysis and design',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/orbital-mechanics',
  },
  {
    slug: 'aerodynamics-flow-analysis',
    name: 'Aerodynamics & Flow Analysis',
    shortDescription:
      'Learn aerodynamic principles and computational flow analysis for aircraft and spacecraft design.',
    description:
      'A program covering aerodynamic theory and computational flow analysis. From airfoil theory and compressible flow to CFD simulation of aerodynamic bodies, you will develop the skills to analyze and optimize aerodynamic performance.',
    level: 'Intermediate',
    learnerCategory: 'professional',
    subjectCategories: ['Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/19716542/pexels-photo-19716542.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Aerodynamics Fundamentals',
      'Airfoil Theory',
      'Lift & Drag Analysis',
      'Compressible Flow',
      'Boundary Layer Theory',
      'Transonic & Supersonic Aerodynamics',
      'CFD for Aerodynamics',
      'Mesh Generation',
      'Turbulence Modeling',
      'Aerodynamic Simulation',
      'Wind Tunnel Testing',
      'Performance Analysis',
    ],
    curriculum: [
      { title: 'Aerodynamic Fundamentals', topics: ['Aerodynamics Fundamentals', 'Airfoil Theory', 'Lift & Drag Analysis'] },
      { title: 'Compressible Flow', topics: ['Compressible Flow', 'Boundary Layer Theory', 'Transonic & Supersonic Aerodynamics'] },
      { title: 'CFD for Aerodynamics', topics: ['CFD for Aerodynamics', 'Mesh Generation', 'Turbulence Modeling'] },
      { title: 'Simulation & Testing', topics: ['Aerodynamic Simulation', 'Wind Tunnel Testing', 'Performance Analysis'] },
    ],
    practicalProject:
      'Perform aerodynamic analysis and CFD simulation of an aircraft or spacecraft component.',
    whoShouldJoin: [
      'Aerospace engineering students',
      'Aerodynamicists',
      'Mechanical engineers',
      'CFD analysts',
    ],
    skills: [
      'Aerodynamic analysis',
      'Airfoil and wing design',
      'Compressible flow modeling',
      'CFD for aerodynamic simulation',
      'Boundary layer analysis',
      'Wind tunnel testing methodology',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/High-Speed-Aerodynamics',
  },
  {
    slug: 'aerospace-structures',
    name: 'Aerospace Structures',
    shortDescription:
      'Learn aerospace structural analysis, design and finite element analysis for aircraft and spacecraft.',
    description:
      'A program on aerospace structural engineering. Covering stress analysis, structural design, composite materials and finite element analysis, you will learn to design and analyze lightweight, high-strength aerospace structures.',
    level: 'Intermediate',
    learnerCategory: 'professional',
    subjectCategories: ['Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/19101570/pexels-photo-19101570.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Aerospace Structures Overview',
      'Stress & Strain Analysis',
      'Material Selection',
      'Composite Materials',
      'Structural Analysis',
      'Finite Element Method',
      'FEA Modeling',
      'Vibration Analysis',
      'Fatigue & Fracture',
      'Buckling Analysis',
      'Structural Optimization',
      'Testing & Certification',
    ],
    curriculum: [
      { title: 'Structural Fundamentals', topics: ['Aerospace Structures Overview', 'Stress & Strain Analysis', 'Material Selection'] },
      { title: 'Composites', topics: ['Composite Materials', 'Composite Manufacturing'] },
      { title: 'FEA', topics: ['Finite Element Method', 'FEA Modeling', 'Structural Analysis'] },
      { title: 'Advanced Analysis', topics: ['Vibration Analysis', 'Fatigue & Fracture', 'Buckling Analysis'] },
      { title: 'Optimization & Testing', topics: ['Structural Optimization', 'Testing & Certification'] },
    ],
    practicalProject:
      'Design and analyze an aerospace structural component using finite element analysis.',
    whoShouldJoin: [
      'Aerospace engineering students',
      'Structural engineers',
      'Mechanical engineers in aerospace',
      'FEA analysts',
    ],
    skills: [
      'Aerospace structural analysis',
      'Composite material design',
      'Finite element analysis',
      'Stress and vibration analysis',
      'Fatigue and fracture mechanics',
      'Structural optimization',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
    paymentLink: 'https://rzp.io/rzp/stress-analysis',
  },
  {
    slug: 'aerospace-design-simulation',
    name: 'Aerospace Design & Simulation',
    shortDescription:
      'A dedicated 6-month weekend program mastering aerospace system design, simulation and multidisciplinary design optimization.',
    description:
      'A dedicated 6-month weekend program on aerospace system design and simulation. Covering the full design cycle from conceptual design to simulation and optimization, you will learn multidisciplinary approaches to aerospace vehicle design. Classes are conducted only on weekends, making it ideal for working professionals and college students.',
    level: 'Advanced',
    learnerCategory: 'professional',
    subjectCategories: ['Aerospace Engineering', 'Space Technology'],
    image: '/image copy.png',
    learningMode: 'Weekends Only',
    customPricing: {
      duration: '6 Months',
      amount: 29499,
      paise: 2949900,
      schedule: 'Weekends Only',
    },
    paymentLink: 'https://rzp.io/rzp/design-simulation',
    topics: [
      'Aerospace Design Process',
      'Conceptual Design',
      'Preliminary Design',
      'System Engineering',
      'Multidisciplinary Design Optimization',
      'Simulation Fundamentals',
      'Flight Simulation',
      'Structural Simulation',
      'Thermal Simulation',
      'System Integration',
      'Design for Manufacturing',
      'Verification & Validation',
    ],
    curriculum: [
      { title: 'Design Process', topics: ['Aerospace Design Process', 'Conceptual Design', 'Preliminary Design'] },
      { title: 'Systems Engineering', topics: ['System Engineering', 'Multidisciplinary Design Optimization'] },
      { title: 'Simulation', topics: ['Simulation Fundamentals', 'Flight Simulation', 'Structural Simulation', 'Thermal Simulation'] },
      { title: 'Integration & Manufacturing', topics: ['System Integration', 'Design for Manufacturing'] },
      { title: 'Verification', topics: ['Verification & Validation', 'Design Certification'] },
    ],
    practicalProject:
      'Complete a multidisciplinary aerospace vehicle design project with simulation and optimization.',
    whoShouldJoin: [
      'Aerospace engineering students',
      'Design engineers',
      'Systems engineers',
      'Aerospace professionals',
    ],
    skills: [
      'Aerospace conceptual and preliminary design',
      'Multidisciplinary design optimization',
      'Flight and structural simulation',
      'Systems engineering',
      'Design for manufacturing',
      'Verification and validation',
    ],
    certification:
      'Certificate of completion awarded by Aeroin EduTech upon successful project submission.',
  },
];

export const SCHOOL_PROGRAMS: Program[] = [
  {
    slug: 'cubesat-technology-for-schools',
    name: 'CubeSat Technology for Schools',
    shortDescription:
      'Discover how small satellites work and build your own model CubeSat through hands-on projects.',
    description:
      'An engaging introduction to satellite technology designed for young learners. Students explore how CubeSats are built, launched and operated, then design and build their own model CubeSat with guidance from mentors.',
    level: 'Beginner',
    learnerCategory: 'school',
    subjectCategories: ['Space Technology'],
    image:
      'https://images.pexels.com/photos/60133/pexels-photo-60133.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'What is a Satellite?',
      'Introduction to CubeSats',
      'Satellite Subsystems',
      'Power Systems for Satellites',
      'How Satellites Communicate',
      'Building a Model CubeSat',
      'Sensor Integration',
      'Simple Coding for Satellites',
      'Satellite Mission Design',
      'Hands-on CubeSat Project',
    ],
    curriculum: [
      { title: 'Satellite Basics', topics: ['What is a Satellite?', 'Introduction to CubeSats'] },
      { title: 'How Satellites Work', topics: ['Satellite Subsystems', 'Power Systems for Satellites', 'How Satellites Communicate'] },
      { title: 'Building Your CubeSat', topics: ['Building a Model CubeSat', 'Sensor Integration', 'Simple Coding for Satellites'] },
      { title: 'Mission Time', topics: ['Satellite Mission Design', 'Hands-on CubeSat Project'] },
    ],
    practicalProject: 'Build and program a model CubeSat with basic sensors and communication.',
    whoShouldJoin: [
      'School students curious about space',
      'Young makers and builders',
      'Students interested in electronics',
      'Beginners in coding and robotics',
    ],
    skills: [
      'Basic satellite and CubeSat concepts',
      'Simple electronics and sensor integration',
      'Beginner-level programming',
      'Model building and assembly',
      'Teamwork and project presentation',
    ],
    certification: 'Certificate of participation awarded by Aeroin EduTech.',
    recommendedAge: 'Grades 6–10',
    learningMode: 'Online / Project-based',
    paymentLink: 'https://rzp.io/rzp/school-cubesat',
  },
  {
    slug: 'rocket-propulsion-for-schools',
    name: 'Rocket Propulsion for Schools',
    shortDescription:
      'Learn how rockets work and build simple model rockets while exploring the science of propulsion.',
    description:
      'A fun, safe and educational program on rocket science for school students. Learn how rockets fly, what makes them go up, and build simple model rockets while exploring the exciting world of space launch.',
    level: 'Beginner',
    learnerCategory: 'school',
    subjectCategories: ['Space Technology', 'Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'How Rockets Work',
      'Forces of Flight',
      'Newton\u2019s Laws of Motion',
      'Types of Rockets',
      'Rocket Propulsion Basics',
      'Solid and Liquid Fuels',
      'Model Rocket Design',
      'Building a Model Rocket',
      'Safety in Rocketry',
      'Launch Your Rocket',
    ],
    curriculum: [
      { title: 'Rocket Science Basics', topics: ['How Rockets Work', 'Forces of Flight', 'Newton\u2019s Laws of Motion'] },
      { title: 'Types of Rockets', topics: ['Types of Rockets', 'Rocket Propulsion Basics', 'Solid and Liquid Fuels'] },
      { title: 'Build Your Rocket', topics: ['Model Rocket Design', 'Building a Model Rocket', 'Safety in Rocketry'] },
      { title: 'Launch Day', topics: ['Launch Your Rocket', 'Flight Analysis'] },
    ],
    practicalProject: 'Design, build and launch a simple model rocket under mentor guidance.',
    whoShouldJoin: [
      'Students fascinated by rockets',
      'Young scientists and makers',
      'Students who love hands-on building',
      'Space exploration enthusiasts',
    ],
    skills: [
      'Understanding of rocket propulsion',
      "Newton's laws in action",
      'Model rocket design and building',
      'Safe rocketry practices',
      'Basic flight analysis',
    ],
    certification: 'Certificate of participation awarded by Aeroin EduTech.',
    recommendedAge: 'Grades 6–10',
    learningMode: 'Online / Project-based',
    paymentLink: 'https://rzp.io/rzp/school-rocket',
  },
  {
    slug: 'drones-uavs-for-schools',
    name: 'Drones & UAVs for Schools',
    shortDescription:
      'Explore the world of drones — learn how they fly, how they are built and program simple drone missions.',
    description:
      'An exciting introduction to drone technology for school students. Learn how drones fly, explore their components, and program simple autonomous missions while understanding drone safety and applications.',
    level: 'Beginner',
    learnerCategory: 'school',
    subjectCategories: ['UAV & Drones', 'Robotics'],
    image:
      'https://images.pexels.com/photos/3722737/pexels-photo-3722737.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Introduction to Drones',
      'How Drones Fly',
      'Drone Components',
      'Types of Drones',
      'Drone Safety',
      'Basic Drone Programming',
      'Simple Flight Missions',
      'Drone Photography',
      'Real-World Drone Uses',
      'Hands-on Drone Project',
    ],
    curriculum: [
      { title: 'Drone Basics', topics: ['Introduction to Drones', 'How Drones Fly', 'Drone Components'] },
      { title: 'Types & Safety', topics: ['Types of Drones', 'Drone Safety'] },
      { title: 'Programming Drones', topics: ['Basic Drone Programming', 'Simple Flight Missions'] },
      { title: 'Drones in Action', topics: ['Drone Photography', 'Real-World Drone Uses', 'Hands-on Drone Project'] },
    ],
    practicalProject: 'Program and fly a simple drone mission with mentor supervision.',
    whoShouldJoin: [
      'Students curious about drones',
      'Young tech enthusiasts',
      'Students interested in robotics',
      'Future pilots and engineers',
    ],
    skills: [
      'Drone technology fundamentals',
      'Basic drone programming',
      'Flight mission planning',
      'Drone safety practices',
      'Understanding drone applications',
    ],
    certification: 'Certificate of participation awarded by Aeroin EduTech.',
    recommendedAge: 'Grades 6–10',
    learningMode: 'Online / Project-based',
    paymentLink: 'https://rzp.io/rzp/schools-drones',
  },
  {
    slug: 'space-robotics-for-schools',
    name: 'Space Robotics for Schools',
    shortDescription:
      'Build and program simple robots inspired by space rovers and explore the world of space robotics.',
    description:
      'A hands-on robotics program inspired by planetary rovers. Students learn basic robotics, build simple rovers, program them to navigate obstacles, and explore how real space robots explore other planets.',
    level: 'Beginner',
    learnerCategory: 'school',
    subjectCategories: ['Robotics', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/9242208/pexels-photo-9242208.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Introduction to Robots',
      'Space Robots and Rovers',
      'Robot Components',
      'Sensors and Motors',
      'Basic Robot Programming',
      'Moving Your Robot',
      'Obstacle Avoidance',
      'Simple Navigation',
      'Mars Rover Mission Challenge',
      'Build Your Space Rover',
    ],
    curriculum: [
      { title: 'Robot World', topics: ['Introduction to Robots', 'Space Robots and Rovers', 'Robot Components'] },
      { title: 'Making Robots Move', topics: ['Sensors and Motors', 'Basic Robot Programming', 'Moving Your Robot'] },
      { title: 'Smart Robots', topics: ['Obstacle Avoidance', 'Simple Navigation'] },
      { title: 'Rover Challenge', topics: ['Mars Rover Mission Challenge', 'Build Your Space Rover'] },
    ],
    practicalProject: 'Build and program a simple rover robot to complete a navigation challenge.',
    whoShouldJoin: [
      'Students who love robots',
      'Young builders and coders',
      'Students interested in space exploration',
      'Beginners in robotics',
    ],
    skills: [
      'Basic robotics concepts',
      'Simple robot programming',
      'Sensor and motor integration',
      'Obstacle avoidance logic',
      'Hands-on building skills',
    ],
    certification: 'Certificate of participation awarded by Aeroin EduTech.',
    recommendedAge: 'Grades 6–10',
    learningMode: 'Online / Project-based',
    paymentLink: 'https://rzp.io/rzp/school-robotics',
  },
  {
    slug: 'astronomy-astrophysics-for-schools',
    name: 'Astronomy & Astrophysics for Schools',
    shortDescription:
      'Explore the wonders of the universe — stars, planets, galaxies and the science of space.',
    description:
      'A fascinating journey through the universe for school students. Explore stars, planets, galaxies, black holes and the science behind them through engaging activities, observations and simple experiments.',
    level: 'Beginner',
    learnerCategory: 'school',
    subjectCategories: ['Astronomy', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/8148340/pexels-photo-8148340.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Our Solar System',
      'The Sun and Stars',
      'Planets and Moons',
      'Galaxies and the Universe',
      'Black Holes and Nebulae',
      'Telescopes and Observation',
      'Constellations',
      'Space Missions',
      'Astronauts and Space Travel',
      'Stargazing Project',
    ],
    curriculum: [
      { title: 'Our Cosmic Neighborhood', topics: ['Our Solar System', 'The Sun and Stars', 'Planets and Moons'] },
      { title: 'Deep Space', topics: ['Galaxies and the Universe', 'Black Holes and Nebulae'] },
      { title: 'Observing the Sky', topics: ['Telescopes and Observation', 'Constellations'] },
      { title: 'Space Exploration', topics: ['Space Missions', 'Astronauts and Space Travel', 'Stargazing Project'] },
    ],
    practicalProject: 'Complete a stargazing and observation project with a simple star chart.',
    whoShouldJoin: [
      'Students curious about the universe',
      'Young space explorers',
      'Students who love asking big questions',
      'Astronomy club members',
    ],
    skills: [
      'Understanding of the solar system',
      'Basic astronomy and astrophysics concepts',
      'Telescope observation skills',
      'Constellation identification',
      'Scientific curiosity and observation',
    ],
    certification: 'Certificate of participation awarded by Aeroin EduTech.',
    recommendedAge: 'Grades 5–10',
    learningMode: 'Online / Project-based',
    paymentLink: 'https://rzp.io/rzp/schools-astronomy',
  },
];

// Research Internship programs — all 3-month Deep Research Programs
export const RESEARCH_INTERNSHIP_PROGRAMS: Program[] = [
  {
    slug: 'research-ai-space-mission-planning',
    name: 'AI for Space Mission Planning — Research Internship',
    shortDescription:
      '3-month research internship applying AI and ML to space mission design, trajectory optimization, and autonomous spacecraft decision-making.',
    description:
      'A 3-month research internship focused on applying artificial intelligence and machine learning to space mission planning. Participants work through theory, design, simulation, and research to develop an AI-assisted space mission optimization model, culminating in a research paper.',
    level: 'Advanced',
    learnerCategory: 'research',
    subjectCategories: ['AI & Machine Learning', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'AI for Space Mission Design',
      'Trajectory Optimization Research',
      'Reinforcement Learning for Spacecraft',
      'Multi-Satellite Constellation Planning',
      'Autonomous Decision-Making Systems',
      'Research Methodology',
      'Literature Review',
      'Research Paper Development',
    ],
    curriculum: [
      { title: 'Phase 1 — Theory', topics: ['AI for Space Mission Design', 'Orbital Mechanics for AI Applications', 'Reinforcement Learning Fundamentals'] },
      { title: 'Phase 2 — Design', topics: ['Mission Design Framework', 'AI Architecture for Trajectory Optimization', 'System Design Specification'] },
      { title: 'Phase 3 — Simulation', topics: ['Simulation Environment Setup', 'AI Model Training & Validation', 'Performance Benchmarking'] },
      { title: 'Phase 4 — Research', topics: ['Research Problem Identification', 'Literature Review', 'Methodology Formulation', 'Technical Analysis'] },
      { title: 'Phase 5 — Research Paper', topics: ['Research Manuscript Preparation', 'Technical Findings Documentation', 'Paper Structure & Formatting'] },
      { title: 'Phase 6 — Paper Publication', topics: ['Publication Route Identification', 'Submission Guidance', 'Review Process Overview'] },
    ],
    practicalProject:
      'Develop an AI-based space mission optimization model and prepare a research paper based on the findings.',
    internshipFocus:
      'Applying AI and reinforcement learning to space mission trajectory optimization and autonomous spacecraft decision-making.',
    whoShouldJoin: [
      'Undergraduate and postgraduate engineering students',
      'AI/ML researchers entering the space domain',
      'Final-year project students',
      'Students planning higher studies in aerospace AI',
    ],
    skills: [
      'AI-driven trajectory optimization',
      'Reinforcement learning for spacecraft',
      'Research methodology and literature review',
      'Research paper development',
      'Simulation and validation',
      'Technical research analysis',
    ],
    certification:
      'Certificate of completion and research internship certificate awarded by Aeroin EduTech upon successful project and paper submission.',
    isResearchInternship: true,
    paymentLink: 'https://rzp.io/rzp/AI-Space',
  },
  {
    slug: 'research-satellite-imagery-ai',
    name: 'Satellite Imagery & Earth Observation AI — Research Internship',
    shortDescription:
      '3-month research internship combining satellite remote sensing with deep learning for Earth Observation analytics.',
    description:
      'A 3-month research internship combining satellite remote sensing with deep learning. Participants work through the full Earth Observation pipeline and conduct original research in AI-based geospatial analysis, culminating in a research paper.',
    level: 'Advanced',
    learnerCategory: 'research',
    subjectCategories: ['Earth Observation', 'AI & Machine Learning'],
    image:
      'https://images.pexels.com/photos/30596893/pexels-photo-30596893.png?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Advanced Remote Sensing',
      'Deep Learning for Satellite Imagery',
      'Semantic Segmentation Research',
      'Change Detection Algorithms',
      'Geospatial AI Models',
      'Research Methodology',
      'Literature Review',
      'Research Paper Development',
    ],
    curriculum: [
      { title: 'Phase 1 — Theory', topics: ['Advanced Remote Sensing Concepts', 'Deep Learning for Earth Observation', 'Geospatial AI Foundations'] },
      { title: 'Phase 2 — Design', topics: ['AI Model Architecture Design', 'Data Pipeline Design', 'Evaluation Framework'] },
      { title: 'Phase 3 — Simulation', topics: ['Model Training & Testing', 'Satellite Data Processing', 'Performance Validation'] },
      { title: 'Phase 4 — Research', topics: ['Research Problem Identification', 'Literature Review', 'Methodology Formulation', 'Technical Analysis'] },
      { title: 'Phase 5 — Research Paper', topics: ['Research Manuscript Preparation', 'Technical Findings Documentation', 'Paper Structure & Formatting'] },
      { title: 'Phase 6 — Paper Publication', topics: ['Publication Route Identification', 'Submission Guidance', 'Review Process Overview'] },
    ],
    practicalProject:
      'Develop an AI-based satellite imagery analysis system and prepare a research paper on the findings.',
    internshipFocus:
      'Applying deep learning to satellite imagery for land-cover mapping, change detection, or disaster monitoring research.',
    whoShouldJoin: [
      'Undergraduate and postgraduate engineering students',
      'ML engineers entering geospatial research',
      'Final-year project students',
      'Students planning higher studies in earth observation',
    ],
    skills: [
      'Deep learning for satellite imagery',
      'Semantic segmentation and object detection',
      'Research methodology and literature review',
      'Research paper development',
      'Geospatial data processing',
      'Technical research analysis',
    ],
    certification:
      'Certificate of completion and research internship certificate awarded by Aeroin EduTech upon successful project and paper submission.',
    isResearchInternship: true,
    paymentLink: 'https://rzp.io/rzp/AI-Satellite',
  },
  {
    slug: 'research-space-robotics-rovers',
    name: 'Space Robotics & Autonomous Rovers — Research Internship',
    shortDescription:
      '3-month research internship on planetary rover autonomy, SLAM, and AI-based terrain perception.',
    description:
      'A 3-month research internship focused on planetary rover engineering and autonomous navigation. Participants conduct research in rover perception, SLAM, and AI-based terrain analysis, culminating in a research paper.',
    level: 'Advanced',
    learnerCategory: 'research',
    subjectCategories: ['Robotics', 'Space Technology', 'AI & Machine Learning'],
    image:
      'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Advanced Planetary Rover Systems',
      'SLAM & Autonomous Mapping Research',
      'AI-Based Terrain Perception',
      'Path Planning Algorithms',
      'Sensor Fusion Techniques',
      'Research Methodology',
      'Literature Review',
      'Research Paper Development',
    ],
    curriculum: [
      { title: 'Phase 1 — Theory', topics: ['Advanced Planetary Rover Systems', 'SLAM Theory', 'AI for Terrain Perception'] },
      { title: 'Phase 2 — Design', topics: ['Rover Autonomy Architecture', 'Sensor Fusion Design', 'Navigation System Design'] },
      { title: 'Phase 3 — Simulation', topics: ['ROS/ROS2 Simulation', 'SLAM Implementation', 'Navigation Testing'] },
      { title: 'Phase 4 — Research', topics: ['Research Problem Identification', 'Literature Review', 'Methodology Formulation', 'Technical Analysis'] },
      { title: 'Phase 5 — Research Paper', topics: ['Research Manuscript Preparation', 'Technical Findings Documentation', 'Paper Structure & Formatting'] },
      { title: 'Phase 6 — Paper Publication', topics: ['Publication Route Identification', 'Submission Guidance', 'Review Process Overview'] },
    ],
    practicalProject:
      'Develop an autonomous rover navigation system and prepare a research paper on the findings.',
    internshipFocus:
      'Researching autonomous navigation, SLAM, and AI-based terrain perception for planetary rovers.',
    whoShouldJoin: [
      'Undergraduate and postgraduate robotics students',
      'AI researchers entering space robotics',
      'Final-year project students',
      'Students planning higher studies in autonomous systems',
    ],
    skills: [
      'SLAM and autonomous mapping',
      'AI-based terrain perception',
      'Research methodology and literature review',
      'Research paper development',
      'ROS/ROS2 simulation',
      'Technical research analysis',
    ],
    certification:
      'Certificate of completion and research internship certificate awarded by Aeroin EduTech upon successful project and paper submission.',
    isResearchInternship: true,
    paymentLink: 'https://rzp.io/rzp/AI-Rovers',
  },
  {
    slug: 'research-rocket-propulsion-cfd',
    name: 'Rocket Propulsion & CFD — Research Internship',
    shortDescription:
      '3-month research internship on rocket propulsion systems and CFD-based combustion and nozzle analysis.',
    description:
      'A 3-month research internship focused on rocket propulsion and computational fluid dynamics. Participants conduct original research in propulsion system design and CFD simulation, culminating in a research paper.',
    level: 'Advanced',
    learnerCategory: 'research',
    subjectCategories: ['Aerospace Engineering', 'Space Technology'],
    image:
      'https://images.pexels.com/photos/586054/pexels-photo-586054.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Advanced Rocket Propulsion',
      'CFD for Combustion Analysis',
      'Nozzle Flow Simulation Research',
      'Propellant Optimization',
      'Performance Analysis Methods',
      'Research Methodology',
      'Literature Review',
      'Research Paper Development',
    ],
    curriculum: [
      { title: 'Phase 1 — Theory', topics: ['Advanced Propulsion Theory', 'CFD Fundamentals for Propulsion', 'Combustion Physics'] },
      { title: 'Phase 2 — Design', topics: ['Propulsion System Design', 'Nozzle Geometry Design', 'Simulation Setup'] },
      { title: 'Phase 3 — Simulation', topics: ['CFD Mesh Generation', 'Combustion Chamber Simulation', 'Nozzle Flow Simulation'] },
      { title: 'Phase 4 — Research', topics: ['Research Problem Identification', 'Literature Review', 'Methodology Formulation', 'Technical Analysis'] },
      { title: 'Phase 5 — Research Paper', topics: ['Research Manuscript Preparation', 'Technical Findings Documentation', 'Paper Structure & Formatting'] },
      { title: 'Phase 6 — Paper Publication', topics: ['Publication Route Identification', 'Submission Guidance', 'Review Process Overview'] },
    ],
    practicalProject:
      'Conduct CFD-based research on a rocket propulsion system and prepare a research paper on the findings.',
    internshipFocus:
      'Researching rocket propulsion system performance using CFD simulation of nozzle flow and combustion chambers.',
    whoShouldJoin: [
      'Undergraduate and postgraduate aerospace students',
      'Propulsion researchers',
      'Final-year project students',
      'Students planning higher studies in propulsion',
    ],
    skills: [
      'CFD for propulsion systems',
      'Nozzle flow analysis',
      'Research methodology and literature review',
      'Research paper development',
      'Combustion simulation',
      'Technical research analysis',
    ],
    certification:
      'Certificate of completion and research internship certificate awarded by Aeroin EduTech upon successful project and paper submission.',
    isResearchInternship: true,
    paymentLink: 'https://rzp.io/rzp/rocket-propulsion',
  },
  {
    slug: 'research-orbital-mechanics',
    name: 'Orbital Mechanics & Mission Design — Research Internship',
    shortDescription:
      '3-month research internship on orbital mechanics, interplanetary trajectory design, and mission analysis.',
    description:
      'A 3-month research internship focused on orbital mechanics and mission design. Participants conduct original research in trajectory optimization, orbital perturbations, or interplanetary mission design, culminating in a research paper.',
    level: 'Advanced',
    learnerCategory: 'research',
    subjectCategories: ['Space Technology', 'Aerospace Engineering'],
    image:
      'https://images.pexels.com/photos/23789/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'Advanced Orbital Mechanics',
      'Interplanetary Trajectory Research',
      'Orbital Perturbation Analysis',
      'Mission Design Optimization',
      'Libration Point Missions',
      'Research Methodology',
      'Literature Review',
      'Research Paper Development',
    ],
    curriculum: [
      { title: 'Phase 1 — Theory', topics: ['Advanced Orbital Mechanics', 'Perturbation Theory', 'Three-Body Problem'] },
      { title: 'Phase 2 — Design', topics: ['Mission Design Framework', 'Trajectory Design Methodology', 'Optimization Setup'] },
      { title: 'Phase 3 — Simulation', topics: ['Trajectory Simulation', 'Mission Analysis Tools', 'Performance Validation'] },
      { title: 'Phase 4 — Research', topics: ['Research Problem Identification', 'Literature Review', 'Methodology Formulation', 'Technical Analysis'] },
      { title: 'Phase 5 — Research Paper', topics: ['Research Manuscript Preparation', 'Technical Findings Documentation', 'Paper Structure & Formatting'] },
      { title: 'Phase 6 — Paper Publication', topics: ['Publication Route Identification', 'Submission Guidance', 'Review Process Overview'] },
    ],
    practicalProject:
      'Design and research an interplanetary mission trajectory and prepare a research paper on the findings.',
    internshipFocus:
      'Researching orbital mechanics, trajectory optimization, and interplanetary mission design.',
    whoShouldJoin: [
      'Undergraduate and postgraduate aerospace students',
      'Mission design researchers',
      'Final-year project students',
      'Students planning higher studies in astrodynamics',
    ],
    skills: [
      'Orbital mechanics and trajectory design',
      'Mission analysis and optimization',
      'Research methodology and literature review',
      'Research paper development',
      'Trajectory simulation',
      'Technical research analysis',
    ],
    certification:
      'Certificate of completion and research internship certificate awarded by Aeroin EduTech upon successful project and paper submission.',
    isResearchInternship: true,
    paymentLink: 'https://rzp.io/rzp/orbital-mechanics',
  },
  {
    slug: 'research-ai-planetary-exploration',
    name: 'AI for Planetary Exploration — Research Internship',
    shortDescription:
      '3-month research internship applying AI to planetary science using real datasets for terrain analysis and autonomous target selection.',
    description:
      'A 3-month research internship applying AI to real planetary datasets from NASA PDS and ISRO missions. Participants conduct original research in terrain classification, hazard detection, or autonomous science-target selection, culminating in a research paper.',
    level: 'Advanced',
    learnerCategory: 'research',
    subjectCategories: ['AI & Machine Learning', 'Space Technology', 'Astronomy'],
    image:
      'https://images.pexels.com/photos/8474472/pexels-photo-8474472.jpeg?auto=compress&cs=tinysrgb&w=1260',
    topics: [
      'AI for Planetary Science',
      'Terrain Classification Research',
      'Autonomous Science Target Selection',
      'Hazard Detection Algorithms',
      'Planetary Data Analysis',
      'Research Methodology',
      'Literature Review',
      'Research Paper Development',
    ],
    curriculum: [
      { title: 'Phase 1 — Theory', topics: ['Planetary Science Foundations', 'ML for Planetary Data', 'Autonomous Science Systems'] },
      { title: 'Phase 2 — Design', topics: ['AI Model Architecture', 'Data Pipeline Design', 'Evaluation Framework'] },
      { title: 'Phase 3 — Simulation', topics: ['Model Training & Testing', 'Planetary Data Processing', 'Performance Validation'] },
      { title: 'Phase 4 — Research', topics: ['Research Problem Identification', 'Literature Review', 'Methodology Formulation', 'Technical Analysis'] },
      { title: 'Phase 5 — Research Paper', topics: ['Research Manuscript Preparation', 'Technical Findings Documentation', 'Paper Structure & Formatting'] },
      { title: 'Phase 6 — Paper Publication', topics: ['Publication Route Identification', 'Submission Guidance', 'Review Process Overview'] },
    ],
    practicalProject:
      'Develop an AI model for planetary terrain analysis and prepare a research paper on the findings.',
    internshipFocus:
      'Applying AI to planetary datasets for terrain classification, hazard detection, and autonomous science-target selection research.',
    whoShouldJoin: [
      'Undergraduate and postgraduate students',
      'AI researchers entering planetary science',
      'Final-year project students',
      'Students planning higher studies in planetary AI',
    ],
    skills: [
      'ML for planetary terrain classification',
      'Autonomous science-target selection',
      'Research methodology and literature review',
      'Research paper development',
      'Planetary data processing',
      'Technical research analysis',
    ],
    certification:
      'Certificate of completion and research internship certificate awarded by Aeroin EduTech upon successful project and paper submission.',
    isResearchInternship: true,
    paymentLink: 'https://rzp.io/rzp/AI-Planet',
  },
];

export const ALL_PROGRAMS: Program[] = [...PROFESSIONAL_PROGRAMS, ...SCHOOL_PROGRAMS];

export const ALL_PROGRAMS_WITH_RESEARCH: Program[] = [...PROFESSIONAL_PROGRAMS, ...SCHOOL_PROGRAMS, ...RESEARCH_INTERNSHIP_PROGRAMS];

export function getProgramBySlug(slug: string): Program | undefined {
  return ALL_PROGRAMS_WITH_RESEARCH.find((p) => p.slug === slug);
}

// Backward-compatible aliases
export const PROFESSIONAL_COURSES = PROFESSIONAL_PROGRAMS;
export const SCHOOL_COURSES = SCHOOL_PROGRAMS;
export const ALL_COURSES = ALL_PROGRAMS;
export function getCourseBySlug(slug: string): Program | undefined {
  return getProgramBySlug(slug);
}

export const PROFESSIONAL_FOOTER_LINKS = PROFESSIONAL_PROGRAMS.map((p) => ({
  name: p.name,
  slug: p.slug,
}));

export const SCHOOL_FOOTER_LINKS = SCHOOL_PROGRAMS.map((p) => ({
  name: p.name,
  slug: p.slug,
}));

export const RESEARCH_FOOTER_LINKS = RESEARCH_INTERNSHIP_PROGRAMS.map((p) => ({
  name: p.name,
  slug: p.slug,
}));

export { PRICING_TIERS, STARTING_FEE };

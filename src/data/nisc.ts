export type Council = {
  id: number;
  name: string;
  position: string;
  batch: string;
  department: string;
  state: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

export const council: Council[] = [
  { id: 1, name: "Mohiuddin Ahmad", position: "President", batch: "Y24", department: "AI & DS", state: "Uttar Pradesh" },
  { id: 2, name: "Shreyansh Sharma", position: "Vice President", batch: "Y24", department: "AI & DS", state: "Rajasthan" },
  { id: 3, name: "Mohd. Ammar Ali", position: "Y24 Year Admin", batch: "Y24", department: "CSE", state: "Delhi" },
  { id: 4, name: "Dwarkesh", position: "CSE Admin", batch: "Y24", department: "CSE", state: "Uttar Pradesh", linkedin: "https://www.linkedin.com/in/dwarkesh-dubey-a34287367" },
  { id: 5, name: "Yash Raj", position: "CSE Admin", batch: "Y24", department: "CSE", state: "Jharkhand" },
  { id: 6, name: "Arnav Mishra", position: "AI & DS Admin", batch: "Y24", department: "AI & DS", state: "Madhya Pradesh", linkedin: "https://www.linkedin.com/in/arnav-mishra-4966b224b/" },
  { id: 7, name: "Amitesh Pandit", position: "ECE Admin", batch: "Y24", department: "ECE", state: "Rajasthan" },
  { id: 8, name: "Rishi Burman", position: "BCA Admin", batch: "Y25", department: "BCA", state: "Chhattisgarh" },
  { id: 9, name: "Lekha", position: "Women's Wing", batch: "Y24", department: "AI & DS", state: "Andaman & Nicobar" },
  { id: 10, name: "Avika", position: "Women's Wing", batch: "Y24", department: "CSE", state: "Chhattisgarh" },
  { id: 11, name: "Paridhi Gupta", position: "Y25 Year Admin", batch: "Y25", department: "ECE", state: "Rajasthan", linkedin: "https://www.linkedin.com/in/paridhi-gupta-8922382a4/" },
  { id: 12, name: "NV Mohd. Fazal", position: "Y25 Year Admin", batch: "Y25", department: "CSE", state: "Andaman & Nicobar" },
];

export type Member = {
  id: number;
  name: string;
  rollNo: string;
  department: string;
  year: string;
  state: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

type Raw = [
  name: string,
  year: string,
  roll: string,
  dept: string,
  state: string,
  linkedin?: string,
  github?: string,
  instagram?: string,
];

const raw: Raw[] = [
  ["Arnav Mishra", "Y24", "2410080008", "AI & DS", "Madhya Pradesh", "https://www.linkedin.com/in/arnav-mishra-4966b224b/"],
  ["Ayush Singh", "Y24", "2410080023", "AI & DS", "Uttar Pradesh"],
  ["Mohiuddin Ahmed", "Y24", "2410080026", "AI & DS", "Uttar Pradesh"],
  ["Shreyansh Sharma", "Y24", "2410080017", "AI & DS", "Rajasthan"],
  ["Sourav Kumar", "Y24", "2410030075", "CSE", "Bihar"],
  ["K Keran Kumar", "Y24", "2410030472", "CSE", "Andaman & Nicobar"],
  ["Suyash Ram", "Y24", "2410030302", "CSE", "Andaman & Nicobar"],
  ["Nicky Kumar", "Y24", "2410030111", "CSE", "Bihar"],
  ["Chella Suganesh", "Y24", "2410030096", "CSE", "Chhattisgarh"],
  ["Yash Raj", "Y24", "2410030316", "CSE", "Jharkhand"],
  ["Narayan Kumar", "Y24", "2410030510", "CSE", "Bihar"],
  ["Satyam Kumar", "Y24", "2410030469", "CSE", "Bihar"],
  ["Kaushal Kumar", "Y24", "2410030456", "CSE", "Bihar"],
  ["Krishna Mishra", "Y24", "2410030285", "CSE", "Uttar Pradesh"],
  ["Dwarkesh Dubey", "Y24", "2410030021", "CSE", "Uttar Pradesh", "https://www.linkedin.com/in/dwarkesh-dubey-a34287367"],
  ["Yashovardhan Mishra", "Y24", "2410030515", "CSE", "Uttar Pradesh"],
  ["Ashfaq Sayeed", "Y24", "2410030109", "CSE", "Delhi"],
  ["Silkcon Padhy", "Y24", "2410030404", "CSE", "Odisha"],
  ["B Shiva Sai Patro", "Y24", "2410030023", "CSE", "Odisha"],
  ["A. Jayanth", "Y24", "2410080075", "AI & DS", "Telangana", "https://www.linkedin.com/in/jayanth-adavi-952a492ab/"],
  ["Rishi Burman", "Y25", "2510520036", "BCA", "Chhattisgarh"],
  ["Anshul Raj", "Y25", "2510030203", "CSE", "Andaman & Nicobar"],
  ["Shriyan Bohra", "Y25", "2510030057", "CSE", "Rajasthan"],
  ["Sameer Sahu", "Y25", "2510030059", "CSE", "Odisha"],
  ["Baibhaba Choudhury", "Y25", "2510030152", "CSE", "Odisha", "https://www.linkedin.com/in/baibhaba-choudhury/"],
  ["NV Mohammed Fazal", "Y25", "2510030062", "CSE", "Andaman & Nicobar"],
  ["Abhishek", "Y25", "2510030088", "CSE", "Andaman & Nicobar"],
  ["Paridhi Gupta", "Y25", "2510040024", "ECE", "Rajasthan", "https://www.linkedin.com/in/paridhi-gupta-8922382a4/"],
  ["Veeresh Yadav", "Y25", "2510040039", "ECE", "Maharashtra", "https://www.linkedin.com/in/veeresh-yadav-a469a0374/"],
  ["Aryan Yadav", "Y26", "2610030348", "CSE", "Uttar Pradesh"],
  ["Ayush Gupta", "Y26", "2610030343", "CSE", "Madhya Pradesh"],
  ["Somyansu Panda", "Y26", "2610030395", "CSE", "Odisha"],
  ["Avika Kashyap", "Y24", "2410030520", "CSE", "Chhattisgarh"],
  ["Sriya Gayatri", "Y24", "2410030521", "CSE", "Odisha"],
  ["Mohd. Ammar Ali", "Y24", "2410030026", "CSE", "Delhi"],
  ["D.Rishab", "Y24", "2410080042", "AI & DS", "Andaman & Nicobar"],
  ["B.Dhruv", "Y24", "2410080043", "AI & DS", "Andaman & Nicobar"],
  ["Lekha Sai Naidu", "Y24", "2410080035", "AI & DS", "Andaman & Nicobar"],
  ["Smruti Ranjan Parhi", "Y24", "2410030110", "CSE", "Odisha"],
  ["Subramanyam", "Y24", "2410030196", "CSE", "Maharashtra"],
  ["Niranjan Kumar Singh", "Y24", "2410030346", "CSE", "Bihar"],
  ["Vanshika", "Y25", "2510040034", "ECE", "Rajasthan"],
  ["Abhinash Kumar Jha", "Y24", "2410030530", "CSE", "Nepal"],
  ["Armaan Reza", "Y25", "2510030299", "CSE", "Uttar Pradesh"],
  ["Tanish Oberoi", "Y24", "2410030170", "CSE", "Punjab"],
  ["Manash Poddar", "Y25", "2510040121", "ECE", "Bihar"],
  ["Bhavesh Kumar", "Y25", "2510030077", "CSE", "Bihar"],
];

export const members: Member[] = raw.map(
  ([name, year, rollNo, department, state, linkedin, github, instagram], i) => {
    const dept = !department || department.trim() === "" || department === "—" ? "CSE" : department;
    const m: Member = {
      id: i + 1,
      name,
      rollNo,
      department: dept,
      year,
      state,
    };
    if (linkedin) m.linkedin = linkedin;
    if (github) m.github = github;
    if (instagram) m.instagram = instagram;
    return m;
  },
);

const statesList = Array.from(new Set(members.map((m) => m.state)));

export const stateData = statesList
  .map((state) => ({
    state,
    members: members.filter((m) => m.state === state).length,
  }))
  .sort((a, b) => b.members - a.members);

export const departmentsCount = new Set(members.map((m) => m.department)).size;

export type PastCouncil = {
  year: string;
  title: string;
  description: string;
  members: Council[];
};

export const pastCouncils: PastCouncil[] = [
  {
    year: "2025–26",
    title: "Founding Council",
    description:
      "The inaugural NISC council was formed through nomination and consensus among the founding members during the organization's establishment phase. This council laid the foundation for governance, activities, membership, and future democratic elections.",
    members: council,
  },
];

export type CandidateResult = {
  name: string;
  votes: number;
};

export type ElectionData = {
  year: string;
  title: string;
  subtitle: string;
  stats: {
    totalVotes: number;
    highestPresidentialVote: number;
    highestVicePresidentialVote: number;
  };
  presidential: {
    winner: string;
    votes: number;
    otherCandidates: CandidateResult[];
  };
  vicePresidential: {
    winner: string;
    votes: number;
    otherCandidates: CandidateResult[];
  };
  summary: string;
  participationOverview: string;
  studentFeedback: string;
};

export const election2025: ElectionData = {
  year: "2025–26",
  title: "2025–26 Presidential & Vice Presidential Election",
  subtitle:
    "The first democratic election of NISC established the leadership for the upcoming council through a transparent voting process.",
  stats: {
    totalVotes: 41,
    highestPresidentialVote: 23,
    highestVicePresidentialVote: 19,
  },
  presidential: {
    winner: "Mohiuddin Ahmad",
    votes: 23,
    otherCandidates: [
      { name: "Paridhi Gupta", votes: 13 },
      { name: "Shreyansh Sharma", votes: 2 },
      { name: "Ashfaq Ahmad", votes: 2 },
      { name: "Kaushal", votes: 1 },
    ],
  },
  vicePresidential: {
    winner: "Shreyansh Sharma",
    votes: 19,
    otherCandidates: [
      { name: "Paridhi Gupta", votes: 11 },
      { name: "Yash Raj", votes: 3 },
      { name: "Narayan", votes: 3 },
      { name: "Mohiuddin Ahmad", votes: 3 },
      { name: "Ashfaq Ahmad", votes: 1 },
      { name: "Kaushal", votes: 1 },
    ],
  },
  summary:
    "The 2025–26 elections marked the beginning of NISC's democratic governance. Forty-one eligible members participated in the voting process to elect the President and Vice President. The election reflected strong student engagement and established the framework for future annual leadership transitions.",
  participationOverview:
    "Most participating voters belonged to the Y24 and Y25 batches across multiple departments, reflecting broad representation within the founding membership of NISC.",
  studentFeedback:
    "Members appreciated the transparent election process and encouraged continued fairness, inclusiveness, and active participation in future council elections. Suggestions received during voting will be considered while strengthening future governance and community activities.",
};

export type TimelineItem = {
  title: string;
  year: string;
  tag?: string;
  text: string;
  images?: string[];
  established?: string[];
  goals?: string[];
};

export const timeline: TimelineItem[] = [
  {
    title: "Founded",
    year: "August 2024",
    tag: "Officially Founded",
    text: "North India Student Cell (NISC) was initiated by students of the Y24 and Y25 batches to create a support network for North Indian students at KL University Hyderabad.",
  },
  {
    title: "Official Beginning",
    year: "17 February 2025",
    tag: "First Meeting",
    text: "The first official meeting of NISC was conducted, laying the foundation for the organization, its vision, objectives, and future governance.",
    images: ["/gallery/first-meeting-1.png", "/gallery/first-meeting-2.png"],
  },
  {
    title: "Growth",
    year: "2025–26",
    tag: "Structured Cell",
    text: "Expanded into a structured student organization with representatives from multiple departments and North Indian states.",
    established: [
      "Council Structure",
      "Department Representatives",
      "Student Activities",
      "Cultural Programs",
      "Mentorship",
      "Academic Support",
    ],
  },
  {
    title: "Future",
    year: "Future Vision",
    tag: "Next Horizon",
    text: "Continue building a stronger North Indian student community through democratic processes, student development, and cross-departmental collaboration.",
    goals: [
      "democratic elections",
      "leadership development",
      "mentorship",
      "cultural representation",
      "inter-department collaboration",
    ],
  },
];

export type ElectionStep = {
  step: number;
  title: string;
  text: string;
};

export const electionSteps: ElectionStep[] = [
  {
    step: 1,
    title: "Nomination",
    text: "Eligible members submit nominations according to the NISC Rulebook.",
  },
  {
    step: 2,
    title: "Verification",
    text: "Applications are reviewed to ensure eligibility.",
  },
  {
    step: 3,
    title: "Campaign",
    text: "Candidates present their vision, manifesto, and interact with members.",
  },
  {
    step: 4,
    title: "Voting",
    text: "Secret ballot conducted among eligible members.",
  },
  {
    step: 5,
    title: "Results",
    text: "Votes are counted transparently and winners are officially announced.",
  },
];

export type GalleryCategory =
  | "Official Meetings"
  | "Council Formation"
  | "Cultural Events"
  | "Elections"
  | "Community Activities";

export type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory;
  date: string;
  image?: string; // Optional path for uploaded images
  gradient: string;
  span?: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Official Meetings",
  "Council Formation",
  "Cultural Events",
  "Elections",
  "Community Activities",
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "First Official Meeting — Opening Address",
    category: "Official Meetings",
    date: "17 Feb 2025",
    image: "/gallery/first-meeting-1.png",
    gradient: "linear-gradient(135deg, oklch(0.85 0.12 65), oklch(0.7 0.19 35))",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    title: "First Official Meeting — Vision & Governance",
    category: "Official Meetings",
    date: "17 Feb 2025",
    image: "/gallery/first-meeting-2.png",
    gradient: "linear-gradient(135deg, oklch(0.8 0.12 258), oklch(0.66 0.16 275))",
  },
  {
    id: 3,
    title: "Inaugural Council Assembly",
    category: "Council Formation",
    date: "17 Feb 2025",
    gradient: "linear-gradient(135deg, oklch(0.82 0.11 350), oklch(0.68 0.16 20))",
  },
  {
    id: 4,
    title: "Upcoming 2026–27 Leadership Elections",
    category: "Elections",
    date: "15 Sep 2026",
    gradient: "linear-gradient(135deg, oklch(0.86 0.1 90), oklch(0.72 0.16 55))",
    span: "sm:col-span-2",
  },
  {
    id: 5,
    title: "Planned Cultural Celebrations",
    category: "Cultural Events",
    date: "Upcoming 2026",
    gradient: "linear-gradient(135deg, oklch(0.84 0.11 150), oklch(0.68 0.15 190))",
  },
  {
    id: 6,
    title: "Planned Academic Mentorship Drive",
    category: "Community Activities",
    date: "Upcoming 2026",
    gradient: "linear-gradient(135deg, oklch(0.82 0.11 350), oklch(0.68 0.16 20))",
  },
];

export type ActivityStatus = "Conducted" | "Scheduled" | "Upcoming";

export type Activity = {
  title: string;
  date: string;
  status: ActivityStatus;
  text: string;
};

export const activities: Activity[] = [
  {
    title: "First Official NISC Meeting",
    date: "17 Feb 2025",
    status: "Conducted",
    text: "The inaugural official meeting of North India Student Cell conducted at KL University Hyderabad, establishing NISC's vision, objectives, governance, and founding council.",
  },
  {
    title: "NISC 2026–27 Leadership Elections",
    date: "15 Sep 2026",
    status: "Scheduled",
    text: "Democratic election process to elect the President and Vice President for the upcoming council term.",
  },
  {
    title: "Hindi Diwas Celebration",
    date: "Upcoming (Sep 2026)",
    status: "Upcoming",
    text: "Planned poetry, kavi sammelan and campus-wide celebration of literature and culture.",
  },
  {
    title: "Placement Prep & Mentorship Workshop",
    date: "Upcoming (Oct 2026)",
    status: "Upcoming",
    text: "Planned DSA clinics, resume guidance, and senior-junior academic pairing.",
  },
  {
    title: "North Meets South Cultural Night",
    date: "Upcoming (Nov 2026)",
    status: "Upcoming",
    text: "Planned cultural exchange evening with regional student bodies, folk dance, and music.",
  },
];

export type RulebookSubSection = {
  title: string;
  text: string;
  points?: string[];
};

export type RulebookSection = {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle?: string;
  summary: string;
  points?: string[];
  subsections?: RulebookSubSection[];
};

export const rulebookSections: RulebookSection[] = [
  {
    id: "introduction",
    sectionNumber: 1,
    title: "Introduction",
    summary:
      "North India Student Cell (NISC) is a student-led organization established by the founding students of the Y24 and Y25 batches at KL University Hyderabad. The initiative began in August 2024 and the first official meeting was conducted on 17 February 2025. NISC works towards creating an inclusive platform for North Indian students by promoting leadership, academic collaboration, mentorship, cultural engagement and community development.",
  },
  {
    id: "objectives",
    sectionNumber: 2,
    title: "Objectives",
    summary: "The primary objectives of North India Student Cell (NISC) are as follows:",
    points: [
      "To create a vibrant community for North Indian students to connect, collaborate, and share knowledge and culture.",
      "To organize academic, literary, and cultural events that highlight the rich heritage, language, and traditions of North India.",
      "To provide structured mentorship and peer-learning opportunities among students.",
      "To complement the university's mission of holistic development by integrating linguistic and technical growth.",
      "To collaborate with other student associations, regional bodies, and university councils for cross-cultural understanding and cooperation.",
      "Leadership Development: Fostering administrative capabilities, governance skills, and student initiative.",
      "Student Representation: Serving as an official voice for student welfare and academic concerns before the university administration.",
      "Career Guidance: Conducting placement prep workshops, resume reviews, DSA sprints, and industry guidance sessions.",
      "Mentorship: Pairing junior members with experienced seniors from their respective academic branches and home states.",
      "Community Welfare: Providing personal guidance, logistical support, and a welcoming environment for all enrolled members.",
      "Cultural Exchange: Celebrating major festivals, folk evenings, and inter-state cultural exchange events.",
      "Academic Collaboration: Facilitating study circles, shared notes repositories, and peer-to-peer tutoring.",
    ],
  },
  {
    id: "membership",
    sectionNumber: 3,
    title: "Membership Eligibility",
    summary:
      "Membership is primarily intended for students belonging to North Indian states or students having ancestral roots in North India. Associate membership may be granted by the Executive Council to students who actively support the objectives of NISC. Members must exhibit interest in promoting the objectives of NISC and uphold its code of conduct.",
    points: [
      "Primary Membership: Open to students belonging to North Indian states or students having ancestral roots in North India.",
      "Associate Membership: May be granted by the Executive Council to students who actively support the objectives of NISC, regardless of regional background.",
      "Code of Conduct Compliance: Members must exhibit interest in promoting the cell's objectives and strictly uphold its code of conduct.",
    ],
  },
  {
    id: "structure",
    sectionNumber: 4,
    title: "Organizational Structure",
    summary: "North India Student Cell (NISC) operates through an expanded, structured hierarchy to ensure democratic representation and operational efficiency:",
    subsections: [
      {
        title: "1. President",
        text: "Head of the organization and primary representative before the university administration. Responsible for overall governance, strategic vision, coordinating all activities, and chairing council meetings.",
      },
      {
        title: "2. Vice President",
        text: "Assists the President and assumes full responsibilities in their absence. Oversees the execution of events, campaign logistics, and internal operations.",
      },
      {
        title: "3. General Secretary",
        text: "Manages administrative records, official documentation, meeting minutes, official correspondence, and university compliance.",
      },
      {
        title: "4. Joint Secretary",
        text: "Assists the General Secretary in operational workflows, inter-departmental communication, and venue/resource arrangements.",
      },
      {
        title: "5. Treasurer",
        text: "Oversees financial budgeting, expense accounting, membership drive allocations, and financial transparency.",
      },
      {
        title: "6. Department Representatives",
        text: "Represent specific academic departments (AI & DS, CSE, ECE, BCA, etc.) and coordinate department-level mentorship and student welfare.",
      },
      {
        title: "7. Year Representatives",
        text: "Represent students of their respective academic batches (1st year to 4th year) and facilitate peer communication.",
      },
      {
        title: "8. Women's Department Representatives",
        text: "Focus on women student engagement, specialized mentorship, representation, and female student welfare initiatives.",
      },
      {
        title: "9. Executive Council",
        text: "The core administrative body comprising elected office bearers, department admins, and year admins responsible for executive decision-making.",
      },
      {
        title: "10. General Members",
        text: "Registered students who actively participate in general body meetings, cultural events, democratic votes, and volunteer activities.",
      },
    ],
  },
  {
    id: "elections",
    sectionNumber: 5,
    title: "Election Procedure",
    summary: "The election process shall be conducted in a transparent, fair, and democratic manner through seven defined stages:",
    points: [
      "1. Nomination Phase: Eligible members submit nominations according to the NISC Rulebook via the official nomination portal.",
      "2. Verification Phase: Applications are thoroughly reviewed by the Election Committee to ensure candidate eligibility.",
      "3. Campaign Phase: Candidates present their vision, manifesto, and interact respectfully with members during a designated campaign period.",
      "4. Voting Phase: Secret ballot conducted among all registered, eligible members.",
      "5. Counting Phase: Votes are transparently counted under supervision of designated election observers.",
      "6. Result Declaration: Official election winners are declared within 24 hours of poll closure.",
      "7. Handover Ceremony: Formal handover ceremony and transition of executive responsibilities to the newly elected council.",
      "Independent Elections Principle: President and Vice President shall be elected independently unless otherwise decided by the Election Committee.",
      "Term Duration: The elected body serves for one academic term/year.",
    ],
  },
  {
    id: "conduct",
    sectionNumber: 6,
    title: "Code of Conduct",
    summary: "All members and office bearers are required to maintain decorum and uphold the dignity of NISC at all times:",
    points: [
      "Mutual respect and inclusivity shall be maintained in all interactions.",
      "Discrimination based on region, language, gender, or religion is strictly prohibited.",
      "Respect all cultures and languages across the university campus.",
      "Zero tolerance for hate speech, personal attacks, or inflammatory statements.",
      "Zero tolerance for bullying, ragging, or harassment in any form.",
      "Responsible social media usage on official channels and community chat groups.",
      "Maintain the dignity, honor, and administrative standing of NISC.",
      "Official communication must reflect professionalism, courtesy, and truthfulness.",
      "Any misconduct, abuse, or violation of rules may result in formal suspension or removal from NISC by the Executive Council.",
    ],
  },
  {
    id: "activities",
    sectionNumber: 7,
    title: "Activities and Events",
    summary: "North India Student Cell (NISC) engages in a comprehensive calendar of student-centered activities:",
    points: [
      "Orientation Programs: Welcoming new batches and guiding them through campus transition.",
      "Mentorship Sessions: Pairing juniors with senior mentors from their home states and academic departments.",
      "Placement Guidance: Resume clinics, mock interviews, and DSA sprint workshops.",
      "Technical Workshops: Peer-led coding sessions, technical talks, and hackathon prep.",
      "Sports & Wellness: Inter-batch sports tournaments, recreational meets, and wellness events.",
      "Community Service: Outreach drives, campus volunteering, and social welfare initiatives.",
      "Alumni Interaction: Sessions with graduated seniors for career path insights and professional networking.",
      "Cultural Festivals: Hindi Diwas celebrations, poetry recitals, debates, and regional cultural nights.",
    ],
  },
  {
    id: "meetings",
    sectionNumber: 8,
    title: "Meetings & Governance",
    summary: "Standard operating procedures for general and council meetings:",
    points: [
      "General Body Meetings shall be held periodically (physically or virtually).",
      "The President may call special emergency meetings when necessary.",
      "Minutes of every meeting shall be recorded and maintained by the General Secretary within 48 hours of adjournment.",
    ],
  },
  {
    id: "communication",
    sectionNumber: 9,
    title: "Group & Communication Policy",
    summary: "Official communication channels and group decorum policy:",
    points: [
      "Telegram: Primary community channel for member discussions, announcements, and peer support.",
      "Website: Official digital platform for rulebook documentation, election updates, and member resources.",
      "Instagram: Public media outreach, photo highlights, and event announcements.",
      "Official Email & Google Workspace: Formal administrative correspondence, digital forms, and official documents.",
      "Policy: Sharing of irrelevant, offensive, commercial, or promotional content is strictly prohibited on all official groups.",
    ],
  },
  {
    id: "amendments",
    sectionNumber: 10,
    title: "Amendments & Revisions",
    summary: "Procedure for constitutional updates and rulebook revisions:",
    points: [
      "Any proposed amendment to the rulebook must be submitted to the President in writing.",
      "Amendments shall be discussed during a formal Executive Council meeting.",
      "Amendments shall require approval by at least two-thirds of the Executive Council or General Body Meeting, as applicable.",
      "Once approved, the updated constitution shall be published on the official website.",
    ],
  },
  {
    id: "dissolution",
    sectionNumber: 11,
    title: "Dissolution",
    summary: "Procedures governing potential organization dissolution:",
    points: [
      "NISC may be dissolved only by a two-thirds majority vote of its active membership.",
      "Upon dissolution, all official records, documents, and digital assets shall be handed over to the Student Activity Centre (S.A.C.) or university administration.",
    ],
  },
  {
    id: "declaration",
    sectionNumber: 12,
    title: "Declaration",
    summary:
      "This rulebook serves as the guiding constitutional framework for the functioning of the North India Student Cell (NISC) at KL University Hyderabad. All members, upon joining, agree to abide by these rules and work collectively toward achieving the organization's objectives in harmony and mutual respect.",
  },
  {
    id: "appendix-a",
    sectionNumber: 13,
    title: "Appendix A — Official Timeline",
    summary: "Chronological milestones in NISC's organizational history:",
    points: [
      "August 2024 — Initiative started by Y24 and Y25 students at KL University Hyderabad.",
      "17 February 2025 — First official meeting conducted, establishing NISC's vision, objectives, and governance.",
      "2025–26 — First Founding Council constituted through nomination and consensus.",
      "2026 onwards — Democratic elections introduced for annual leadership transitions.",
    ],
  },
];

export const rulebook = rulebookSections.map((s) => ({
  title: `${s.sectionNumber}. ${s.title}`,
  text: s.summary,
}));

export const faqs = [
  { q: "Who can join NISC?", a: "Any student enrolled at KL University Hyderabad. You do not need to be from North India — allies and enthusiasts are welcome." },
  { q: "Is there a membership fee?", a: "No. Membership is completely free. Some ticketed events may have a small contribution to cover costs." },
  { q: "How much time does it take?", a: "As much as you want to give. Members typically spend 2–3 hours a month; council roles need more." },
  { q: "Can first-year students hold council positions?", a: "First-years can join as volunteers and contest for junior council roles from their second semester." },
  { q: "How do the elections work?", a: "Nomination, campaign, secret-ballot voting and result declaration — all detailed in the rulebook section above." },
  { q: "What kind of events do you run?", a: "Cultural nights, Hindi Diwas, debates, placement prep workshops, mentorship drives and inter-cell collaborations." },
  { q: "Do you help with academics?", a: "Yes. Our mentorship programme pairs juniors with seniors from the same department for notes, doubts and placement guidance." },
  { q: "How do I contact the council?", a: "Reach out on our Telegram group or WhatsApp group — both are linked in the Join section." },
];

export const ELECTION_DATE = "2026-09-15T09:00:00+05:30";


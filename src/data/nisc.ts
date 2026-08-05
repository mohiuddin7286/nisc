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
  { id: 3, name: "Mohammad Ammar Ali", position: "Y24 Year Admin", batch: "Y24", department: "—", state: "—" },
  { id: 4, name: "Dwarkesh", position: "CSE Admin", batch: "Y24", department: "CSE", state: "Uttar Pradesh" },
  { id: 5, name: "Yash Raj", position: "CSE Admin", batch: "Y24", department: "CSE", state: "Jharkhand" },
  { id: 6, name: "Arnav Mishra", position: "AI & DS Admin", batch: "Y24", department: "AI & DS", state: "Madhya Pradesh" },
  { id: 7, name: "Amitesh Pandit", position: "ECE Admin", batch: "Y24", department: "ECE", state: "—" },
  { id: 8, name: "Rishi Burman", position: "BCA Admin", batch: "Y25", department: "BCA", state: "Chhattisgarh" },
  { id: 9, name: "Lekha", position: "Mahila Department", batch: "Y24", department: "—", state: "—" },
  { id: 10, name: "Avika", position: "Mahila Department", batch: "Y24", department: "—", state: "—" },
  { id: 11, name: "Paridhi Gupta", position: "Y25 Year Admin", batch: "Y25", department: "ECE", state: "Rajasthan" },
  { id: 12, name: "NV Mohd. Fazal", position: "Y25 Year Admin", batch: "Y25", department: "CSE", state: "Andaman & Nicobar" },
];

export type Member = {
  id: number;
  name: string;
  rollNo: string;
  department: string;
  year: string;
  state: string;
  city: string;
};

type Raw = [name: string, year: string, roll: string, dept: string, city: string, state: string];

const raw: Raw[] = [
  ["Arnav Mishra", "Y24", "2410080008", "AI & DS", "Bhopal", "Madhya Pradesh"],
  ["Ayush Singh", "Y24", "2410080023", "AI & DS", "Prayagraj", "Uttar Pradesh"],
  ["Mohiuddin Ahmed", "Y24", "2410080026", "AI & DS", "Prayagraj", "Uttar Pradesh"],
  ["Shreyansh Sharma", "Y24", "2410080017", "AI & DS", "Jaipur", "Rajasthan"],
  ["Rishab", "Y24", "2410080042", "AI & DS", "Hyderabad", "Andaman & Nicobar"],
  ["Sourav Kumar", "Y24", "2410030075", "CSE", "Patna", "Bihar"],
  ["K Keran Kumar", "Y24", "2410030472", "CSE", "Hyderabad", "Andaman & Nicobar"],
  ["Suyash Ram", "Y24", "2410030302", "CSE", "Hyderabad", "Andaman & Nicobar"],
  ["Nicky Kumar", "Y24", "2410030111", "CSE", "Nalanda", "Bihar"],
  ["Chella Suganesh", "Y24", "2410030096", "CSE", "Raipur", "Chhattisgarh"],
  ["Yash Raj", "Y24", "2410030316", "CSE", "Ranchi", "Jharkhand"],
  ["Narayan Kumar", "Y24", "2410030510", "CSE", "Patna", "Bihar"],
  ["Satyam Kumar", "Y24", "2410030469", "CSE", "Patna", "Bihar"],
  ["Kaushal Kumar", "Y24", "2410030456", "CSE", "Gaya", "Bihar"],
  ["Krishna Mishra", "Y24", "2410030285", "CSE", "Kanpur", "Uttar Pradesh"],
  ["Dwarkesh Dubey", "Y24", "2410030021", "CSE", "—", "Uttar Pradesh"],
  ["Yashovardhan Mishra", "Y24", "2410030515", "CSE", "Varanasi", "Uttar Pradesh"],
  ["Ashfaq Sayeed", "Y24", "2410030109", "CSE", "Nellore", "Delhi"],
  ["Silkcon Padhy", "Y24", "2410030404", "CSE", "Ganjam", "Odisha"],
  ["B Shiva Sai Patro", "Y24", "2410030023", "CSE", "—", "Odisha"],
  ["Rishi Burman", "Y25", "2510520036", "BCA", "Jagdalpur, Bastar", "Chhattisgarh"],
  ["Anshul Raj", "Y25", "2510030203", "CSE", "Sri Vijaya Puram", "Andaman & Nicobar"],
  ["Shriyan Bohra", "Y25", "2510030057", "CSE", "Jaipur", "Rajasthan"],
  ["Sameer Sahu", "Y25", "2510030059", "CSE", "—", "Odisha"],
  ["Baibhaba Choudhury", "Y25", "2510030152", "CSE", "Sundargarh", "Odisha"],
  ["NV Mohammed Fazal", "Y25", "2510030062", "CSE", "Andaman", "Andaman & Nicobar"],
  ["Abhishek", "Y25", "2510030088", "CSE", "Port Blair", "Andaman & Nicobar"],
  ["Paridhi Gupta", "Y25", "2510040024", "ECE", "Jaipur", "Rajasthan"],
  ["Aryan Yadav", "Y26", "2610030348", "CSE", "Gorakhpur", "Uttar Pradesh"],
  ["Ayush Gupta", "Y26", "2610030343", "CSE", "Maihar", "Madhya Pradesh"],
];

export const members: Member[] = raw.map(([name, year, rollNo, department, city, state], i) => ({
  id: i + 1,
  name,
  rollNo,
  department,
  year,
  city,
  state,
}));

const stateCities = members.reduce<Record<string, Set<string>>>((acc, m) => {
  (acc[m.state] ??= new Set()).add(m.city);
  return acc;
}, {});

export const stateData = Object.entries(stateCities)
  .map(([state, cities]) => ({
    state,
    members: members.filter((m) => m.state === state).length,
    cities: Array.from(cities).filter((c) => c !== "—").join(", ") || "—",
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

export const rulebook = [
  { title: "Introduction", text: "The North India Student Cell (NISC) is a student-run body at KL University Hyderabad formed to represent, support and celebrate students from northern states of India." },
  { title: "Objectives", text: "To build community, provide academic and personal mentorship, preserve and share culture, and act as a bridge between students and the university administration." },
  { title: "Membership", text: "Membership is open to any enrolled student of KL University Hyderabad who identifies with or wishes to support the north-Indian student community. Membership is free and renewed each academic year." },
  { title: "Council Structure", text: "The council consists of a President, Vice President, year admins for each batch, department admins for CSE, AI & DS, ECE and BCA, and the Mahila Department." },
  { title: "Election Procedure", text: "Elections are held annually. Nominations open for two weeks, followed by a campaign period, a secret-ballot vote by all registered members, and same-day result declaration." },
  { title: "Code of Conduct", text: "Members must uphold respect, inclusivity and zero tolerance for discrimination, ragging or harassment. Violations are reviewed by the council and may result in removal." },
  { title: "Meetings", text: "The council meets fortnightly; a general body meeting is held once per semester. Minutes are shared with all members within 48 hours." },
  { title: "Activities & Events", text: "The cell organises at least four cultural and four academic events per academic year, funded through membership drives and university grants." },
  { title: "Communication", text: "Official announcements are made through the NISC Telegram and WhatsApp groups. Members are expected to keep their contact details current." },
];

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


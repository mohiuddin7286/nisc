export type Council = {
  id: number;
  name: string;
  position: string;
  rollNo: string;
  batch: string;
  department: string;
  state: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

export const council: Council[] = [
  { id: 1, name: "Shreyansh Sharma", position: "Club Head (Head of Council)", rollNo: "2410080017", batch: "Y24", department: "AI & DS", state: "Uttar Pradesh" },
  { id: 2, name: "NV Mohammed Fazal", position: "Speaker", rollNo: "2510030062", batch: "Y25", department: "CSE", state: "Andaman & Nicobar" },
  { id: 3, name: "Mohiuddin Ahmad", position: "Speaker", rollNo: "2410080026", batch: "Y24", department: "AI & DS", state: "Uttar Pradesh" },
  { id: 4, name: "Paridhi Gupta", position: "President & Women's Wing (Y25)", rollNo: "2510040024", batch: "Y25", department: "ECE", state: "Rajasthan", linkedin: "https://www.linkedin.com/in/paridhi-gupta-8922382a4/" },
  { id: 5, name: "Anshul Raj", position: "Vice President", rollNo: "2510030203", batch: "Y25", department: "CSE", state: "Andaman & Nicobar" },
  { id: 6, name: "Dwarkesh Dubey", position: "General Secretary", rollNo: "2410030021", batch: "Y24", department: "CSE", state: "Uttar Pradesh", linkedin: "https://www.linkedin.com/in/dwarkesh-dubey-a34287367" },
  { id: 7, name: "Rishi Burman", position: "Media Cell Head", rollNo: "2510520036", batch: "Y25", department: "BCA", state: "Chhattisgarh" },
  { id: 8, name: "Yash Raj", position: "Year Administrator (Y24)", rollNo: "2410030316", batch: "Y24", department: "CSE", state: "Jharkhand" },
  { id: 9, name: "Smruti Ranjan Parhi", position: "Year Administrator (Y24)", rollNo: "2410030110", batch: "Y24", department: "CSE", state: "Odisha" },
  { id: 10, name: "Baibhaba Choudhury", position: "Year Administrator (Y25)", rollNo: "2510030152", batch: "Y25", department: "CSE", state: "Odisha", linkedin: "https://www.linkedin.com/in/baibhaba-choudhury/" },
  { id: 11, name: "Vanshika Agarwal", position: "Year Administrator (Y25)", rollNo: "2510040034", batch: "Y25", department: "ECE", state: "Rajasthan" },
  { id: 12, name: "Aryan Yadav", position: "Year Administrator (Y26)", rollNo: "2610030348", batch: "Y26", department: "CSE", state: "Uttar Pradesh" },
  { id: 13, name: "Juthika Kar", position: "Year Administrator (Y26)", rollNo: "2610030015", batch: "Y26", department: "CSE", state: "Odisha" },
  { id: 14, name: "Lekha Sai Naidu", position: "Women's Wing (Y24)", rollNo: "2410080035", batch: "Y24", department: "AI & DS", state: "Andaman & Nicobar" },
  { id: 15, name: "Manasvi Chaurasia", position: "Women's Wing (Y26)", rollNo: "2610030123", batch: "Y26", department: "CSE", state: "Madhya Pradesh" },
  { id: 16, name: "Mohd. Ammar Ali", position: "CSE Administrator", rollNo: "2410030026", batch: "Y24", department: "CSE", state: "Delhi" },
  { id: 17, name: "Arnav Mishra", position: "AI & DS Administrator", rollNo: "2410080008", batch: "Y24", department: "AI & DS", state: "Madhya Pradesh", linkedin: "https://www.linkedin.com/in/arnav-mishra-4966b224b/" },
  { id: 18, name: "Soham Bhoumik", position: "ECE Administrator", rollNo: "2410040023", batch: "Y24", department: "ECE", state: "West Bengal" },
  { id: 19, name: "Samrith Jain", position: "BCA Administrator", rollNo: "2510520035", batch: "Y25", department: "BCA", state: "Rajasthan" },
];

const foundingCouncil: Council[] = [
  { id: 1, name: "Mohiuddin Ahmad", position: "President", rollNo: "2410080026", batch: "Y24", department: "AI & DS", state: "Uttar Pradesh" },
  { id: 2, name: "Shreyansh Sharma", position: "Vice President", rollNo: "2410080017", batch: "Y24", department: "AI & DS", state: "Rajasthan" },
  { id: 3, name: "Mohd. Ammar Ali", position: "Y24 Year Admin", rollNo: "2410030026", batch: "Y24", department: "CSE", state: "Delhi" },
  { id: 4, name: "Dwarkesh Dubey", position: "CSE Admin", rollNo: "2410030021", batch: "Y24", department: "CSE", state: "Uttar Pradesh", linkedin: "https://www.linkedin.com/in/dwarkesh-dubey-a34287367" },
  { id: 5, name: "Yash Raj", position: "CSE Admin", rollNo: "2410030316", batch: "Y24", department: "CSE", state: "Jharkhand" },
  { id: 6, name: "Arnav Mishra", position: "AI & DS Admin", rollNo: "2410080008", batch: "Y24", department: "AI & DS", state: "Madhya Pradesh", linkedin: "https://www.linkedin.com/in/arnav-mishra-4966b224b/" },
  { id: 7, name: "Amitesh Pandit", position: "ECE Admin", rollNo: "", batch: "Y24", department: "ECE", state: "Rajasthan" },
  { id: 8, name: "Rishi Burman", position: "BCA Admin", rollNo: "2510520036", batch: "Y25", department: "BCA", state: "Chhattisgarh" },
  { id: 9, name: "Lekha Sai Naidu", position: "Women's Wing", rollNo: "2410080035", batch: "Y24", department: "AI & DS", state: "Andaman & Nicobar" },
  { id: 10, name: "Avika Kashyap", position: "Women's Wing", rollNo: "2410030520", batch: "Y24", department: "CSE", state: "Chhattisgarh" },
  { id: 11, name: "Paridhi Gupta", position: "Y25 Year Admin", rollNo: "2510040024", batch: "Y25", department: "ECE", state: "Rajasthan", linkedin: "https://www.linkedin.com/in/paridhi-gupta-8922382a4/" },
  { id: 12, name: "NV Mohd. Fazal", position: "Y25 Year Admin", rollNo: "2510030062", batch: "Y25", department: "CSE", state: "Andaman & Nicobar" },
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

const normalizeStateName = (s: string): string => {
  const trimmed = s.trim();
  if (trimmed === "Chattisgarh") return "Chhattisgarh";
  if (trimmed === "Kerela") return "Kerala";
  if (trimmed === "Odhisha") return "Odisha";
  return trimmed;
};

const raw: Raw[] = [
  // Y24 Members
  ["D Rishab", "Y24", "2410080042", "AI & DS", "Andaman & Nicobar"],
  ["K Keran Kumar", "Y24", "2410030472", "CSE", "Andaman & Nicobar"],
  ["Suyash Ram", "Y24", "2410030302", "CSE", "Andaman & Nicobar"],
  ["B.Dhruv", "Y24", "2410080043", "AI & DS", "Andaman & Nicobar"],
  ["Lekha Sai Naidu", "Y24", "2410080035", "AI & DS", "Andaman & Nicobar"],
  ["Sourav Kumar", "Y24", "2410030075", "CSE", "Bihar"],
  ["Nicky Kumar", "Y24", "2410030111", "CSE", "Bihar"],
  ["Narayan Kumar", "Y24", "2410030510", "CSE", "Bihar"],
  ["Satyam Kumar", "Y24", "2410030469", "CSE", "Bihar"],
  ["Kaushal Kumar", "Y24", "2410030456", "CSE", "Bihar"],
  ["Niranjan Kumar Singh", "Y24", "2410030346", "CSE", "Bihar"],
  ["Chella Suganesh", "Y24", "2410030096", "CSE", "Chhattisgarh"],
  ["Avika Kashyap", "Y24", "2410030520", "CSE", "Chhattisgarh"],
  ["Ashfaq Sayeed", "Y24", "2410030109", "CSE", "Delhi"],
  ["Shreyansh Sharma", "Y24", "2410080017", "AI & DS", "Uttar Pradesh"],
  ["Mohd. Ammar Ali", "Y24", "2410030026", "CSE", "Delhi"],
  ["Yash Raj", "Y24", "2410030316", "CSE", "Jharkhand"],
  ["Arnav Mishra", "Y24", "2410080008", "AI & DS", "Madhya Pradesh", "https://www.linkedin.com/in/arnav-mishra-4966b224b/"],
  ["Subramanyam", "Y24", "2410030196", "CSE", "Maharashtra"],
  ["Abhinash Kumar Jha", "Y24", "2410030530", "CSE", "Nepal"],
  ["Silkcon Padhy", "Y24", "2410030404", "CSE", "Odisha"],
  ["B Shiva Sai Patro", "Y24", "2410030023", "CSE", "Odisha"],
  ["Sriya Gayatri", "Y24", "2410030521", "CSE", "Odisha"],
  ["Smruti Ranjan Parhi", "Y24", "2410030110", "CSE", "Odisha"],
  ["Tanish Oberoi", "Y24", "2410030170", "CSE", "Punjab"],
  ["A. Jayanth", "Y24", "2410080075", "AI & DS", "Telangana", "https://www.linkedin.com/in/jayanth-adavi-952a492ab/"],
  ["Ayush Singh", "Y24", "2410080023", "AI & DS", "Uttar Pradesh"],
  ["Mohiuddin Ahmed", "Y24", "2410080026", "AI & DS", "Uttar Pradesh"],
  ["Krishna Mishra", "Y24", "2410030285", "CSE", "Uttar Pradesh"],
  ["Dwarkesh Dubey", "Y24", "2410030021", "CSE", "Uttar Pradesh", "https://www.linkedin.com/in/dwarkesh-dubey-a34287367"],
  ["Yashovardhan Mishra", "Y24", "2410030515", "CSE", "Uttar Pradesh"],
  ["Soham Bhoumik", "Y24", "2410040023", "ECE", "West Bengal"],

  // Y25 Members
  ["Anshul Raj", "Y25", "2510030203", "CSE", "Andaman & Nicobar"],
  ["NV Mohammed Fazal", "Y25", "2510030062", "CSE", "Andaman & Nicobar"],
  ["Abhishek", "Y25", "2510030088", "CSE", "Andaman & Nicobar"],
  ["M.Ruchee", "Y25", "2510030087", "CSE", "Andaman & Nicobar"],
  ["Bhavesh Kumar", "Y25", "2510030077", "CSE", "Bihar"],
  ["Manash Poddar", "Y25", "2510040121", "ECE", "Bihar"],
  ["Rishi Burman", "Y25", "2510520036", "BCA", "Chhattisgarh"],
  ["Granth Jigneshbhai Mangukiya", "Y25", "2510030181", "CSE", "Gujarat"],
  ["Abhijith Jayan", "Y25", "2510030390", "CSE", "Kerala"],
  ["Amr Kalam Mansoori", "Y25", "2510030436", "CSE", "Maharashtra"],
  ["Krishna Biradar", "Y25", "2510030053", "CSE", "Maharashtra"],
  ["A. Veeresh", "Y25", "2510040039", "ECE", "Maharashtra", "https://www.linkedin.com/in/veeresh-yadav-a469a0374/"],
  ["Priyanka Rupnar", "Y25", "2520030540", "CSE", "Maharashtra"],
  ["Samrith Jain", "Y25", "2510520035", "BCA", "Rajasthan"],
  ["Utkalika Priyadarshinee Champati", "Y25", "2510080004", "AI & DS", "Odisha"],
  ["Sameer Sahu", "Y25", "2510030059", "CSE", "Odisha"],
  ["Baibhaba Choudhury", "Y25", "2510030152", "CSE", "Odisha", "https://www.linkedin.com/in/baibhaba-choudhury/"],
  ["Shriyan Bohra", "Y25", "2510030057", "CSE", "Rajasthan"],
  ["Paridhi Gupta", "Y25", "2510040024", "ECE", "Rajasthan", "https://www.linkedin.com/in/paridhi-gupta-8922382a4/"],
  ["Vanshika Agarwal", "Y25", "2510040034", "ECE", "Rajasthan"],
  ["Alpansh Sharma", "Y25", "2510030356", "CSE", "Rajasthan"],
  ["Dhananjay Sharma", "Y25", "2510030080", "CSE", "Rajasthan"],
  ["Sejal Heda", "Y25", "2510030350", "CSE", "Telangana"],
  ["Riddhi Lahoti", "Y25", "2510040078", "ECE", "Rajasthan"],
  ["Rajveer Jain", "Y25", "2510030235", "CSE", "Rajasthan"],
  ["Anshul Heda", "Y25", "2510030352", "CSE", "Rajasthan"],
  ["Armaan Reza", "Y25", "2510030299", "CSE", "Uttar Pradesh"],
  ["Sayak Dara", "Y25", "2510040014", "ECE", "West Bengal"],
  ["Binamra Maity", "Y25", "2510030328", "CSE", "West Bengal"],

  // Y26 Members
  ["Piyush Kumar", "Y26", "2610030324", "CSE", "Bihar"],
  ["Lucky Ali", "Y26", "2610030377", "CSE", "Jharkhand"],
  ["Ayush Gupta", "Y26", "2610030343", "CSE", "Madhya Pradesh"],
  ["Juthika Kar", "Y26", "2610030015", "CSE", "Odisha"],
  ["Manasvi Chaurasia", "Y26", "2610030123", "CSE", "Madhya Pradesh"],
  ["Adwait Tripathi", "Y26", "2610030422", "CSE", "Uttar Pradesh"],
  ["Shashank Singh", "Y26", "2610030358", "CSE", "Uttar Pradesh"],
  ["Chaitanya Gaur", "Y26", "2610080080", "AI & DS", "Madhya Pradesh"],
  ["Gaurav Dhanraj", "Y26", "2610030429", "CSE", "Bihar"],
  ["Somyansu Panda", "Y26", "2610030395", "CSE", "Odisha"],
  ["Vedant Sahu", "Y26", "2610030362", "CSE", "Odisha"],
  ["Aryan Yadav", "Y26", "2610030348", "CSE", "Uttar Pradesh"],
  ["Ravi Yadav", "Y26", "2610030388", "CSE", "Uttar Pradesh"],
];

// Deduplicate members primarily by Roll Number, while preserving state normalization and social links
const deduplicatedRaw = Array.from(
  raw.reduce((map, item) => {
    const roll = item[2].trim();
    if (!map.has(roll)) {
      map.set(roll, item);
    } else {
      // Merge social links if existing record lacks them
      const existing = map.get(roll)!;
      if (!existing[5] && item[5]) existing[5] = item[5];
      if (!existing[6] && item[6]) existing[6] = item[6];
      if (!existing[7] && item[7]) existing[7] = item[7];
    }
    return map;
  }, new Map<string, Raw>()).values()
);

export const members: Member[] = deduplicatedRaw.map(
  ([name, year, rollNo, department, state, linkedin, github, instagram], i) => {
    const dept = !department || department.trim() === "" || department === "—" ? "CSE" : department.trim();
    const normalizedState = normalizeStateName(state);
    const m: Member = {
      id: i + 1,
      name: name.trim(),
      rollNo: rollNo.trim(),
      department: dept,
      year: year.trim(),
      state: normalizedState,
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
    members: foundingCouncil,
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

export const election2026: ElectionData = {
  year: "2026–27",
  title: "2026 Executive Council General Election",
  subtitle:
    "The second democratic election of NISC, featuring a highly competitive race, Candidate Houses, and a hybrid voting system that determined the final leadership.",
  stats: {
    totalVotes: 60,
    highestPresidentialVote: 25,
    highestVicePresidentialVote: 20,
  },
  presidential: {
    winner: "Paridhi Gupta",
    votes: 25,
    otherCandidates: [
      { name: "Anshul Raj", votes: 20 },
      { name: "Aryan Yadav", votes: 15 },
    ],
  },
  vicePresidential: {
    winner: "Anshul Raj",
    votes: 20,
    otherCandidates: [{ name: "Aryan Yadav", votes: 15 }],
  },
  summary:
    "The 2026–27 elections were a landmark event for NISC governance. 60 members participated through a combination of the official election portal (48 votes) and verified manual Google Forms (12 votes). While the online portal recorded a historic 17-17 tie between Paridhi Gupta (House ISIS) and Anshul Raj (House ANUBIS), the inclusion of the 12 verified manual votes resolved the tie. Paridhi Gupta secured the Presidency with 25 total votes, and Anshul Raj secured the Vice Presidency with 20 total votes.",
  participationOverview:
    "Voter turnout remained strong, with 60 total ballots verified by the NISC Election Commission out of the eligible population. The electorate was highly diverse, including participating voters from Y24, Y25, and Y26 batches across the AI & DS, CSE, ECE, and BCA departments.",
  studentFeedback:
    "Members praised the Election Commission's transparency in officially resolving the tie by verifying and combining manual ballots with the portal data. The introduction of Candidate Houses (ISIS, ANUBIS, HORUS) alongside detailed manifestos was widely appreciated for adding a dynamic, organized, and engaging element to the campaign trail.",
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

export type Candidate2026 = {
  name: string;
  batch: string;
  department: string;
  electionName: string;
  contestingFor: string;
  state: string;
};

export const candidates2026: Candidate2026[] = [
  {
    name: "Anshul Raj",
    batch: "Y25",
    department: "CSE",
    electionName: "Zeus",
    contestingFor: "President & Vice President",
    state: "Andaman & Nicobar",
  },
  {
    name: "Paridhi Gupta",
    batch: "Y25",
    department: "ECE",
    electionName: "Athena",
    contestingFor: "President & Vice President",
    state: "Rajasthan",
  },
  {
    name: "Granth Jigneshbhai Mangukiya",
    batch: "Y25",
    department: "CSE",
    electionName: "Poseidon",
    contestingFor: "President & Vice President",
    state: "Gujarat",
  },
];

export const election2026Status = {
  nominationStatus: "CLOSED",
  nominationNote: "Two nominations were cancelled because they did not satisfy NISC eligibility requirements.",
  campaignDeadline: "20 August 2026, 4:00 PM",
  votingRulesAnnouncement: "20 August 2026, 9:00 PM",
  electionInCharges: "To Be Appointed",
  inChargesDescription: "Two members will serve as neutral observers throughout the election process to maintain transparency and fairness in the conduct and activities of candidates.",
  contestNote: "All three candidates are contesting for both President and Vice President.",
  manifestoRequirements: [
    "Must follow the NISC Rulebook",
    "Must focus on building a strong and inclusive student community",
    "Must promote academic assistance, guidance, teamwork and mutual support",
    "Must focus on the overall development of NISC and its members",
    "Must NOT simply promote Hindi culture",
  ],
  confidentialityNotice: {
    title: "Election Confidentiality",
    text: "Candidates and members are strictly requested not to discuss or share internal election matters with outsiders or faculty. Any attempt to involve outsiders or faculty in the election process may result in strict action under applicable NISC rules.",
    footer: "Keep it democratic. Keep it fair. Let the members choose their leaders.",
  },
};

export type ElectionStepStatus = "Closed" | "Completed" | "Active" | "Upcoming";

export type ElectionStep = {
  step: number;
  title: string;
  text: string;
  status: ElectionStepStatus;
};

export const electionSteps: ElectionStep[] = [
  {
    step: 1,
    title: "Nomination",
    text: "Eligible members submit nominations. Nomination process is now CLOSED.",
    status: "Closed",
  },
  {
    step: 2,
    title: "Verification",
    text: "Applications reviewed by Election Committee. 2 non-eligible nominations were cancelled.",
    status: "Completed",
  },
  {
    step: 3,
    title: "Campaign",
    text: "Candidates present vision & manifesto until 20 August 2026, 4:00 PM.",
    status: "Active",
  },
  {
    step: 4,
    title: "Voting",
    text: "Procedure & rules announced on 20 August 2026, 9:00 PM. Secret ballot conducted.",
    status: "Upcoming",
  },
  {
    step: 5,
    title: "Results",
    text: "Votes counted transparently and official winners declared.",
    status: "Upcoming",
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
  "Elections",
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
    title: "NISC 2025–26 Founding Leadership Announcement",
    category: "Council Formation",
    date: "2025–26",
    image: "/gallery/founding-leadership-2025-26.png",
    gradient: "linear-gradient(135deg, oklch(0.85 0.12 65), oklch(0.7 0.19 35))",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    title: "NISC 2026–27 New Leadership Announcement",
    category: "Elections",
    date: "2026–27",
    image: "/gallery/new-leadership-2026-27.png",
    gradient: "linear-gradient(135deg, oklch(0.82 0.11 350), oklch(0.68 0.16 20))",
  },
];

export type ActivityStatus = "Conducted" | "Completed" | "Scheduled" | "Upcoming";

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
    date: "03 - 04 Sep 2026",
    status: "Completed",
    text: "Successfully concluded the democratic election process utilizing a hybrid portal and manual voting system to elect the President, Vice President, and administrators for the 2026–27 council term.",
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
    title: "Introduction & Constitutional Framework",
    summary:
      "The North India Student Cell (NISC) at KL University Hyderabad is an autonomous, student-led organization established to foster unity, academic mentorship, leadership development, student representation, and cultural engagement. Initiated in August 2024 by founding students of the Y24 and Y25 academic batches and formally convened on 17 February 2025, NISC operates under this ratified Constitution & Rulebook as its supreme governing document.",
    points: [
      "Jurisdiction: Governs all official operations, democratic elections, council administration, member conduct, and activities of NISC at KL University Hyderabad.",
      "Ratification: Formally ratified by the founding General Body during the 2025–26 academic term.",
      "Core Ethos: Committed to democratic fairness, academic growth, student welfare, inclusivity, and cross-cultural respect across the university campus.",
    ],
  },
  {
    id: "objectives",
    sectionNumber: 2,
    title: "Objectives & Mission",
    summary: "The constitutional objectives and operational mission of North India Student Cell (NISC) are defined as follows:",
    points: [
      "Community & Inclusion: Creating a vibrant, supportive platform for North Indian students and allies to connect, collaborate, and thrive.",
      "Academic Support & Mentorship: Providing structured peer tutoring, DSA sprints, shared study repositories, resume clinics, and senior-junior academic pairing.",
      "Leadership Development: Cultivating administrative capabilities, public governance skills, and student-led institutional initiatives.",
      "Student Representation: Serving as an official, unified voice for student welfare and academic concerns before university administration.",
      "Holistic Community Growth: Organizing cultural exchange nights, literary events, sports meets, and community outreach that enrich overall campus life beyond regional boundaries.",
    ],
  },
  {
    id: "membership",
    sectionNumber: 3,
    title: "Membership Framework & Rights Matrix",
    summary:
      "Membership in NISC is categorized to ensure broad participation while preserving democratic integrity. All members must be enrolled students at KL University Hyderabad in good standing.",
    subsections: [
      {
        title: "1. Primary Membership",
        text: "Open to enrolled students belonging to North Indian states or having ancestral roots in North India. Primary Members possess full democratic rights including voting in general body meetings, voting in annual elections, contesting for elected executive offices (President and Vice President), and holding appointed council positions.",
      },
      {
        title: "2. Associate Membership",
        text: "Open to enrolled students from other regional backgrounds who demonstrate active support for NISC objectives, granted upon review by the Executive Council. Associate Members possess full rights to participate in all activities, hold appointed department or associate roles, and vote in General Body referendums, but may not contest for elected executive offices (President and Vice President).",
      },
      {
        title: "3. Active Member Status",
        text: "Defined as any registered Primary or Associate member currently enrolled in good standing who strictly abides by the Code of Conduct and actively engages in cell activities. Only verified Active Members hold voting and election rights.",
      },
      {
        title: "4. General Body",
        text: "The supreme democratic assembly comprising all verified Active Members (Primary and Associate). Holds exclusive constitutional authority for constitutional amendments and cell dissolution.",
      },
      {
        title: "5. Executive Council & Office Bearers",
        text: "The governing administrative body comprising elected executive officers (President, Vice President) and appointed administrative admins (General Secretary, Joint Secretary, Treasurer, Department Admins, Year Admins, and Women's Representatives).",
      },
    ],
  },
  {
    id: "structure",
    sectionNumber: 4,
    title: "Organizational Hierarchy & Structure",
    summary: "NISC operates through a structured operational hierarchy to ensure transparent leadership and administrative efficiency:",
    subsections: [
      {
        title: "Tier A: Elected Executive Leadership (Annual Mandate)",
        text: "Comprises the President and Vice President, who are elected annually by secret ballot among the General Body. The President serves as Chief Executive Officer, chairing council meetings and representing NISC before university authorities. The Vice President assists the President, oversees event execution, and assumes executive duties in the President's absence. These two positions constitute the mandatory elected core.",
      },
      {
        title: "Tier B: Appointed Administrative & Representative Roles",
        text: "Comprises functional and departmental officers appointed or approved by the Executive Council based on term needs: General Secretary (records, minutes within 48h, compliance), Joint Secretary (operations & venue logistics), Treasurer (budgeting & finance), Department Admins (CSE, AI & DS, ECE, BCA, etc.), Year Admins (Y24, Y25, Y26), and Women's Department Representatives. The exact composition of administrative roles may vary per annual term based on cell requirements.",
      },
      {
        title: "Tier C: General Body Members",
        text: "Registered Active Members who participate in general body meetings, cultural drives, democratic votes, and volunteer committees.",
      },
    ],
  },
  {
    id: "elections",
    sectionNumber: 5,
    title: "Democratic Election Framework (7 Stages)",
    summary: "Annual elections for President and Vice President are conducted in a transparent, democratic manner through seven constitutional stages:",
    subsections: [
      {
        title: "Stage 1 — Nomination",
        text: "Eligible members submit formal nominations via the official portal within the designated window.",
      },
      {
        title: "Stage 2 — Verification & Scrutiny",
        text: "The Election Committee conducts thorough scrutiny of all applications. Nominations failing constitutional eligibility requirements are formally cancelled.",
      },
      {
        title: "Stage 3 — Campaign & Manifesto Presentation",
        text: "Verified candidates present their vision and manifesto during the designated campaign window. Manifestos must adhere to NISC rules, focus on inclusive community building, academic support, and overall NISC development.",
      },
      {
        title: "Stage 4 — Polling & Secret Ballot",
        text: "Voting is conducted among verified Active Members via secret ballot during an announced polling window.",
      },
      {
        title: "Stage 5 — Vote Counting",
        text: "Votes are counted transparently under the direct supervision of designated neutral Election In-Charges.",
      },
      {
        title: "Stage 6 — Result Declaration",
        text: "Plurality winners receiving the highest valid vote count are officially declared within 24 hours of poll closure.",
      },
      {
        title: "Stage 7 — Handover & Transition",
        text: "Formal transfer of executive duties, records, official communication channels, and digital assets occurs within 7 days of result declaration.",
      },
      {
        title: "Election Authority & Neutrality",
        text: "Elections are administered by an independent Election Committee. Two neutral members serve as Election In-Charges / Observers to maintain transparency and fairness. Election officials must remain strictly neutral and cannot campaign for any candidate.",
      },
      {
        title: "Candidate Eligibility Criteria",
        text: "Candidates contesting for President or Vice President must be verified Active Primary Members in good standing, enrolled in designated academic batches (Y24, Y25 or eligible upper batch), with zero record of disciplinary suspension or rulebook violation.",
      },
      {
        title: "Dual-Contest & Independent Voting Rule",
        text: "Eligible candidates are constitutionally permitted to contest for BOTH President and Vice President simultaneously. Voters cast separate, independent ballots for President and Vice President. In the event that the same candidate receives the highest vote count for both offices, that candidate shall assume the office of President, and the Vice Presidential post shall automatically pass to the candidate receiving the next highest vote total for Vice President.",
      },
      {
        title: "Voter Eligibility",
        text: "All verified Active Members (both Primary and Associate) enrolled at KL University Hyderabad are entitled to vote. Each voter receives exactly one secret ballot per office.",
      },
    ],
  },
  {
    id: "conduct",
    sectionNumber: 6,
    title: "Election Integrity & Code of Conduct",
    summary: "Strict ethical standards and disciplinary rules apply to all candidates, members, and office bearers:",
    points: [
      "Neutral Observer Standard: Election In-Charges must remain strictly impartial and observe candidate conduct throughout the election.",
      "Prohibited Election Practices: Misinformation, personal attacks, character assassination, harassment, bribery, voter impersonation, duplicate voting, threats, or coercion are strictly prohibited.",
      "Election Confidentiality Clause: Candidates and members are strictly requested not to discuss or share internal election matters with outsiders or faculty. Any attempt to involve outsiders or faculty to influence election outcomes is a major violation.",
      "Platform Decorum: Misuse of official NISC Telegram, WhatsApp, Instagram, or digital portals for unauthorized campaign spam is forbidden.",
      "Disciplinary Process: Violations reported to the Election Committee shall result in formal investigation and penalties ranging from official warnings and campaign restrictions to immediate candidate disqualification or membership suspension.",
    ],
  },
  {
    id: "vacancies",
    sectionNumber: 7,
    title: "Ties, Uncontested Elections & Vacancies",
    summary: "Constitutional mechanisms governing electoral ties, single-candidate contests, and mid-term executive vacancies:",
    points: [
      "Electoral Ties: In the event of a tie for highest votes, a 24-hour runoff election between tied candidates shall be conducted. If a tie persists, a secret vote by the Executive Council breaks the tie.",
      "Uncontested Elections: If only one eligible candidate qualifies for an office, a vote of confidence (Yes/No) is conducted requiring a simple majority (>50%) approval of voting members.",
      "Presidential Vacancy: If the office of President becomes vacant due to resignation, removal, or incapacity, the Vice President automatically succeeds as Acting President for the remainder of the term.",
      "Vice Presidential Vacancy: If the office of Vice President becomes vacant, the Executive Council shall appoint an interim Vice President from among active council members by simple majority vote within 14 days.",
    ],
  },
  {
    id: "meetings",
    sectionNumber: 8,
    title: "Meetings & Governance Procedures",
    summary: "Operating procedures governing organizational assemblies, executive meetings, and administrative records:",
    points: [
      "General Body Meetings (GBM): Held at least twice per academic term for general announcements, referendums, and major cell decisions.",
      "Executive Council Meetings (ECM): Convened periodically by the President or General Secretary to manage routine operations, event planning, and budget reviews.",
      "Quorum Requirements: General Body referendums require participation of at least 30% of Active Members. Executive Council meetings require a simple majority (>50%) of active council members.",
      "Record Keeping & Minutes: Minutes of every formal meeting must be recorded by the General Secretary and published/archived within 48 hours of adjournment.",
    ],
  },
  {
    id: "communication",
    sectionNumber: 9,
    title: "Digital Platforms & Communication Policy",
    summary: "Regulations governing official communication channels and group decorum:",
    points: [
      "Official Digital Platforms: Telegram (community chat & peer support), Website (rulebook, election portal, directory), Instagram (public media & updates), Email/Workspace (official administrative notices).",
      "Decorum Policy: Sharing offensive, discriminatory, commercial, political, or irrelevant spam content is strictly prohibited on all official NISC channels.",
      "Authorized Releases: Official administrative statements must be approved by the President or General Secretary prior to publication.",
    ],
  },
  {
    id: "amendments",
    sectionNumber: 10,
    title: "Constitutional Amendments Framework",
    summary: "The precise step-by-step mechanism for amending or revising the NISC Rulebook:",
    points: [
      "1. Proposal Submission: Any Active Primary Member may submit a written amendment proposal signed by at least 5 Active Members to the General Secretary.",
      "2. Council Evaluation: The General Secretary tables the proposal before the Executive Council for formal review within 14 days.",
      "3. General Body Notification: Upon council review, the proposed amendment is published to the General Body at least 7 days prior to voting.",
      "4. Ratification Vote: Voting is conducted among Active Members via General Body meeting or official digital referendum.",
      "5. Required Approval Threshold: A minimum two-thirds (2/3) majority vote of Active Members participating in the vote is required for constitutional adoption.",
      "6. Immediate Enactment: Approved amendments take effect immediately upon declaration of results.",
      "7. Publication: The updated Constitution & Rulebook must be published on the official website within 5 business days of enactment.",
    ],
  },
  {
    id: "dissolution",
    sectionNumber: 11,
    title: "Dissolution Protocol",
    summary: "Procedures governing potential organization dissolution:",
    points: [
      "NISC may be dissolved only through a formal referendum requiring a minimum two-thirds (2/3) majority vote of all registered Active Members.",
      "Upon dissolution, all physical records, digital assets, official accounts, and residual resources shall be handed over to the Student Activity Centre (S.A.C.) or university administration.",
    ],
  },
  {
    id: "declaration",
    sectionNumber: 12,
    title: "Constitutional Declaration",
    summary:
      "This Constitution and Rulebook serves as the supreme guiding constitutional framework for the functioning of North India Student Cell (NISC) at KL University Hyderabad. All members, upon joining, agree to abide by these rules and work collectively toward achieving the cell's objectives in harmony, democratic integrity, and mutual respect.",
  },
  {
    id: "appendix-a",
    sectionNumber: 13,
    title: "Appendix A — Official Historical Timeline",
    summary: "Chronological milestones in NISC's organizational history:",
    points: [
      "August 2024 — Initiative started by Y24 and Y25 batch students at KL University Hyderabad.",
      "17 February 2025 — First official meeting conducted, establishing vision, governance, and founding council.",
      "2025–26 — First Founding Council constituted through nomination and consensus.",
      "2026 onwards — Annual democratic elections established under the 7-stage constitutional framework.",
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

export type PlacedSenior = {
  id: number;
  name: string;
  batch: string;
  department: string;
  company: string;
  role: string;
  package?: string;
  location?: string;
  state?: string;
  linkedin?: string;
  github?: string;
  avatar?: string;
};

export const placedSeniors: PlacedSenior[] = [
  {
    id: 1,
    name: "Aman Sharma",
    batch: "Y21",
    department: "CSE",
    company: "Amazon",
    role: "Software Development Engineer (SDE-1)",
    package: "28 LPA",
    location: "Bengaluru",
    state: "Uttar Pradesh",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Priya Singh",
    batch: "Y21",
    department: "AI & DS",
    company: "Microsoft",
    role: "Software Engineer",
    package: "43 LPA",
    location: "Hyderabad",
    state: "Bihar",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Rohan Verma",
    batch: "Y21",
    department: "CSE",
    company: "Goldman Sachs",
    role: "Financial Technology Analyst",
    package: "24 LPA",
    location: "Bengaluru",
    state: "Delhi",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    batch: "Y22",
    department: "ECE",
    company: "Qualcomm",
    role: "Hardware Engineer",
    package: "18 LPA",
    location: "Hyderabad",
    state: "Punjab",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Vikramaditya Roy",
    batch: "Y21",
    department: "CSE",
    company: "Oracle",
    role: "Server Technology Member",
    package: "16.5 LPA",
    location: "Bengaluru",
    state: "West Bengal",
    linkedin: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Ananya Mishra",
    batch: "Y22",
    department: "AI & DS",
    company: "Deloitte USI",
    role: "Data & AI Consultant",
    package: "11.5 LPA",
    location: "Gurugram",
    state: "Madhya Pradesh",
    linkedin: "https://linkedin.com",
  },
];


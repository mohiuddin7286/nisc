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
  term: string;
  status: string;
  note: string;
  members: { name: string; position: string }[];
};

export const pastCouncils: PastCouncil[] = [
  {
    term: "2024–25",
    status: "Founding council",
    note: "The first NISC core team — formed by the founding batch of Y23/Y24 students who set up the cell at KLH.",
    members: [
      { name: "Records being compiled", position: "Founding Core" },
    ],
  },
];

export type ElectionResult = {
  year: string;
  turnout: string;
  note: string;
  results: { position: string; winner: string; votes?: string }[];
};

export const electionResults: ElectionResult[] = [
  {
    year: "2025–26",
    turnout: "Council formed by nomination",
    note: "The 2025–26 council was constituted by nomination and consensus of the founding members. Full ballot elections begin with the 2026–27 term.",
    results: [
      { position: "President", winner: "Mohiuddin Ahmad" },
      { position: "Vice President", winner: "Shreyansh Sharma" },
    ],
  },
];

export const timeline = [
  { title: "Founded", year: "2024", text: "A handful of north-Indian students at KL University Hyderabad started meeting over chai and homesickness. NISC was born." },
  { title: "Vision", year: "2025", text: "A cell where language, food and festivals are never a barrier — and where every junior finds a senior who has their back." },
  { title: "Growth", year: "2025–26", text: "A full council across Y24 and Y25 batches, members from multiple states, and a calendar of cultural and academic events." },
  { title: "Future", year: "2026–27", text: "Formal elections, a mentorship pipeline, inter-college collaborations and a scholarship support desk." },
];

export const activities = [
  { title: "Hindi Diwas Celebration", date: "14 Sep 2025", text: "Poetry, kavi sammelan and a campus-wide celebration of the language that brings us together." },
  { title: "The Great Debate", date: "22 Oct 2025", text: "A bilingual parliamentary debate with 40+ participants across departments." },
  { title: "Placement Prep Workshop", date: "05 Dec 2025", text: "Seniors ran DSA and resume clinics for first and second-year members." },
  { title: "Mentorship Drive", date: "18 Jan 2026", text: "Every junior matched with a senior from their home state for academic and personal guidance." },
  { title: "North Meets South Night", date: "12 Mar 2026", text: "A cultural exchange evening with regional cells — food stalls, folk dance and music." },
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
  { title: "Communication", text: "Official announcements are made through the NISC Telegram group and Instagram page. Members are expected to keep their contact details current." },
];

export const faqs = [
  { q: "Who can join NISC?", a: "Any student enrolled at KL University Hyderabad. You do not need to be from North India — allies and enthusiasts are welcome." },
  { q: "Is there a membership fee?", a: "No. Membership is completely free. Some ticketed events may have a small contribution to cover costs." },
  { q: "How much time does it take?", a: "As much as you want to give. Members typically spend 2–3 hours a month; council roles need more." },
  { q: "Can first-year students hold council positions?", a: "First-years can join as volunteers and contest for junior council roles from their second semester." },
  { q: "How do the elections work?", a: "Nomination, campaign, secret-ballot voting and result declaration — all detailed in the rulebook section above." },
  { q: "What kind of events do you run?", a: "Cultural nights, Hindi Diwas, debates, placement prep workshops, mentorship drives and inter-cell collaborations." },
  { q: "Do you help with academics?", a: "Yes. Our mentorship programme pairs juniors with seniors from the same department for notes, doubts and placement guidance." },
  { q: "How do I contact the council?", a: "Reach out on our Telegram group or DM the official Instagram page — both are linked in the Join section." },
];

export const ELECTION_DATE = "2027-01-15T10:00:00+05:30";

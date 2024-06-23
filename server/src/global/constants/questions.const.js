function formatQuestions(Questions) {
  const formatQuestionMap = new Map();
  Questions.forEach((question, index) => {
    formatQuestionMap.set(index + 1, question);
  });
  return formatQuestionMap;
}

const activitiesRQuestions = [
  "Fix electrical things",
  "Repair cars",
  "Fix mechanical things",
  "Build things with wood",
  "Take a Technology Education (e.g., Industrial Arts, Shop)",
  "Take a Mechanical Drawing course",
  "Take a Woodworking course",
  "Take an Auto Mechanics course",
  "Work with an outstanding mechanic or technician",
  "Work outdoors",
  "Operate motorized machines or equipment",
];

const activitiesIQuestions = [
  "Read scientific books or magazines",
  "Work in a research office or laboratory",
  "Work on a scientific project",
  "Study a scientific theory",
  "Work with chemicals",
  "Apply mathematics to practical problems",
  "Take a Physics course",
  "Take a Chemistry course",
  "Take a Mathematics course",
  "Take a Biology course",
  "Study scholarly or technical problems",
];

const activitiesAQuestions = [
  "Sketch, draw, or paint",
  "Design furniture, clothing, or posters",
  "Play in a band, group, or orchestra",
  "Practice a musical instrument",
  "Create portraits or photographs",
  "Write novels or plays",
  "Take an Art course",
  "Arrange or compose music of any kind",
  "Work with a gifted artist, writer, or sculptor",
  "Perform for others (dance, sing, act, etc.)",
  "Read artistic, literary, or musical articles",
];

const activitiesSQuestions = [
  "Meet important educators or therapists",
  "Read sociology articles or books",
  "Work for a charity",
  "Help others with their personal problems",
  "Study juvenile delinquency",
  "Read psychology articles or books",
  "Take a Human Relations course",
  "Teach in a high school",
  "Supervise activities for mentally ill patients",
  "Teach adults",
  "Work as a volunteer",
];

const activitiesEQuestions = [
  "Learn strategies for business success",
  "Operate my own service or business",
  "Attend sales conferences",
  "Take a short course on administration or leadership",
  "Serve as an officer of any group",
  "Supervise the work of others",
  "Meet important executives and leaders",
  "Lead a group in accomplishing some goal",
  "Participate in a political campaign",
  "Act as an organizational or business consultant",
  "Read business magazines or articles",
];

const activitiesCQuestions = [
  "Fill out income tax forms",
  "Add, subtract, multiply, and divide numbers in business or bookkeeping",
  "Operate office machines",
  "Keep detailed records of expenses",
  "Set up a record-keeping system",
  "Take an Accounting course",
  "Take a Commercial Math course",
  "Take an inventory of supplies or products",
  "Check paperwork or products for errors or flaws",
  "Update records or files",
  "Work in an office",
];

export const activitiesR = formatQuestions(activitiesRQuestions);
export const activitiesI = formatQuestions(activitiesIQuestions);
export const activitiesA = formatQuestions(activitiesAQuestions);
export const activitiesS = formatQuestions(activitiesSQuestions);
export const activitiesE = formatQuestions(activitiesEQuestions);
export const activitiesC = formatQuestions(activitiesCQuestions);

// Competencies
const competenciesRQuestions = [
  "I have used wood shop power tools such as a power saw, lathe, or sander",
  "I can make a scale drawing",
  "I can change a car's oil or tire",
  "I have operated power tools such as a drill press, grinder, or sewing machine",
  "I can refinish furniture or woodwork",
  "I can make simple electrical repairs",
  "I can repair furniture",
  "I can use many carpentry tools",
  "I can make simple plumbing repairs",
  "I can build simple articles of wood",
  "I can paint rooms of a house or an apartment",
];

const competenciesIQuestions = [
  "I can use algebra to solve mathematical problems",
  "I can perform a scientific experiment or survey",
  'I understand the "half-life" of a radioactive element',
  "I can use logarithmic tables",
  "I can use a computer to study a scientific problem",
  "I can describe the function ofthe white blood cells",
  "I can interpret simple chemical formulae",
  "I understand why man-made satellites do not fall to earth",
  "I can write a scientific report",
  'I understand the "Big Bang" theory of the universe',
  "I understand the role of DNA in genetics",
];

const competenciesAQuestions = [
  "I can play a musical instrument",
  "I can participate in two- or four-part choral singing",
  "I can perform as a musical soloist",
  "I can act in a play",
  "I can do interpretive reading",
  "I can do a painting, watercolor, or sculpture",
  "I can arrange or compose music",
  "I can design clothing, posters, or furniture",
  "I write stories or poetry well",
  "I can write a speech",
  "I can take attractive photographs",
];

const competenciesSQuestions = [
  "I find it easy to talk with all kinds of people",
  "I am good at explaining things to others",
  "I could work as a neighborhood organizer",
  "People seek me out to tell me their troubles",
  "I can teach children easily",
  "I can teach adults easily",
  "I am good at helping people who are upset or troubled",
  "I have a good understanding of social relationships",
  "I am good at teaching other",
  "I am good at making people feel at ease",
  "I am much better at working with people than with things or ideas",
];

const competenciesEQuestions = [
  "I know how to be a successful leader",
  "I am a good public speaker",
  "I can manage a sales campaign",
  "I can organize the work of others",
  "I am an ambitious and assertive person",
  "I am good at getting people to do things my way",
  "I am a good salesperson",
  "I am a good debater",
  "I can be very persuasive",
  "I have good planning skills",
  "I have some leadership skills",
];

const competenciesCQuestions = [
  "I can file correspondence and other papers",
  "I have held an office job",
  "I can use an automated posting machine",
  "I can do a lot of paperwork in a short time",
  "I can use simple data processing equipment",
  "I can post credits and debits",
  "I can keep accurate records of payment or sales",
  "I can enter information at a computer terminal",
  "I can write business letters",
  "I can perform some routine office activities",
  "I am a careful and orderly person",
];

export const competenciesR = formatQuestions(competenciesRQuestions);
export const competenciesI = formatQuestions(competenciesIQuestions);
export const competenciesA = formatQuestions(competenciesAQuestions);
export const competenciesS = formatQuestions(competenciesSQuestions);
export const competenciesE = formatQuestions(competenciesEQuestions);
export const competenciesC = formatQuestions(competenciesCQuestions);

// Occupation
const occupationsRQuestions = [
  "Airplane Mechanic",
  "Auto Mechanic",
  "Carpenter",
  "Actor/Actress",
  "Surveyor",
  "Construction Inspector",
  "Radio Mechanic",
  "Locomotive Engineer",
  "Machinist",
  "Electrician",
  "Farmer",
  "Helicopter Pilot",
  "Electronic Technician",
  "Welder",
];

const occupationsIQuestions = [
  "Meteorologist",
  "Biologist",
  "Astronomer",
  "Medical Laboratory Technician",
  "Anthropologist",
  "Chemist",
  "Independent Research Scientist",
  "Writer of Scientific Articles",
  "Geologist",
  "Botanist",
  "Scientific Research Worker",
  "Physicist",
  "Social Science Researcher",
  "Environmental Analyst",
];

const occupationsAQuestions = [
  "Poet",
  "Musician",
  "Novelist",
  "Actor/Actress",
  "Free-Lance Write",
  "Musical Arrange",
  "Journalist",
  "Artist",
  "Singer",
  "Composer",
  "Sculptor/Sculptress",
  "Playwright",
  "Cartoonist",
  "Entertainer",
];

const occupationsSQuestions = [
  "Career Counselor",
  "Sociologist",
  "High School Teacher",
  "Substance Abuse Counselor",
  "Juvenile Delinquency Expert",
  "Speech Therapist",
  "Marriage Counselor",
  "Clinical Psychologist",
  "Social Science Teacher",
  "Personal Counselor",
  "Youth Camp Director",
  "Social Worker",
  "Rehabilitation Counselor",
  "Playground Director",
];

const occupationsEQuestions = [
  "Buyer",
  "Advertising Executive",
  "Manufacturer's Representative",
  "Business Executive",
  "Master of Ceremonies",
  "Salesperson",
  "Real Estate Salesperson",
  "Department Store Manager",
  "Sales Manager",
  "Public Relations Executive",
  "TV Station Manager",
  "Small Business Owner",
  "Legislator",
  "Airport Manager",
];

const occupationsCQuestions = [
  "Bookkeeper",
  "Budget Reviewer",
  "Certified Public Accountant",
  "Credit Investigator",
  "Bank Teller",
  "Tax Expert",
  "Inventory Controller",
  "Computer Operator",
  "Financial Analyst",
  "Cost Estimator",
  "Payroll Clerk",
  "Bank Examiner",
  "Accounting Clerk",
  "Audit Clerk",
];

export const occupationsR = formatQuestions(occupationsRQuestions);
export const occupationsI = formatQuestions(occupationsIQuestions);
export const occupationsA = formatQuestions(occupationsAQuestions);
export const occupationsS = formatQuestions(occupationsSQuestions);
export const occupationsE = formatQuestions(occupationsEQuestions);
export const occupationsC = formatQuestions(occupationsCQuestions);

// Self Estimates
export const SE1 = new Map([
  ["R", "Mechanical Ability"],
  ["I", "Scientific Ability"],
  ["A", "Artistic Ability"],
  ["S", "Teaching Ability"],
  ["E", "Sales Ability"],
  ["C", "Clerical Ability"],
]);

export const SE2 = new Map([
  ["R", "Manual Skills"],
  ["I", "Math Ability"],
  ["A", "Musical Ability"],
  ["S", "Understanding of others"],
  ["E", "Managerial Skills"],
  ["C", "Office Skills"],
]);

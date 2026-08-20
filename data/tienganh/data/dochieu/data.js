// ==================== TOEFL - BÀI 1 ====================
const DOAN_VAN_1 = `Martin Luther King, Jr., is well known for his work in civil rights and for his many famous speeches, among them is his moving "I Have A Dream" speech. But fewer people know much about King's childhood. M.L., as he was called, was born in 1929 in Atlanta, Georgia, at the home of his maternal grandfather. M.L.'s grandfather, the Reverend A.D. Williams, purchased their home on Auburn Avenue in 1909, twenty years before M.L. was born. The Reverend Williams, an eloquent speaker, played an important role in the community since so many people's lives centered around the church. He allowed his church and his home to be used as a meeting place for a number of organizations dedicated to the education and social advancement of blacks. M.L. grew up in this atmosphere, with his home being used as a community gathering place, and was no doubt influenced by it.

M.L.'s childhood was not especially eventful. His father was a minister and his mother was a musician. He was the second of three children, and he attended all-black schools in a black neighborhood. The neighborhood was not poor, however. Auburn Avenue was the main artery through a prosperous neighborhood that had come to symbolize achievement for Atlanta's black people. It was an area of banks, insurance companies, builders, jewelers, tailors, doctors, lawyers, and other black-owner black-operated businesses and services. Even in the face of Atlanta's segregation, the district thrived. Dr. King never forgot the community spirit he had known as a child, nor did he forget the racial prejudice that was a seemingly insurmountable barrier that kept black Atlantans from mingling with whites.`;

const BAI_TOEFL_1 = [
  { question: "1. What is this passage mainly about?", A: "the prejudice that existed in Atlanta", B: "Martin Luther King's childhood", C: "M.L.'s grandfather", D: "the neighborhood King grew up in", correct: "B" },
  { question: "2. The word 'eloquent' in line 7 means most nearly", A: "powerful", B: "active", C: "romantic", D: "fascinating", correct: "A" },
  { question: "3. The word 'gathering' in line 12 could best be replaced by", A: "picking", B: "learning", C: "exciting", D: "meeting", correct: "D" },
  { question: "4. As used, the word 'eventful' in line 15 is closest in meaning to which of the following?", A: "valued", B: "memorable", C: "admirable", D: "emotional", correct: "B" },
  { question: "5. In line 20, the word 'it' refers to which of the following?", A: "achievement", B: "neighborhood", C: "segregation", D: "services", correct: "B" },
  { question: "6. According to the author, blacks in King's neighborhood were involved in all the following businesses and services EXCEPT", A: "dentistry", B: "medicine", C: "law", D: "banking", correct: "A" },
  { question: "7. The word 'tailors' in line 21 describes people who are associated with which of the following trades?", A: "flower arranging", B: "shoe making", C: "garment making", D: "book binding", correct: "C" },
  { question: "8. According to the author, King was influenced by", A: "community spirit", B: "black lawyers", C: "his mother", D: "his speeches", correct: "A" },
  { question: "9. The word 'thrived' in line 23 refers to which of the following?", A: "achieved", B: "surrendered", C: "flourished", D: "held", correct: "C" },
  { question: "10. As used in line 25, which of the following is closest in meaning to the word 'seemingly'?", A: "apparently", B: "inevitably", C: "inexplicably", D: "hastily", correct: "A" },
  { question: "11. The word 'mingling' in line 26 could best be replaced by which of the following?", A: "interfering", B: "gargling", C: "consuming", D: "associating", correct: "D" },
  { question: "12. According to the author, M.L.", A: "had a difficult childhood", B: "was a good musician as a child", C: "loved to listen to his grandfather speak", D: "grew up in a relatively rich area of Atlanta", correct: "D" }
];

// ==================== TOEFL - BÀI 2 ====================
const DOAN_VAN_2 = `Carbohydrates, which are sugars, are an essential part of a healthy diet. They provide the main source of energy for the body, and they also function to flavor and sweeten foods. Carbohydrates range from simple sugars like glucose to complex sugars such as amylose and amylopectin. Nutritionists estimate that carbohydrates should make up about one-fourth to one-fifth of a person's diet. This translates to about 75-100 grams of carbohydrates per day.

A diet that is deficient in carbohydrates can have an adverse effect on a person's health. When the body lacks a sufficient amount of carbohydrates it must then use its protein supplies for energy, a process called gluconeogenesis. This, however, results in a lack of necessary protein, and further health difficulties may occur. A lack of carbohydrates can also lead to ketosis, a build-up of ketones in the body that causes fatigue, lethargy, and bad breath.`;

const BAI_TOEFL_2 = [
  { question: "1. What is the main idea of this passage?", A: "Carbohydrates are needed for good health.", B: "Carbohydrates prevent a build-up of proteins.", C: "Carbohydrates can lead to ketosis.", D: "Carbohydrates are an expendable part of a good diet.", correct: "A" },
  { question: "2. The word 'function' as used in line 3 refers to which of the following?", A: "neglect", B: "serve", C: "dissolve", D: "profess", correct: "B" },
  { question: "3. The word 'range' as used in line 3 is closest in meaning to which of the following?", A: "probe", B: "proceed", C: "hail", D: "extend", correct: "D" },
  { question: "4. In line 5, the word 'estimate' could best be replaced by", A: "disbelieve", B: "declare", C: "calculate", D: "wonder", correct: "C" },
  { question: "5. According to the passage, what do most nutritionists suggest?", A: "Sufficient carbohydrates will prevent gluconeogenesis.", B: "Carbohydrates are simple sugars called glucose.", C: "Carbohydrates should make up about a quarter of a person's daily diet.", D: "Carbohydrates should be eaten in very small quantities.", correct: "C" },
  { question: "6. Which of the following do carbohydrates NOT do?", A: "prevent ketosis", B: "cause gluconeogenesis", C: "provide energy for the body", D: "flavor and sweeten food", correct: "B" },
  { question: "7. Which of the following words could best replace 'deficient' as used in line 9?", A: "outstanding", B: "abundant", C: "insufficient", D: "unequal", correct: "C" },
  { question: "8. What does the word 'this' refer to in line 13?", A: "using protein supplies for energy", B: "converting carbohydrates to energy", C: "having a deficiency in carbohydrates", D: "having an insufficient amount of protein", correct: "A" },
  { question: "9. According to the passage, which of the following does NOT describe carbohydrates?", A: "a protein supply", B: "a necessity", C: "a range of sugars", D: "an energy source", correct: "A" },
  { question: "10. The word 'lack' in line 13 is most similar to which of the following?", A: "plethora", B: "shortage", C: "derivation", D: "commission", correct: "B" },
  { question: "11. Which of the following best describes the author's tone?", A: "sensitive", B: "emotional", C: "informative", D: "regretful", correct: "C" },
  { question: "12. Which of the following best describes the organization of this passage?", A: "cause and result", B: "comparison and contrast", C: "specific to general", D: "definition and example", correct: "D" }
];

// ==================== TOEFL - BÀI 3 ====================
const DOAN_VAN_3 = `After two decades of growing student enrollments and economic prosperity, business schools in the United States have started to face harder times. Only Harvard's MBA School has shown a substantial increase in enrollment in recent years. Both Princeton and Stanford have seen decreases in their enrollments. Since 1990, the number of people receiving Masters in Business Administration (MBA) degrees, has dropped about 3 percent to 75,000, and the trend of lower enrollment rates is expected to continue.

There are two factors causing this decrease in students seeking an MBA degree. The first one is that many graduates of four-year colleges are finding that an MBA degree does not guarantee a plush job on Wall Street, or in other financial districts of major American cities. Many of the entry-level management jobs are going to students graduating with Master of Arts degrees in English and the humanities as well as those holding MBA degrees. Students have asked the question, "Is an MBA degree really what I need to be best prepared for getting a good job?" The second major factor has been the cutting of American payrolls and the lower number of entry-level jobs being offered. Business needs are changing, and MBA schools are struggling to meet the new demands.`;

const BAI_TOEFL_3 = [
  { question: "1. What is the main focus of this passage?", A: "jobs on Wall Street", B: "types of graduate degrees", C: "changes in enrollment for MBA schools", D: "how schools are changing to reflect the economy", correct: "C" },
  { question: "2. The phrase 'two decades' in line 1 refers to a period of", A: "10 years", B: "20 years", C: "50 years", D: "100 years", correct: "B" },
  { question: "3. The word 'prosperity' in line 1 could be best replaced by which of the following?", A: "success", B: "surplus", C: "nurturing", D: "education", correct: "A" },
  { question: "4. Which of the following business schools has NOT shown a decrease in enrollment?", A: "Princeton", B: "Harvard", C: "Stanford", D: "Yale", correct: "B" },
  { question: "5. The phrase 'trend of' in line 7 is closest in meaning to which of the following?", A: "reluctance of", B: "drawback to", C: "movement toward", D: "extraction from", correct: "C" },
  { question: "6. As used in line 10, the word 'seeking' could best be replaced by which of the following?", A: "examining", B: "avoiding", C: "seizing", D: "pursuing", correct: "D" },
  { question: "7. Which of the following descriptions most likely applies to Wall Street?", A: "a center for international affairs", B: "a major financial center", C: "a shopping district", D: "a neighborhood in New York", correct: "B" },
  { question: "8. The word 'plush' in line 13 most probably means", A: "legal", B: "satisfactory", C: "fancy", D: "dependable", correct: "C" },
  { question: "9. According to the passage, what are two causes of declining business school enrollments?", A: "lack of necessity for an MBA and an economic recession", B: "low salary and foreign competition", C: "fewer MBA schools and fewer entry-level jobs", D: "declining population and economic prosperity", correct: "A" },
  { question: "10. The word 'cutting' in line 18 could best be replaced by which of the following?", A: "wounding", B: "reducing", C: "dividing", D: "carving", correct: "B" },
  { question: "11. As used in line 20, the word 'struggling' is closest in meaning to", A: "evolving", B: "plunging", C: "starting", D: "striving", correct: "D" },
  { question: "12. Which of the following might be the topic of the paragraph?", A: "MBA schools' efforts to change", B: "future economic predictions", C: "a history of the recent economic changes", D: "descriptions of non-MBA graduate programs", correct: "A" }
];

// ==================== TOEFL - BÀI 4 ====================
const DOAN_VAN_4 = `A pilot cannot fly a plane by sight alone. In many conditions, such as flying at night and landing in dense fog, a pilot must use radar, an alternative way of navigating. Since human eyes are not very good at determining speeds of approaching objects, radar can show a pilot how fast nearby planes are moving.

The basic principle of radar is exemplified by what happens when one shouts in a cave. The echo of the sounds against the walls helps a person determine the size of the cave. With radar, however, the waves are radio waves instead of sound waves. Radio waves travel at the speed of light, about 300,000 kilometers in one second. A radar set sends out a short burst of radiation waves. Then it receives the echoes produced when the waves bounce off objects. By determining the time it takes for the echoes to return to the radar set, a trained technician can determine the distance between the radar set and other objects. The word "radar," in fact, gets its name from the term "radio detection and ranging." "Ranging" is the term for detection of the distance between an object and the radar set. Besides being of critical importance to pilots, radar is essential for air traffic control, tracking ships at sea, and for tracking weather systems and storms.`;

const BAI_TOEFL_4 = [
  { question: "1. What is the main topic of this passage?", A: "the nature of radar", B: "types of ranging", C: "alternatives to radar", D: "history of radar", correct: "A" },
  { question: "2. In line 2, the word 'dense' could be replaced by", A: "cold", B: "wet", C: "dark", D: "thick", correct: "D" },
  { question: "3. According to the passage, what can radar detect besides location of objects?", A: "size", B: "weight", C: "speed", D: "shape", correct: "C" },
  { question: "4. The word 'shouts' in line 8 is most similar in meaning to which of the following?", A: "eavesdrops", B: "yells", C: "confesses", D: "whispers", correct: "B" },
  { question: "5. Which of the following words best describes the tone of this passage?", A: "argumentative", B: "imaginative", C: "explanatory", D: "humorous", correct: "C" },
  { question: "6. The phrase 'a burst' in line 13 is closest in meaning in which of the following?", A: "an attachment", B: "a discharge", C: "a stream", D: "a ray", correct: "B" },
  { question: "7. The word 'it' in line 13 refers to which of the following?", A: "a radar set", B: "a short burst", C: "a radiation wave", D: "light", correct: "A" },
  { question: "8. Which of the following could best replace the word 'bounce' in line 13?", A: "overturn", B: "groove", C: "extend", D: "rebound", correct: "D" },
  { question: "9. Which type of waves does radar use?", A: "sound", B: "heat", C: "radio", D: "light", correct: "C" },
  { question: "10. The word 'tracking' in line 20 is closest in meaning to which of the following?", A: "repairing", B: "searching for", C: "glancing at", D: "fighting", correct: "B" },
  { question: "11. Which of the following would most likely be the topic of the next paragraph?", A: "other uses of radar", B: "uses of sonar technology", C: "other technology used by pilots", D: "a history of flying", correct: "A" },
  { question: "12. What might be inferred about radar?", A: "It takes the place of a radio.", B: "It gave birth to the invention of the airplane.", C: "It developed from a study of sound waves.", D: "It has improved navigational safety.", correct: "D" }
];
// ==================== TOEFL - BÀI 5 ====================
const DOAN_VAN_5 = `Langston Hughes was one of the greatest American writers of the twentieth century. He was born in Joplin, Missouri, and moved to Cleveland at the age of fourteen. Several years later he spent one year in Mexico before attending Columbia University in New York. For a few years after that he roamed the world as a seaman, visiting ports around the world and writing some poetry. He returned to the United States and attended Lincoln University, where he won the Witter Bynner Prize for undergraduate poetry. After graduating in 1928, he traveled to Spain and to Russia with the help of a Guggenheim fellowship.

His novels include Not Without Laughter (1930) and The Big Sea (1940). He wrote an autobiography in 1956 and also published several collections of poetry. The collections include The Weary Blues (1926), The Dream Keeper (1932), Shakespeare in Harlem (1942), Fields of Wonder (1947), One Way Ticket (1947), and Selected Poems (1959). A man of many talents, Hughes was also a lyricist, librettist, and a journalist. As an older man in the 1960s he spent much of his time collecting poems from Africa and from African-Americans to popularize black writers. Hughes is one of the most accomplished writers in American literary history, and he is seen as one of the artistic leaders of the Harlem Renaissance, the period when a neighborhood that was predominantly black produced a flood of great literature, music, and other art forms depicting daily city life for African-Americans.`;

const BAI_TOEFL_5 = [
  { question: "1. What is the main topic of this passage?", A: "the life of Langston Hughes", B: "the Harlem Renaissance", C: "African-American writers", D: "American twentieth-century writers", correct: "A" },
  { question: "2. Where was Langston Hughes born?", A: "Spain", B: "New York", C: "Missouri", D: "North Carolina", correct: "C" },
  { question: "3. The word 'roamed' as used in line 5 is closest in meaning to which of the following?", A: "traveled", B: "soared", C: "floated", D: "walked", correct: "A" },
  { question: "4. As used in line 5, which of the following words could best replace the word 'ports'?", A: "islands", B: "ships", C: "friends", D: "harbors", correct: "D" },
  { question: "5. To which of the following movements might 'Shakespeare in Harlem' refer to?", A: "the Civil War", B: "the Harlem Riots", C: "the Harlem Renaissance", D: "the Civil Rights Movement", correct: "C" },
  { question: "6. What provided Hughes with assistance for his travel to Spain and Russia?", A: "his job as a reporter", B: "his career as a soldier", C: "a literary fellowship", D: "a college study program", correct: "C" },
  { question: "7. The word 'talents' in line 16 could be be replaced by which of the following?", A: "desires", B: "abilities", C: "strategies", D: "careers", correct: "B" },
  { question: "8. According to the author, what did Hughes do during the later years of his life?", A: "write short stories", B: "popularize African-American writers", C: "advocate racial equality", D: "write about life in Harlem", correct: "B" },
  { question: "9. Which of the following could best replace the word 'accomplished' as used in line 19?", A: "successful", B: "prolific", C: "brilliant", D: "imaginative", correct: "A" },
  { question: "10. The author uses the word 'flood' in line 22 to refer to", A: "a drought", B: "an outpouring", C: "a cloudburst", D: "a streak", correct: "B" },
  { question: "11. Which of the following can best substitute for the word 'depicting' in line 23?", A: "congratulating", B: "blessing", C: "screening", D: "portraying", correct: "D" },
  { question: "12. According to the passage, Langston Hughes was all of the following EXCEPT", A: "a novelist", B: "a poet", C: "an historian", D: "a journalist", correct: "C" }
];

// ==================== TOEFL - BÀI 6 ====================
const DOAN_VAN_6 = `Surrealism was a movement in graphic art and literature that was founded in Paris, in 1924, by Andr Breton. Inspired by another movement in art called Dadaism, the Surrealist movement has been one of the most influential art movements in the 20th century. It eventually had a worldwide audience, flourishing notably in the United States during World War II. Surrealism focused on the role of the unconscious in the creative process. In a nihilistic protest, it rejected all aspects of Western culture. Surrealist writers, such as Aragon and Soupalt, believed in directly transcribing onto paper anything their unconscious mind wished them to. They never altered or revised what they wrote because that would have interfered with the purity of their creation. Surrealist painters, a group that included such famous names as Miro, Dali, and Ernst, displayed a wide variety of style and content. Though Breton was the founder of this movement, his strong leadership style brought about dissent, which resulted in several of the painters officially breaking away from the movement.`;

const BAI_TOEFL_6 = [
  { question: "1. With what topic is this passage primarily concerned?", A: "influential painters such as Miro, Dali, and Ernst", B: "the Surrealist movement in graphic art and literature", C: "nihilism as an aspect of the Surrealist movement", D: "Andr Breton's leadership style", correct: "B" },
  { question: "2. As used in line 1, which of the following is the closest in meaning to the phrase \"a movement\"?", A: "a trend", B: "an action", C: "an exercise", D: "a gesture", correct: "A" },
  { question: "3. Which of the following is closest in meaning to the word \"inspired\" in line 2?", A: "excited", B: "influenced", C: "stifled", D: "created", correct: "B" },
  { question: "4. Why does the author mention Dadaism?", A: "to demonstrate the importance of Surrealism", B: "to give background information about Surrealism", C: "to show the lack of influence of Dadaism", D: "to infer that Andr Breton rejected Dadaism", correct: "B" },
  { question: "5. What does \"it\" refer to in line 7?", A: "a protest", B: "the unconscious", C: "Surrealism", D: "the creative process", correct: "C" },
  { question: "6. The word \"altered\" in line 10 means", A: "changed", B: "forgot", C: "believed", D: "allowed", correct: "A" },
  { question: "7. Which of the following is closest to the meaning of \"purity\" in line 11?", A: "integrity", B: "fragility", C: "dignity", D: "simplicity", correct: "A" },
  { question: "8. According to the passage, all of the following are true of Surrealism EXCEPT?", A: "Surrealism was influenced by Dadaism.", B: "Surrealists believed that the unconscious played an important role in the creative process.", C: "Some Surrealist painters quit the official movement because of Andr Breton.", D: "Surrealism embraced Western culture.", correct: "D" },
  { question: "9. The word \"displayed\" in line 13 is closest in meaning to which of the following?", A: "neglected", B: "replaced", C: "exhibited", D: "condemned", correct: "C" },
  { question: "10. The word \"dissent\" in line 15 is closest in meaning to which of the following?", A: "disagreement", B: "distress", C: "distraction", D: "discouragement", correct: "A" },
  { question: "11. The phrase \"breaking away\" in line 16 means", A: "escaping", B: "separating", C: "defecting", D: "passing", correct: "B" },
  { question: "12. Which of the following statements is best supported by this passage?", A: "Andr Breton founded art and literature in Paris.", B: "Andr Breton rejected Dadaism because of Nihilism.", C: "Andr Breton supported Miro in his painting.", D: "Andr Breton was a vital part of the Surrealist movement", correct: "D" }
];
// ==================== TOEFL - BÀI 7 ====================
const DOAN_VAN_7 = `May 7, 1840, was the birthday of one of the most famous Russian composers of the nineteenth century Peter Illich Tchaikovsky. The son of a mining inspector, Tchaikovsky studied music as a child and later studied composition at the St. Petersburg Conservatory. His greatest period of productivity occurred between 1876 and 1890, during which time he enjoyed the patronage of Madame von Meck, a woman he never met, who gave him a living stipend of about $1,000.00 a year. Madame von Meck later terminated her friendship with Tchaikovsky, as well as his living allowance, when she, herself, was facing financial difficulties. It was during the time of Madame von Meck's patronage, however, that Tchaikovsky created the music for which he is most famous, including the music for the ballets of Swan Lake and The Sleeping Beauty. Tchaikovsky's music, well known for its rich melodic and sometimes melancholy passages, was one of the first that brought serious dramatic music to dance. Before this, little attention had been given to the music behind the dance. Tchaikovsky died on November 6, 1893, ostensibly of cholera, though there are now some scholars who argue that he committed suicide.`;

const BAI_TOEFL_7 = [
  { question: "1. With what topic is the passage primarily concerned?", A: "the life and music of Tchaikovsky", B: "development of Tchaikovsky's music for ballets", C: "Tchaikovsky's relationship with Madame Von Meck", D: "the cause of Tchaikovsky's death", correct: "A" },
  { question: "2. Tchaikovsky's father was most probably", A: "a musician", B: "a supervisor", C: "a composer", D: "a soldier", correct: "B" },
  { question: "3. Which of the following is closest in meaning to the word \"productivity\" in line 5?", A: "fertility", B: "affinity", C: "creativity", D: "maturity", correct: "C" },
  { question: "4. In line 6, the phrase \"enjoyed the patronage of\" probably means", A: "liked the company of", B: "was mentally attached to", C: "solicited the advice of", D: "was financially dependent upon", correct: "D" },
  { question: "5. Which of the following could best replace the word \"terminated\" in line 8?", A: "discontinued", B: "resolved", C: "exploited", D: "hated", correct: "A" },
  { question: "6. According to the passage, all of the following describe Madame von Meck EXCEPT:", A: "She had economic troubles.", B: "She was generous.", C: "She was never introduced to Tchaikovsky.", D: "She enjoyed Tchaikovsky's music.", correct: "D" },
  { question: "7. Where in the passage does the author mention Tchaikovsky's influence on dance?", A: "May 7 . . . St. Petersburg Conservatory.", B: "Madam von Meck later terminated . . . financial difficulties.", C: "It was during . . . The Sleeping Beauty.", D: "Tchaikovsky's music . . . committed suicide.", correct: "D" },
  { question: "8. According to the passage, for what is Tchaikovsky's music most well known?", A: "its repetitive and monotonous tones", B: "the ballet-like quality of the music", C: "the richness and melodic drama of the music", D: "its lively, capricious melodies", correct: "C" },
  { question: "9. According to the passage, \"Swan Lake\" and \"The Sleeping Beauty\" are", A: "dances", B: "songs", C: "operas", D: "plays", correct: "A" },
  { question: "10. Which of the following is NOT mentioned in the passage?", A: "Tchaikovsky's influence on ballet music", B: "Tchaikovsky's unhappiness leading to suicide", C: "the patronage of Madame von Meck", D: "Tchaikovsky's productivity in composing", correct: "B" },
  { question: "11. Which of the following is closest in meaning to the word \"behind\" as used in line 16?", A: "supporting", B: "in back of", C: "going beyond", D: "concealing", correct: "A" },
  { question: "12. In line 17, the word \"ostensibly\" could be best replaced by", A: "regretfully", B: "assuredly", C: "tragically", D: "apparently", correct: "D" }
];

// ==================== TOEFL - BÀI 8 ====================
const DOAN_VAN_8 = `Since the world has become industrialized, there has been an increase in the number of animal species that have either become extinct or have neared extinction. Bengal tigers, for instance, which once roamed the jungles in vast numbers, now number only about 2,300, and by 5 the year 2025 their population is estimated to be down to zero. What is alarming about the case of the Bengal tiger is that this extinction will have been caused almost entirely by poachers who, according to some sources, are not interested in material gain but in personal gratification. This is an example of the callousness that is part 10 of what is causing the problem of extinction. Animals like the Bengal tiger, as well as other endangered species, are a valuable part of the world's ecosystem. International laws protecting these animals must be enacted to ensure their survival, and the survival of our planet.
15 Countries around the world have begun to deal with the problem in various ways. Some countries, in order to circumvent the problem, have allocated large amounts of land to animal reserves. They then charge admission to help defray the costs of maintaining the parks, 20 and they often must also depend on world organizations for support. With the money they get, they can invest in equipment and patrols to protect the animals. Another solution that is an attempt to stem the tide of animal extinction is an international boycott of products made from endangered species. This seems fairly effective, but it 25 will not, by itself, prevent animals from being hunted and killed.`;

const BAI_TOEFL_8 = [
  { question: "1. What is the main topic of the passage?", A: "the Bengal tiger", B: "international boycotts", C: "endangered species", D: "problems with industrialization", correct: "C" },
  { question: "2. Which of the following is closest in meaning to the word \"alarming\" in line 6?", A: "dangerous", B: "serious", C: "gripping", D: "distressing", correct: "D" },
  { question: "3. Which of the following could best replace the word \"case\" as used in line 6?", A: "act", B: "situation", C: "contrast", D: "trade", correct: "B" },
  { question: "4. The word \"poachers\" as used in line 7 could be best replaced by which of the following?", A: "illegal hunters", B: "enterprising researchers", C: "concerned scientists", D: "trained hunters", correct: "A" },
  { question: "5. The word \"callousness\" in line 9 could best be replaced by which of the following?", A: "indirectness", B: "independence", C: "incompetence", D: "insensitivity", correct: "D" },
  { question: "6. The above passage is divided into two paragraphs in order to contrast", A: "a problem and a solution", B: "a statement and an illustration", C: "a comparison and a contrast", D: "specific and general information", correct: "A" },
  { question: "7. What does the word \"this\" refer to in line 9?", A: "endangered species that are increasing", B: "Bengal tigers that are decreasing", C: "poachers who seek personal gratification", D: "sources that may not be accurate", correct: "C" },
  { question: "8. Where in the passage does the author discuss a cause of extinction?", A: "Since the world . . . down to zero.", B: "What is alarming . . . personal gratification.", C: "Country around . . . for support.", D: "With the money . . . dangered species.", correct: "B" },
  { question: "9. Which of the following could best replace the word \"allocated\" in line 17?", A: "set aside", B: "combined", C: "organized", D: "taken off", correct: "A" },
  { question: "10. The word \"defray\" in line 19 is closest in meaning to which of the following?", A: "lower", B: "raise", C: "make a payment on", D: "make an investment toward", correct: "C" },
  { question: "11. The author uses the phrase \"stem the tide\" in line 22-23 to mean", A: "touch", B: "stop", C: "tax", D: "save", correct: "B" },
  { question: "12. Which of the following best describes the author's attitude?", A: "forgiving", B: "concerned", C: "vindictive", D: "surprised", correct: "B" }
];

// ==================== TOEFL - BÀI 9 ====================
const DOAN_VAN_9 = `A balanced diet contains proteins, which are composed of complex amino acids. There are 20 types of amino acids, comprising about 16 percent of the body weight in a lean individual. A body needs all 20 to be healthy. Amino acids can be divided into two groups: essential 5 and nonessential. There are 9 essential amino acids. These are the proteins that the body cannot produce by itself, so a healthy individual must ingest them. The 11 nonessential amino acids, on the other hand, are produced by the body, so it is not necessary to ingest them. Proteins are described as being either high-quality or low-quality, 10 depending on how many of the 9 essential amino acids the food contains. High-quality proteins, typically found in animal meats, are proteins that have ample amounts of the essential amino acids. Low-quality proteins are mainly plant proteins and usually lack one or more of the essential amino acids. Since people who follow a strict vegetarian 15 diet are ingesting only low-quality proteins, they must make sure that their diets contain a variety of proteins, in order to ensure that what is lacking in one food is available in another. This process of selecting a variety of the essential proteins is called protein complementation. Since an insufficient amount of protein in the 20 diet can be crippling, and prolonged absence of proteins can cause death, it is imperative that a vegetarian diet contains an ample amount of the essential proteins.`;

const BAI_TOEFL_9 = [
  { question: "1. With what topic is this passage primarily concerned?", A: "the 20 types of amino acids", B: "high- and low-quality proteins", C: "the process of complementation", D: "healthy diets for vegetarians", correct: "D" },
  { question: "2. The word \"lean\" in line 3 could be best replaced by", A: "thin", B: "fat", C: "tall", D: "short", correct: "A" },
  { question: "3. The word \"ingest\" in line 7 is closest in meaning to which of the following?", A: "chew", B: "swallow", C: "suck", D: "drink", correct: "B" },
  { question: "4. The word \"ample\" in line 13 is closest in meaning to which of the following?", A: "meager", B: "frequent", C: "substantial", D: "harmful", correct: "C" },
  { question: "5. Which of the following would NOT be an example of a low-quality protein?", A: "legumes", B: "apples", C: "grains", D: "tuna", correct: "D" },
  { question: "6. As used in line 14, which of the following words is closest in meaning to \"strict\"?", A: "responsible", B: "casual", C: "harmonious", D: "rigid", correct: "D" },
  { question: "7. According to the passage, a vegetarian could die from insufficient protein ingestion if he or she", A: "did not follow a varied and properly protein-complemented diet.", B: "ate too many animal proteins,and could not digest them properly.", C: "did not follow a diet in which nonessential proteins were ingested.", D: "ate too many low-quality proteins.", correct: "A" },
  { question: "8. Which of the following is closest in meaning to the word \"crippling\" as used in line 20?", A: "discouraging", B: "betraying", C: "incapacitating", D: "amazing", correct: "C" },
  { question: "9. Which of the following words could best replace the word \"prolonged\" in line 20?", A: "narrow", B: "hollow", C: "hard-hearted", D: "extended", correct: "D" },
  { question: "10. In line 21, the word \"imperative\" can be best replaced by", A: "crucial", B: "impossible", C: "wonderful", D: "satisfying", correct: "A" },
  { question: "11. Which of the following best describes the author's tone in this passage?", A: "forceful", B: "light", C: "casual", D: "argumentative", correct: "A" },
  { question: "12. Which statement best describes the organization of this passage?", A: "Contrasting views concerning proteins are compared.", B: "The author moves from a general comment to a specific argument.", C: "A statement is given and its cause is then discussed.", D: "Items are discussed in their order of importance", correct: "B" }
];


// Cập nhật cuối danh sách DANH_SACH_BAI:
const DANH_SACH_BAI = [
  { van: DOAN_VAN_1, cauhoi: BAI_TOEFL_1 },
  { van: DOAN_VAN_2, cauhoi: BAI_TOEFL_2 },
  { van: DOAN_VAN_3, cauhoi: BAI_TOEFL_3 },
  { van: DOAN_VAN_4, cauhoi: BAI_TOEFL_4 },
  { van: DOAN_VAN_5, cauhoi: BAI_TOEFL_5 },
  { van: DOAN_VAN_6, cauhoi: BAI_TOEFL_6 },
  { van: DOAN_VAN_7, cauhoi: BAI_TOEFL_7 },
  { van: DOAN_VAN_8, cauhoi: BAI_TOEFL_8 },
  { van: DOAN_VAN_9, cauhoi: BAI_TOEFL_9 },

];

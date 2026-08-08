// dulieu_coban.js - Lưu toàn bộ câu hỏi, thay cho Google Sheet
const BAI_TAP = {
  // Bài 1 - 15 câu đầu
  1: [
    { question: "Is Susan ........... home?", A: "in", B: "at", C: "on", D: "under", correct: "B" },
    { question: `"Do the children go to school every day?" .....................`, A: "Yes, they go.", B: "Yes, they do.", C: "They go.", D: "No, they don't go.", correct: "B" },
    { question: "What ............ now?", A: "is the time", B: "does the time", C: "is time", D: "is it", correct: "A" },
    { question: "They always go to school ............. bicycle.", A: "with", B: "in", C: "on", D: "by", correct: "D" },
    { question: "What color ........... his new car?", A: "have", B: "is", C: "does", D: "are", correct: "B" },
    { question: "Are there many students in Room 12? ...................................................", A: "Yes they are.", B: "Yes, they are.", C: "Some are.", D: "No they aren't.", correct: "C" },
    { question: "You should do your ................. before going to class.", A: "home work", B: "homework", C: "homeworks", D: "housework", correct: "B" },
    { question: "Mr. Pike ............ us English.", A: "teach", B: "teaches", C: "teaching", D: "to teach", correct: "B" },
    { question: "Tom and ............. are going to the birthday party together.", A: "I", B: "me", C: "my", D: "mine", correct: "A" },
    { question: "Our English lessons are ............... long.", A: "many", B: "much", C: "a lot of", D: "very", correct: "D" },
    { question: "Bangkok is ............ capital of Thailand.", A: "a", B: "one", C: "the", D: "an", correct: "C" },
    { question: "Are you free ............ Saturday?", A: "on", B: "at", C: "in", D: "into", correct: "A" },
    { question: "There are .............. girls in our class.", A: "no", B: "not", C: "none", D: "none of", correct: "A" },
    { question: "Let ............ go for a walk.", A: "we", B: "us", C: "you", D: "our", correct: "B" },
    { question: "What is your name? - .......... name is Linda.", A: "Your", B: "His", C: "My", D: "Her", correct: "C" }
  ],
    // Bài 2
  2: [
    { question: "Whose bicycle is it? It's .............", A: "he", B: "her", C: "hers", D: "she", correct: "C" },
    { question: "How old is .............?", A: "she", B: "her", C: "hers", D: "his", correct: "A" },
    { question: "There are .......... eggs on the table.", A: "some", B: "any", C: "many", D: "much", correct: "A" },
    { question: "Is there .......... cheese on the table?", A: "some", B: "any", C: "many", D: "much", correct: "B" },
    { question: "How .............. cakes does she want?", A: "some", B: "any", C: "many", D: "much", correct: "C" },
    { question: "Peter doesn't want ............. eggs, but he wants some soup.", A: "some", B: "any", C: "many", D: "much", correct: "B" },
    { question: "There is ............ milk in the glass.", A: "some", B: "any", C: "many", D: "much", correct: "A" },
    { question: "How ............. meat do you want?", A: "some", B: "any", C: "many", D: "much", correct: "D" },
    { question: "There isn't .............. coffee in the cup.", A: "some", B: "any", C: "many", D: "much", correct: "B" },
    { question: "They want ............... coffee, but they don't want any bread.", A: "some", B: "any", C: "many", D: "much", correct: "A" },
    { question: "Is this your pencil? No, it isn't. It's .............. pencil.", A: "my", B: "her", C: "our", D: "hers", correct: "B" },
    { question: "................... parents are workers.", A: "We", B: "They", C: "Our", D: "I", correct: "C" },
    { question: "This is my new shirt. - Oh, .......... color is pretty.", A: "it", B: "its", C: "their", D: "they", correct: "B" },
    { question: "He is ................. engineer.", A: "an", B: "a", C: "the", D: "no article", correct: "A" },
    { question: "Your sister is a student and his sister is a student, ................", A: "both", B: "also", C: "and", D: "too", correct: "D" }
  ],
  // Bài 3
  3: [
    { question: "My brother is 6.68 m ..............................", A: "short", B: "tall", C: "taller", D: "shorter", correct: "B" },
    { question: "My mother is 32 and my father is 43. My mother is younger .............. my father.", A: "than", B: "as", C: "but", D: "and", correct: "A" },
    { question: "I am ........... teacher.", A: "the", B: "a", C: "an", D: "no article", correct: "B" },
    { question: "My uncle is ................ good engineer.", A: "the", B: "a", C: "an", D: "no article", correct: "B" },
    { question: "That is ................ eraser.", A: "the", B: "a", C: "an", D: "no article", correct: "C" },
    { question: "We are both ................... doctors.", A: "the", B: "a", C: "an", D: "no article", correct: "D" },
    { question: "This is ................ ink pot.", A: "the", B: "a", C: "an", D: "no article", correct: "C" },
    { question: "They are ................. tall.", A: "the", B: "a", C: "an", D: "no article", correct: "D" },
    { question: "Hoa is ................. good pupil.", A: "the", B: "a", C: "an", D: "no article", correct: "B" },
    { question: "That is a bag. It is on ............ table.", A: "the", B: "a", C: "an", D: "no article", correct: "A" },
    { question: "We are in ............. same class.", A: "the", B: "a", C: "an", D: "no article", correct: "A" },
    { question: "Your book is .......... the desk.", A: "at", B: "over", C: "on", D: "in", correct: "C" },
    { question: "My pens and pencils are ............... the table.", A: "at", B: "over", C: "on", D: "between", correct: "C" },
    { question: "My family's picture is .......... the wall.", A: "at", B: "over", C: "on", D: "opposite", correct: "C" },
    { question: "Lan and Lien are ............ the desk.", A: "at", B: "in", C: "on", D: "into", correct: "A" }
  ],
  // Bài 4
  4: [
    { question: "No ink is ....... the pot.", A: "in", B: "over", C: "at", D: "on", correct: "A" },
    { question: "We are ............. work.", A: "on", B: "in", C: "over", D: "at", correct: "D" },
    { question: "The cat is .............. the dog and the mouse.", A: "between", B: "over", C: "in", D: "at", correct: "A" },
    { question: "His house is .................. the park.", A: "over", B: "between", C: "at", D: "opposite", correct: "D" },
    { question: "Tom is not my teacher but he is a friend of ...............", A: "me", B: "mine", C: "my", D: "I", correct: "B" },
    { question: "Is that ruler yours or............? - It's ..........., not mine.", A: "mine / yours", B: "my / your", C: "mine / your", D: "yours / mine", correct: "D" },
    { question: "Who is that? It's ............ sister. - ............... name is Anne.", A: "Mary / Hers", B: "Mary / Her", C: "Mary's / She", D: "Mary's / Her", correct: "D" },
    { question: "This is John. He is a friend of ............ His wife is also .............. friend.", A: "my / mine", B: "me / mine", C: "yours / my", D: "mine / my", correct: "D" },
    { question: "Tom and Paul are ........... good friends. ............ are very kind to us.", A: "our / They", B: "ours / They", C: "our / Their", D: "our / Them", correct: "A" },
    { question: "The teacher is speaking. We must ............. to her.", A: "listen", B: "talk", C: "hear", D: "work", correct: "A" },
    { question: "Nam is 1.7 m tall. His brother is 1.4 m tall. His brother is ................", A: "thin", B: "fat", C: "short", D: "tall", correct: "C" },
    { question: "That book is not mine. It is .............., I think.", A: "her", B: "your", C: "she", D: "hers", correct: "D" },
    { question: "Who is that? - It is ...............", A: "Mr. Pike", B: "ruler", C: "me", D: "book", correct: "A" },
    { question: "What is the weather like today? It's ............ today.", A: "well", B: "fine", C: "blue", D: "sad", correct: "B" },
    { question: "How are you? I am ........., thanks.", A: "big", B: "eleven", C: "well", D: "sad", correct: "C" }
  ],
  // Bài 5
  5: [
    { question: "My father is a doctor. Lan's father is a doctor, too. They are ______ doctors.", A: "both", B: "and", C: "or", D: "not", correct: "A" },
    { question: "Oh, look at that cat. ______ is very nice. ______ tail is very long and nice.", A: "It / Its", B: "It / It", C: "It's / Its", D: "It / It's", correct: "A" },
    { question: "This is our classroom, not Bob's. ______ classroom is over there. ______ isn't in the classroom now.", A: "His / He's", B: "His / He", C: "His / His", D: "He's / His", correct: "B" },
    { question: "These are Bob and Boom. These books are not ______. ______ are in the desk.", A: "theirs / Theirs", B: "their / Them", C: "their / Theirs", D: "theirs / Their", correct: "A" },
    { question: "______ house is big but ______ is small.", A: "Our / Their", B: "Our / Theirs", C: "Ours / Theirs", D: "Ours / Their", correct: "B" },
    { question: "The Bakers ______ English.", A: "was", B: "are", C: "is", D: "were", correct: "B" },
    { question: "Let us ______ to school.", A: "to go", B: "goes", C: "go", D: "going", correct: "C" },
    { question: "Where are Kate and Jane? - They ______ English exercises in the classroom.", A: "are doing", B: "are doing to do", C: "are doing", D: "is doing", correct: "A" },
    { question: "Tom and Mary are pupils but Ann ______.", A: "aren't", B: "are", C: "is", D: "isn't", correct: "D" },
    { question: "What ______ the Bakers ______ at the moment?", A: "are / working", B: "is / working", C: "are / doing", D: "is / doing", correct: "C" },
    { question: "How ______ your parents?", A: "are", B: "is", C: "was", D: "were", correct: "A" },
    { question: "What ______ the weather like today?", A: "were", B: "are", C: "was", D: "is", correct: "D" },
    { question: "It ______ very hot yesterday.", A: "was", B: "is", C: "were", D: "are", correct: "A" },
    { question: "My daughter is a teacher. My wife is a teacher, too. They ______ both teachers.", A: "was", B: "were", C: "are", D: "is", correct: "C" },
    { question: "Ben and Jim are ______.", A: "student", B: "brothers", C: "architect", D: "engineer", correct: "B" }
  ]

  // Thêm Bài 2, 3,... theo cấu trúc trên nha
};



export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  category: 'diwali' | 'dussehra' | 'sikh-wisdom';
}

export const quizzes: Quiz[] = [
  {
    id: 'diwali-basics',
    title: 'Diwali Fundamentals',
    description: 'Test your knowledge about the Festival of Lights',
    category: 'diwali',
    questions: [
      {
        id: 'diwali-1',
        question: 'How many days is Diwali celebrated?',
        options: ['3 days', '5 days', '7 days', '10 days'],
        correctAnswer: 1,
        explanation: 'Diwali is celebrated for 5 days, starting with Dhanteras and ending with Bhai Dooj.'
      },
      {
        id: 'diwali-2',
        question: 'What does the word "Diwali" mean?',
        options: ['Festival of Colors', 'Row of Lights', 'Victory Celebration', 'Harvest Festival'],
        correctAnswer: 1,
        explanation: 'Diwali comes from "Deepavali" which means "row of lights" in Sanskrit.'
      },
      {
        id: 'diwali-3',
        question: 'Which goddess is primarily worshipped during Diwali?',
        options: ['Saraswati', 'Durga', 'Lakshmi', 'Kali'],
        correctAnswer: 2,
        explanation: 'Goddess Lakshmi, the goddess of wealth and prosperity, is worshipped during Diwali.'
      },
      {
        id: 'diwali-4',
        question: 'What is the first day of Diwali called?',
        options: ['Dhanteras', 'Choti Diwali', 'Lakshmi Puja', 'Govardhan Puja'],
        correctAnswer: 0,
        explanation: 'Dhanteras marks the beginning of Diwali celebrations, dedicated to Lord Dhanvantari.'
      },
      {
        id: 'diwali-5',
        question: 'What do people traditionally light during Diwali?',
        options: ['Candles only', 'Diyas and candles', 'Electric lights only', 'Bonfires'],
        correctAnswer: 1,
        explanation: 'Traditional diyas (oil lamps) and modern candles are lit to symbolize the victory of light over darkness.'
      },
      {
        id: 'diwali-6',
        question: 'Which epic is associated with Diwali celebrations?',
        options: ['Mahabharata', 'Ramayana', 'Bhagavata Purana', 'Vishnu Purana'],
        correctAnswer: 1,
        explanation: 'Diwali celebrates Lord Rama\'s return to Ayodhya after 14 years of exile, as described in the Ramayana.'
      },
      {
        id: 'diwali-7',
        question: 'What sweet is most commonly prepared during Diwali?',
        options: ['Gulab Jamun', 'Laddu', 'Barfi', 'All of the above'],
        correctAnswer: 3,
        explanation: 'All these sweets are popular during Diwali, with families preparing various traditional treats.'
      },
      {
        id: 'diwali-8',
        question: 'Which day of Diwali is considered the main celebration?',
        options: ['Dhanteras', 'Choti Diwali', 'Lakshmi Puja', 'Govardhan Puja'],
        correctAnswer: 2,
        explanation: 'Lakshmi Puja, the third day, is considered the main day of Diwali celebrations.'
      },
      {
        id: 'diwali-9',
        question: 'What do people create at their doorsteps during Diwali?',
        options: ['Mandala', 'Rangoli', 'Kolam', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Rangoli, Kolam, and Mandala are all traditional decorative patterns made during Diwali.'
      },
      {
        id: 'diwali-10',
        question: 'In which month is Diwali celebrated?',
        options: ['Kartik', 'Ashwin', 'Margashirsha', 'Chaitra'],
        correctAnswer: 0,
        explanation: 'Diwali is celebrated in the month of Kartik according to the Hindu lunar calendar.'
      },
      {
        id: 'diwali-11',
        question: 'What is exchanged between families during Diwali?',
        options: ['Books', 'Gifts and sweets', 'Flowers only', 'Money only'],
        correctAnswer: 1,
        explanation: 'Families exchange gifts, sweets, and dry fruits during Diwali celebrations.'
      },
      {
        id: 'diwali-12',
        question: 'Which business practice is common during Diwali?',
        options: ['Closing shops', 'Starting new account books', 'Selling old items', 'Taking loans'],
        correctAnswer: 1,
        explanation: 'Merchants traditionally start new account books during Diwali, seeking Lakshmi\'s blessings.'
      }
    ]
  },
  {
    id: 'diwali-traditions',
    title: 'Diwali Traditions & Customs',
    description: 'Explore the rich traditions and customs of Diwali',
    category: 'diwali',
    questions: [
      {
        id: 'dt-1',
        question: 'What is the significance of cleaning homes before Diwali?',
        options: ['Health benefits', 'Welcoming Goddess Lakshmi', 'Cultural tradition', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Cleaning homes serves multiple purposes: health, welcoming prosperity, and maintaining cultural traditions.'
      },
      {
        id: 'dt-2',
        question: 'Which animal is associated with Goddess Lakshmi?',
        options: ['Lion', 'Elephant', 'Owl', 'Swan'],
        correctAnswer: 2,
        explanation: 'The owl is Goddess Lakshmi\'s vehicle (vahana) and symbolizes wisdom in wealth.'
      },
      {
        id: 'dt-3',
        question: 'What is the traditional oil used in diyas?',
        options: ['Coconut oil', 'Mustard oil', 'Sesame oil', 'Any oil'],
        correctAnswer: 2,
        explanation: 'Sesame oil is traditionally preferred for diyas due to its purity and longer burning time.'
      },
      {
        id: 'dt-4',
        question: 'Which direction should diyas face for maximum benefits?',
        options: ['North', 'South', 'East', 'All directions'],
        correctAnswer: 3,
        explanation: 'Diyas are lit in all directions to spread light and positivity everywhere.'
      },
      {
        id: 'dt-5',
        question: 'What is Gudi Padwa in relation to Diwali?',
        options: ['Same festival', 'Completely different', 'Regional variation', 'Preparation day'],
        correctAnswer: 1,
        explanation: 'Gudi Padwa is a different festival celebrating the New Year in Maharashtra, not related to Diwali.'
      },
      {
        id: 'dt-6',
        question: 'Which card game is traditionally played during Diwali?',
        options: ['Bridge', 'Teen Patti', 'Rummy', 'Poker'],
        correctAnswer: 1,
        explanation: 'Teen Patti is the traditional card game played during Diwali celebrations.'
      },
      {
        id: 'dt-7',
        question: 'What is the significance of fireworks during Diwali?',
        options: ['Entertainment only', 'Driving away evil spirits', 'Celebrating victory', 'Both B and C'],
        correctAnswer: 3,
        explanation: 'Fireworks symbolize celebrating victory of good over evil and driving away negative energies.'
      },
      {
        id: 'dt-8',
        question: 'Which metal is considered auspicious to buy on Dhanteras?',
        options: ['Silver', 'Gold', 'Copper', 'All precious metals'],
        correctAnswer: 3,
        explanation: 'All precious metals are considered auspicious, but gold and silver are most popular.'
      },
      {
        id: 'dt-9',
        question: 'What is the last day of Diwali called?',
        options: ['Bhai Dooj', 'Govardhan Puja', 'Annakut', 'Padva'],
        correctAnswer: 0,
        explanation: 'Bhai Dooj is the fifth and final day of Diwali, celebrating the bond between siblings.'
      },
      {
        id: 'dt-10',
        question: 'Which flower is most commonly used for Diwali decorations?',
        options: ['Rose', 'Marigold', 'Jasmine', 'Lotus'],
        correctAnswer: 1,
        explanation: 'Marigold flowers are extensively used for Diwali decorations due to their vibrant color and auspiciousness.'
      },
      {
        id: 'dt-11',
        question: 'What is the traditional greeting for Diwali?',
        options: ['Happy Diwali', 'Shubh Deepavali', 'Both A and B', 'Diwali Mubarak'],
        correctAnswer: 2,
        explanation: 'Both "Happy Diwali" and "Shubh Deepavali" are common traditional greetings.'
      },
      {
        id: 'dt-12',
        question: 'Which business community especially celebrates Diwali as New Year?',
        options: ['Farmers', 'Traders and merchants', 'Artists', 'Teachers'],
        correctAnswer: 1,
        explanation: 'Traders and merchants celebrate Diwali as their New Year, starting new account books.'
      }
    ]
  },
  {
    id: 'dussehra-basics',
    title: 'Dussehra Fundamentals',
    description: 'Learn about the victory of good over evil',
    category: 'dussehra',
    questions: [
      {
        id: 'dus-1',
        question: 'Dussehra celebrates the victory of which deity over Ravana?',
        options: ['Krishna', 'Rama', 'Vishnu', 'Shiva'],
        correctAnswer: 1,
        explanation: 'Dussehra celebrates Lord Rama\'s victory over the demon king Ravana.'
      },
      {
        id: 'dus-2',
        question: 'How many days is Dussehra celebrated?',
        options: ['1 day', '9 days', '10 days', '15 days'],
        correctAnswer: 2,
        explanation: 'Dussehra is celebrated for 10 days, also known as Vijayadashami.'
      },
      {
        id: 'dus-3',
        question: 'What is another name for Dussehra?',
        options: ['Vijayadashami', 'Navratri', 'Durga Puja', 'Makar Sankranti'],
        correctAnswer: 0,
        explanation: 'Dussehra is also known as Vijayadashami, meaning "victory on the tenth day".'
      },
      {
        id: 'dus-4',
        question: 'Which goddess is worshipped during the nine days before Dussehra?',
        options: ['Lakshmi', 'Saraswati', 'Durga', 'Parvati'],
        correctAnswer: 2,
        explanation: 'Goddess Durga is worshipped during Navratri, the nine days preceding Dussehra.'
      },
      {
        id: 'dus-5',
        question: 'What is burned on Dussehra day?',
        options: ['Logs of wood', 'Effigies of Ravana', 'Old clothes', 'Paper'],
        correctAnswer: 1,
        explanation: 'Effigies of Ravana, Kumbhakarna, and Meghnad are burned on Dussehra.'
      },
      {
        id: 'dus-6',
        question: 'In which month is Dussehra celebrated?',
        options: ['Ashwin', 'Kartik', 'Bhadrapada', 'Chaitra'],
        correctAnswer: 0,
        explanation: 'Dussehra is celebrated in the month of Ashwin according to the Hindu calendar.'
      },
      {
        id: 'dus-7',
        question: 'What weapon did Rama use to kill Ravana?',
        options: ['Sword', 'Arrow', 'Trident', 'Mace'],
        correctAnswer: 1,
        explanation: 'Lord Rama used arrows from his bow to defeat Ravana in battle.'
      },
      {
        id: 'dus-8',
        question: 'Which city is famous for its Dussehra celebrations?',
        options: ['Delhi', 'Mumbai', 'Mysore', 'Kolkata'],
        correctAnswer: 2,
        explanation: 'Mysore is renowned for its grand Dussehra celebrations and royal processions.'
      },
      {
        id: 'dus-9',
        question: 'What does Dussehra symbolize?',
        options: ['Harvest season', 'Victory of good over evil', 'Start of winter', 'End of monsoon'],
        correctAnswer: 1,
        explanation: 'Dussehra symbolizes the eternal victory of good over evil and righteousness over unrighteousness.'
      },
      {
        id: 'dus-10',
        question: 'Who helped Rama in his battle against Ravana?',
        options: ['Hanuman only', 'Lakshmana only', 'Hanuman and monkey army', 'Bharata'],
        correctAnswer: 2,
        explanation: 'Hanuman and the monkey army, including Sugriva and others, helped Rama defeat Ravana.'
      },
      {
        id: 'dus-11',
        question: 'What is the significance of the tenth day?',
        options: ['Rama\'s coronation', 'Ravana\'s defeat', 'Return to Ayodhya', 'Meeting Sita'],
        correctAnswer: 1,
        explanation: 'The tenth day marks the defeat of Ravana by Lord Rama, hence called Vijayadashami.'
      },
      {
        id: 'dus-12',
        question: 'Which epic describes the story celebrated in Dussehra?',
        options: ['Mahabharata', 'Ramayana', 'Bhagavata Purana', 'Garuda Purana'],
        correctAnswer: 1,
        explanation: 'The Ramayana describes the story of Rama\'s victory over Ravana, celebrated as Dussehra.'
      }
    ]
  },
  {
    id: 'dussehra-traditions',
    title: 'Dussehra Traditions & Regional Celebrations',
    description: 'Discover diverse Dussehra traditions across India',
    category: 'dussehra',
    questions: [
      {
        id: 'dtr-1',
        question: 'What is the Ram Lila?',
        options: ['A dance form', 'Dramatic enactment of Ramayana', 'A song', 'A painting style'],
        correctAnswer: 1,
        explanation: 'Ram Lila is the dramatic enactment of scenes from the Ramayana performed during Dussehra.'
      },
      {
        id: 'dtr-2',
        question: 'In West Bengal, Dussehra coincides with which festival?',
        options: ['Kali Puja', 'Durga Puja', 'Lakshmi Puja', 'Saraswati Puja'],
        correctAnswer: 1,
        explanation: 'In West Bengal, Dussehra coincides with Durga Puja celebrations.'
      },
      {
        id: 'dtr-3',
        question: 'What is Ayudha Puja?',
        options: ['Weapon worship', 'Food festival', 'Dance celebration', 'Music concert'],
        correctAnswer: 0,
        explanation: 'Ayudha Puja involves worshipping weapons, tools, and instruments on Dussehra.'
      },
      {
        id: 'dtr-4',
        question: 'Which state celebrates Bathukamma during Dussehra period?',
        options: ['Karnataka', 'Telangana', 'Tamil Nadu', 'Kerala'],
        correctAnswer: 1,
        explanation: 'Telangana celebrates Bathukamma, a flower festival, during the Dussehra period.'
      },
      {
        id: 'dtr-5',
        question: 'What is the traditional food prepared during Dussehra?',
        options: ['Sweets only', 'Savory snacks', 'Both sweet and savory', 'Fruits only'],
        correctAnswer: 2,
        explanation: 'Both sweet and savory dishes are prepared, varying by region and family traditions.'
      },
      {
        id: 'dtr-6',
        question: 'Which tree leaves are considered auspicious during Dussehra?',
        options: ['Mango', 'Neem', 'Shami', 'Banyan'],
        correctAnswer: 2,
        explanation: 'Shami tree leaves are considered very auspicious and are exchanged as gold on Dussehra.'
      },
      {
        id: 'dtr-7',
        question: 'What is Vijayadashami particularly auspicious for?',
        options: ['Starting new ventures', 'Marriage ceremonies', 'Both A and B', 'Harvest activities'],
        correctAnswer: 2,
        explanation: 'Vijayadashami is considered highly auspicious for starting new ventures and ceremonies.'
      },
      {
        id: 'dtr-8',
        question: 'Which musical instrument is traditionally played during Ram Lila?',
        options: ['Sitar', 'Dhol and nagada', 'Flute', 'Veena'],
        correctAnswer: 1,
        explanation: 'Dhol and nagada (drums) are traditionally played during Ram Lila performances.'
      },
      {
        id: 'dtr-9',
        question: 'What is the significance of crossing boundaries on Dussehra?',
        options: ['Travel tradition', 'Victory symbol', 'Good luck ritual', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Crossing boundaries (Seema Avalanghan) symbolizes victory and is considered auspicious.'
      },
      {
        id: 'dtr-10',
        question: 'Which color is predominantly used in Dussehra decorations?',
        options: ['Red and yellow', 'Blue and white', 'Green and orange', 'Purple and gold'],
        correctAnswer: 0,
        explanation: 'Red and yellow colors dominate Dussehra decorations, symbolizing power and prosperity.'
      },
      {
        id: 'dtr-11',
        question: 'What is Kullu Dussehra famous for?',
        options: ['Mountain celebration', 'Snow festival', 'Valley procession', 'All deities gathering'],
        correctAnswer: 3,
        explanation: 'Kullu Dussehra is famous for the gathering of hundreds of local deities in the valley.'
      },
      {
        id: 'dtr-12',
        question: 'When do children traditionally start learning during Dussehra?',
        options: ['After the festival', 'On Vijayadashami', 'During Navratri', 'Before Dussehra'],
        correctAnswer: 1,
        explanation: 'Vijayadashami is considered auspicious for children to start their education (Vidyarambham).'
      }
    ]
  },
  {
    id: 'diwali-sikh-wisdom',
    title: 'Diwali in Sikh Philosophy',
    description: 'Explore Diwali\'s spiritual meaning from Sri Guru Granth Sahib Ji',
    category: 'sikh-wisdom',
    questions: [
      {
        id: 'dsw-1',
        question: 'According to Guru Granth Sahib Ji, what is the true meaning of lighting lamps during Diwali?',
        options: ['Decorating homes', 'Lighting the lamp of divine knowledge within', 'Celebrating wealth', 'Following traditions'],
        correctAnswer: 1,
        explanation: 'Guru Ji teaches that the real Diwali is lighting the lamp of divine knowledge and wisdom within our hearts, dispelling the darkness of ignorance.'
      },
      {
        id: 'dsw-2',
        question: 'What does Guru Granth Sahib Ji say about the inner light during Diwali?',
        options: ['It should be colorful', 'It should burn continuously with Nam Simran', 'It should be bright externally', 'It should be shared with others only'],
        correctAnswer: 1,
        explanation: 'The Guru teaches that the inner light of divine remembrance (Nam Simran) should burn continuously, illuminating our soul with the Lord\'s presence.'
      },
      {
        id: 'dsw-3',
        question: 'According to Sikh teachings, what darkness should Diwali truly dispel?',
        options: ['Physical darkness', 'Ignorance and spiritual darkness', 'Sadness', 'Poverty'],
        correctAnswer: 1,
        explanation: 'Guru Granth Sahib Ji emphasizes that Diwali should dispel the darkness of ignorance, ego, and separation from the Divine.'
      },
      {
        id: 'dsw-4',
        question: 'What does Guru Ji teach about the celebration of festivals like Diwali?',
        options: ['They are unnecessary', 'They should be celebrated with remembrance of the Divine', 'They are only for enjoyment', 'They are cultural obligations'],
        correctAnswer: 1,
        explanation: 'Guru Granth Sahib Ji teaches that festivals should be celebrated with devotion and remembrance of the Divine, making them spiritually meaningful.'
      },
      {
        id: 'dsw-5',
        question: 'According to Sikh philosophy, what is the real wealth to be gained during Diwali?',
        options: ['Material riches', 'The treasure of Naam (Divine Name)', 'Gold and jewelry', 'Business profits'],
        correctAnswer: 1,
        explanation: 'The true wealth according to Guru Granth Sahib Ji is the treasure of Naam - the Divine Name and its constant remembrance.'
      },
      {
        id: 'dsw-6',
        question: 'What does Guru Granth Sahib Ji say about the light that never extinguishes?',
        options: ['Electric lights', 'Oil lamps', 'The light of divine wisdom', 'Candles'],
        correctAnswer: 2,
        explanation: 'The eternal light of divine wisdom and knowledge, once lit within the heart, never extinguishes and guides us through all darkness.'
      },
      {
        id: 'dsw-7',
        question: 'How should one prepare for Diwali according to Sikh teachings?',
        options: ['Buy new clothes only', 'Clean the mind and heart through meditation', 'Prepare sweets only', 'Decorate the house only'],
        correctAnswer: 1,
        explanation: 'True preparation involves cleansing the mind and heart through meditation, prayer, and removing negative thoughts and emotions.'
      },
      {
        id: 'dsw-8',
        question: 'What does Guru Granth Sahib Ji teach about sharing during Diwali?',
        options: ['Share only with family', 'Share the light of knowledge and love with all', 'Share only material gifts', 'Share only with friends'],
        correctAnswer: 1,
        explanation: 'The Guru teaches us to share the light of spiritual knowledge, divine love, and compassion with all beings without discrimination.'
      },
      {
        id: 'dsw-9',
        question: 'According to Sikh philosophy, what should be the focus during Diwali celebrations?',
        options: ['External decorations', 'Inner spiritual enlightenment', 'Social gatherings', 'Food preparation'],
        correctAnswer: 1,
        explanation: 'The primary focus should be on inner spiritual enlightenment and connecting with the Divine through meditation and remembrance.'
      },
      {
        id: 'dsw-10',
        question: 'What does Guru Granth Sahib Ji say about the victory celebrated during Diwali?',
        options: ['Victory over enemies', 'Victory of the soul over ego and ignorance', 'Victory in business', 'Victory over competitors'],
        correctAnswer: 1,
        explanation: 'The true victory is the triumph of the enlightened soul over ego, ignorance, and all negative tendencies that separate us from the Divine.'
      }
    ]
  },
  {
    id: 'dussehra-sikh-wisdom',
    title: 'Dussehra in Sikh Philosophy',
    description: 'Understand Dussehra\'s deeper meaning through Guru Granth Sahib Ji',
    category: 'sikh-wisdom',
    questions: [
      {
        id: 'dssw-1',
        question: 'According to Guru Granth Sahib Ji, what is the real Ravana that needs to be defeated?',
        options: ['External enemies', 'The ego and five vices within', 'Other people', 'Physical challenges'],
        correctAnswer: 1,
        explanation: 'The real Ravana is the ego (haumai) and the five vices (lust, anger, greed, attachment, pride) that reside within us and separate us from the Divine.'
      },
      {
        id: 'dssw-2',
        question: 'What represents the true Rama in Sikh teachings during Dussehra?',
        options: ['A historical figure', 'The Divine presence within us', 'A king', 'A warrior'],
        correctAnswer: 1,
        explanation: 'Rama represents the Divine consciousness and the enlightened soul that conquers all internal negativities through spiritual wisdom.'
      },
      {
        id: 'dssw-3',
        question: 'According to Sikh philosophy, what are the ten heads of Ravana symbolic of?',
        options: ['Physical strength', 'The five vices and five senses uncontrolled', 'Intelligence', 'Knowledge'],
        correctAnswer: 1,
        explanation: 'The ten heads symbolize the five vices (kaam, krodh, lobh, moh, ahankar) and the five senses when they are not controlled by spiritual wisdom.'
      },
      {
        id: 'dssw-4',
        question: 'What does Guru Granth Sahib Ji teach about the battle between good and evil?',
        options: ['It happens externally only', 'It is a constant inner battle in every soul', 'It is historical only', 'It is metaphorical only'],
        correctAnswer: 1,
        explanation: 'The real battle between dharma (righteousness) and adharma (unrighteousness) happens constantly within every individual\'s heart and mind.'
      },
      {
        id: 'dssw-5',
        question: 'According to Sikh teachings, what weapon defeats the inner Ravana?',
        options: ['Physical strength', 'The arrow of Naam Simran and divine wisdom', 'Material success', 'Social status'],
        correctAnswer: 1,
        explanation: 'The weapon is the constant remembrance of the Divine Name (Naam Simran) and the wisdom gained through Guru\'s teachings.'
      },
      {
        id: 'dssw-6',
        question: 'What does the victory on Vijayadashami represent in Sikh philosophy?',
        options: ['Military conquest', 'The soul\'s victory over maya (illusion)', 'Political success', 'Economic gain'],
        correctAnswer: 1,
        explanation: 'It represents the soul\'s ultimate victory over maya (worldly illusion) and the realization of its true divine nature.'
      },
      {
        id: 'dssw-7',
        question: 'According to Guru Granth Sahib Ji, who can achieve this spiritual victory?',
        options: ['Only warriors', 'Anyone who follows the Guru\'s path with devotion', 'Only scholars', 'Only religious leaders'],
        correctAnswer: 1,
        explanation: 'Any person who follows the Guru\'s path with sincere devotion, meditation, and selfless service can achieve this spiritual victory.'
      },
      {
        id: 'dssw-8',
        question: 'What does Sikh philosophy say about the celebration of such victories?',
        options: ['Celebrate externally only', 'Celebrate with humility and gratitude to the Divine', 'Celebrate with pride', 'Celebrate alone'],
        correctAnswer: 1,
        explanation: 'True celebration should be with humility, gratitude to the Divine, and sharing the spiritual joy with the community.'
      },
      {
        id: 'dssw-9',
        question: 'According to Guru Granth Sahib Ji, what helps in this spiritual battle?',
        options: ['Individual effort alone', 'Satsang (holy company) and Guru\'s grace', 'Material resources', 'Social connections'],
        correctAnswer: 1,
        explanation: 'Satsang (company of the spiritually inclined) and the Guru\'s grace are essential supports in overcoming internal negativities.'
      },
      {
        id: 'dssw-10',
        question: 'What is the ultimate message of Dussehra according to Sikh teachings?',
        options: ['External rituals are important', 'Inner transformation through divine grace is the goal', 'Historical events matter most', 'Seasonal celebrations only'],
        correctAnswer: 1,
        explanation: 'The ultimate message is that inner transformation through divine grace, self-reflection, and spiritual practice is the true purpose of such observances.'
      }
    ]
  }
];

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomQuestions(quiz: Quiz, count: number = 10): Question[] {
  const shuffled = shuffleArray(quiz.questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
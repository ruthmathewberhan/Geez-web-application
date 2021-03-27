// creating an array and passing the number, questions, options, and answers
const questions = [
    {
    numb: "#",
    question: "የ 'ሖረ' ግስ የአማርኛ ፍቺ ምንድነው?",
    answer: "ሄደ",
    options: [
      "ሐዋረ",
      "ተማረ",
      "ሄደ",
      "ተቀመጠ"
    ]
  },
    {
      numb: "#",
      question: "በግዕዝ ሰላምታ ለወንድ እንዴት ነው ሚባለው?",
      answer: "ሰላም ለከ",
      options: [
        "ሰላም ላንቺ",
        "ሰላም ለናንት",
        "ሰላም ለሊሁ",
        "ሰላም ለከ"
    ]
  },
    {
      numb: "#",
      question: "በግዕዝ ሰላምታ ለብዙ ሰዎች እንዴት ነው ሚባለው?",
      answer: "ለ እና ሐ",
      options: [
        "ሰላም ላንቺ",
        "ሰላም ልክሙ",
        "ሰላም ልክን",
        "ለ እና ሐ"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን ምረጥ።",
      answer: "ቅኔ የግዕዝ ዓረፍት ነገር ክፍል ነው።",
      options: [
        "ቅኔ የግዕዝ ዓረፍት ነገር ክፍል ነው። ",
        "ዓረፍት ነገር ትርጉም የሚሰጥ የፊደላት ስበሰብ ነው።",
        "ፊደላት ዓረፍተ ነገር መሆን ይችላሉ።",
        "ሁሉም መልስ ይሆናሉ"
    ]
  },
  {
    numb: "#",
    question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ነበረ' ግስ ትዕዛዝ አወራረድ የቱ ነው።",
    answer: "ይነበሮ",
    options: [
      "ነቢር",
      "ይነበሮ",
      "ነባሪያን",
      "ፈጢር"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ፈጥረ' ግስ ድርጊት አወራረድ የቱ ነው።",
      answer: "ሀ እና ሐ",
      options: [
        "ፈጥሮት",
        "ፈጣሪ",
        "ፈጢር",
        "ሀ እና ሐ"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'መሐረ' ግስ ነጠላ ሴት አወራረድ የቱ ነው።",
      answer: "መሐሪት",
      options: [
        "መሐሪት",
        "መሐሪ",
        "መሐሪያን",
        "መሓሪያት"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ሐመ' ግስ አማርኛ ፍቺ  የቱ ነው።",
      answer: "ታመመ",
      options: [
        "መታመም",
        "ታመመ",
        "የታመመች ሴት",
        "የታመመ ወንድ"
    ]
  },
  {
    numb: "#",
    question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ተምህረ' ግስ ብዙ ሴቶች አወራረድ  የቱ ነው።",
    answer: "ተመሐሪያት",
    options: [
      "ተመሐሪያት",
      "ተማረች",
      "ተማሩ",
      "ተመሐረ"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ሖረ' ግስ ትዕዛዝ አወራረድ የቱ ነው።",
      answer: "ይሑር",
      options: [
        "ይሑር",
        "ሐዋሪት",
        "ሐዋሪያት",
        "ሐዊር"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ፈጠረ' ግስ አማርኛ ፍቺ  አወራረድ የቱ ነው።",
      answer: "ፈጠረ",
      options: [
        "ፈጠረ",
        "ፈጣሪያት",
        "ፈጣሪ",
        "ፈጢሮት"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'በከየ' ግስ ደርጊት  አወራረድ የቱ ነው።",
      answer: "አለቀሰ",
      options: [
        "አለቀሰ",
        "ያእሞር",
        "ተመህር",
        "በክዮ"
    ]
  },
    {
      numb: "#",
      question: "ከሚከተሉት ወስጥ ትከከለኛወን የ'ነበረ' ግስ አማርኛ ፈቺ  የቱ ነው።",
      answer: "ተቀመጠ",
      options: [
        "ነቢር",
        "ይነበሮ",
        "ተቀመጠ",
        "ፈጢር"
    ]
  },
  {
    numb: "#",
    question: "'ይሑር' የምን ግስ አወራረድ ነው?",
    answer: "ሐረ",
    options: [
      "ተምህረ",
      "ተመሐሪ",
      "ሐረ",
      "ፈጢር"
    ]
  },
    {
      numb: "#",
      question: "'ይተምህር' የምን ግስ አወራረድ ነው?",
      answer: "ተምህረ",
      options: [
        "ተምህረ",
        "ተመሐሪ",
        "ነባሪያን",
        "ፈጢር"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

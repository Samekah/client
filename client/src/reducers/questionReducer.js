const initState = {
  loading: false,
  questionIndex: 0,
  username: "polina",
  category: "",
  difficulty: "easy",

  result: [
    {
      question: "Which track by &quot;Massive Attack&quot; is used for the theme of &quot;House&quot;? ",
      correctAnswer: "Teardrop",
      incorrectAnswers: ["Protection", "Angel", "Black Milk"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question:
        "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, &#039;Top Gear&#039;?",
      correctAnswer: "Jessica",
      incorrectAnswers: ["Angela", "Erica", "Sandra"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question:
        "In the episode of SpongeBob SquarePants, &quot;Survival of the Idiots&quot;, Spongebob called Patrick which nickname?",
      correctAnswer: "Pinhead",
      incorrectAnswers: ["Starfish", "Larry", "Dirty Dan"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question: "In Naruto: Shippuden, which of the following elements is a &quot;Kekkei T\u014dta?&quot;",
      correctAnswer: "Particle Style",
      incorrectAnswers: ["Any Doujutsu", "Shadow Style", "Ice Style"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question: "In &quot;The Big Bang Theory&quot;, what is Howard Wolowitz&#039;s nickname in World of Warcraft?",
      correctAnswer: "Wolowizard",
      incorrectAnswers: ["Sheldor", "Rajesh", "Priya"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question: "What is the surname of the character Daryl in AMC&#039;s show The Walking Dead?",
      correctAnswer: "Dixon",
      incorrectAnswers: ["Grimes", "Dickinson", "Dicketson"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the &quot;Flash&quot; and &quot;Arrow&quot; spinoff featuring a team of characters that have appeared on both shows?",
      correctAnswer: "Legends of Tomorrow",
      incorrectAnswers: ["Heroes of Tomorrow", "The Justice Society of America", "The Justice Society"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question: "In &quot;Star Trek&quot;, what is the Klingon death ritual?",
      correctAnswer: "Look into sky and yell loudly in mourning.",
      incorrectAnswers: [
        "Kiss the jagged forehead before burial.",
        "Shoot into space in a torpedo casing.",
        "Split the deceased&#039;s earnings between bloodkin.",
      ],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question: "Which boxing personality was one of the presenters in the 1999 revival of It&#039;s a Knockout?",
      correctAnswer: "Frank Bruno",
      incorrectAnswers: ["Henry Cooper", "Muhammad Ali", "Joe Fraiser"],
    },
    {
      category: "Entertainment: Television",
      category: "multiple",
      difficulty: "medium",
      question: "Who was Firestorm&#039;s rival during the original run of UK Robot Wars?",
      correctAnswer: "Panic Attack",
      incorrectAnswers: ["Razer", "Chaos 2", "Hypno Disc"],
    },
  ],

  // result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],

  score: 0,
  userNum: 0,
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return { ...state, result: action.payload, error: false };
    case "ADD_USERNAME":
      return { ...state, username: action.payload, error: false };
    case "ADD_DIFFICULTY":
      return { ...state, difficulty: action.payload, error: false };
    case "ADD_USER_NUM":
      return { ...state, userNum: action.payload, error: false };
    case "ANSWER_SUBMIT":
      if (action.payload === state.result[state.questionIndex].correctAnswer) {
        return { ...state, score: state.score + 1, questionIndex: state.questionIndex + 1 };
      }
      return { ...state, questionIndex: state.questionIndex + 1 };
    case "RESET":
      return {
        ...state,
        questionIndex: action.payload[0],
        username: action.payload[1],
        score: action.payload[2],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default questionReducer;

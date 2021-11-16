const mockPosts = [
  {
    _id: 1,
    type: 'survey',
    title: 'Quarterly Employee Survey',
    author_id: 'alistairgarioch@gmail.com',
    author: 'Alistair',
    replies: [],
    votes: 7,
    content:
      'This is the quarterly employee survey, please share your thoughts, suggestions and ideas! 🤩',
    survey: [
      { component: 'text', type: 'text', label: 'Do you like working here?', _uid: '1q01' },
      { component: 'text', type: 'text', label: 'Explain your previous answer', _uid: '1q02' },
      {
        component: 'options',
        type: 'radio',
        label: 'How would you rate the work environment?',
        _uid: '1q03',
        options: ['poor', 'average', 'great'],
      },
      {
        component: 'options',
        type: 'radio',
        label: 'How likley are you to recommend our company to a friend?',
        _uid: '1q04',
        options: ['I wont', 'unlikley', 'maybe', 'probably', 'certainly'],
      },
      {
        component: 'options',
        type: 'radio',
        label: 'How happy are you with your team?',
        _uid: '1q05',
        options: ['😡', '😟', '😒', '🙂', '😊', '😁'],
      },
    ],
    date: '2021-11-15T08:12:20.195Z',
    respondees: [],
  },
  {
    _id: 2,
    type: 'survey',
    title: 'This is a test post',
    author_id: 'alistairgarioch@gmail.com',
    author: 'Alistair',
    replies: [],
    votes: 10,
    content: 'This is the body of the message.',
    survey: [{ component: 'text', type: 'text', label: 'Do you like working here?', _uid: '1q01' }],
    date: '2021-11-14T09:12:20.195Z',
  },
  {
    _id: 3,
    type: 'text',
    title: 'This is a test post',
    author_id: 'alistairgarioch@gmail.com',
    author: 'Alistair',
    replies: [],
    votes: 9,
    content: 'This is the body of the message.',
    date: '2021-11-14T16:12:20.195Z',
  },
  {
    _id: 4,
    type: 'text',
    title:
      'We should improve our relationship with small suppliers by reducing our payment terms to max 60 days',
    author_id: 'alistairgarioch@gmail.com',
    author: 'Alistair',
    replies: [],
    votes: 8,
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, enim similique eos blanditiis magni illo distinctio, beatae praesentium ad, autem pariatur atque possimus optio! Exercitationem dolorem quidem minima voluptatem in!',
    date: '2021-11-13T12:12:20.195Z',
  },
];

const mockAnswers = [
  {
    survey_id: '1',
    user_id: 'alistairgarioch@gmail.com',
    author_name: 'Alistair',
    answers: [
      { question_id: '1q01', answer: 'yes' },
      { question_id: '1q02', answer: 'nope' },
      { question_id: '1q03', answer: 'average' },
      { question_id: '1q04', answer: 'probably' },
      { question_id: '1q05', answer: '😊' },
    ],
  },
  {
    survey_id: '1',
    user_id: 'alistairgarioch@gmail.com',
    author_name: 'Alistair',
    answers: [
      { question_id: '1q01', answer: 'sometimes' },
      { question_id: '1q02', answer: 'ok' },
      { question_id: '1q03', answer: 'poor' },
      { question_id: '1q04', answer: 'unlikley' },
      { question_id: '1q05', answer: '😒' },
    ],
  },
  {
    survey_id: '2',
    user_id: 'alistairgarioch@gmail.com',
    author_name: 'Alistair',
    answers: [{ question_id: '1q01', answer: 'most of the time' }],
  },
];

const mockUsers = {
  'emma@example.com': {
    picture: 'https://randomuser.me/api/portraits/women/90.jpg',
    name: 'Emma',
    role: 'leader',
  },
  'olivia@example.com': {
    picture: 'https://randomuser.me/api/portraits/women/21.jpg',
    name: 'Olivia',
    role: 'user',
  },
  'ava@example.com': {
    picture: 'https://randomuser.me/api/portraits/women/72.jpg',
    name: 'Ava',
    role: 'user',
  },
  'charlotte@example.com': {
    picture: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Charlotte',
    role: 'user',
  },
  'liam@example.com': {
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    name: 'Liam',
    role: 'user',
  },
  'noah@example.com': {
    picture: 'https://randomuser.me/api/portraits/men/49.jpg',
    name: 'Noah',
    role: 'user',
  },
  'oliver@example.com': {
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Oliver',
    role: 'user',
  },
  'alistairgarioch@gmail.com': {
    picture:
      'https://avatars.githubusercontent.com/u/20269655?s=400&u=45929ca38ef71a1bee0922ccc3a42de33ed9d5c9&v=4',
    name: 'Alistair',
    role: 'user',
  },
};

module.exports = { mockPosts, mockAnswers, mockUsers };

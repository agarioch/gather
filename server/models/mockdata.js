const mockData = [
  {
    _id: 1,
    type: 'survey',
    title: 'Quarterly Employee Survey',
    author: 'alistairgarioch@gmail.com',
    replies: 3,
    votes: 7,
    content:
      'This is the quarterly employee survey, please share your thoughts, suggestions and ideas! 🤩',
    survey: [
      { component: 'text', type: 'text', label: 'Do you like working here?', _uid: '1q01' },
      { component: 'text', type: 'text', label: 'Explain your previous answer', _uid: '1q02' },
    ],
  },
  {
    _id: 2,
    type: 'post',
    title: 'This is a test post',
    author: 'alistairgarioch@gmail.com',
    replies: 3,
    votes: 104,
    content: 'This is the body of the message.',
  },
  {
    _id: 3,
    type: 'post',
    title: 'This is a test post',
    author: 'alistairgarioch@gmail.com',
    replies: 0,
    votes: 9,
    content: 'This is the body of the message.',
  },
  {
    _id: 4,
    type: 'post',
    title:
      'We should improve our relationship with small suppliers by reducing our payment terms to max 60 days',
    author: 'alistairgarioch@gmail.com',
    replies: 0,
    votes: 8,
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, enim similique eos blanditiis magni illo distinctio, beatae praesentium ad, autem pariatur atque possimus optio! Exercitationem dolorem quidem minima voluptatem in!',
  },
];

module.exports = mockData;

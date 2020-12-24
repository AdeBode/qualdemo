const mockedContact = {
  status: 200,
  results: [
    {
      name: {
        first: "brad",
        last: "gibson",
      },
      status: "work",
      email: "brad.gibson@example.com",
      phone: "011-962-7516",
      cell: "081-454-0666",
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },
  ],
};

const mockAxios = {
  get: (params = {}) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockedContact), 1000);
    }),
  post: ({ data = {} }) => null,
  delete: () => null,
};

export default mockAxios;

export const mockUserModel = {
  create: jest.fn().mockResolvedValue({
    id: 1,
    firstname: 'John Doe',
    email: 'email@email.com',
    document: '12345678',
  }),
  findAll: jest.fn().mockResolvedValue([
    {
      id: 1,
      firstname: 'John Doe',
      email: 'email@email.com',
      document: '12345678',
    },
    {
      id: 1,
      firstname: 'John Doe',
      email: 'email@email.com',
      document: '12345678',
    },
  ]),
  findByPk: jest.fn().mockResolvedValue({
    id: 1,
    firstname: 'John Doe',
    email: 'email@email.com',
    document: '12345678',
  }),
  update: jest.fn().mockResolvedValue([1]),
  destroy: jest.fn().mockResolvedValue(1),
}

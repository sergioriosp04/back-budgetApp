export const mockAccountModel = {
  create: jest.fn().mockResolvedValue({
    id: 1,
    name: 'John Doe',
    userId: 1,
    description: 'this is a description',
  }),
  findAll: jest.fn().mockResolvedValue([
    {
      id: 1,
      name: 'My budget',
      userId: 1,
      description: 'this is a description',
    },
    {
      id: 2,
      name: 'my budget personal',
      userId: 2,
      description: 'this is a description',
    },
  ]),
  findByPk: jest.fn().mockResolvedValue({
    id: 1,
    name: 'John Doe',
    userId: 1,
    description: 'this is a description',
  }),
  update: jest.fn().mockResolvedValue([1]),
  destroy: jest.fn().mockResolvedValue(1),
}

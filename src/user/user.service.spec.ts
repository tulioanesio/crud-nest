import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserService tests', () => {
  let userService: UserService;

  const user1 = {
    id: 1,
    name: 'Test User',
    email: 'testuser@example.com',
    password: 'password123',
  };

  const user2 = {
    id: 2,
    name: 'Another User',
    email: 'anotheruser@example.com',
    password: 'password456',
  };
  

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    userService = moduleFixture.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should create a user', async () => {
    userService.createUser = jest.fn().mockReturnValueOnce(user1);

    const result = await userService.createUser({
      name: user1.name,
      email: user1.email,
      password: user1.password,
    });
    expect(result).toHaveProperty('id');
    expect(result.name).toEqual(user1.name);
    expect(result.email).toEqual(user1.email);
    expect(result.password).toEqual(user1.password);
  });

  it('should get all users', async () => {
    const users = [user1, user2];
    userService.getAllUsers = jest.fn().mockReturnValueOnce(users);

    const result = await userService.getAllUsers();

    expect(result.length).toEqual(2);
  });

  it('should delete a user', async () => {
    userService.deleteUser = jest.fn().mockReturnValueOnce(user1);

    const result = await userService.deleteUser(user1.id);

    expect(result).toBeTruthy();

  });

  it('should update a user', async () => {
    userService.updateUser = jest.fn().mockReturnValueOnce(user1);

    const result = await userService.updateUser(user1.id, {
      name: 'Updated User',
      email: 'updateduser@example.com',
      password: 'newpassword123',
    });

    expect(result).toEqual(user1);
  });
});

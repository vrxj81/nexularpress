import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { IListUsersQueryParams, IUser } from '@nexularpress/domain-interfaces';

describe('UsersService', () => {
  let service: UsersService;
  let httpController: HttpTestingController;

  const usersUrl = '/wp/v2/users';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getUsers', () => {
    it('should fetch users without query params when none are provided', () => {
      const mockUsers = [] as IUser[];
      service.getUsers().then((data) => {
        expect(data).toEqual(mockUsers);
      });

      const req = httpController.expectOne(`${usersUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockUsers);
    });
    it('should fetch users with query params when provided', () => {
      const mockUsers = [] as IUser[];
      const queryParams: IListUsersQueryParams = { page: 4 };

      service.getUsers(queryParams).then((data) => {
        expect(data).toEqual(mockUsers);
      });

      const req = httpController.expectOne(`${usersUrl}?page=4`);
      expect(req.request.method).toBe('GET');
      req.flush(mockUsers);
    });
  });
  describe('getUser', () => {
    it('should fetch user without query params when none are provided', () => {
      const mockUser = {} as IUser;
      const userId = 1;

      service.getUser(userId).then((data) => {
        expect(data).toEqual(mockUser);
      });

      const req = httpController.expectOne(`${usersUrl}${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockUser);
    });
    it('should fetch user with query params when provided', () => {
      const mockUser = {} as IUser;
      const userId = 1;
      const queryParams: IListUsersQueryParams = { context: 'edit' };

      service.getUser(userId, queryParams).then((data) => {
        expect(data).toEqual(mockUser);
      });

      const req = httpController.expectOne(`${usersUrl}${userId}?context=edit`);
      expect(req.request.method).toBe('GET');
      req.flush(mockUser);
    });
  });
  describe('getActiveUser', () => {
    it('should fetch active user without query params when none are provided', () => {
      const mockUser = {} as IUser;

      service.getActiveUser().then((data) => {
        expect(data).toEqual(mockUser);
      });

      const req = httpController.expectOne(`${usersUrl}/me`);
      expect(req.request.method).toBe('GET');
      req.flush(mockUser);
    });
    it('should fetch active user with query params when provided', () => {
      const mockUser = {} as IUser;
      const queryParams: IListUsersQueryParams = { context: 'edit' };

      service.getActiveUser(queryParams).then((data) => {
        expect(data).toEqual(mockUser);
      });

      const req = httpController.expectOne(`${usersUrl}/me?context=edit`);
      expect(req.request.method).toBe('GET');
      req.flush(mockUser);
    });
  });
});

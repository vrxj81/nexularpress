import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { of } from 'rxjs';
import { IPost } from '@nexularpress/domain-interfaces';

describe('PostsService', () => {
  let service: PostsService;
  let httpClientMock: jest.Mocked<HttpClient>;

  beforeEach(() => {
    // Create a mock HttpClient
    httpClientMock = {
      get: jest.fn(),
    } as never;

    TestBed.configureTestingModule({
      // Provide the mock HttpClient
      providers: [
        PostsService,
        { provide: HttpClient, useValue: httpClientMock },
      ],
    });

    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPosts', () => {
    it('should request posts without query params when none are provided', async () => {
      const expectedPosts = [] as IPost[];
      httpClientMock.get.mockReturnValue(of(expectedPosts));

      const posts = await service.getPosts();
      expect(posts).toEqual(expectedPosts);
      expect(httpClientMock.get).toHaveBeenCalledWith('/wp/v2/posts');
    });

    it('should include query params in the request when provided', async () => {
      const expectedPosts = [] as IPost[];
      const queryParams = { search: 'Angular', page: 1 };
      httpClientMock.get.mockReturnValue(of(expectedPosts));

      const posts = await service.getPosts(queryParams);
      expect(posts).toEqual(expectedPosts);
      expect(httpClientMock.get).toHaveBeenCalledWith('/wp/v2/posts?search=Angular&page=1');
    });
  });

  describe('getPost', () => {
    it('should request a single post without query params when none are provided', async () => {
      const postId = 1;
      const expectedPost = {};
      httpClientMock.get.mockReturnValue(of(expectedPost));

      const post = await service.getPost(postId);
      expect(post).toEqual(expectedPost);
      expect(httpClientMock.get).toHaveBeenCalledWith('/wp/v2/posts/1');
    });

    it('should include query params in the request for a single post when provided', async () => {
      const postId = 1;
      const queryParams = { password: 'secret' };
      const expectedPost = {};
      httpClientMock.get.mockReturnValue(of(expectedPost));

      const post = await service.getPost(postId, queryParams);
      expect(post).toEqual(expectedPost);
      expect(httpClientMock.get).toHaveBeenCalledWith('/wp/v2/posts/1?password=secret');
    });
  });
});

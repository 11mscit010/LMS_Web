import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LoginService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});

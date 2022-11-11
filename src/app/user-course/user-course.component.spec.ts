import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserCourseComponent } from './user-course.component';

describe('UserCourseComponent', () => {
  let component: UserCourseComponent;
  let fixture: ComponentFixture<UserCourseComponent>;
  let dom: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ UserCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dom = fixture.nativeElement.querySelector('#searchBtn');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'SEARCH' button`, () => {
    expect(dom.textContent).toContain("Search");
  });

});

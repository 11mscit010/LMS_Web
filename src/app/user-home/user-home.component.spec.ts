import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './user-home.component';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;
  let h1: HTMLElement;
  let h4: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    h4 = fixture.nativeElement.querySelector('h4');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display heading 'Welcome User!'`, () => {
    expect(h1.textContent).toContain("Welcome User!");
  });

  it(`should display subtitle 'This is Learning Management portal.'`, () => {
    expect(h4.textContent).toContain("This is Learning Management portal.");
  })
});

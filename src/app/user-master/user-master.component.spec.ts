import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMasterComponent } from './user-master.component';

describe('UserMasterComponent', () => {
  let component: UserMasterComponent;
  let fixture: ComponentFixture<UserMasterComponent>;
  let links: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    links = fixture.nativeElement.querySelector('.navbar-nav a');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Home' link`, () => {
    expect(links.textContent).toContain("Home");
  });

});

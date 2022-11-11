import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dom: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dom = fixture.nativeElement.querySelector('#loginBtn');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have 'LOGIN' button`, () => {
    expect(dom.textContent).toContain("Login");
  });

});

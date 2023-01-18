import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInService } from '../services/sign-in.service';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing submit method sign in or not', () => {
    expect(component.signIn).toBeFalse();
    component.onSbumit();
    expect(component.signIn).toBeTrue();
  })
});

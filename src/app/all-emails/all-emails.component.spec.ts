import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmailsComponent } from './all-emails.component';

describe('AllEmailsComponent', () => {
  let component: AllEmailsComponent;
  let fixture: ComponentFixture<AllEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

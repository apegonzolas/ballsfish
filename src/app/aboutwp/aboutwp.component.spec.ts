import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutwpComponent } from './aboutwp.component';

describe('AboutwpComponent', () => {
  let component: AboutwpComponent;
  let fixture: ComponentFixture<AboutwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutwpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

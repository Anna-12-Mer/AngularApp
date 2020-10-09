import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepMedecinComponent } from './rep-medecin.component';

describe('RepMedecinComponent', () => {
  let component: RepMedecinComponent;
  let fixture: ComponentFixture<RepMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

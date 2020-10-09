import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheHomeComponent } from './affiche-home.component';

describe('AfficheHomeComponent', () => {
  let component: AfficheHomeComponent;
  let fixture: ComponentFixture<AfficheHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

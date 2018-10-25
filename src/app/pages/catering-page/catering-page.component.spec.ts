import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringPageComponent } from './catering-page.component';

describe('CateringPageComponent', () => {
  let component: CateringPageComponent;
  let fixture: ComponentFixture<CateringPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

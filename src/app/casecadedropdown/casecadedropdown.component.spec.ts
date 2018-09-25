import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasecadedropdownComponent } from './casecadedropdown.component';

describe('CasecadedropdownComponent', () => {
  let component: CasecadedropdownComponent;
  let fixture: ComponentFixture<CasecadedropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasecadedropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasecadedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartmenuempComponent } from './startmenuemp.component';

describe('StartmenuempComponent', () => {
  let component: StartmenuempComponent;
  let fixture: ComponentFixture<StartmenuempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartmenuempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartmenuempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

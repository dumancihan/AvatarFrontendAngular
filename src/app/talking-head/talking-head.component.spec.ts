import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkingHeadComponent } from './talking-head.component';

describe('TalkingHeadComponent', () => {
  let component: TalkingHeadComponent;
  let fixture: ComponentFixture<TalkingHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkingHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalkingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

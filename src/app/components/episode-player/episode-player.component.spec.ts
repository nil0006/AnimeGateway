import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodePlayerComponent } from './episode-player.component';

describe('EpisodePlayerComponent', () => {
  let component: EpisodePlayerComponent;
  let fixture: ComponentFixture<EpisodePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

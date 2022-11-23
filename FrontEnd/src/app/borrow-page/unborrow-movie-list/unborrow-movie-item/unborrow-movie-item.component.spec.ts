import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnborrowMovieItemComponent } from './unborrow-movie-item.component';

describe('UnborrowMovieItemComponent', () => {
  let component: UnborrowMovieItemComponent;
  let fixture: ComponentFixture<UnborrowMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnborrowMovieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnborrowMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

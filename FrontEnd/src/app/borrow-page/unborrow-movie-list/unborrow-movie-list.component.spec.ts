import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnborrowMovieListComponent } from './unborrow-movie-list.component';

describe('UnborrowMovieListComponent', () => {
  let component: UnborrowMovieListComponent;
  let fixture: ComponentFixture<UnborrowMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnborrowMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnborrowMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

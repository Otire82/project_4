import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnBorrowMovieListComponent } from './un-borrow-movie-list.component';

describe('UnBorrowMovieListComponent', () => {
  let component: UnBorrowMovieListComponent;
  let fixture: ComponentFixture<UnBorrowMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnBorrowMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnBorrowMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class MovieInfoService {
  constructor() {}

  private movieSelectionState$$ = new BehaviorSubject<{ movieDate: string}>({
    movieDate: format(new Date(), 'dd-MM-yyyy'),

  });

  get  movieSelectionState$() {
    return this.movieSelectionState$$.asObservable();
  }

  setMovieDate(date: string) {
    this.movieSelectionState$$ .next({
      ...this.movieSelectionState$$ .value,
      movieDate: date
    });
  }

  ngOnInit() {}
}
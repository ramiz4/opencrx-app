import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpencrxService } from './services/opencrx.service';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'opencrx-ui';
  
  accounts$!: Observable<any>;
  error$!: Observable<any>;

  constructor(private readonly opencrxService: OpencrxService) {
  }

  ngOnInit(): void {
    this.accounts$ = this.opencrxService.getAccounts().pipe(
      map((response: any) => response._embedded.account),
      catchError((error: any) => {
        console.error('Error fetching accounts:', error);
        this.error$ = of(error); // Store the error in a separate observable
        return of([]);
      })
    );
  }
}

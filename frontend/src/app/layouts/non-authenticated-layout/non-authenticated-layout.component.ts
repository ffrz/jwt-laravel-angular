import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-non-authenticated-layout',
  imports: [
    MatToolbarModule,
    RouterOutlet,
  ],
  templateUrl: './non-authenticated-layout.component.html',
  styleUrl: './non-authenticated-layout.component.scss'
})
export class NonAuthenticatedLayoutComponent implements OnInit {

  ngOnInit(): void {

  }

}

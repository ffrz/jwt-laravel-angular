import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  user: any;
  authService = inject(AuthService);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUserFromToken();
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']); // Redirect to a protected page
      },
      error: (err: any) => {
        console.error(err);
        alert(`Error: ${err}`);
      }
    });
  }
}

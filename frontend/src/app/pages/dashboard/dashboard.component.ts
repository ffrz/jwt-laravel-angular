import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user: any;
  authService = inject(AuthService);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUserFromToken();
    console.log(this.user);
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

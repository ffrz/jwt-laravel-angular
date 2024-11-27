import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from '../../components/main-nav/main-nav.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-authenticated-layout',
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatToolbarModule,
    MatListModule,
    MainNavComponent,
    MatButtonModule
  ],
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.scss'
})
export class AuthenticatedLayoutComponent {
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user = authService.getUserFromToken();
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.location.href='/login';
        // this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}

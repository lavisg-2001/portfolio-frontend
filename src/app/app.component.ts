import { Component } from '@angular/core';
import { PortfolioComponent } from './components/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Portfolio';
// }

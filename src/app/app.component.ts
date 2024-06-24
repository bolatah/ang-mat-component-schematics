import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { TreeComponent } from './tree/tree.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            RouterOutlet,
            DashboardComponent, 
            CustomButtonComponent, 
            AdressFormComponent, 
            TableComponent,
            NavComponent,
            TreeComponent,
            DragDropComponent  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ang-mat';
}

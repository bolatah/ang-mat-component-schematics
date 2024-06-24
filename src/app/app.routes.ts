import { Routes } from '@angular/router';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TableComponent } from './table/table.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { TreeComponent } from './tree/tree.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path : "dashboard",
        component : DashboardComponent, 
        title : "Dashboard"
    },
    {
        path : "custom-button",
        component : CustomButtonComponent, 
        title : "Custom Button"
    },
    {
        path : "table",
        component : TableComponent, 
        title : "Table"
    },
    {
        path : "adress-form",
        component : AdressFormComponent, 
        title : "Adress Form"
    },
    {
        path : "tree",
        component : TreeComponent, 
        title : "Tree"
    },
    {
        path : "drag-drop",
        component : DragDropComponent, 
        title : "Drag Drop"
    },
];

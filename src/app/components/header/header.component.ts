import { Component, ViewChild, ElementRef  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,
    NgMaterialMultilevelMenuModule,
    MatMenuModule,
    MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 


}

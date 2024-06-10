import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: '../../../../../assets/img/projects/projeto-angular.png',
      alt: 'Projeto Angular',
      title: 'Projeto Angular',
      with: '100px',
      height: '51px',
      description: '<p>Projeto demonstração Angular.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/HenriqueV01'
        }

      ]

    }
  ])

}

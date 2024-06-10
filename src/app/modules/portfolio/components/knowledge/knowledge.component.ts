import { Component, signal } from '@angular/core';
import { IKnowlege } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowlege[]>([
    {
      src: '../../../../../assets/icons/knowledge/html5.svg',
      alt: 'Ícone html5'
    },
    {
      src: '../../../../../assets/icons/knowledge/css3.svg',
      alt: 'Ícone css3'
    },
    {
      src: '../../../../../assets/icons/knowledge/javascript.svg',
      alt: 'Ícone javascript'
    },
    {
      src: '../../../../../assets/icons/knowledge/angular.svg',
      alt: 'Ícone angular'
    },
    {
      src: '../../../../../assets/icons/knowledge/java.svg',
      alt: 'Ícone java'
    },
  ])

}

import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Programador Java Web.",
        p: "MPS Informática | 2023 - 2024."
      },
      text: "<p>Programador Java Micros Serviços REST.</p>"

    },
    {
      summary: {
        strong: "Programador Java Web.",
        p: "ENGEVIA | 2014."
      },
      text: "<p>Programador Java de Sistema ERP.</p>"

    },
    {
      summary: {
        strong: "Estágio Java Web.",
        p: "KAPLEN (Soluções em cartões de crédito) | 2012 - 2013."
      },
      text: "<p>Estagiário em desenvolvimento de sistemas.</p>"

    },
    {
      summary: {
        strong: "Estágio Java Web.",
        p: "TRIBUTUS INFORMÁTICA (Gestão Municipal) | 2011 - 2012."
      },
      text: "<p>Estagiário em desenvolvimento de sistemas.</p>"

    }

  ])

}

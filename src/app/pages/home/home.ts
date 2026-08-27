import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly services = [
    { icon: '✦', title: 'Estratégia', text: 'Clareza para encontrar oportunidades e transformar ideias em direção.' },
    { icon: '◈', title: 'Design', text: 'Experiências bonitas, acessíveis e pensadas para pessoas reais.' },
    { icon: '↗', title: 'Tecnologia', text: 'Produtos rápidos, escaláveis e preparados para crescer com você.' },
  ];

  protected readonly processSteps = [
    { number: '01', title: 'Descobrir', text: 'Entendemos o desafio, o público e a oportunidade por trás da ideia.' },
    { number: '02', title: 'Construir', text: 'Transformamos estratégia em uma experiência clara, testável e marcante.' },
    { number: '03', title: 'Evoluir', text: 'Medimos o impacto e seguimos melhorando o produto junto com você.' },
  ];
}

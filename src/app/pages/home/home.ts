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
}

import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  id: number;
  title: string;
  description: string;
  iconType: 'clinic' | 'studies' | 'doctor' | 'lab';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  userName = signal<string>('Richita');

  categories: Category[] = [
    {
      id: 1,
      title: 'Clínica',
      description: 'Clínica especializada en diversas patologías o enfermedades',
      iconType: 'clinic',
    },
    {
      id: 2,
      title: 'Estudios',
      description: 'Estudios médicos para problemas específicos',
      iconType: 'studies',
    },
    {
      id: 3,
      title: 'Doctor',
      description: 'especialista delicado y capacitado',
      iconType: 'doctor',
    },
    {
      id: 4,
      title: 'Laboratorios',
      description: 'laboratorios cercanos para hacer análisis y pruebas',
      iconType: 'lab',
    },
  ];

  activeNav = signal<string>('inicio');

  setActiveNav(nav: string): void {
    this.activeNav.set(nav);
  }
}

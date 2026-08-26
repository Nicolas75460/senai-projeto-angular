import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
	{ path: '', component: Home, title: 'Nexa Studio | Soluções digitais' },
	{ path: 'contato', component: Contact, title: 'Contato | Nexa Studio' },
	{ path: '**', redirectTo: '' },
];

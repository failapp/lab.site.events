import { NavItem } from '@services/nav.service';

export const NAV_DATA: Array<NavItem> = [
    {
        label: 'Inicio',
        route: 'hero'
    },
    {
        label: 'Evento',
        route: 'event'
    },
    {
        label: 'Exponentes',
        route: 'speakers'
    },
    {
        label: 'Agenda',
        route: 'schedule'
    },
    {
        label: 'Contacto',
        route: 'cta'
    },
    {
        label: 'Tickets',
        route: '/tickets',
        btn: true
    }
    // {
    //     item: 'Términos',
    //     link: '/terms'
    // }
]

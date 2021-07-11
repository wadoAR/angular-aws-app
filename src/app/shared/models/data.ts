export class Data {

    static readonly sideBarMainMenu = [
        {
            label: 'Navigate',
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-pw pi-home',
                    routerLink: ['/home']
                },
                {
                    label: 'Employees',
                    icon: 'pi pi-pw pi-user-edit',
                    routerLink: ['/employees']
                },
                {
                    label: 'Menu 3',
                    icon: 'pi pi-pw pi-sitemap'
                },
                {
                    label: 'Menu 4',
                    icon: 'pi pi-pw pi-comments'
                },
                {
                    label: 'Menu 5',
                    icon: 'pi pi-pw pi-sort-numeric-down-alt'
                }
            ]
        },
        {
            label: 'Static',
            items: [
                {
                    label: 'Support',
                    icon: 'pi pi-pw pi-envelope',
                    routerLink: ['/support']
                },
                {
                    label: 'Terms and conditions',
                    icon: 'pi pi-pw pi-file',
                    routerLink: ['/terms-and-conditions']
                },
                {
                    label: 'About',
                    icon: 'pi pi-pw pi-info-circle',
                    routerLink: ['/about']
                }
            ]
        }
    ];

    static readonly topBarMenu = [
        {
            label: 'Manage profile',
            icon: 'pi pi-fw pi-user-edit'
        },
        {
            label: 'Disconnect',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    static readonly statuses = [
        {label: 'Pending', value: 'PENDING'},
        {label: 'Qualified', value: 'ACTIVE'},
        {label: 'Suspended', value: 'SUSPENDED'},
        {label: 'Deactivated', value: 'DEACTIVATED'}
    ];
}

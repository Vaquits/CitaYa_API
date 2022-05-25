const getCompleteMenu = function (userRole = 'USER') {
    const routesMenu = [
        // { path: 'user/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
        // { path: 'specialist/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
        // { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
        // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
        // { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
        // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
        // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
    ];

    if (userRole === 'SPECIALIST') {
        routesMenu.unshift({ path: 'specialist/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' })
    }

    if (userRole === 'USER') {
        routesMenu.unshift({ path: 'user/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' })
    }

    return routesMenu
}

module.exports = { getCompleteMenu }
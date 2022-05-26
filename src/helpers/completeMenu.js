const getCompleteMenu = function (userRole = 'USER') {
    const routesMenu = [];

    if (userRole === 'SPECIALIST') {
        routesMenu.unshift(
            { path: 'specialist-dashboard', title: 'Inicio', icon: 'dashboard', class: '' },
        )
    }

    if (userRole === 'USER') {
        routesMenu.unshift(
            { path: 'user-dashboard', title: 'Inicio', icon: 'dashboard', class: '' },
            { path: 'user-add-date', title: 'Agendar Cita', icon: 'add_box', class: '' },
            { path: 'user-modify-date', title: 'Gestionar Citas', icon: 'edit', class: '' },
        )
    }

    return routesMenu
}

module.exports = { getCompleteMenu }
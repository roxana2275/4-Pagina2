const contenedorEncabezado = document.querySelector("#encabezado");
contenedorEncabezado.innerHTML = `<header class="bg-light mx-4 ">
<nav class="navbar navbar-expand-lg d-flex flex-nowrap">
    <div class="container-fluid">
        <div class="container">
            <a class="navbar-brand" href="./index.html">
                <img src="./assets/img/logo/Logo.png" alt="AmazingEvents">
            </a>
        </div>
        <button class="navbar-toggler m-3" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end w-75" id="navbarTogglerDemo01">
            <ul class="navbar-nav mb-2 mb-lg-0 text-dark fw-bold">
                <li class="nav-item ">
                    <a class="nav-link" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./upcomingEvents.html">Upcoming Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./pastEvents.html">Past Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./stats.html">Stats</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</header>
`;
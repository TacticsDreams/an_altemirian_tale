// Navigation
const header = document.querySelector(".header");
const navButton = document.querySelector(".burger");
navButton.addEventListener("click", () => {
    header.classList.toggle("show-nav");
});

const links = document.querySelectorAll(".navbar__link");
links.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("show-nav");
    });
});


// Cards filters
const filters = document.querySelectorAll(".character-filters a");
const projects = document.querySelectorAll(".characters .card");

const resetActiveLink = () => {
    filters.forEach(filter => {
        filter.classList.remove("active");
    })
}

const showProjects = (target) => {
    projects.forEach(projet => {
        let filter = projet.getAttribute("data-cat");
        //console.log(filter + " | " + target);

        if(target == "all") {
            projet.parentNode.classList.remove("hide");
            return;
        }

        if (filter !== target) {
            projet.parentNode.classList.add("hide");
        } else {
            projet.parentNode.classList.remove("hide");
        }
    })
}

filters.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        let filter = tab.getAttribute('data-filter');
        showProjects(filter);
        resetActiveLink();
        tab.classList.add('active');
    })
});

/* modals */
function showCharactersDetails() {
    const links = document.querySelectorAll(".card__link");
    const modals = document.querySelectorAll(".modal");
    const modBtns = document.querySelectorAll(".modal__close");

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove("show");
        })
    }

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
          let filter = link.getAttribute('data-link');
            document.querySelector('[id='+ filter + ']').classList.add("show");
        })
    })

    modBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            hideModals();
        })
    })

}
showCharactersDetails();


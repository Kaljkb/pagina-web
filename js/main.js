/* =====================================
   BOTÓN VOLVER ARRIBA
===================================== */

const btnTop = document.getElementById("btn-top");

if (btnTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            btnTop.style.display = "flex";

        } else {

            btnTop.style.display = "none";

        }

    });

    btnTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* =====================================
   ANIMACIONES AL HACER SCROLL
===================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* =====================================
   MODO CLARO / OSCURO
===================================== */
const themeBtn =
document.getElementById("theme-btn");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            themeBtn.textContent = "☀️";

        }else{

            themeBtn.textContent = "🌙";

        }

    });

}
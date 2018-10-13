(() => {
    /* Coded by Justin Leach, 30091487 */
    const mobileWidth = 680;

    const addMenuBackground = () => {
        const pageWidth = window.innerWidth;
        const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;
        const navigation = document.querySelector("header nav");

        if(pageWidth > mobileWidth) {
            boddyOffset > 0 ? navigation.classList.add("aw-nav-fixed") : navigation.classList.remove("aw-nav-fixed");
        }
    }

	const reorderResponsiveMenu = () => {
        const pageWidth = window.innerWidth;
        const navContainer = document.querySelector("header nav .aw-container");
        const navigation = document.querySelector("header nav .aw-navigation");
        const mobileNavigation = document.querySelector("body > .aw-navigation");

        if (pageWidth <= mobileWidth && navigation) {
        	document.body.insertAdjacentElement("afterbegin", navigation);
        } else if (pageWidth > mobileWidth && mobileNavigation) {
        	navContainer.insertAdjacentElement("beforeend", mobileNavigation);
        }

	}

    const mobileMenuToggle = () => {
        const menuToggle = document.querySelector(".aw-nav-toggle");

        menuToggle.addEventListener("click", () => {
            const mobileNavigation = document.querySelector("body > .aw-navigation");

            mobileNavigation.classList.toggle("aw-navigation-opened")
        })
    }

    const onNavItemClick = () => {
        const navItemList = document.querySelectorAll(".aw-section-link");
        const navItems = [...navItemList]; /* ... Spread all the items in the array */

        navItems.forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();

                const sectionId = event.target.getAttribute("href") || event.target.dataset.href;



                /* Function that will scroll to the certain part of the application */
                scrollToSection(sectionId);
            })
        })
    }

    const scrollToSection = sectionId => {
        let sectionPosition, sectionOffset;
        const navigationHeight = document.querySelector("header nav").offsetHeight;
        const pageWidth = window.innerWidth; /* Mobile width */

        if(sectionId != "#") {
            sectionOffset = document.querySelector(sectionId).offsetTop;
            sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
        } else {
            sectionPosition = 0;
        }

        window.scrollTo({
           'behavior': 'smooth', /* Supported with Chrome, Firefox New thigns to do */
           'left': 0,
           'top': sectionPosition 
        })
    }

    /* Section Team */
    const onTeamChange = () => {
        let firstChild, lastChild;
        const prevArrow = document.querySelector("#aw-team-prev");
        const nextArrow = document.querySelector("#aw-team-next");
        const team = document.querySelector(".aw-team ul");

        document.addEventListener("click", () => {
            if(event.target === prevArrow) {
                lastChild = team.lastElementChild;
                /* Firts we find the lastchild of the list of team and 
                We put him in the first place of the list */
                team.insertAdjacentElement("afterbegin", lastChild);
            }else if (event.target === nextArrow) {
                firstChild = team.firstElementChild;
                team.insertAdjacentElement("beforeend", firstChild);
            }
        })
    }

    window.addEventListener("scroll", () => {
        addMenuBackground();
    })

    window.addEventListener("resize", () => {
        reorderResponsiveMenu();
    })

    reorderResponsiveMenu();
    mobileMenuToggle();
    onNavItemClick();
    onTeamChange(); /* Section onTeamChange*/
})();
/* End of code by Justin Leach, 30091487 */
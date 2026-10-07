/* =========================================================
   BACKGROUND VIDEO PLAYLIST
   ========================================================= */

const backgroundVideos = [
    "bg/background1.mp4",
    "bg/background2.mp4",
    "bg/background3.mp4"
];


const backgroundVideo =
    document.getElementById("background-video");


let currentVideo = 0;


/*
    Play the current background video.
*/

function playBackgroundVideo() {

    if (!backgroundVideo) {
        return;
    }

    backgroundVideo.src =
        backgroundVideos[currentVideo];

    backgroundVideo.load();

    backgroundVideo.play().catch(function (error) {

        console.log(
            "Background video could not autoplay:",
            error
        );

    });
}


/*
    When a video finishes,
    play the next video.
*/

if (backgroundVideo) {

    backgroundVideo.addEventListener(
        "ended",
        function () {

            currentVideo++;

            if (
                currentVideo >=
                backgroundVideos.length
            ) {

                currentVideo = 0;

            }

            playBackgroundVideo();

        }
    );

}


/*
    Start the first background video.
*/

playBackgroundVideo();





/* =========================================================
   ANIMAL DATA
   ========================================================= */

const animals = [

    {
        name: "Lion",

        type: "Terrestrial",

        image: "images/lion.jpg",

        food: "Meat",

        habitat: "Grasslands",

        location: "African Savanna",

        description:
            "The lion is a large social cat known for living in groups called prides. It is one of the most recognizable predators in the world.",

        funFact:
            "A lion's roar can be heard from several kilometers away."
    },

    {
        name: "Tiger",

        type: "Terrestrial",

        image: "images/tiger.jpg",

        food: "Meat",

        habitat: "Forests and Grasslands",

        location: "Asia",

        description:
            "The tiger is the largest living cat species. It is known for its powerful body, striped coat and ability to hunt alone.",

        funFact:
            "Every tiger has a unique stripe pattern, similar to a human fingerprint."
    }

];





/* =========================================================
   GET HTML ELEMENTS
   ========================================================= */

const animalGrid =
    document.getElementById("animalGrid");


const searchInput =
    document.getElementById("searchInput");


const searchSuggestions =
    document.getElementById("searchSuggestions");


const animalCount =
    document.getElementById("animalCount");


/*
    Animal detail popup.
*/

const animalDetail =
    document.getElementById("animalDetail");


/*
    Elements inside the popup.
*/

const detailImage =
    document.getElementById("detailImage");


const detailName =
    document.getElementById("detailName");


const detailType =
    document.getElementById("detailType");


const detailDescription =
    document.getElementById("detailDescription");


const detailFood =
    document.getElementById("detailFood");


const detailHabitat =
    document.getElementById("detailHabitat");


const detailLocation =
    document.getElementById("detailLocation");


const detailFunFact =
    document.getElementById("detailFunFact");


const backButton =
    document.getElementById("backButton");





/* =========================================================
   FORCE POPUP TO BE HIDDEN WHEN WEBSITE LOADS
   ========================================================= */

/*
    IMPORTANT.

    The popup must NOT appear when the
    website first loads.

    It will only become visible after
    an animal card is clicked.
*/

if (animalDetail) {

    animalDetail.classList.add("hidden");

}


/*
    Make sure the page can scroll
    normally when the website starts.
*/

document.body.style.overflow = "";





/* =========================================================
   DISPLAY ANIMAL CARDS
   ========================================================= */

function displayAnimals(animalList) {

    /*
        Make sure the animal grid exists.
    */

    if (!animalGrid) {
        return;
    }


    /*
        Remove old cards.
    */

    animalGrid.innerHTML = "";


    /*
        Update animal count.
    */

    if (animalCount) {

        animalCount.textContent =
            `Showing ${animalList.length} animal(s)`;

    }


    /*
        Create every animal card.
    */

    animalList.forEach(
        function (animal) {

            /*
                Create the card.
            */

            const card =
                document.createElement("div");


            /*
                Add CSS class.
            */

            card.classList.add("animal-card");


            /*
                IMPORTANT FIX:

                Your previous code had:

                < img

                which is invalid HTML.

                It must be:

                <img
            */

            card.innerHTML = `

                <img
                    src="${animal.image}"
                    alt="${animal.name}"
                >

                <div class="card-information">

                    <p class="card-type">
                        ${animal.type}
                    </p>

                    <h3>
                        ${animal.name}
                    </h3>

                    <p class="card-summary">

                        Favorite food:
                        ${animal.food}

                        <br><br>

                        ${animal.funFact}

                    </p>

                </div>

            `;


            /*
                When the card is clicked,
                open the animal popup.
            */

            card.addEventListener(
                "click",
                function () {

                    showAnimalDetails(animal);

                }
            );


            /*
                Add card to the grid.
            */

            animalGrid.appendChild(card);

        }
    );

}





/* =========================================================
   SHOW ANIMAL DETAILS
   ========================================================= */

function showAnimalDetails(animal) {

    /*
        Make sure the popup exists.
    */

    if (!animalDetail) {
        return;
    }


    /*
        Set the animal image.
    */

    if (detailImage) {

        detailImage.src =
            animal.image;

        detailImage.alt =
            animal.name;

    }


    /*
        Set animal name.
    */

    if (detailName) {

        detailName.textContent =
            animal.name;

    }


    /*
        Set animal type.
    */

    if (detailType) {

        detailType.textContent =
            animal.type;

    }


    /*
        Set description.
    */

    if (detailDescription) {

        detailDescription.textContent =
            animal.description;

    }


    /*
        Set favorite food.
    */

    if (detailFood) {

        detailFood.textContent =
            animal.food;

    }


    /*
        Set habitat.
    */

    if (detailHabitat) {

        detailHabitat.textContent =
            animal.habitat;

    }


    /*
        Set location.
    */

    if (detailLocation) {

        detailLocation.textContent =
            animal.location;

    }


    /*
        Set fun fact.
    */

    if (detailFunFact) {

        detailFunFact.textContent =
            animal.funFact;

    }


    /*
        SHOW POPUP.

        The "hidden" class is removed
        only after an animal is clicked.
    */

    animalDetail.classList.remove("hidden");


    /*
        Prevent the background page
        from scrolling while popup is open.
    */

    document.body.style.overflow =
        "hidden";

}





/* =========================================================
   CLOSE ANIMAL DETAILS
   ========================================================= */

function closeAnimalDetails() {

    /*
        Hide popup.
    */

    if (animalDetail) {

        animalDetail.classList.add("hidden");

    }


    /*
        Allow page scrolling again.
    */

    document.body.style.overflow = "";

}


/*
    Back / X button.
*/

if (backButton) {

    backButton.addEventListener(
        "click",
        function () {

            closeAnimalDetails();

        }
    );

}





/* =========================================================
   CLICK OUTSIDE POPUP TO CLOSE
   ========================================================= */

/*
    If the user clicks the dark area
    outside the popup content,
    close the popup.
*/

if (animalDetail) {

    animalDetail.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                animalDetail
            ) {

                closeAnimalDetails();

            }

        }
    );

}





/* =========================================================
   ESCAPE KEY TO CLOSE POPUP
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            if (
                animalDetail &&
                !animalDetail.classList.contains("hidden")
            ) {

                closeAnimalDetails();

            }

        }

    }
);





/* =========================================================
   SEARCH SYSTEM
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                searchInput.value
                    .toLowerCase()
                    .trim();


            /*
                Empty search.
            */

            if (searchText === "") {

                if (searchSuggestions) {

                    searchSuggestions.style.display =
                        "none";

                }

                return;

            }


            /*
                Find matching animals.

                Example:

                "l"

                matches:

                Lion
                Leopard
                Lemur
            */

            const matches =
                animals.filter(
                    function (animal) {

                        return animal.name
                            .toLowerCase()
                            .startsWith(
                                searchText
                            );

                    }
                );


            /*
                Remove old suggestions.
            */

            if (searchSuggestions) {

                searchSuggestions.innerHTML = "";

            }


            /*
                Create suggestions.
            */

            matches.forEach(
                function (animal) {

                    const suggestion =
                        document.createElement("div");


                    suggestion.classList.add(
                        "suggestion"
                    );


                    suggestion.textContent =
                        animal.name;


                    /*
                        Click suggestion.
                    */

                    suggestion.addEventListener(
                        "click",
                        function () {

                            showAnimalDetails(
                                animal
                            );


                            searchInput.value =
                                animal.name;


                            searchSuggestions.style.display =
                                "none";

                        }
                    );


                    searchSuggestions.appendChild(
                        suggestion
                    );

                }
            );


            /*
                Show suggestions if
                matches were found.
            */

            if (
                searchSuggestions &&
                matches.length > 0
            ) {

                searchSuggestions.style.display =
                    "block";

            }


            /*
                Otherwise hide them.
            */

            else if (searchSuggestions) {

                searchSuggestions.style.display =
                    "none";

            }

        }
    );

}





/* =========================================================
   CATEGORY FILTER
   ========================================================= */

const categoryLinks =
    document.querySelectorAll(
        ".category-menu a"
    );


categoryLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                /*
                    Stop "#" from changing
                    the page URL.
                */

                event.preventDefault();


                /*
                    Get selected category.

                    Example:

                    data-category="Aquatic"

                    becomes:

                    Aquatic
                */

                const selectedCategory =
                    link.dataset.category;


                /*
                    ALL ANIMALS
                */

                if (
                    selectedCategory ===
                    "All"
                ) {

                    displayAnimals(
                        animals
                    );

                    return;

                }


                /*
                    FILTER CATEGORY
                */

                const filteredAnimals =
                    animals.filter(
                        function (animal) {

                            return animal.type ===
                                selectedCategory;

                        }
                    );


                /*
                    Display filtered animals.
                */

                displayAnimals(
                    filteredAnimals
                );

            }
        );

    }
);





/* =========================================================
   START WEBSITE
   ========================================================= */

/*
    Display all animals when
    the website first loads.
*/

displayAnimals(animals);

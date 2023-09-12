// nav search 
var searchInput = document.getElementById("search");
var searchQuery = document.getElementsByClassName('query-count');
let searchResult = document.getElementsByClassName('search-result');
let queryCount = 0;
let queryHtml = '';
let testText = [
    "Apples are delicious fruits",
    "Birds chirp in the morning",
    "Cats like to nap in the sun",
    "Dogs are known for their loyalty",
    "Elephants have large ears",
    "Frogs croak near water bodies",
    "Grapes can be red or green",
    "Horses are often used for riding.",
    "Ice cream is a popular dessert.",
    "Jaguars are powerful predators.",
    "Kangaroos have strong hind legs.",
    "Lions are known as the  king of the jungle.",
    "Monkeys swing from tree to tree.",
    "Newts are small amphibians.",
    "Owls are nocturnal birds.",
    "Penguins live in cold climates.",
    "Quokkas are cute and friendly animals.",
    "Rabbits are known for their hopping.",
    "Snakes can be both venomous and non - venomous.",
    "Tigers are majestic big cats.",
    "Umbrellabirds have unique crests.",
    "Vultures are scavenger birds.",
    "Whales are large marine mammals.",
    "Xenophobes have an irrational fear of strangers.",
    "Yellow can be a bright and cheerful color.",
    "Zebras have distinctive black and white stripes",
];

// searchInput.addEventListener("keyup", navSearch);
searchInput.addEventListener('input', initNav);

window.addEventListener('keydown', event => {
    if (event.key == "/") {
        searchInput.focus();
    }

    // console.log(event.key);
});

// get data and  pass to nav search 
function initNav(e) {
    let val = e.target.value;
    // openFilter();
    searchByFilter();
}

//nav search
function navSearch(val) {

    if (val != "" && val != null) {
        searchResult[0].style.display = 'block';
        queryHtml = "";

        // console.log(e.target.value);
        testText.forEach((elm, index) => {
            // lowercase the vale 
            let lowarCaseValue = elm.toLowerCase();
            // console.log(lowarCaseValue);
            if (lowarCaseValue.search(val) != -1) {
                // console.log(elm);
                //make html for found query 
                queryHtml +=
                    `
                <div class="result-div">
                        <div class="image">
                            ${index}
                        </div>
                        
                        <div class="desc">
                            <h5>${elm}</h5>
                        </div>
                    </div>
                `;

                //show query count on search input right side
                searchQuery[0].innerHTML = '';
                // valu found 
            } else {
                //                 hide result div when nothing is found

            }
            searchResult[0].innerHTML = queryHtml;
        })
        // console.log(queryCount);
        // console.log(testText);

    } else {
        searchResult[0].style.display = 'none';
        queryHtml = '';
        searchQuery[0].innerHTML = "";
        searchResult[0].innerHTML = queryHtml;
    }
}

// filter modal opena and close 
function openFilter(condition) {
    let filterBtn = document.getElementsByClassName('filter-btn');
    let filterDiv = document.getElementsByClassName("filter-div");

    if (filterDiv[0].classList.contains('filter-show')) {
        filterDiv[0].classList.remove("filter-show");
    } else {
        filterDiv[0].classList.add("filter-show");
    }

    if (condition == "hide") {
        filterDiv[0].classList.remove("filter-show");
    }

}

//fiter
let filterItem = [];

//add flter item functionality
function filter(val) {
    // console.log(val);
    if (filterItem.length > 0) {

        if (filterItem.indexOf(val) != -1) {
            // console.log("matched");
            filterItem.splice(filterItem.indexOf(val), 1); //splice method change the main array
            filterAlert("You uncheck an filter item to filter !");
        } else {
            // console.log("this from else statement itm:" + itm + "  and val : " + val);
            filterItem.push(val);
            filterAlert("You check " + val + " to filter !");

        }

    } else {
        filterItem.push(val);
        filterAlert("You check " + val + " to filter !");

    }

    switch (val) {
        case "db":
            filterAlert("Go on Database Filtering !");
            break;
        case "cf":
            filterAlert("Go on Content Filterint");
            break;

        default:
            filterAlert("Default Filtering !");
            break;
    }

    if (searchInput.value != "") {
        searchByFilter();
        openFilter('hide');
    }
    // console.log("total item " + filterItem);

}

//filter alert 
function filterAlert(alert_name) {

    let p = document.createElement("p");
    p.innerHTML = alert_name;
    p.style.padding = 10 + "px";
    p.classList.add('filter_alert');
    p.style.backgroundColor = "rgb(211,211,211)";
    p.style.position = "fixed";
    p.style.top = 10 + "px";
    p.style.right = 0 + "px";
    p.style.width = 220 + "px";
    p.style.height = "auto";
    p.style.transition = "all linear .3s";

    document.body.appendChild(p); //appending element in body tag
    alert_name = "";

    //set time out for 1 second to display none
    setTimeout(() => {
        if (document.getElementsByClassName('filter_alert')[0]) {
            document.getElementsByClassName('filter_alert')[0].remove(); //remove element after one sec
        }
    }, 2000) //end of timeout function
}

// search by filter 
function searchByFilter() {
    if (searchInput != "") {

        if (filterItem.length > 0) {
            filterItem.forEach(fItem => {

                if (fItem == "df") {}

                if (fItem == "db") {
                    navSearch(searchInput.value);
                    // filterAlert("Go On Database filtering !");
                }

                if (fItem == "cf") {

                }

            })

        } else {
            // window.addEventListener('keydown', event => {
            //     if (event.key = "Backspace") {
            //     }else{

            //     }
            // });
            filterAlert("Please specify any one of filter !");
            navSearch();
        }
    } else {
        navSearch("");
    }

    openFilter("hide");

};

//undow search by filer 
function undowSearchByFilter() {

}

//show search value to input field
function showValueToInputField(search_value) {
    if (search_value == "") {
        searchInput.value = "";
        searchInput.focus();

    } else {
        searchInput.value = search_value;
        searchInput.focus();

    }
}
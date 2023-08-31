// nav search 
var searchInput = document.getElementById("search");
var searchQuery = document.getElementsByClassName('query-count');
let searchResult = document.getElementsByClassName('search-result');
let queryCount = 0;
let queryHtml = '';

searchInput.addEventListener("keyup", navSearch);
searchInput.addEventListener('input', navSearch);

window.addEventListener('keydown', event => {
    if (event.key == "/") {
        searchInput.focus();
    }
});

const testText = [
    ["Apples are delicious fruits"],
    ["Birds chirp in the morning"],
    ["Cats like to nap in the sun"],
    ["Dogs are known for their loyalty"],
    ["Elephants have large ears"],
    ["Frogs croak near water bodies"],
    ["Grapes can be red or green"],
    ["Horses are often used for riding."],
    ["Ice cream is a popular dessert."],
    ["Jaguars are powerful predators."],
    ["Kangaroos have strong hind legs."],
    ["Lions are known as the  king of the jungle."],
    ["Monkeys swing from tree to tree."]
    ["Newts are small amphibians."],
    ["Owls are nocturnal birds."],
    ["Penguins live in cold climates."],
    ["Quokkas are cute and friendly animals."],
    ["Rabbits are known for their hopping."],
    ["Snakes can be both venomous and non - venomous."],
    ["Tigers are majestic big cats."],
    ["Umbrellabirds have unique crests."],
    ["Vultures are scavenger birds."],
    ["Whales are large marine mammals."],
    ["Xenophobes have an irrational fear of strangers."],
    ["Yellow can be a bright and cheerful color."],
    ["Zebras have distinctive black and white stripes"]
];

function navSearch(e) {
    if (e.target.value != "" && e.target.value != null) {
        searchResult[0].style.display = 'block';
        queryHtml = "";

        console.log(e.target.value);
        testText.forEach((elm, index) => {
            // lowercase the vale 
            let lowarCaseValue = elm[0].toLowerCase();
            if (lowarCaseValue.startsWith(e.target.value)) {
                console.log(elm);
                //make html for found query 
                queryHtml +=
                    `
                <div class="result-div">
                        <div class="image">
                            ${index}
                        </div>
                        
                        <div class="desc">
                            <h5>${elm[0]}</h5>
                        </div>
                    </div>
                `;
                searchResult[0].innerHTML = queryHtml;

                //show query count on search input right side
                searchQuery[0].innerHTML = '';
                // valu found 
            }
        })
        console.log(queryCount);
        // console.log(testText);

    } else {
        searchResult[0].style.display = 'none';
        queryHtml = '';
        searchQuery[0].innerHTML = "";
        searchResult[0].innerHTML = queryHtml;
    }
}
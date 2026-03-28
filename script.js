const searchBox = document.getElementById("searchBox");
const items = document.querySelectorAll("#itemList li");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("keyup", function () {
    let input = searchBox.value.toLowerCase();
    let found = false;

    items.forEach(item => {
        let text = item.textContent.toLowerCase();

        if (text.includes(input)) {
            item.style.display = "block";
            found = true;
        } else {
            item.style.display = "none";
        }
    });

    // Show message if no match
    noResult.style.display = found ? "none" : "block";
});
// write your code here
function ramenRating() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(ramen => ramen.forEach(renderRamen))
}

ramenRating();

function renderRamen(ramen) {
    const div = document.createElement("div");
    div.className = "ramen";

    const img = document.createElement("img");
    img.className = "ramen-img";
    img.src = ramen.image;

    img.addEventListener("click", () => {
        // const div = document.createElement("div");
        // div.className = "ramenShow";
        // document.querySelector("#ramen-detail").appendChild(div);
        // div.appendChild(img);
        document.querySelector("#ramen-detail > img").src = ramen.image;
        document.querySelector("#ramen-detail > h2").textContent = ramen.name;
        document.querySelector("#ramen-detail > h3").textContent = ramen.restaurant;
        document.querySelector("#rating-display").textContent = ramen.rating;
        document.querySelector("#comment-display").textContent = ramen.comment;
    });

    div.appendChild(img);

    document.querySelector("#ramen-menu").appendChild(div);

}

const form = document.querySelector("form");
form.addEventListener("submit", handleRamenForm);
// form.addEventListener("submit", )

function handleRamenForm(e) {
    e.preventDefault();
        // const p = document.createElement("p");
        // p.className = "comment";
        // form.appendChild(p); Tried defining comment...
        const newRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            // comment: e.target.new-comment.value  why is it saying comment is not defined?
        }
        renderRamen(newRamen);
        addRamens(newRamen);
    }


    function addRamens (newRamens) {
        fetch("http://localhost:3000/ramens",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(newRamens)
        })
        .then(res => res.json())
        .then(ramen => console.log(ramen))
      }




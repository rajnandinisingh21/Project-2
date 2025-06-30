// script.js
function filterPosts() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const posts = document.querySelectorAll(".post-card");

  posts.forEach(post => {
    const title = post.querySelector("h2").textContent.toLowerCase();
    const content = post.querySelectorAll("p")[1].textContent.toLowerCase();

    if (title.includes(input) || content.includes(input)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

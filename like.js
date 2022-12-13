const likeCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({liked: true})
      }, 3000)
    })
  }
 
  const closure = () => {
    const likeButton = document.querySelector(".like-btn");
    const icon = document.querySelector("button i");
    const btnTxt = document.querySelector(".like-text");
    let loading = false;
    likeButton.addEventListener("click", (event) => {
      event.preventDefault();
      loading = true;
      icon.classList.remove("fa-heart");
      icon.classList.add("fa-user");
      likeCall().then((data) => {
        console.log("data", data);
        likeButton.style.color = "white";
        likeButton.style.backgroundColor = "red";
        icon.classList.add("fa-heart");
        icon.classList.remove("fa-user");
        btnTxt.innerHTML = "Liked"
        loading = false;
      });

  })


  }

  
  closure();
imageDiv = document.getElementById('project-container');

imageDiv.addEventListener('mouseenter', function(){
  let image = imageDiv.querySelector("img");
  image.style.display = "block";
});

imageDiv.addEventListener('mouseleave', function(){
  let image = imageDiv.querySelector("img");
  image.style.display = "none";
});

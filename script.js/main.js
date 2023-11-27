// const jsonFile = require('/Users/nopassword/Desktop/Portfolio_web/projects.json')

// console.log(jsonFile);

// jsonFile.items.forEach(items => {
//     console.log(items);
// });

let jsonFile = "projects.json";

fetch(jsonFile)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // data.projects.forEach((project) => {
    //   console.log(project);
    // });

    createProject(data.projects)

     // Incluye el script de hover después de cargar los proyectos
     const script = document.createElement("script");
     script.src = "script.js/projects.js";
     document.body.appendChild(script);
  })
  .catch((error) => {
    console.log("error de red", error);
  });

  
const createProject = (projectInfo) => {
  const parentContainer = document.getElementById("project-container");

  for (let i = 0; i < projectInfo.length; i++) {
    const divElement = document.createElement("div");
    divElement.classList.add("projects");

    const imageElement = document.createElement("img");
    imageElement.src = projectInfo[i].image;
    imageElement.alt = projectInfo[i].alt;
    imageElement.classList.add('image-projects')
    divElement.appendChild(imageElement);

    const headingElement = document.createElement("h3");
    headingElement.textContent = projectInfo[i].name;
    divElement.appendChild(headingElement);

    const descriptionElement = document.createElement("span");
    descriptionElement.textContent = projectInfo[i].description;
    divElement.appendChild(descriptionElement);

    // const paragraphElement = document.createElement("p");
    // paragraphElement.textContent = maxText(projectInfo[i].content, 100);
    // divElement.appendChild(paragraphElement);

    parentContainer.appendChild(divElement);
  }
};

const maxText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

//-------------------------------



  //------------------ DARK MODE -------------------//


  function enableDarkMode() {
    let main_body = document.body
    main_body.classList.toggle("dark-mode")

    // if (document.getElementById('checkitem').checked){
    //   console.log("checked");
    // } else {
    //   console.log(" not checked");
    // }
  }
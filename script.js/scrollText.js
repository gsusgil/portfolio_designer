

// document.addEventListener("DOMContentLoaded", function() {
//     const habilities = document.getElementById("habilities");
  
//     window.addEventListener("scroll", function() {
//       const scrollY = window.scrollY;
//       const screenWidth = window.innerWidth;
//       const scrollTextWidth = habilities.offsetWidth;
  
//       // Calcula la posición del texto en relación con el scroll
//       const translateX = (scrollY / screenWidth) * (screenWidth + scrollTextWidth);
  
//       // Centra el texto cuando está a media pantalla
//       const centerOffset = (screenWidth - scrollTextWidth) / 2;
  
//       // Aplica transformación al elemento de texto
//       habilities.style.transform = `translateX(${translateX - centerOffset}px)`;
//     });
//   });
  

document.addEventListener("DOMContentLoaded", function () {
    const habilities = document.getElementById("habilities");
    const textContainer = document.querySelector(".text-scroll-container");
  
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      const containerWidth = textContainer.offsetWidth;
      const textWidth = habilities.offsetWidth;
  
      // Calcula la posición del texto en relación con el scroll
      let translateX = (scrollY / containerWidth) * (containerWidth + textWidth);
  
      // Limita el rango de desplazamiento para que no aparezca por encima de los demás elementos
      translateX = Math.min(translateX, containerWidth - textWidth);
      translateX = Math.max(translateX, 0); // Asegura que no se desplace más allá del inicio
  
      // Aplica transformación al elemento de texto
      habilities.style.transform = `translateX(${-translateX}px)`;
    });
  });
  
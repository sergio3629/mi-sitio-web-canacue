let headerSearchInput = document.getElementById("headerSearchInput");

let mainContent = document.getElementById("main-content");


headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});

mainContent.addEventListener("click", () => {

    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
});

let mainImgModal = document.getElementById("mainImgModal");

let mainImgModal1 = document.getElementById("mainImgModal1");
let mainImgModal2 = document.getElementById("mainImgModal2");
let mainImgModal3 = document.getElementById("mainImgModal3");
let mainImgModal4 = document.getElementById("mainImgModal4");
let mainImgModal5 = document.getElementById("mainImgModal5");

let boxMainImgModal1 = document.getElementById("boxMainImgModal1");
let boxMainImgModal2 = document.getElementById("boxMainImgModal2");
let boxMainImgModal3 = document.getElementById("boxMainImgModal3");
let boxMainImgModal4 = document.getElementById("boxMainImgModal4");
let boxMainImgModal5 = document.getElementById("boxMainImgModal5");


mainImgModal1.addEventListener("click", () => {

boxMainImgModal1.classList.add("selected");

boxMainImgModal2.classList.remove("selected");

boxMainImgModal3.classList.remove("selected");

boxMainImgModal4.classList.remove("selected");

boxMainImgModal5.classList.remove("selected");

    mainImgModal.setAttribute("src", "img/depredador1.jpg");

});

mainImgModal2.addEventListener("click", () => {

boxMainImgModal1.classList.remove("selected");

boxMainImgModal2.classList.add("selected");

boxMainImgModal3.classList.remove("selected");

boxMainImgModal4.classList.remove("selected");

boxMainImgModal5.classList.remove("selected");

mainImgModal.setAttribute("src", "img/depredador2.jpg");

  });
mainImgModal3.addEventListener("click", () => {
  
boxMainImgModal1.classList.remove("selected");

boxMainImgModal2.classList.remove("selected");

boxMainImgModal3.classList.add("selected");

boxMainImgModal4.classList.remove("selected");

boxMainImgModal5.classList.remove("selected");

    mainImgModal.setAttribute("src", "img/depredador3.jpg");
  
  });
mainImgModal4.addEventListener("click", () => {
  
  boxMainImgModal1.classList.remove("selected");

  boxMainImgModal2.classList.remove("selected");
  
  boxMainImgModal3.classList.remove("selected");
  
  boxMainImgModal4.classList.add("selected");
  
  boxMainImgModal5.classList.remove("selected");
    mainImgModal.setAttribute("src", "img/depredador4.jpg");

  });
mainImgModal5.addEventListener("click", () => {
  
  boxMainImgModal1.classList.remove("selected");

  boxMainImgModal2.classList.remove("selected");
  
  boxMainImgModal3.classList.remove("selected");
  
  boxMainImgModal4.classList.remove("selected");
  
  boxMainImgModal5.classList.add("selected");

   mainImgModal.setAttribute("src", "img/depredador5.jpg");

  });

const miniaturas = document.querySelectorAll('.img-mini');

miniaturas.forEach((miniatura) => {
    miniatura.addEventListener('click', () => {

        const imagenPrincipal = document.getElementById('mainImgModal');
        const src = miniatura.getAttribute('src');
        imagenPrincipal.setAttribute('src', src);

        imagenPrincipal.classList.add('enlarge');

        
   
    });
});

const miniaturas1 = document.querySelectorAll('.img-mini');

miniaturas1.forEach((miniatura) => {

miniatura.addEventListener('mouseover', () => {


miniatura.parentElement.classList.add('border-blue');
});

miniatura.addEventListener('click', () => {

  basic
  Copy
 
  miniatura.parentElement.classList.remove('border-blue');
  miniatura.parentElement.classList.add('border-orange');
  });
  
  });

btnClose.addEventListener("click", function() {
  mainContent.style.display = "none";
});


//principal
let mainImgModal111 = document.getElementById("mainImgModal111");

let mainImgModal11 = document.getElementById("mainImgModal11");
let mainImgModal22 = document.getElementById("mainImgModal22");
let mainImgModal33 = document.getElementById("mainImgModal33");
let mainImgModal44 = document.getElementById("mainImgModal44");
let mainImgModal55 = document.getElementById("mainImgModal55");

let boxMainImgModal11 = document.getElementById("boxMainImgModal11");
let boxMainImgModal22 = document.getElementById("boxMainImgModal22");
let boxMainImgModal33 = document.getElementById("boxMainImgModal33");
let boxMainImgModal44 = document.getElementById("boxMainImgModal44");
let boxMainImgModal55 = document.getElementById("boxMainImgModal55");

mainImgModal11.addEventListener("click", () => {
  
mainImgModal111.setAttribute("src", "img/depredador1.jpg");
  
});

mainImgModal22.addEventListener("click", () => {

mainImgModal111.setAttribute("src", "img/depredador2.jpg");
   
});
mainImgModal33.addEventListener("click", () => {

mainImgModal111.setAttribute("src", "img/depredador3.jpg");
  
});

mainImgModal44.addEventListener("click", () => {
    
mainImgModal111.setAttribute("src", "img/depredador4.jpg");

});

mainImgModal55.addEventListener("click", () => {
    
mainImgModal111.setAttribute("src", "img/depredador5.jpg");

});

  mainImgModal111.addEventListener("click", function() {

    if (mainContent.style.display === "none") {
    mainContent.style.display = "block";
    }
  
  });

  const containerImg = document.querySelector('.principal-container-img');
  const imagenPrincipal = document.getElementById('mainImgModal111');
  const miniatura1 = document.querySelectorAll('.principal-article');
  
  containerImg.addEventListener('mouseover', (event) => {
    if (event.target && event.target.classList.contains('principal-article')) {
      const src = event.target.querySelector('.img-mini-principal').getAttribute('src');
      imagenPrincipal.setAttribute('src', src);

  
      miniaturas.forEach((miniatura) => {
        miniatura.style.border = '2px double rgb(214, 211, 211)'; // Restablecer el borde de todas las miniaturas
      });
  
      event.target.style.border = '2px solid lightblue'; // Cambiar el borde de la miniatura al pasar el cursor
    }
  });
  
  containerImg.style.cursor = 'pointer';
  
  miniatura1.forEach((miniatura) => {
    miniatura.addEventListener('mouseover', () => {
      miniatura.style.border = '2px solid lightblue'; // Cambiar el borde al pasar el cursor por la miniatura
    });
  
    miniatura.addEventListener('mouseout', () => {
      miniatura.style.border = '1px solid rgb(77, 77, 79)'; // Restablecer el borde al salir del cursor
    });
  });
  
  img_principal.onmousemove = function (e) {
    e.target.style.setProperty("--x", (10 * e.offsetX / e.target.offsetWidth) + "%")
    e.target.style.setProperty("--y", (10 * e.offsetY / e.target.offsetHeight) + "%")
}

window.onload = () => {
  let modalt = document.getElementById('modalt');
  let mainImgModal111 = document.getElementById('mainImgModal111');

  // Al cargar la página, quitamos ciertos estilos del contenedor 1
  modalt.classList.add('quitar-estilo');
  
  // Agregamos un evento de clic al contenedor 2
  mainImgModal111.addEventListener('click', () => {
      // Al hacer clic en el contenedor 2, volvemos a agregar los estilos al contenedor 1
      modalt.classList.remove('quitar-estilo');
  });
}
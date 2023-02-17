import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {collection, addDoc, doc, setDoc, getDoc, updateDoc, getDocs, deleteDoc  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


// Luego, en algún lugar del código, puedes llamar a la función para obtener el puntaje final





const firebaseConfig = {
  apiKey: "AIzaSyDbmNn-VnwieGaZII7ztym-AafRrZ5vvxY",
  authDomain: "gameapp-56d96.firebaseapp.com",
  projectId: "gameapp-56d96",
  storageBucket: "gameapp-56d96.appspot.com",
  messagingSenderId: "38090664561",
  appId: "1:38090664561:web:43bed87b312acadef549d0",
  measurementId: "G-4PJH6Z21FZ"
};

  


/* firebase */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();
////////////////////////////////////////////////////////
const email = document.getElementById('email');
const pass = document.getElementById('pass');
/* formulario */
const NombreCom = document.getElementById('nomCom');
const Edd = document.getElementById('edad');

/* inputs utilizados  */
/* const ubicacion = document.getElementById('ubi');
const ubicacion2 = document.getElementById('ubi2');
const IDinput = document.getElementById('IDInput'); */
/* botones */
const crear = document.getElementById('crear');
const logoogle = document.getElementById('logoogle');
const login = document.getElementById('login');
const cerrar = document.getElementById('cerrar');
const facebook = document.getElementById('facebook');
const mostrar = document.getElementById('mos');
const STATUS = document.getElementById('verBD');
const crearbtn = document.getElementById('creardn');
const carguar = document.getElementById('car-guar');
const borrar = document.getElementById('borrar');
const ocult_btn = document.getElementById('ocul');
const Github = document.getElementById('github');

const ocultbd = document.getElementById('oculBD');
/* otro elemento */
const tabla_base = document.getElementById('tabla_base');
const divtabla = document.getElementById('tabla_db');
const juegovr = document.getElementById('juevv');


juegovr.addEventListener('click', function(){
  document.getElementById('juego').style.display = "block"

})


/* crear sesion */
crear.addEventListener('click', function () {
    createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential) => {
            
            const user = userCredential.user;
            alert ('sesion creada');
            document.getElementById('map').style.display ="none"
   
           
        })


        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
           
            if (error.code === 'auth/invalid-email') {
              alert ('el email es inavlido ')
              
            }
            else if(error.code === 'auth/weak-password'){
              alert('el password debe de contener al menos 6 digitos pendejo')}
        
           
        });
          });


          

/* iniciar sesion */
login.addEventListener("click", function(){
signInWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    alert ('sesion iniciada');
    document.getElementById('regi').style.visibility  = 'visible';
    document.getElementById('cerrar').style.visibility = 'visible';
    document.getElementById('login').style.visibility  = 'hidden';
    document.getElementById('crear').style.visibility  = 'hidden';
    document.getElementById('email').style.visibility  = 'hidden';
    document.getElementById('pass').style.visibility  = 'hidden';
    document.getElementById('logoogle').style.visibility  = 'hidden';
    document.getElementById('facebook').style.visibility  = 'hidden';
    document.getElementById('github').style.visibility  = 'hiden';
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('error porfavor vuelva a intentarlo');


  });

    });
  
  
/* cerrar sesion */

cerrar.addEventListener("click", function() {
signOut(auth).then(() => {
  alert('sesion cerrada perfectamente')
  document.getElementById('regi').style.visibility  = 'hidden';
  document.getElementById('cerrar').style.visibility  = 'hidden';
  document.getElementById('login').style.visibility  = 'visible';
  document.getElementById('crear').style.visibility  = 'visible';
  document.getElementById('email').style.visibility  = 'visible';
  document.getElementById('pass').style.visibility  = 'visible';
  document.getElementById('logoogle').style.visibility  = 'visible';
  document.getElementById('facebook').style.visibility  = 'visible';
  document.getElementById('github').style.visibility  = 'hiden';


}).catch((error) => {
  alert (errorCode + ' + ' + errorMessage);
});


});



/* login de google */
logoogle.addEventListener('click', function(){
signInWithPopup(auth, providerGoogle)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    document.getElementById('regi').style.visibility  = 'visible';
    document.getElementById('cerrar').style.visibility = 'visible';
    document.getElementById('login').style.visibility  = 'hidden';
    document.getElementById('crear').style.visibility  = 'hidden';
    document.getElementById('email').style.visibility  = 'hidden';
    document.getElementById('pass').style.visibility  = 'hidden';
    document.getElementById('logoogle').style.visibility  = 'hidden';
    document.getElementById('facebook').style.visibility  = 'hidden';
    document.getElementById('github').style.visibility = 'hidden';

    

    // ...
    alert('sesion creada')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    // ...
    alert('error al intentar iniciar sesion')
  });

});





/* login de facebook */
facebook.addEventListener('click', function(){
  signInWithPopup(auth, providerFacebook)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    document.getElementById('regi').style.visibility  = 'visible';
    document.getElementById('cerrar').style.visibility = 'visible';
    document.getElementById('login').style.visibility  = 'hidden';
    document.getElementById('crear').style.visibility  = 'hidden';
    document.getElementById('email').style.visibility  = 'hidden';
    document.getElementById('pass').style.visibility  = 'hidden';
    document.getElementById('logoogle').style.visibility  = 'hidden';
    document.getElementById('facebook').style.visibility  = 'hidden';
    document.getElementById('github').style.visibility  = 'hiden';
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
})


        Github.addEventListener('click', function(){
        signInWithPopup(auth, providerGithub)
          .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            document.getElementById('regi').style.visibility  = 'visible';
            document.getElementById('cerrar').style.visibility = 'visible';
            document.getElementById('login').style.visibility  = 'hidden';
            document.getElementById('crear').style.visibility  = 'hidden';
            document.getElementById('email').style.visibility  = 'hidden';
            document.getElementById('pass').style.visibility  = 'hidden';
            document.getElementById('logoogle').style.visibility  = 'hidden';
            document.getElementById('facebook').style.visibility  = 'hidden';
            document.getElementById('github').style.visibility  = 'hiden';

            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
          });
        });

document.getElementById("ocul").style.display = "none";
/* base de datos */
/* guardar.addEventListener("click", async() => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      nombre:'${NombreCom.value}',
      edad:'${Edd.value}',
      sexo:'${genero.value}',
      telefono:'${numero.value}',
      correo:'${correo1.value}'
      });
      document.getElementById('guar').style.display = 'none';

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert('error en la base de datos')
  }
});
 */

ocult_btn.addEventListener('click', function (){
  document.getElementById("mos") .style.display = "block"
  document.getElementById("ocul") .style.display = "none"
  document.getElementById("map") .style.display = "none"
  document.getElementById("myInput").value = "";

              
            })




 mostrar.addEventListener("click", function  () {
              document.getElementById("mos") .style.display = "none"
              document.getElementById("ocul") .style.display = "block"
              document.getElementById("map") .style.display = "block"
              document.getElementById('map').style.visibility = "visible";

              
              mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtY2FybG9zZnQiLCJhIjoiY2xkdnV2cmF5MDE3bDNvanFmcGRqZ2d4cCJ9.ohJtRP33084CwLYUx-NT_w';
              const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: [10,10], // starting position [lng, lat]
                zoom: 7 // starting 
              
                

              }); 


              



              const marker = new mapboxgl.Marker({
                draggable: true
                })
                .setLngLat([10, 10])
                .addTo(map);
                
                function onDragEnd() {
                const lngLat = marker.getLngLat();
                coordinates.style.display = 'block'; 
                coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
                document.getElementById('lng-lat').value = lngLat.lng
                document.getElementById('lng-long').value = lngLat.lat
               
                }
               
                
                marker.on('dragend', onDragEnd);

                


                }); 

     
                

              crearbtn.addEventListener("click", async () => {
                // Verificar si el nombre de usuario ya existe
                const docRef = doc(db, "users", NombreCom.value);
                const docSnap = await getDoc(docRef);
                ;
                if (docSnap.exists()) {
                    alert(`El nombre de usuario ${NombreCom.value} ya está en uso. Por favor, elija otro nombre de usuario.`);
                    /* document.getElementById('juego').style.display= "block"; */
                    return;
                }
            
                // Si el nombre de usuario no existe, crear el nuevo usuario
                try {
                    await setDoc(docRef, {
                        usuario: NombreCom.value,
                        nombre: Edd.value,
                        logitud:document.getElementById('lng-lat').value,
                        latitud:document.getElementById('lng-long').value,
                        puntuacion:score
                      
                        
                    });
                    alert(`Gracias ${NombreCom.value} ha sido agregado a la base de datos!`);
                } catch (error) {
                    alert('o al agregar el usuario.' + error);
                }
            });


           
           


           /*  ocultbd.addEventListener('click', function () {
              
              document.getElementById('tabla_db').style.display="none"
              document.getElementById('nomCom').value = "";
              document.getElementById('edad').value = "";
              
                            
            })

 */

            
 /*          STATUS.addEventListener("click", async () => {
            document.getElementById('tabla_db').style.display="block"
            document.getElementById('tabla_base').style.display="block"
            document.getElementById('oculBD').style.display="block"
        
        

         

              tabla_base.innerHTML =
               `<tr>
                    <td>id</td>
                    <td>usuario</td>
                    <td>nombre</td>
                    
                </tr>`;
                
            
    const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            
          console.log(doc.id, " => ", doc.data());
            tabla_base.innerHTML +=
              `<tr>
                  <td>${doc.id}</td>
                  <td>${doc.data().usuario}</td>
                  <td>${doc.data().nombre}</td>
                  
               </tr>`;
                });

                
            }); */
            



    cargar.addEventListener("click", async () => {
        const docRef = doc(db, "users", IDInput.value);
        const docSnap = await getDoc(docRef);
            
        if (docSnap.exists()) {
            NombreCom.value = docSnap.data().usuario;
            Edd.value = docSnap.data().nombre;
            document.getElementById('lng-lat').value=docSnap.data().longitud;
            document.getElementById('lng-long').value=docSnap.data().latitud;
            document.getElementById('scoree').value=docSnap.data().puntuacion;
           
              alert("documento encontrado" );
          } 
          
        else {
                    
          alert("este docuemnto no existe en la base de datos");
            }
            
          });




          carguar.addEventListener("click", async() => {
            if (IDInput.value) {
              const elementRef = doc(db, "users", IDInput.value);
              await updateDoc(elementRef, {
                usuario: NombreCom.value,
                nombre: Edd.value,
                logitud:document.getElementById('lng-lat').value,
                latitud:document.getElementById('lng-long').value,
                puntuacion:score
                
              });
              alert("Cambios guardados");
            } else {
              alert("Ingrese una ID válida");
            }
          });
          
          borrar.addEventListener("click", async()=>{
            await deleteDoc(doc(db, "users", IDInput.value));
        })


      


    






            




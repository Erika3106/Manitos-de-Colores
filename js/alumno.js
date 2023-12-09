const { createApp } = Vue
createApp({
data() {
return {
alumnos:[],
//url:'http://localhost:5000/productos',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
url:'http://nicolasventu.pythonanywhere.com/alumnos', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
dni:0,
nombre:"",
apellido:"",
fecha_nac:0,
domicilio:"",
numero:0,
localidad:"",
telefono:"",
horas:0
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.alumnos = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(alumno) {
const url = this.url+'/' + alumno;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
grabar(){
let alumno = {
dni:this.dni,
nombre:this.nombre,
apellido:this.apellido,
fecha_nac:this.fecha_nac,
domicilio:this.domicilio,
numero:this.numero,
localidad:this.localidad,
telefono:this.telefono,
horas:this.horas
}
var options = {
body:JSON.stringify(alumno),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "../templates/alumno.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
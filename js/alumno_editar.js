console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
dni:0,
nombre:"",
apellido:"",
fecha_nac:0,
domicilio:"",
numero:0,
localidad:"",
telefono:"",
horas:0,
url:'http://nicolasventu.pythonanywhere.com/alumnos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.dni=data.dni
this.nombre = data.nombre
this.apellido=data.apellido
this.fecha_nac=data.fecha_nac
this.domicilio=data.domicilio
this.numero=data.numero
this.localidad=data.localidad
this.telefono=data.telefono
this.horas=data.horas

})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let alumno = {
dni:this.dni,
nombre:this.nombre,
apellido: this.apellido,
fecha_nac:this.fecha_nac,
domicilio:this.domicilio,
numero:this.numero,
localidad:this.localidad,
telefono:this.telefono,
horas:this.horas
}
var options = {
body: JSON.stringify(alumno),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../templates/alumno.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
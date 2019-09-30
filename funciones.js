var yoni = {
    primernombre: 'andres',
    segundoapellido: 'salazar',
    edad: 100,
    hobbies: ['jugar free', 'matematica'],

    direcion: {

        callePrincipal: 'rio verde',
        calleSecundaria: 'rio negro '

    },

    saludar: () => `${this.primernombre} ${this.segundoapellido}`,

    presentacion: function () {
        return ` hola soy ${this.primernombre} ${this.segundoapellido} y mi edad ${this.edad} y vivo ${this.direcion.callePrincipal} `
    }
}



const funcionNormalDos = (nombre)=> {

    console.log(` hola ${nombre}`)

}

const funcionNormalTres = (nombre) => `hola ${nombre}`

const funcionqueacepteotrafuncion = (nombre,callback) => {

    if (callback) callback(primernombre)

}
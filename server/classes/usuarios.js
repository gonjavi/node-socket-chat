

class Usuarios {
  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre) {
    let persona = { id, nombre};
    this.personas.push(persona);

    return this.personas;
  }

  getPersona() {
    // filter regresa arreglo, [0] para tener la primera posicion
    let persona = this.personas.filter(persona => persona.id === id)[0]; 
    return persona;
  }

  getPersonas() {
    return this.personas;
  }

  getPersonasPorSala(sala) {

  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);    
    this.personas = this.personas.filter(persona.id !== id);
    return personaBorrada;
  }
}

module.exports = {
  Usuarios
}


class Usuarios {
  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre, sala) {
    let persona = { id, nombre, sala};
    this.personas.push(persona);

    return this.personas;
  }

  getPersona(id) {
    // filter regresa arreglo, [0] para tener la primera posicion
    let persona = this.personas.filter(persona => persona.id === id)[0]; 
    return persona;
  }

  getPersonas() {
    return this.personas;
  }

  getPersonasPorSala(sala) {
    let personaEnSala = this.personas.filter(persona => persona.sala === salsa);
    return personaEnSala;
  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);    
    this.personas = this.personas.filter(persona => persona.id !== id);
    return personaBorrada;
  }
}

module.exports = {
  Usuarios
}
export class AtributosSB {
  nombre: string;
  tipo: string;

  constructor(nombre: string, tipo: string) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

export class ClassJPA {
  contenido: string;
  attrsEspeciales: string[];

  constructor(contenido: string, attrsEspeciales: string[]) {
    this.contenido = contenido;
    this.attrsEspeciales = attrsEspeciales;
  }
}

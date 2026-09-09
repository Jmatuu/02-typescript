export const nombreEstudiante: string = "Jonnathan Guaman ";       // feat: nombre escrito
export const edadEstudiante: number = 17;          // feat: edad escrita
export const promedioObjetivo: number = 9.85;        // feat: promedio escrito
export let estaMatriculado: boolean = true;    // feat: estado de matricula escrito

export function obtenerResumenPersonal(): string {
  // feat: Formateo de la cadena de resumen personal
   let cadena:string = `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO"}`;
  return cadena;  
}
 // feat : funcion calcularPromedio completada
export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length === 0) {
    return 0;
  }
  const suma: number = notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
  return Number((suma / notas.length).toFixed(2));
}
// feat: funcion formatearFichaEstudiante completada
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${activo ? "MATRICULADO" : "RETIRADO"}`;
}

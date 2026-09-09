// feat: interface definida 
export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}
// feat : ficha completa de usuario ejemplo
export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "Jonnathan Javier Guamán Matute", // feat: nombre completo escrito
  correo: "jonnathan.guamanm.est@uets.edu.ec",        // feat: correo escrito
  rol: "ESTUDIANTE"
};

export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  return `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`;
}
export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}
export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) {
    return 0;
  }

  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
    const descuento = producto.precio * (producto.descuentoPorcentaje / 100);
    const precioFinal = producto.precio - descuento;
    return Number(precioFinal.toFixed(2));
  }

  return Number(producto.precio.toFixed(2));
}

import { redirect } from 'next/navigation'

// Único producto por ahora; cuando haya más, esta ruta pasa a ser el listado.
export default function ProductosPage() {
  redirect('/ControlHorario')
}

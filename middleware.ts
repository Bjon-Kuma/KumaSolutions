import { NextResponse, type NextRequest } from 'next/server'

// Las rutas de Next distinguen mayúsculas: /controlhorario daría 404.
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  if (pathname !== '/ControlHorario' && pathname.toLowerCase() === '/controlhorario') {
    // nextUrl apunta al origen interno (localhost:puerto) detrás del proxy de Hostinger;
    // se arma la URL con el host público para no redirigir a localhost.
    // Next marca x-forwarded-proto=http aunque el visitante entre por HTTPS.
    const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
    const proto = host && /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host) ? 'http' : 'https'
    const url = host
      ? new URL(`/ControlHorario${search}`, `${proto}://${host}`)
      : new URL(`/ControlHorario${search}`, request.nextUrl.origin)
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

// Patrón explícito: con '/:segment' Next le pega '(.json)' como patrón del parámetro.
export const config = {
  matcher: '/:segment([^/.]+)',
}

import { NextRequest, NextResponse } from 'next/server';
import { PATHROUTES } from './utils/PATHROUTE';


export function middleware(request: NextRequest) {

  const token = request.cookies.get('token');
// const token = "token"
 
  if (!token) {
    return NextResponse.redirect(new URL(PATHROUTES.HOME, request.url));
  }


  return NextResponse.next();
}


export const config = {
  matcher: ['/Dashboard', '/Carrito'],
};
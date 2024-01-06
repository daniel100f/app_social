import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  //consultar la bd
  //comunicarme con otros servicios
  //recibir y transformar algo que se nos envio por params

  //aca recibimos por query
  const { searchParams } = new URL(request.url);
  console.log(searchParams);

  //aca por params
  return NextResponse.json(params.userId);
}

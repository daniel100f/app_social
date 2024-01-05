import { NextResponse } from "next/server";

export const GET = () => {
  //consultar la bd
  //comunicarme con otros servicios
  //recibir y transformar algo que se nos envio por params
  return NextResponse.json({ message: "hellow world" });
};

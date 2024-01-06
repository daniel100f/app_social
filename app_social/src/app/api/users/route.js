import { NextResponse } from "next/server";

//para las variables de entorno no hace falta un npm i dotenv
//directamente es ej: const aux = process.env.SECRET_KEY
console.log(process.env.SECRET_KEY);

export const GET = () => {
  //consultar la bd
  //comunicarme con otros servicios
  //recibir y transformar algo que se nos envio por params
  return NextResponse.json({ message: "OBETENER" });
};
export const PUT = () => {
  //consultar la bd
  //comunicarme con otros servicios
  //recibir y transformar algo que se nos envio por params
  return NextResponse.json({ message: "ACTUALIZAR DATOS" });
};
export const POST = async (request) => {
  //consultar la bd
  //comunicarme con otros servicios
  //recibir y transformar algo que se nos envio por params

  //el request.body es usuarlmente, pero en next solo con request ya es el body, el .json es para que me parsee a json la response
  //.json necesita await
  const { name } = await request.json();
  console.log(name);
  return NextResponse.json({ message: "CREANDO DATOS" });
};
export const DELETE = () => {
  //consultar la bd
  //comunicarme con otros servicios
  //recibir y transformar algo que se nos envio por params
  return NextResponse.json({ message: "ELIMINANDO DATOS" });
};

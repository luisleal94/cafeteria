import { CarritoItem } from "../interface/CarritoItem";

export const eliminarDelCarrito = (
    id: number, 
    setCarritoCafe: React.Dispatch<React.SetStateAction<CarritoItem[]>>) => {
        setCarritoCafe((prevCarrito) => {
    const index = prevCarrito.findIndex(item => item.cafe.id === id);

    if (index !== -1) {
      const nuevoCarrito = [...prevCarrito];
      if (nuevoCarrito[index].cantidad > 1) {
        nuevoCarrito[index] = {
          ...nuevoCarrito[index],
          cantidad: nuevoCarrito[index].cantidad - 1,
        };
      } else {
        nuevoCarrito.splice(index, 1);
      }
      return nuevoCarrito;
    }
    return prevCarrito;
  });
};
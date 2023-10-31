//PRUEBAS UNITARIAS
import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "../components/Counter";

describe("<Counter/>", ()=>{
    test('Prueba del componente de contador', () => { 
        
        render(<Counter/>);//Testing library
        const countElement = screen.getByText(/Count:/i); // si se pone la i -> Es para que sea insensible a las mayúscula
        const buttonElement = screen.getByText(/Increment/i);
        
        expect(countElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();

     });
     
     test("Incremento cuando le den clic al botón", ()=>{
        render(<Counter/>);
        const buttonElement = screen.getByText(/Increment/i);

        fireEvent.click(buttonElement)
        const countElement = screen.getByText(/Count: 1/i);
        expect(countElement).toBeInTheDocument();
     });
}); // describe me permite agrupar las pruebas (Comentario, función)
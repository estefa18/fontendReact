//	PRUEBAS DE INTEGRACIÓN
import {render, screen, fireEvent} from "@testing-library/react";
import ParentComponent from "../components/ParentComponent";

describe("<ParentComponent/>", ()=>{
    test('Modificar el componente el padre donde el componente cuando le hacen clic al boton', () => {
        render(<ParentComponent/>);
        const inputElement = screen.getByRole('textbox');
        const submitButton = screen.getByRole('button',{name: /Submit/i });

        fireEvent.change(inputElement, {target: {value: "Hola Prueba"}});
        fireEvent.click(submitButton);

        const updatedText = screen.getByText(/Text: Hola Prueba/i);
        expect(updatedText).toBeInTheDocument();
    });
});
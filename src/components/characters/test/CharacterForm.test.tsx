import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CharacterForm from "../CharacterForm";

describe("Character form render", () => {
  it("Character form must desplay title", () => {
    render(
      <BrowserRouter>
        <CharacterForm />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(/Buscar Personaje/);
    expect(titleElement).toBeInTheDocument();
  });
});

test('Rendering Character form and submitting Formik Form', async()=>{
    const handleSubmit = jest.fn();
   const {getByLabelText,getByTestId}= render(
        <BrowserRouter>
          <CharacterForm />
        </BrowserRouter>
      );
      userEvent.type(screen.getByLabelText(/Nombre de personaje/),'batman')
})
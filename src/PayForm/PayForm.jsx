import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function PayForm() {
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");

  const validarPago = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        border: "solid 1px green",
        display: "flex",
        justifyContent: "center",
        marginLeft: 500,
        marginTop: 200,
        width: 400,
        borderRadius: 8,
        padding: 10,
      }}
    >
        <h1 className="text-center"> 🍕 Paga Aquí </h1>
        
      <Form>
        <Form.Group className="mb-3 p-1" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 p-1" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Teléfono" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onSubmit={validarPago} variant="success" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PayForm;
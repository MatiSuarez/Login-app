import React, { useState } from "react";
import { Grid, Divider, Form, Button, Icon } from "semantic-ui-react";

const styles = {
  grid: {
    height: "100%",
    width: "900 px",
    margin: "0 auto",
  },

  box: {
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    textAlign: "center",
    marginBottom: "1em",
    padding: "1em",
  },
};

export default function Home() {
  const Token = localStorage.getItem("Token");
  const tokenParse = JSON.parse(Token);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const data = JSON.stringify({
    name: user.name,
    email: user.email,
    password: user.password,
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://redis-auth.herokuapp.com/auth/register",
        options
      );
      const datos = await res.json();
      console.log(datos);
    } catch (error) {}
  };

  const HandleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid columns={3} centered verticalAlign="middle" style={styles.grid}>
      <Grid.Row>
        <Grid.Column>
          <div style={styles.box}>
            <h1> BIENVENID@!</h1>
            <h3> Crea tu usuario para poder ingresar a la página </h3>

            <Divider horizontal inverted>
              {" "}
              O{" "}
            </Divider>

            <Form>
              <Form.Field onChange={HandleSubmit}>
                <Form.Input
                  onChange={HandleChange}
                  placeholder="user name"
                  value={user.name}
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  onChange={HandleChange}
                  placeholder="email"
                  value={user.email}
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  onChange={HandleChange}
                  placeholder="password"
                  value={user.password}
                />
              </Form.Field>

              <Button type="submit" primary fluid>
                <p> Regístrate! </p>
              </Button>

              <Divider horizontal> O </Divider>

              <Button color="facebook" a href="https://www.facebook.com/">
                <Icon name="facebook" />
                Regístrate con facebook
              </Button>
            </Form>
          </div>

          <div style={styles.box}>
            ¿Ya estas registrado? <a href="/login"> Iniciar Sesión </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

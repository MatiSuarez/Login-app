import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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

export default function Login() {
  const Token = localStorage.getItem("Token");
  const tokenParse = JSON.parse(Token);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({ undefined });

  const data = JSON.stringify({
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://redis-auth.herokuapp.com/auth/login",
        options
      );
      const datos = await res.json();
      setStatus(res.status);
      localStorage.setItem("Token", JSON.stringify(datos.access_token));
    } catch (error) {
      localStorage.removeItem("Token");
    }
  };

  const onHandleChange = (e) => {
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
            <h1> Ingresá a tu cuenta! </h1>

            <Divider horizontal inverted>
              {" "}
              O{" "}
            </Divider>

            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Form.Input
                  onChange={onHandleChange}
                  placeholder="email"
                  value={user.email}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={onHandleChange}
                  placeholder="password"
                  value={user.password}
                />
              </Form.Field>
              <Button type="submit" primary fluid>
                <p> Iniciar Sesión </p>
              </Button>
              <Divider horizontal> O </Divider>
              <Button color="facebook" a href="https://www.facebook.com/">
                <Icon name="facebook" />
                Iniciar sesión con facebook
              </Button>
              <Divider horizontal inverted>
                {" "}
                O{" "}
              </Divider>
              ¿Olvidaste tu constraseña?{" "}
              <a href="/about"> Recordar constraseña </a>
            </Form>
            {tokenParse && <Redirect to="/about" />}
          </div>

          <div style={styles.box}>
            ¿No tienes una cuenta? <a href="/home"> Regístrate </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

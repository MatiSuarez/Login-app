import React from "react";
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

export default function About() {
  return (
    <Grid columns={3} centered verticalAlign="middle" style={styles.grid}>
      <Grid.Row>
        <Grid.Column>
          <div style={styles.box}>
            <h3> Recuperar contraseña para poder ingresar a la página </h3>

            <Divider horizontal inverted>
              {" "}
              O{" "}
            </Divider>

            <Form>
              <Form.Field>
                <Form.Input placeholder="user name" />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  placeholder="email"
                  icon={<Icon name="check circle" color="green" />}
                />
              </Form.Field>

              <Button type="submit" primary fluid>
                <p> Recuperar contraseña </p>
              </Button>

              <Divider horizontal> O </Divider>

              <Button color="facebook" a href="https://www.facebook.com/">
                <Icon name="facebook" />
                Iniciar sesión con facebook
              </Button>
            </Form>
          </div>

          <div style={styles.box}>
            ¿No estas registrado? <a href="/home"> Regístrate </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

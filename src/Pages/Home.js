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

export default function Home() {
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
              <Form.Field>
                <Form.Input placeholder="user name" />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  placeholder="email"
                  icon={<Icon name="check circle" color="green" />}
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  placeholder="password"
                  icon={<Icon name="remove circle" color="red" />}
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  placeholder="repeat password"
                  icon={<Icon name="remove circle" color="red" />}
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

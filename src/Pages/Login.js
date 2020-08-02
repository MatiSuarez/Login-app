import React from 'react' ;
import { Grid, Divider, Form, Button, Icon } from 'semantic-ui-react';

const styles = {

    grid: {
         height: '100%' ,
         width: '900 px' ,
         margin: '0 auto' ,
    },

    box :{
         backgroundColor: 'white' ,
         border: '1px solid #e6e6e6' ,
         textAlign: 'center' ,
         marginBottom: '1em' ,
         padding: '1em',
  },
}


export default function Login () {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = JSON.stringify(
            {
                email:"matu_seba@hotmail.com",
                password:"matias"
            }
        ) 

        const options = {
            method: 'POST',
            body: data,
            headers:{
                'Content-Type': 'application/json'
              } 
        }

        const response = await fetch ( 'https://redis-auth.herokuapp.com/auth/login', options )
        const user = await response.json()

        console.log(user)

    }


    return (
        <Grid columns={3} centered verticalAlign='middle' style={ styles.grid}>
            <Grid.Row>
                <Grid.Column>
                <div style={ styles.box}>
                 <h1> Ingresá a tu cuenta! </h1>

                 <Divider horizontal inverted> O </Divider>
            
                      <Form onSubmit= { handleSubmit } >
                         
                         <Form.Field>
                          <Form.Input placeholder='email' icon={ <Icon name='check circle' color='green' />}/> 
                          </Form.Field>

                         <Form.Field>
                          <Form.Input placeholder='password' icon={ <Icon name='remove circle' color='red' />} />
                          </Form.Field>

                          <Button type='submit' primary fluid> 
                               <p> Iniciar Sesión </p>
                          </Button>

                          <Divider horizontal> O </Divider>

                          <Button color='facebook' a href='https://www.facebook.com/'> 
                            <Icon name='facebook'/>
                                Iniciar sesión con facebook
                          </Button>


                          <Divider horizontal inverted> O </Divider>

                          ¿Olvidaste tu constraseña? < a href='/about'> Recordar constraseña </a>

                       </Form>
                
                   </div>


                   <div style={ styles.box }>

                      ¿No tienes una cuenta? < a href='/home'> Regístrate </a>

                   </div> 
                   
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
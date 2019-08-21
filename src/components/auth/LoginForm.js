import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap'

const LoginForm = props => {
  const styles = {
    cardStyles: {
      padding: 20
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // call our action creator
  }

  return (
    <div>
      <Card style={styles.cardStyles}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginForm

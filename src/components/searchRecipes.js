import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap'; 

class SearchRecipes extends Component {

    constructor(props){
        super();
        this.state = {
            ingredints: '',
            dish: ''
        }
    }
    search() {
      const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredints}&q=${this.state.dish}`;
      console.log('state', this.state);
    }

    render(){
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel> Ingredints : </ControlLabel>
                    {' '}
                    <FormControl
                     type="text"
                     placeholder="gril"
                     onChange = {event => this.setState({ingredints: event.target.value})}
                     />
                </FormGroup >
                {' '}

                <FormGroup>
                <ControlLabel> Dish : </ControlLabel>
                    {' '}
                    <FormControl
                     type="text"
                     placeholder="adobo"
                     onChange = {event => this.setState({dish: event.target.value})}
                     />

                </FormGroup>

                <Button onClick ={() => this.search()}>Submit</Button>

            </Form>
        );
    }
}
export default SearchRecipes;
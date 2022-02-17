import styled from "styled-components"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import ButtonGroup from '@mui/material/ButtonGroup';


const ButtonsContainer = styled.div`
    width: fit-content;
    padding: 10px;

    #buttons-card {
        display: flex;
        flex-direction: column;
    }

    #button-groups {
        Button {
            margin: 5px 0;
        }
    }

    Button {
        margin: 5px;
    }

    h2 {
        text-align: center;
        margin: 0;
    }

    h3 {
        margin: 0;
        margin-top: 10px;
    }

    code {
        color: white;
        background: black;
        padding: 2px;
    }
`

const Buttons = () => {
    return(
    <ButtonsContainer>
        <Card style={{backgroundColor: "#CDDFB6"}} raised>
            <CardContent>
                <div id="buttons-card">
                    <h2>Buttons</h2>
                    <section>
                        <h3>Variant prop</h3>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                        <Button variant="text">Text</Button>
                    </section>
                    <section>
                        <h3>Size prop</h3>
                        <Button variant="contained" size="small">Small</Button>
                        <Button variant="contained" size="medium">Medium</Button>
                        <Button variant="contained" size="large">Large</Button>
                    </section>
                    <section>
                        <h3>onClick prop</h3>
                        <Button variant="contained" onClick={() => alert('clicked')}>onClick</Button>
                    </section>
                    <section>
                        <h3>Color prop</h3>
                        <Button variant="contained" color="secondary">Secondary</Button>
                        <Button variant="contained" color="success">Success</Button>
                        <Button variant="contained" color="error">Error</Button>
                    </section>
                    <section id="button-groups">
                        <h3>Button Groups</h3>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </section>
                </div>
            </CardContent>
        </Card>
    </ButtonsContainer>
    )
}

export default Buttons

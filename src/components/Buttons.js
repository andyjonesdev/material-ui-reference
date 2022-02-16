import styled from "styled-components"
import Button from "@mui/material/Button"

const ButtonsContainer = styled.div`
    Button {
        margin: 10px 0;
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
        <h2>Buttons</h2>
        <Button variant="contained">Contained</Button>
        <pre>
            <code>
            &lt;Button variant="contained"&gt;Contained&lt;/Button&gt;
            </code>
        </pre>
        <Button variant="outlined">Outlined</Button>
        <pre>
            <code>
            &lt;Button variant="outlined"&gt;Outlined&lt;/Button&gt;
            </code>
        </pre>
        <Button variant="text">Text</Button>
        <pre>
            <code>
            &lt;Button variant="text"&gt;Text&lt;/Button&gt;
            </code>
        </pre>
        <Button variant="contained" size="large">Large</Button>
        <pre>
            <code>
            &lt;Button variant="contained" size="large"&gt;Large&lt;/Button&gt;
            </code>
        </pre>
        <Button variant="contained" size="small">Small</Button>
        <pre>
            <code>
            &lt;Button variant="contained" size="small"&gt;Small&lt;/Button&gt;
            </code>
        </pre>
    </ButtonsContainer>
    )
}

export default Buttons

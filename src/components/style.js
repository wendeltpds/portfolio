import styled from 'styled-components' 




export const Style = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;;
    background: linear-gradient(68.20deg , black , rgb(17, 17, 17));
    animation-name: corpo;
    animation-duration: 500ms;


    @keyframes corpo {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

`
import styled from 'styled-components' 




export const Style = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
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
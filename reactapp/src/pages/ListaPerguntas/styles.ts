import styled from "styled-components";


export const Container = styled.main`
    background-color: white;
    height: 100vh;
    width: 500px;
    margin: auto;
    padding: 20px;
`;

export const Content = styled.div`
    & h2 {
        font-size: 28px;
        margin-bottom: 35px;
    }
`;
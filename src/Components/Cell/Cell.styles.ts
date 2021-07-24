import styled from "styled-components"

export const Container = styled.div`
    background-color: ${(props: { isAlive: boolean })=>props.isAlive?'green':'grey'};
    border: 1px solid;
    height: 60px;
    width: 60px;
`
export const Anchor = styled.a`
text-decoration: none;
 cursor: default; 
 color: blanchedalmond;
`
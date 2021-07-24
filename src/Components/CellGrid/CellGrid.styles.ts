import styled from "styled-components"

export const CellGridContainer = styled.div`

display: flex;
flex-direction: ${(props: { direction: string })=>props.direction};;
flex-wrap: wrap;
}
`
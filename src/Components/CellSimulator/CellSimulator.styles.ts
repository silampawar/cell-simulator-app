import styled from "styled-components"

export const Container = styled.div`
margin: 10px;
padding:5px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
}

`
export const ButtonDiv = styled.div`
 margin:30px
`


export const SignInBtn = styled.button`
 text-decoration: none;
 padding: 10px 10px;
 margin: 16px;
 letter-spacing: 0.1rem;
 border-radius: 0.5rem;
 cursor: pointer;
 outline: none;
 font-size: 20px;
 background-color: #e6e6ff;
 &:hover {
  background-color: #6666ff;
 }
 &:active {
  border-bottom-width: 0.1rem;
  border-top-width: 0.5rem;
 }
`

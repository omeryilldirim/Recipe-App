import styled from 'styled-components';

const DetailPage = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  padding:2rem 4rem;
`;


export const TitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  & h1{
    text-align: center;
  }
  & img{
    width: 200px;
  }
  `;


export const InfoSection = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1.5rem;
  border: 2px solid ${({theme})=>theme.colors.tertiary};
  border-radius:5px;

  @media screen and (max-width: ${({theme})=>theme.breakpoints.lg}) {
    flex-direction: column;
  }
  & img{
    outline: 1px solid ${({theme})=>theme.colors.tertiary};
    outline-offset: 0.3rem;
    border-radius:5px;
    margin: 0.5rem;
  }

  & .nutrients,
  .ingredients {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0.5rem;
  }

  & .ingredients .details-btn{
    color:${({theme})=>theme.colors.primary} ;
  }
  `;



export default DetailPage;
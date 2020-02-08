import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  background-color: var(--accent-clr);
  color: var(--second-clr);
  text-align: center;
  padding: 5em 1em 2em;
  margin: 0 0.5em;
  max-width: 500px;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--primary-clr);
    height: 100%;
    width: 100%;
    top: 10px;
    /* left: 0; */
    right: -4px;
    z-index: -1;
  }

  .card--testimoneis--img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin: 0 auto;
    border: 3px solid var(--primary-clr);
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
  }

  .card--testimoneis--content__para {
    max-width: 50vw;
    margin: 0 auto;
  }
`;

const TestimoniesCard = ({ data: { img, name, text } }) => (
  <Styled className='card--testimonies'>
    <img src={img} alt='woman' className='card--testimoneis--img' />
    <div className='card--testimoneis--content'>
      <h3 className='card--testimoneis--content__name'>{name}</h3>
      <p className='card--testimoneis--content__para'>{text}</p>
    </div>
  </Styled>
);

export default TestimoniesCard;

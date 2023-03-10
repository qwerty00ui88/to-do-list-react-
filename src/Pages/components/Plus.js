import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

function Plus({ handleSetIsOpen }) {
  return (
    <Div onClick={handleSetIsOpen}>
      <FontAwesomeIcon icon={faPlus} size='3x' />
    </Div>
  );
}

export default Plus;

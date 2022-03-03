import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.margin || '0px'};
`
export default Wrapper;
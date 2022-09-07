import styled from "@emotion/styled";
import BaseContainer from "./BaseContainer";

const GC = styled(BaseContainer)`
    height: auto;
    min-height: 100%;
    background-image: linear-gradient(to bottom, #243027, #1c1818);
`;

const GradientContainer = ({ children }: any) => <GC>{children}</GC>;

export default GradientContainer;

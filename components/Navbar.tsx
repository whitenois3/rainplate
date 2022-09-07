import { Box, Flex, Heading } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return (
        <Flex flexDir="row" justifyContent="space-between" gap={2} alignItems='center' style={{ paddingTop: '2em' }}>
            <Heading
                paddingY={2}
                textDecoration="none"
                as="h1"
                textColor="white.500"
                fontWeight="bold"
            >
                Rainplate
            </Heading>
            <Box>
                <ConnectButton />
            </Box>
        </Flex>
    )
}

export default Navbar;

import { email, socialMedia } from '@/config';
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { Icon } from '@/components/icons';

const Email = () => (
  <Box
    position={'fixed'}
    bottom={0}
    right={12}
    display={{ base: 'none', lg: 'flex' }}
    zIndex={9999}>
    <Flex
      direction='column'
      align='center'
      justify='center'
      position='relative'
      _after={{
        content: `''`,
        display: 'block',
        width: '1px',
        height: '90px',
        margin: '0 auto',
        backgroundColor: useColorModeValue('gray.600', 'white'),
      }}>
      <Link
        href={`mailto:${email}`}
        my='20px'
        p='10px'
        fontFamily='mono'
        fontSize='md'
        letterSpacing='0.2em'
        sx={{ writingMode: 'vertical-rl' }}
        _hover={{ color: '#48BB78' }}>
        {email}
      </Link>
    </Flex>
  </Box>
);

const SocialLinks = () => (
  <Box
    position={'fixed'}
    bottom={0}
    left={12}
    display={{ base: 'none', lg: 'flex' }}
    zIndex={9999}>
    <Flex
      direction='column'
      align='center'
      justify='center'
      position='relative'
      _after={{
        content: `''`,
        display: 'block',
        width: '1px',
        height: '90px',
        margin: '0 auto',
        backgroundColor: useColorModeValue('gray.600', 'white'),
      }}>
      <Flex
        mb='20px'
        px='10px'
        direction='column'
        align='center'
        justify='center'>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <Box h={5} w={5} my={5} key={i}>
              <Link
                href={url}
                h={'100%'}
                w={'100%'}
                aria-label={name}
                target='_blank'
                rel='noopener noreferrer'
                _hover={{ color: '#48BB78' }}
                _focus={{
                  outline: 'none',
                }}>
                <Icon name={name} />
              </Link>
            </Box>
          ))}
      </Flex>
    </Flex>
  </Box>
);

const Social = () => (
  <>
    <SocialLinks />
    <Email />
  </>
);

export default Social;

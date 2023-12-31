'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import {
  FaEnvelope,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhoneAlt,
} from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('pelletierdorian@gmail.com')

  function handleSubmit() {
    alert('En cours développement  !')
  }

  return (
    <Flex align="center" justify="center">
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 10 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip
                  label={hasCopied ? 'Email copié !' : "Copier l'email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    shadow="md"
                    icon={hasCopied ? <FaEnvelopeOpenText /> : <FaEnvelope />}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    _hover={{
                      bg: useColorModeValue('pink.500', 'pink.200'),
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Box as="a" href="https://github.com/dorian-pltr" target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    shadow="md"
                    icon={<FaGithub />}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    _hover={{
                      bg: useColorModeValue('pink.500', 'pink.200'),
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Box>

                <Box as="a" href="https://www.linkedin.com/in/dorian-pltr/" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    shadow="md"
                    icon={<FaLinkedinIn />}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    _hover={{
                      bg: useColorModeValue('pink.500', 'pink.200'),
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Box>
              </Stack>

              <Box
                background={useColorModeValue('gray.50', 'gray.900')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <FaPerson />
                      </InputLeftElement>
                      <Input isDisabled type="text" name="name" placeholder="Votre nom" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <FaEnvelope />
                      </InputLeftElement>
                      <Input isDisabled type="email" name="email" placeholder="Votre email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Téléphone</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <FaPhoneAlt />
                      </InputLeftElement>
                      <Input isDisabled type="tel" name="tel" placeholder="Votre téléphone" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      isDisabled
                      name="message"
                      placeholder="Votre message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="pink"
                    leftIcon={<FaPaperPlane />}
                    width="full"
                    shadow="md"
                    isDisabled
                    onClick={() => handleSubmit()}
                  >
                    Envoyer
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}

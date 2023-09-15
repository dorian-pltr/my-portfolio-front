'use client'

import { Box, Button, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaEnvelope } from 'react-icons/fa'
import TechnoBadge from '@/components/skillBadge'

import { groupSkillsByType } from '@/utils/skillUtils'

const differenceDates = (stringStartDate: string, stringEndDate?: string | undefined) => {
  const startDate = new Date(stringStartDate)
  const endDate = stringEndDate ? new Date(stringEndDate) : new Date()
  let yearDiff = endDate.getFullYear() - startDate.getFullYear()
  let monthDiff = endDate.getMonth() - startDate.getMonth()
  if (monthDiff < 0) {
    yearDiff--
    monthDiff += 12
  }
  return { yearDiff, monthDiff }
}

const totalExperience = differenceDates('2020-01-01')
export default function Skills() {
  const groupedSkills = groupSkillsByType()
  return (
    <Box
      shadow="base"
      p={{ base: '1', lg: '6' }}
      rounded="xl"
      paddingX={10}
      background={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container textAlign="center" maxWidth="100%" padding={0}>
        {' '}
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }} marginY={{ base: '5', lg: '10' }}>
          Bénéficiez de mes {totalExperience.yearDiff} ans et {totalExperience.monthDiff} mois
          d&apos;expérience en développement Full Stack
        </Heading>
      </Container>

      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex
          flex={0.5}
          gap={10}
          flexDirection="column"
          pr={{ base: '0', lg: '10' }}
          pb={5}
          pt={5}
          wrap="wrap"
          borderRight={{ base: 'none', lg: '1px' }}
          borderColor={{ base: 'none', lg: 'gray.500' }}
          justifyContent="space-evenly"
        >
          <Text fontSize="xl">
            Je suis un <b>développeur Fullstack</b> basé à Montpellier, spécialisé dans la création
            d&aposapplications modernes et performantes.
            <br />
            <br />
            Mon expertise en <b>JavaScript</b>, notamment avec <b>React, Node.js et Next.js</b>, me
            permet de concevoir des solutions web de qualité.
            <br />
            <br />
            Je suis ouvert aux opportunités en <b>CDI et en freelance</b>, prêt à collaborer avec
            des startups et des entreprises en croissance pour les aider à atteindre leurs objectifs
            technologiques.
            <br />
            <br />
            <b>Contactez-moi</b> pour discuter de la manière dont je peux contribuer à la réussite
            de votre projet ou de votre entreprise.
          </Text>
          <Button
            as={NextLink}
            rounded="xl"
            colorScheme="pink"
            href="/contact"
            width="100%"
            leftIcon={<FaEnvelope />}
          >
            Me contacter
          </Button>
        </Flex>
        <Flex
          flex={0.5}
          pl={{ base: '0', lg: '10' }}
          marginBottom={7}
          wrap="wrap"
          gap={2}
          flexDirection="column"
          width="100%"
        >
          {Object.entries(groupedSkills).map(([type, skills]) => (
            <Box key={type}>
              <Heading fontSize="xl" mt={5} mb={3}>
                {type}
              </Heading>
              <Flex wrap="wrap" alignContent="flex-start" justifyContent="flex-start">
                {skills.map(skill => (
                  <TechnoBadge colorScheme={skill.color} name={skill.name} key={skill.id} />
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

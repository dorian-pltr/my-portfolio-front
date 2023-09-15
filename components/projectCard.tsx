'use client'

import { Box, Center, Heading, Stack, Text, Image, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import Skill from '@/types/skill'
import SkillBadge from '@/components/skillBadge'

export default function ProjectCard({
  image,
  skills,
  title,
  description,
  url,
}: {
  image: string
  skills: Array<Skill> | undefined
  title: string
  description: string
  url?: string | undefined
}) {
  return (
    <Center
      py={6}
      as={NextLink}
      href={url}
      flexBasis={{ base: 'calc(50% - 10px)', lg: 'calc(100% - 10px)', sm: 'calc(25% - 10px)' }}
    >
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="base"
        rounded="xl"
        p={6}
        overflow="hidden"
      >
        <Image src={image} mb={10} alt="Example" />
        <Stack>
          <Text
            color="green.500"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {skills?.map(skill => (
              <SkillBadge colorScheme={skill.color} name={skill.name} key={skill.id} />
            ))}
          </Text>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize="2xl" fontFamily="body">
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
      </Box>
    </Center>
  )
}

import ProjectCard from '@/components/projectCard'
import { Flex } from '@chakra-ui/react'
import { getSkillsByNames } from '@/utils/skillUtils'

export default function LastProjects() {
  return (
    <Flex direction="row" flexWrap="wrap" justify="space-between">
      <ProjectCard
        description="Lorem Ipsum"
        title="Lorem Ipsum"
        url="https://www.google.fr"
        image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        skills={getSkillsByNames([
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
          'Express',
          'GraphQL',
          'PostgreSQL',
          'Vercel',
          'GIT',
        ])}
      />
      <ProjectCard
        description="Lorem Ipsum"
        title="Lorem Ipsum"
        url="www.google.fr"
        image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        skills={getSkillsByNames([
          'React',
          'Next.js',
          'Redux',
          'Routing',
          'TypeScript',
          'HTML',
          'CSS',
        ])}
      />
      <ProjectCard
        description="Lorem Ipsum"
        title="Lorem Ipsum"
        url="www.google.fr"
        image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        skills={getSkillsByNames([
          'React',
          'Next.js',
          'Redux',
          'Routing',
          'TypeScript',
          'HTML',
          'CSS',
        ])}
      />
    </Flex>
  )
}

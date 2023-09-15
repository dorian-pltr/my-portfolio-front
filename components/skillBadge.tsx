import { Badge } from '@chakra-ui/react'

export default function SkillBadge({
  colorScheme,
  name,
  key,
}: {
  colorScheme: string
  name: string
  key: number
}) {
  return (
    <Badge
      colorScheme={colorScheme}
      key={key}
      rounded="3xl"
      size="sm"
      p={2}
      variant="outline"
      mr={2}
      mb={2}
    >
      {name}
    </Badge>
  )
}

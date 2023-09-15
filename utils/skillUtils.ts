import skillsData from '../public/data/skills.json'
import Skill from '@/types/skill'

interface GroupedSkills {
  [type: string]: Skill[]
}

const Skills = skillsData.skills as Skill[]

export function groupSkillsByType(): GroupedSkills {
  const groupedSkills: GroupedSkills = {}
  Skills.forEach(skill => {
    if (!groupedSkills[skill.type]) {
      groupedSkills[skill.type] = []
    }
    groupedSkills[skill.type].push(skill)
  })
  return groupedSkills
}

export function getSkillByName(skillName: string): Skill | undefined {
  return Skills.find(skill => skill.name === skillName)
}

export function getSkillsByNames(skillNames: string[]): Skill[] | undefined {
  return Skills.filter(skill => skillNames.includes(skill.name))
}

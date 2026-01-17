type SkillConfig = {
  id: string
  icon: React.ReactNode
  label?: string
  onClick?: () => void
}

export type SkillCategory = {
    title: string
    logos: SkillConfig[]
}
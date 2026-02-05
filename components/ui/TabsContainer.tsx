'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

interface TabItem {
  value: string
  label: string
  content: React.ReactNode
}

interface TabsContainerProps {
  items: TabItem[]
  defaultValue?: string
  className?: string
}

export function TabsContainer({ items, defaultValue, className }: TabsContainerProps) {
  return (
    <Tabs defaultValue={defaultValue || items[0]?.value} className={className}>
      <TabsList className="inline-flex h-12 items-center justify-center rounded-xl bg-medical-100 p-1 text-warm-800">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-6 py-2 text-sm font-medium",
              "transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-400",
              "disabled:pointer-events-none disabled:opacity-50",
              "data-[state=active]:bg-white data-[state=active]:text-medical-900 data-[state=active]:shadow-sm"
            )}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent 
          key={item.value} 
          value={item.value}
          className="mt-6"
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

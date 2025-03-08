import { Hero } from '@/components/blocks/hero'
import { Icons } from '@/components/ui/icons'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Hero
        pill={{
          text: 'New! FaizUi Components',
          href: '/docs',
          icon: <Icons.logo className="h-4 w-4" />,
          variant: 'default',
          size: 'md'
        }}
        content={{
          title: 'Build freehand style apps',
          titleHighlight: '',
          description:
            'A freehand style component library with beautiful defaults and endless customization options. Start building your next project faster.',
          primaryAction: {
            href: '/docs/getting-started',
            text: 'Get Started',
            icon: <Icons.logo className="h-4 w-4" />
          },
          secondaryAction: {
            href: '/components',
            text: 'Browse Components',
            icon: <Icons.component className="h-4 w-4" />
          }
        }}
      />
    </main>
  )
}

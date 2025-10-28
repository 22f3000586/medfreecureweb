import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id?: string
  title?: string
  className?: string
}>

export default function Section({ id, title, children, className }: SectionProps){
  return (
    <section id={id} className={`section ${className ?? ''}`}>
      <div className="container-slim">
        <div className="card p-6 md:p-8">
          {title ? <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2> : null}
          {children}
        </div>
      </div>
    </section>
  )
}

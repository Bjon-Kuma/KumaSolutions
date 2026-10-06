export default function ReposteriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* This layout removes the main site header/footer for demo pages */}
      {children}
    </>
  )
}

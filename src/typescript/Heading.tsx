
type HeadingProps = {
    children: string
    name?: string
}
export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>
}


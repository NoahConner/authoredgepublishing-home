import { matchRoute } from './routes'

type Props = { path: string }

export default function App({ path }: Props) {
  const { Page } = matchRoute(path)
  return <Page />
}

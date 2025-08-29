import type { Metadata } from "next"
import AprosexClientPage from "./AprosexClientPage"

export const metadata: Metadata = {
  title: "Aprosex",
  description: "Aprosex is a decentralized platform for sexual health education.",
}

export default function AprosexPage() {
  return <AprosexClientPage />
}

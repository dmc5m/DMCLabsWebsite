import matter from 'gray-matter'

const LEGAL_BASE_URL =
  'https://raw.githubusercontent.com/DMC-Labs-LLC/legal/main'

interface LegalDocument {
  title: string
  lastUpdated: string
  version: string
  content: string
}

export async function fetchLegalDocument(
  filename: string
): Promise<LegalDocument> {
  const res = await fetch(`${LEGAL_BASE_URL}/${filename}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch ${filename}: ${res.status}`)
  }
  const raw = await res.text()
  const { data, content } = matter(raw)

  // Strip the h1 title and "Last updated" line — we render those separately
  const body = content
    .replace(/^#\s+.+\n+/, '')
    .replace(/^Last updated:.+\n+/, '')
    .trim()

  return {
    title: data.title,
    lastUpdated: data.last_updated,
    version: data.version,
    content: body,
  }
}

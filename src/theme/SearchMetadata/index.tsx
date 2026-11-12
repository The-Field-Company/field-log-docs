import type { ReactNode } from 'react';

/**
 * Vendor search metadata is not needed without a search plugin and leaks
 * Docusaurus brand names into every page head.
 */
export default function SearchMetadata(): ReactNode {
  return null;
}

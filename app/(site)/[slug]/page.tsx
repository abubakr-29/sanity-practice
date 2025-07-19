import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
// It's good practice to import 'Metadata' type from 'next' if you plan to use generateMetadata,
// as it can sometimes help Next.js with type inference for PageProps.
// import type { Metadata } from 'next';

// Define the component's props using a 'type' alias.
// This approach can sometimes resolve subtle type inference issues compared to 'interface'
// in specific Next.js build environments.
type PageProps = {
  params: {
    slug: string;
  };
  // 'searchParams' is also a standard prop for page components in the App Router.
  // Including it explicitly can help satisfy Next.js's internal type checks.
  searchParams?: { [key: string]: string | string[] | undefined };
};

// If you have a 'generateMetadata' function in this file or a linked file,
// ensure its 'params' and 'searchParams' types are consistent with PageProps.
// Example:
// export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
//   const page = await getPage(params.slug);
//   return {
//     title: page.title,
//     // Add other metadata fields as needed
//   };
// }

export default async function Page({ params }: PageProps) {
  // Fetch the page data using the slug from params
  const page = await getPage(params.slug);

  return (
    <div>
      {/* Page title with gradient styling */}
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow-2xl">
        {page.title}
      </h1>

      {/* Render the portable text content */}
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

// Define an interface for the component's props
interface PageProps {
  params: {
    slug: string;
  };
  // If you also use search parameters, you would add them here:
  // searchParams?: { [key: string]: string | string[] | undefined };
}

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

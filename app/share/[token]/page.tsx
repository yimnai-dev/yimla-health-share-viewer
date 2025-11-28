import { ShareError } from "@/components/share/share-error";
import { ShareView } from "@/components/share/share-view";
import { fetchShareData } from "@/lib/share-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface SharePageProps {
    params: Promise<{
      token: string;
    }>;
}

export default async function SharePage({ params }: SharePageProps) {
  const { token } = await params;
  const result = await fetchShareData(token);

  if (!result.ok) {
    return <ShareError message={result.error} />;
  }

  if (!result.data.valid) {
    return (
      <ShareError
        message={
          result.data.error || "This share link is no longer active or expired."
        }
      />
    );
  }

  return <ShareView data={result.data} />;
}

export async function generateStaticParams() {
  return []
}


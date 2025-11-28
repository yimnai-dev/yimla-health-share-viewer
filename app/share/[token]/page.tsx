import { ShareError } from "@/components/share/share-error";
import { ShareView } from "@/components/share/share-view";
import { fetchShareData } from "@/lib/share-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface SharePageProps {
  params: {
    token: string;
  };
}

export default async function SharePage({ params }: SharePageProps) {
  const result = await fetchShareData(params.token);

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


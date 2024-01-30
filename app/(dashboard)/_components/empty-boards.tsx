import Image from "next/image";
import { useMutation } from "convex/react";
import { useOrganization } from '@clerk/nextjs';
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api"

import { Button } from "@/components/ui/button";

import { useApiMutation } from "@/hooks/use-api-mutation";

// Empty State for the boards view in the dashboard page


export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  // const { mutate, pending } = useApiMutation(api.board.create);
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled"
    })
      .then((id) => {
        toast.success("Board created");
        // router.push(`/board/${id}`);
      })
      .catch((error: Error) => {
        toast.error("Failed to create board")
      });

  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        height={140}
        width={140}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">
        No results found!
      </h2>
      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  );
};

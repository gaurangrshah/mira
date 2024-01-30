"use client";

import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { query } from '../../convex/_generated/server';

interface DashboardPageProps {
  searchParams: {
    search?: string; // search = query string from file:///./_components/search-input.tsx
    favorites?: string; // favorites = href from file:///./_components/org-sidebar.tsx
  };
};

const DashboardPage = ({
  searchParams,
}: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6"
      // navbar height is 80px file:///./_components/navbar.tsx
    >
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={searchParams}
        />
      )}
    </div>
   );
};

export default DashboardPage;

"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";


export default function List() {
  const {userMemberships} = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  });

  if(!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data.map((mem) => (
        <Item key={mem.organization.id} imageUrl={mem.organization.imageUrl} name={mem.organization.name} id={mem.organization.id}/>
      ))}
    </ul>
  )
}

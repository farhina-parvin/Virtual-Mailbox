import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MailTable from "@/components/tables/mails/MailTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Mails() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Mail List" />
      <div className="space-y-6">
        <ComponentCard title="Mail List">
          <MailTable />
        </ComponentCard>
      </div>
    </div>
  );
}

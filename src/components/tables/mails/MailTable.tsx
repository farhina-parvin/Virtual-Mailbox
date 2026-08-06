import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import Image from "next/image";
import { Eye, Download } from "lucide-react";

interface Mail {
  id: number;
  title: string;
  originalName: string;
  fileType: string;
  fileSize: string;
  fileUrl: string;
  createdAt: string;
}

// Define the table data using the interface
const tableData: Mail[] = [
  {
    id: 1,
    title: "Passport Copy",
    originalName: "passport.pdf",
    fileType: "PDF",
    fileSize: "2.30 MB",
    fileUrl: "/files/passport.pdf",
    createdAt: "01 Jul 2026",
  },
  {
    id: 2,
    title: "National ID",
    originalName: "nid.png",
    fileType: "PNG",
    fileSize: "1.15 MB",
    fileUrl: "/files/passport.pdf",
    createdAt: "30 Jun 2026",
  },
  {
    id: 3,
    title: "Employment Contract",
    originalName: "contract.docx",
    fileType: "DOCX",
    fileSize: "860 KB",
    fileUrl: "/files/passport.pdf",
    createdAt: "28 Jun 2026",
  },
  {
    id: 4,
    title: "Invoice",
    originalName: "invoice.xlsx",
    fileType: "XLSX",
    fileSize: "540 KB",
    fileUrl: "/files/passport.pdf",
    createdAt: "25 Jun 2026",
  },
];

export default function MailTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  #
                </TableCell>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  Title
                </TableCell>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  File Name
                </TableCell>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  File Type
                </TableCell>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  Size
                </TableCell>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  Date
                </TableCell>
                <TableCell
                  isHeader
                  className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="px-5 py-4">{row.id}</TableCell>
                  <TableCell className="px-5 py-4 font-medium">
                    {row.title}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    {row.originalName}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color="primary">
                      {row.fileType}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-4">{row.fileSize}</TableCell>
                  <TableCell className="px-5 py-4">{row.createdAt}</TableCell>
                  <TableCell className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={row.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                        title="View"
                      >
                        <Eye size={18} />
                      </a>

                      <a
                        href={row.fileUrl}
                        download
                        className="bg-brand-500 hover:bg-brand-600 inline-flex items-center justify-center rounded-lg p-2 text-white transition"
                        title="Download"
                      >
                        <Download size={18} />
                      </a>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

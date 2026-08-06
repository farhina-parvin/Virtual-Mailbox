import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { Eye, Download } from "lucide-react";

interface Mail {
  id: number;
  title: string;
  originalName: string;
  fileType: string;
  fileSize: string;
  createdAt: string;
  fileUrl: string;
}
const tableData: Mail[] = [
  {
    id: 1,
    title: "Passport Copy",
    originalName: "passport.pdf",
    fileType: "PDF",
    fileSize: "2.30 MB",
    createdAt: "01 Jul 2026",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "National ID",
    originalName: "nid.png",
    fileType: "PNG",
    fileSize: "1.15 MB",
    createdAt: "30 Jun 2026",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "Employment Contract",
    originalName: "contract.docx",
    fileType: "DOCX",
    fileSize: "860 KB",
    createdAt: "28 Jun 2026",
    fileUrl: "#",
  },
];

export default function RecentMails() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Mails
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                #
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Title
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                File Name
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                File Type
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Size
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">

            {tableData.map((row)=>(
              <TableRow key={row.id}>
                <TableCell className="px-5 py-4">
                  {row.id}
                </TableCell>
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
                <TableCell className="px-5 py-4">
                  {row.fileSize}
                </TableCell>
                <TableCell className="px-5 py-4">
                  {row.createdAt}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <a
                      href={row.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                      title="View"
                    >
                      <Eye size={18}/>
                    </a>
                    <a
                      href={row.fileUrl}
                      download
                      className="bg-brand-500 hover:bg-brand-600 inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition"
                      title="Download"
                    >
                      <Download size={18}/>
                    </a>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
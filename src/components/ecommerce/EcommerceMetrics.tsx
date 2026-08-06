"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          <GroupIcon className="size-6 text-gray-800 dark:text-white/90" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Mailbox ID
            </span>
            <h4 className="text-title-sm mt-2 font-bold text-gray-800 dark:text-white/90">
              20261
            </h4>
          </div>
          {/*<Badge color="success">*/}
          {/*  <ArrowUpIcon />*/}
          {/*  11.01%*/}
          {/*</Badge>*/}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Mail
            </span>
            <h4 className="text-title-sm mt-2 font-bold text-gray-800 dark:text-white/90">
              45
            </h4>
          </div>

          {/*<Badge color="error">*/}
          {/*  <ArrowDownIcon className="text-error-500" />*/}
          {/*  9.05%*/}
          {/*</Badge>*/}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              My Plan
            </span>
            <h4 className="text-title-sm mt-2 font-bold text-gray-800 dark:text-white/90">
              Premium
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Expired: 01-July-2027
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};

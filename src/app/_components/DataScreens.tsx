"use client";

import { DcaReturnsQueryOutput } from "@/types/financialQueries";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DataCardProps = {
  data: DcaReturnsQueryOutput;
  className?: string;
};

export function DataCard({ data, className }: DataCardProps) {
  const avgSharePrice = () =>
    (
      data.reduce(
        (accumulator, currentRow) =>
          accumulator +
          (currentRow.stock_price === null ? 0 : currentRow.stock_price),
        0
      ) / data.length
    ).toFixed(2);

  return (
    <Card className={className}>
      <CardHeader></CardHeader>
      <CardContent className="grid grid-cols-1 divide-y">
        <div className="flex flex-row justify-between py-4">
          <div>Total Value</div>
          <div>{data.at(-1)?.total_val}</div>
        </div>
        <div className="flex flex-row justify-between py-4">
          <div>Contribution</div>
          <div>{data.at(-1)?.contribution}</div>
        </div>
        <div className="flex flex-row justify-between py-4">
          <div>Total Shares</div>
          <div>{data.at(-1)?.shares_owned}</div>
        </div>
        <div className="flex flex-row justify-between py-4">
          <div>Avg Share Price</div>
          <div>{data.length ? avgSharePrice() : ""}</div>
        </div>
      </CardContent>
      {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
    </Card>
  );
}

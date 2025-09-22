import { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { saveAs } from 'file-saver';
import type { RoleRate } from "@shared/schema";

interface SalaryTableProps {
  data: RoleRate[];
  title?: string;
}

export default function SalaryTable({ data, title = "Salary Rates by Role" }: SalaryTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [geographyFilter, setGeographyFilter] = useState<string>('all');

  const filteredData = useMemo(() => {
    let filtered = data;
    if (geographyFilter !== 'all') {
      filtered = filtered.filter(row => row.geography === geographyFilter);
    }
    return filtered;
  }, [data, geographyFilter]);

  const columns: ColumnDef<RoleRate>[] = [
    {
      accessorKey: "role",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="h-auto p-0 font-semibold"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            data-testid="sort-role"
          >
            Role
            {column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
              <ArrowUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("role")}</div>
      ),
    },
    {
      accessorKey: "geography",
      header: "Geography",
      cell: ({ row }) => {
        const geography = row.getValue("geography") as string;
        return (
          <Badge variant="secondary" className="text-xs">
            {geography}
          </Badge>
        );
      },
    },
    {
      accessorKey: "sample_size",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="h-auto p-0 font-semibold"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Sample
            {column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
              <ArrowUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        )
      },
      cell: ({ row }) => {
        const sample = row.getValue("sample_size") as number;
        return sample ? <span className="text-muted-foreground">{sample}</span> : <span className="text-muted-foreground">–</span>;
      },
    },
    {
      accessorKey: "LQ",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="h-auto p-0 font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          data-testid="sort-lq"
        >
          LQ
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      ),
      cell: ({ row }) => {
        const lq = row.getValue("LQ") as number;
        return lq ? <span className="font-mono">£{lq.toLocaleString()}</span> : <span className="text-muted-foreground">–</span>;
      },
    },
    {
      accessorKey: "Median",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="h-auto p-0 font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          data-testid="sort-median"
        >
          Median
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      ),
      cell: ({ row }) => {
        const median = row.getValue("Median") as number;
        return median ? (
          <span className="font-mono font-semibold text-sidebar-primary">
            £{median.toLocaleString()}
          </span>
        ) : (
          <span className="text-muted-foreground">–</span>
        );
      },
    },
    {
      accessorKey: "UQ",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="h-auto p-0 font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          UQ
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      ),
      cell: ({ row }) => {
        const uq = row.getValue("UQ") as number;
        return uq ? <span className="font-mono">£{uq.toLocaleString()}</span> : <span className="text-muted-foreground">–</span>;
      },
    },
    {
      accessorKey: "Average",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="h-auto p-0 font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Average
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      ),
      cell: ({ row }) => {
        const average = row.getValue("Average") as number;
        return average ? (
          <span className="font-mono text-muted-foreground">
            £{average.toLocaleString()}
          </span>
        ) : (
          <span className="text-muted-foreground">–</span>
        );
      },
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  const exportToCsv = () => {
    const headers = ['Role', 'Geography', 'Sample Size', 'LQ', 'Median', 'UQ', 'Average'];
    const csvData = [
      headers,
      ...table.getFilteredRowModel().rows.map(row => [
        row.original.role,
        row.original.geography,
        row.original.sample_size?.toString() || '',
        row.original.LQ?.toString() || '',
        row.original.Median?.toString() || '',
        row.original.UQ?.toString() || '',
        row.original.Average?.toString() || ''
      ])
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `salary-rates-${new Date().toISOString().split('T')[0]}.csv`);
  };

  const uniqueGeographies = Array.from(new Set(data.map(item => item.geography)));

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search roles..."
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(String(e.target.value))}
                className="pl-10 w-full sm:w-64"
                data-testid="input-search-roles"
              />
            </div>
            <Select value={geographyFilter} onValueChange={setGeographyFilter}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-geography">
                <SelectValue placeholder="Filter by geography" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Geographies</SelectItem>
                {uniqueGeographies.map(geo => (
                  <SelectItem key={geo} value={geo}>{geo}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={exportToCsv} variant="outline" size="default" data-testid="button-export-csv">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-muted/50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b transition-colors hover:bg-muted/50"
                      data-testid={`row-${row.original.role.toLowerCase().replace(/\s+/g, '-')}-${row.original.geography.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="p-4 align-middle">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="h-24 text-center">
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 py-4">
          <div className="text-sm text-muted-foreground">
            Showing {table.getFilteredRowModel().rows.length} of{" "}
            {data.length} entries
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
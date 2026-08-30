import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export function ProductTable({ product }) {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <TableHead>
          <TableHeadCell>Product Name</TableHeadCell>
          <TableHeadCell>Product Code</TableHeadCell>
          <TableHeadCell>Pack Size</TableHeadCell>
          <TableHeadCell>Case Quantity</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {product.map((p) => (
            <TableRow
              key={p.product_code}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {p.description}
              </TableCell>
              <TableCell>{p.product_code}</TableCell>
              <TableCell>{p.pack_size}</TableCell>
              <TableCell>
                {p.case_quantity} {p.uofm}
              </TableCell>
              <TableCell>
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Edit
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

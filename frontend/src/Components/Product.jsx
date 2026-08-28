function Product({ product }) {
  const active = product.qty > 0;
  return (
    <div>
      <div
        className={`flex items-center justify-between gap-3 p-3 rounded-lg border ${
          active ? "bg-chill-tint border-chill-600" : "bg-white border-line"
        }`}
      >
        <div className="min-w-0 flex-1">
          <div className="font-body font-medium text-sm text-ink-900 truncate">
            {product.description}
          </div>
          <div className="flex items-center gap-2 mt-1 font-mono text-xs text-ink-500">
            <span>{String(product.product_code).replace(/^#/, "")}</span>
            <span>·</span>
            <span>{product.pack_size}</span>
            <span>·</span>
            <span>${product.regular_price}</span>
          </div>
        </div>

        {/* placeholder — the real +/- control comes in Step 4 */}
        <div className="font-mono text-sm text-ink-900 w-10 text-center">
          {product.qty}
        </div>
      </div>
    </div>
  );
}
export default Product;

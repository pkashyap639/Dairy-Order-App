import { Plus, Minus } from "lucide-react";

export default function TallyStepper({ value, onChange }) {
  const active = value > 0;
  return (
    <div
      className={`flex items-stretch h-11 rounded-lg overflow-hidden border ${
        active ? "border-chill-600" : "border-line"
      }`}
    >
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        aria-label="Decrease quantity"
        className={`w-10 flex items-center justify-center ${
          active ? "bg-chill-600 text-white" : "bg-chill-tint text-chill-700"
        }`}
      >
        <Minus size={16} strokeWidth={2.75} />
      </button>

      <div className="w-12 flex items-center justify-center bg-white font-mono font-semibold text-base text-ink-900">
        {String(value).padStart(2, "0")}
      </div>

      <button
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
        className="w-10 flex items-center justify-center bg-chill-600 text-white"
      >
        <Plus size={16} strokeWidth={2.75} />
      </button>
    </div>
  );
}

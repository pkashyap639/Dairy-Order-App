const mongoose = require("mongoose");

const dairyProductSchema = new mongoose.Schema(
  {
    legacyId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    productCode: {
      type: String,
      required: [true, "Product code is required"],
      trim: true,
      index: true,
    },
    upc: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{8,14}$/, "UPC must be 8-14 digits"],
    },
    coNum: {
      type: String,
      trim: true,
    },

    // Descriptive fields
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 200,
    },
    extDescription: {
      type: String,
      trim: true,
      default: "",
    },
    catId: {
      type: String,
      required: true,
      trim: true,
    },
    majorCatName: {
      type: String,
      required: true,
      trim: true,
    },

    // Packaging / unit info
    caseQuantity: {
      type: Number,
      required: true,
      min: [0, "Case quantity cannot be negative"],
      validate: {
        validator: Number.isInteger,
        message: "Case quantity must be a whole number",
      },
    },
    packSize: {
      type: String,
      trim: true, // e.g. "1/1L" - kept as string since it's a mixed format, not a pure number
    },
    uofm: {
      type: String,
      trim: true,
      uppercase: true,
      enum: {
        values: ["EA", "CS", "LB", "KG", "PK"],
        message: "{VALUE} is not a recognized unit of measure",
      },
    },
    unitPick: {
      type: String,
      trim: true,
      default: "",
    },

    // Pricing
    tax: {
      type: Number,
      default: 0,
      min: 0,
    },
    regularPrice: {
      type: Number,
      required: true,
      min: [0, "Regular price cannot be negative"],
    },
    specialPrice: {
      type: Number,
      default: 0,
      min: 0,
    },
    rabbaSpecialPrice: {
      type: Number,
      default: 0,
      min: 0,
    },
    unitCost: {
      type: Number,
      required: true,
      min: [0, "Unit cost cannot be negative"],
    },
    spcUnitCost: {
      type: Number,
      default: 0,
      min: 0,
    },
    suggestRetail: {
      type: Number,
      min: 0,
    },
    marginPercent: {
      type: Number,
      min: -100,
      max: 100,
    },

    // Inventory
    stockOnHand: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Stock on hand cannot be negative"],
    },
    nextPoDate: {
      type: Date,
      set: (value) => {
        // handles "8/22/2026" style strings from the legacy OMS
        if (!value || value === "") return null;
        if (value instanceof Date) return value;
        const [month, day, year] = value.split("/");
        return new Date(
          `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
        );
      },
    },
    noOrderDays: {
      type: String,
      trim: true,
      default: "",
    },

    // Misc / operational
    flag: {
      type: String,
      trim: true,
      default: "",
    },
    specialNotes: {
      type: String,
      trim: true,
      default: "",
    },
    buyer: {
      type: String,
      trim: true,
      uppercase: true,
    },
    imageUrl: {
      type: String,
      trim: true,
      default: "",
      validate: {
        validator: (v) => v === "" || /^https?:\/\/.+/.test(v),
        message: "Image URL must be a valid URL or empty",
      },
    },
    sortOrder: {
      type: Number,
      default: 99999,
    },
  },
  {
    timestamps: true, // createdAt / updatedAt for tracking sync freshness
  },
);

module.exports = mongoose.model("DairyProduct", dairyProductSchema, "DairyProduct");

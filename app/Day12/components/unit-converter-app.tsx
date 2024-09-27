"use client";
import Link from "next/link";
import { useState } from "react";

// The main component for the Unit Converter app
export default function UnitConverter() {
  // State variables to hold the input value, selected units, and conversion result
  const [value, setValue] = useState(""); // Input value for conversion
  const [fromUnit, setFromUnit] = useState(""); // Unit to convert from
  const [toUnit, setToUnit] = useState(""); // Unit to convert to
  const [result, setResult] = useState(""); // Result of the conversion

  // Conversion factors for different units
  const conversion: any = {
    meters: {
      kilometers: (value: number) => value / 1000,
      centimeters: (value: number) => value * 100,
      millimeters: (value: number) => value * 1000,
      micrometers: (value: number) => value * 1_000_000,
      nanometers: (value: number) => value * 1_000_000_000,
      inches: (value: number) => value * 39.3701,
      feet: (value: number) => value * 3.28084,
      yards: (value: number) => value * 1.09361,
      miles: (value: number) => value * 0.000621371,
      nauticalMiles: (value: number) => value * 0.000539957,
      fathoms: (value: number) => value * 0.546806,
    },
    kilometers: {
      meters: (value: number) => value * 1000,
      centimeters: (value: number) => value * 100_000,
      millimeters: (value: number) => value * 1_000_000,
      micrometers: (value: number) => value * 1_000_000_000,
      nanometers: (value: number) => value * 1_000_000_000_000,
      inches: (value: number) => value * 39_370.1,
      feet: (value: number) => value * 3280.84,
      yards: (value: number) => value * 1093.61,
      miles: (value: number) => value * 0.621371,
      nauticalMiles: (value: number) => value * 0.539957,
      fathoms: (value: number) => value * 546.806,
    },
    centimeters: {
      meters: (value: number) => value / 100,
      kilometers: (value: number) => value / 100_000,
      millimeters: (value: number) => value * 10,
      micrometers: (value: number) => value * 10_000,
      nanometers: (value: number) => value * 10_000_000,
      inches: (value: number) => value * 0.393701,
      feet: (value: number) => value * 0.0328084,
      yards: (value: number) => value * 0.0109361,
      miles: (value: number) => value * 0.00000621371,
      nauticalMiles: (value: number) => value * 0.00000539957,
      fathoms: (value: number) => value * 0.0546806,
    },
    millimeters: {
      meters: (value: number) => value / 1000,
      kilometers: (value: number) => value / 1_000_000,
      centimeters: (value: number) => value / 10,
      micrometers: (value: number) => value * 1000,
      nanometers: (value: number) => value * 1_000_000,
      inches: (value: number) => value * 0.0393701,
      feet: (value: number) => value * 0.00328084,
      yards: (value: number) => value * 0.00109361,
      miles: (value: number) => value * 0.000000621371,
      nauticalMiles: (value: number) => value * 0.000000539957,
      fathoms: (value: number) => value * 0.000546806,
    },
    micrometers: {
      meters: (value: number) => value / 1_000_000,
      kilometers: (value: number) => value / 1_000_000_000,
      centimeters: (value: number) => value / 10_000,
      millimeters: (value: number) => value / 1000,
      nanometers: (value: number) => value * 1000,
      inches: (value: number) => value * 0.0000393701,
      feet: (value: number) => value * 0.00000328084,
      yards: (value: number) => value * 0.00000109361,
      miles: (value: number) => value * 0.000000000621371,
      nauticalMiles: (value: number) => value * 0.000000000539957,
      fathoms: (value: number) => value * 0.000000546806,
    },
    nanometers: {
      meters: (value: number) => value / 1_000_000_000,
      kilometers: (value: number) => value / 1_000_000_000_000,
      centimeters: (value: number) => value / 10_000_000,
      millimeters: (value: number) => value / 1_000_000,
      micrometers: (value: number) => value / 1000,
      inches: (value: number) => value * 0.0000000393701,
      feet: (value: number) => value * 0.00000000328084,
      yards: (value: number) => value * 0.00000000109361,
      miles: (value: number) => value * 0.000000000000621371,
      nauticalMiles: (value: number) => value * 0.000000000000539957,
      fathoms: (value: number) => value * 0.000000000546806,
    },
    inches: {
      meters: (value: number) => value / 39.3701,
      kilometers: (value: number) => value / 39_370.1,
      centimeters: (value: number) => value * 2.54,
      millimeters: (value: number) => value * 25.4,
      micrometers: (value: number) => value * 25_400,
      nanometers: (value: number) => value * 25_400_000,
      feet: (value: number) => value / 12,
      yards: (value: number) => value / 36,
      miles: (value: number) => value * 0.0000157828,
      nauticalMiles: (value: number) => value * 0.000013712,
      fathoms: (value: number) => value / 6,
    },
    feet: {
      meters: (value: number) => value / 3.28084,
      kilometers: (value: number) => value / 3280.84,
      centimeters: (value: number) => value * 30.48,
      millimeters: (value: number) => value * 304.8,
      micrometers: (value: number) => value * 304_800,
      nanometers: (value: number) => value * 304_800_000,
      inches: (value: number) => value * 12,
      yards: (value: number) => value / 3,
      miles: (value: number) => value * 0.000189394,
      nauticalMiles: (value: number) => value * 0.000164579,
      fathoms: (value: number) => value * 0.5,
    },
    yards: {
      meters: (value: number) => value / 1.09361,
      kilometers: (value: number) => value / 1093.61,
      centimeters: (value: number) => value * 91.44,
      millimeters: (value: number) => value * 914.4,
      micrometers: (value: number) => value * 914_400,
      nanometers: (value: number) => value * 914_400_000,
      inches: (value: number) => value * 36,
      feet: (value: number) => value * 3,
      miles: (value: number) => value * 0.000568182,
      nauticalMiles: (value: number) => value * 0.000493737,
      fathoms: (value: number) => value * 0.166667,
    },
    miles: {
      meters: (value: number) => value / 0.000621371,
      kilometers: (value: number) => value / 0.621371,
      centimeters: (value: number) => value * 160934,
      millimeters: (value: number) => value * 1_609_340,
      micrometers: (value: number) => value * 1_609_340_000,
      nanometers: (value: number) => value * 1_609_340_000_000,
      inches: (value: number) => value * 63_360,
      feet: (value: number) => value * 5280,
      yards: (value: number) => value * 1760,
      nauticalMiles: (value: number) => value * 0.868976,
      fathoms: (value: number) => value * 3_168,
    },
    nauticalMiles: {
      meters: (value: number) => value / 0.000539957,
      kilometers: (value: number) => value / 0.000539957,
      centimeters: (value: number) => value * 185_200,
      millimeters: (value: number) => value * 185_2000,
      micrometers: (value: number) => value * 185_200_000,
      nanometers: (value: number) => value * 185_200_000_000,
      inches: (value: number) => value * 72_000,
      feet: (value: number) => value * 6_076.1,
      yards: (value: number) => value * 2_025.37,
      miles: (value: number) => value * 1.15078,
      fathoms: (value: number) => value * 6_213,
    },
    fathoms: {
      meters: (value: number) => value / 0.546806,
      kilometers: (value: number) => value / 546.806,
      centimeters: (value: number) => value * 182.88,
      millimeters: (value: number) => value * 1828.8,
      micrometers: (value: number) => value * 1_828_800,
      nanometers: (value: number) => value * 1_828_800_000,
      inches: (value: number) => value * 72,
      feet: (value: number) => value * 6,
      yards: (value: number) => value * 2,
      miles: (value: number) => value * 0.000340528,
      nauticalMiles: (value: number) => value * 0.000323037,
    },
  };

  // Function to handle the conversion process
  const handleConvert = () => {
    // Check if all inputs are valid
    if (fromUnit === "" || toUnit === "" || isNaN(parseFloat(value))) {
      setResult("Please provide valid input values.");
      return;
    }

    // If the same unit is selected for both from and to, no conversion is needed
    if (fromUnit === toUnit) {
      setResult("Units are the same, no conversion needed.");
      return;
    }

    // Get the conversion function for the selected units
    const conversionFactor = conversion[fromUnit]?.[toUnit];

    // If a conversion function exists, calculate and display the result
    if (conversionFactor) {
      const convertedValue = conversionFactor(parseFloat(value));
      setResult(
        `${value} ${fromUnit} to ${toUnit} is equal to "${convertedValue}"`
      );
    } else {
      // If conversion is not available for the selected units, show an error message
      setResult("Conversion not available for selected units.");
    }
  };

  // Function to reset the input fields and result
  const resetHandler = () => {
    setValue("");
    setResult("");
    setFromUnit("");
    setToUnit("");
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Unit Converter</h1>
        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select unit</option>
              <option value="meters">Meter (m)</option>
              <option value="kilometers">Kilometer (km)</option>
              <option value="centimeters">Centimeter (cm)</option>
              <option value="millimeters">Millimeter (mm)</option>
              <option value="micrometers">Micrometer (µm)</option>
              <option value="nanometers">Nanometer (nm)</option>
              <option value="inches">Inch (in)</option>
              <option value="feet">Foot (ft)</option>
              <option value="yards">Yard (yd)</option>
              <option value="miles">Mile (mi)</option>
              <option value="nauticalMiles">Nautical Mile (nmi)</option>
              <option value="fathoms">Fathom (ftm)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium">To</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select unit</option>
              <option value="meters">Meter (m)</option>
              <option value="kilometers">Kilometer (km)</option>
              <option value="centimeters">Centimeter (cm)</option>
              <option value="millimeters">Millimeter (mm)</option>
              <option value="micrometers">Micrometer (µm)</option>
              <option value="nanometers">Nanometer (nm)</option>
              <option value="inches">Inch (in)</option>
              <option value="feet">Foot (ft)</option>
              <option value="yards">Yard (yd)</option>
              <option value="miles">Mile (mi)</option>
              <option value="nauticalMiles">Nautical Mile (nmi)</option>
              <option value="fathoms">Fathom (ftm)</option>
            </select>
          </div>
          <button
            onClick={handleConvert}
            className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Convert
          </button>
          <div className="mt-4 text-center text-xl">
            {result ? `${result}` : "Result will be shown here"}
          </div>
          <button
            onClick={resetHandler}
            className="mt-4 bg-gray-600 hover:bg-gray-500 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Reset
          </button>
        </div>
        {/* Back to Home Link */}
        <div className="mt-8 w-full text-center">
          <Link
            href="/"
            className="hover:underline text-lg sm:text-xl text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

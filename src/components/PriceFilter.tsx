
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

interface PriceFilterProps {
  min: number;
  max: number;
  onChange: (range: [number, number]) => void;
}

const PriceFilter = ({ min, max, onChange }: PriceFilterProps) => {
  const [range, setRange] = useState<[number, number]>([min, max]);
  
  // Update the slider when min/max props change
  useEffect(() => {
    setRange([min, max]);
  }, [min, max]);
  
  const handleChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    onChange(newRange);
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">السعر</h3>
      
      <Slider
        defaultValue={[min, max]}
        value={[range[0], range[1]]}
        max={max}
        min={min}
        step={50}
        onValueChange={handleChange}
        className="mb-6"
      />
      
      <div className="flex justify-between">
        <div className="text-sm">
          <span className="text-gray-500">من:</span>
          <span className="font-medium mr-1">{range[0]} ر.س</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">إلى:</span>
          <span className="font-medium mr-1">{range[1]} ر.س</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;

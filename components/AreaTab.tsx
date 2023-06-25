import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineColumnWidth } from 'react-icons/ai';

export const AreaTab = () => {
  return (
    <>
      <h3 className='flex items-center'>
        <AiOutlineColumnWidth />
        <div className='ml-2'>Length</div>
      </h3>
      <div className="mt-4"></div>
      <div>
        <Label>square meter, m<sup>2</sup></Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>square yard, yd<sup>2</sup></Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>square inch, in<sup>2</sup></Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>square foot, ft<sup>2</sup></Label>
        <Input type="number" placeholder="123.0" />
      </div>
    </>
  );
};

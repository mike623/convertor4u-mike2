import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineColumnWidth } from 'react-icons/ai';

export const LengthTab = () => {
  return (
    <>
      <h3 className='flex items-center'>
        <AiOutlineColumnWidth />
        <div className='ml-2'>Length</div>
      </h3>
      <div className="mt-4"></div>
      <div>
        <Label>meter, m</Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>yard, yd</Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>inch, in</Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>foot, ft,</Label>
        <Input type="number" placeholder="123.0" />
      </div>
    </>
  );
};

import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const BillingCheckBox  = ({text}:{text:string}) => <Checkbox onChange={onChange}>{text}</Checkbox>;

export default BillingCheckBox;
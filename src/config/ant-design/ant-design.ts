import {FormProps} from 'antd/lib/form';
import {AntSortType} from 'core/types';

export const formItemLayout: FormProps = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 24},
    md: {span: 12},
    lg: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 24},
    md: {span: 12},
    lg: {span: 16},
  },
};

export const antSortType: AntSortType = {
  ASC: 'ascend',
  DESC: 'descend',
};

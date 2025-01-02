import React from "react";
import "./apply.css"
import type { FormProps } from 'antd';
import { Button, Form, Input, Radio, Space,DatePicker,Cascader,Upload  } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
type FieldType = {
    username?: string;
    category?: string;
    phoneNumber?: string;
    email?: string;
    gender?: number;
    DatePicker?: string;
    place?: string;
    school?: string;
};
const options = [
    { label: '硕士研究生', value: 'master' },
    { label: '博士研究生', value: 'doctor' }
]
interface PlaceOption {
    value: string;
    label: string;
    children?: PlaceOption[];
  }
  const placeoptions: PlaceOption[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
const Genderoptions = [
    { label: '男', value: 0 },
    { label: '女', value: 1 }
]
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};
const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Apply: React.FC = () => {
    return (
        <div className="ApplyContainer">
            <div className="flex  flex-col items-start">
                <div className="text-xl text-yellow-600 font-serif">New</div>
                <div className="text-5xl text-dark-400 font-serif">Apply Lab 1210</div>
            </div>
            <div className="secondLayer flex flex-row">
                <div className="ApplyShowBox rounded-xl">
                    This is Box
                </div>
                <div className="formItem rounded-xl">
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 18 }}
                        initialValues={{ remember: true }}
                        style={{ width: '500px' }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="报考类别"
                            name="category"

                            rules={[{ required: true, message: '请选择您的报考类别' }]}
                        >
                            <Radio.Group
                                block
                                options={options}
                                defaultValue="master"
                                optionType="button"
                                buttonStyle="solid"

                            />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="姓名"
                            name="username"

                            rules={[{ required: true, message: '请输入您的姓名!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="手机号"
                            name="phoneNumber"

                            rules={[{ required: true, message: '请输入您的手机号!' }]}
                        >
                            <Space.Compact>
                                <Input style={{ width: '20%' }} defaultValue="+86" />
                                <Input style={{ width: '80%' }} defaultValue="" />
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="邮箱"
                            name="email"
                            rules={[{ required: true, message: '请输入您的邮箱!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="性别"
                            name="gender"

                            rules={[{ required: true, message: '请选择性别!' }]}
                        >
                            <Radio.Group block options={Genderoptions} />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="出生日期"
                            name="DatePicker"
                            rules={[{ required: true, message: 'Please input!' }]}
                            
                            
                        >
                            <DatePicker style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="生源地"
                            name="place"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Cascader options={placeoptions}  placeholder="Please select" />
                        </Form.Item>
                        {/* 本科院校 */}
                        <Form.Item<FieldType>
                            label="本科院校"
                            name="school"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Dragger">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    )
}
export default Apply;
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';``

const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
      &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
        border-width: 0;
  
        > span {
          position: relative;
        }
  
        &::before {
          content: '';
          background: linear-gradient(135deg, #6253e1, #04befe);
          position: absolute;
          inset: 0;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
        }
  
        &:hover::before {
          opacity: 0;
        }
      }
    `,
  }));
  interface GradientButtonProps {
    buttonName: string; // buttonName 是一个字符串
    onChange:()=>void;
  }

  const GradientButton: React.FC<GradientButtonProps> = ({ buttonName,onChange }) => {
    const { styles } = useStyle(); // 确保 useStyle 函数已正确导入和定义
  
    return (
      <ConfigProvider
        button={{
          className: styles.linearGradientButton, // 样式应正确绑定
        }}
      >
        <Space>
          <Button type="primary" size="large" icon={<AntDesignOutlined />} onClick={onChange}>
            <span>{buttonName}</span>
          </Button>
        </Space>
      </ConfigProvider>
    );
  };
export default GradientButton
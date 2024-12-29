import "./Home.css";
import { useState } from "react";
import { Card } from "antd";
import { Collapse ,theme} from 'antd';
import GradientButton from "../../component/gradientButton";
import type { CollapseProps } from 'antd';
const { Meta } = Card;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];
const Home: React.FC = () => {
  const { token } = theme.useToken();
  const [isActivate,setIsActivate]=useState(false)
  const onIsActivate=()=>{
    setIsActivate((prevState) => !prevState)
  }
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="mainContainer">
      <div className="postContainer">
        <div className="leftBox">
          <div className="imageBox">
            <Card
              hoverable
              bordered={false}
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="康雁" description="Prof.Kang" />
            </Card>

          </div>

        </div>
        <div className="rightBox ml-4">
          <div>
            {isActivate &&(
              <div className="content">
              <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} style={{background: '#F5F5F5'}}/>
              </div>
            )}
            {!isActivate ? <GradientButton buttonName="了解详情" onChange={onIsActivate}></GradientButton> : <GradientButton buttonName="收起" onChange={onIsActivate}></GradientButton> }
          
          </div>
          
        </div>
      </div>
      <div className="secPostContainer">this is second</div>
    </div>
  );
};

export default Home;

import './App.css';
import { Layout, Button,Divider, Input, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';


const { Sider, Content } = Layout;
const { textArea } = Input

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
};



const contentStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'black',
  height: 64,
  paddingInline: '5000',
  lineHeight: '64px',
  backgroundColor: 'white',
};

function apear(id) {
  document.getElementById(id).style.display = 'flex'
}


function getDateSource() {
  return [
    {
      image: 'https://img1.baidu.com/it/u=3593287349,2165796589&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=551',
      name: '百香果冷饮（一扎）',
      description: '院落创意菜',
      price: '￥19.9',
      rate: 1,
      comment: '鲜榨果汁很好喝',
    },
    {
      image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8a36a6cd-5270-41d0-8fff-dc2f28e84af4%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699370120&t=6955be82a3348eb3afebfdec65148585',
      name: '肥牛石锅拌饭',
      description: '正一味',
      price: '￥29.0',
    },
    {
      image: 'https://img0.baidu.com/it/u=1900211094,810197990&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
      name: '冻酸奶',
      description: 'salud冻酸奶',
      price: '￥20.0',
    },
    {
      image: 'https://img0.baidu.com/it/u=3498018652,254969095&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=668',
      name: '吉汁烧鱼',
      description: '吉野家',
      price: '￥20.0',
    }
  ];
}

function App() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const data = getDateSource();
    setDataSource(data);
  }, []);
  const showComment = (index) => {
    const data = dataSource[index];
    if (!data) {
      return;
    }
    data.show = !data.show;
    setDataSource(dataSource.map(data => ({ ...data })));
  }
  const onChangeRate = (index, rate) => {
    const data = dataSource.map(d => ({ ...d }));
    data[index].rate = rate;
    setDataSource(data);
  }

  console.log('>>>>>>: ', dataSource);

  return (
    <div className="App">
      <header className='webHeader'>我的订单</header>
      {
        dataSource.map((data, index) => {
          return (
            <div key={index}>
              <Layout>
                <Sider style={siderStyle} className="img"><img src={data.image}className="img"></img></Sider>
                <Layout>
                  <Content style={contentStyle}>
                    <b>{data.name}</b>
                  </Content>
                  <Content style={contentStyle}>
                    {data.description}
                  </Content>
                  <Content style={contentStyle}>
                    {data.price}
                    <Button id='bananaButton' style={{float:"right", margin:10}} onClick={() => showComment(index)}>
                      { data.rate ? '已评价' : '评价' }
                    </Button>
                  </Content>
                  {
                    data.show ? (
                      <div>
                        <TextArea autoSize="true" className='inputBoxBananaxxx' id='bananaInputxx' value={data.comment}></TextArea>
                        <Rate
                          className='rateBoxBananasss'
                          id = 'rateBanana' 
                          value={data.rate}
                          onChange={(val) => { onChangeRate(index, val) }}
                        />
                      </div>
                    ) : null
                  }
                </Layout>
              </Layout>
              { index !== data.length ?  <Divider /> : null }
            </div>
          );
        })
      }
    </div>
  );
}

export default App;

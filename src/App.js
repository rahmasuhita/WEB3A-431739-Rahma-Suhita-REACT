import React from 'react';
import { Card, Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Carousel } from 'antd';
import { Pagination } from 'antd';
import { Rate } from 'antd';

//import logo from './logo.svg';
import './App.css';

/*function Card(props){
  return (
  <div class="card">
      <p class="title">{props.name}</p>
      <p>{props.job}</p>
   </div>
  )
}

  const App = () => {
    return (
      <div>
        <Card name="Prawito Hudoro" job="FrondEnd Dev"/>
        <Card name="Rendra Wijaya" job="BackEnd Dev"/>
        <Card name="Dyah Prameswari" job="UI/UX"/>
      </div>
    )
  }*/

  function App(){
    const cardData = [
      {
        title : "Prawito Hudoro",
        job : "FrondEnd Dev",
      },
      {
        title : "Rendra Wijaya",
        job : "BackEnd Dev",
      },
      {
        title : "Dyah Prameswari",
        job : "UI/UX",
      },
    ]
    
    function onChange(a, b, c) {
      console.log(a, b, c);
    }

    const { Header, Content, Footer } = Layout;
    return(
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', textAlign:'center', fontSize:30 }}>
            <Menu.Item key="1">Karyawan</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Carousel afterChange={onChange}>
            <div>
              <h3>Selamat Datang</h3>
            </div>
            <div>
              <h3>Ini merupakan website identitas karyawan</h3>
            </div>
            <div>
              <h3>Selamat melihat-lihat</h3>
            </div>
          </Carousel>
          <div className="site-card-wrapper">
            <Row gutter={16}>
            {cardData.map(data=>
              <Col span={8}>
                <Card style={{ textAlign: 'center'}} title="Kartu Nama" bordered={false} >
                  <p>{data.title}</p>
                  <p>{data.job}</p>
                  <Rate allowHalf defaultValue={4.5} />
                </Card>
              </Col>
              )}
            </Row>
          </div>
          <Pagination defaultCurrent={1} total={50} style={{ textAlign: 'center' }}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }

export default App;

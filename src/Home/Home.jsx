import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';

const { Header, Content, Footer } = Layout;

class Home extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render(){
        return(
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/home">Home</Link>
                    </Menu.Item>
                </Menu>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
            
        );
    }
}
export default Home;
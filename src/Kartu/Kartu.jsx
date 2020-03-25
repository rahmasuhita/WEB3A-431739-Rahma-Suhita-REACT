import React, {Component} from 'react';
import './Kartu.css'
import { Card} from 'antd';

const { Meta } = Card;
    class Kartu extends Component{
        state = {
            like : 5
        }

        handleMinus = () => {
            if(this.state.like > 0){
                this.setState({
                    like: this.state.like - 1
                })
            } 
        }

        handlePlus = () =>{
            this.setState({
                like: this.state.like + 1
            })
        }

        render(){
            return( 
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" style={{width:180, height:240}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Diandra Almira" description="UX Designer" />
                <button className="minus" onClick={this.handleMinus}>-</button>
                <button className="plus" onClick={this.handlePlus}>+</button>
                <div className="count">{this.state.like}</div>
              </Card>
            );
        }  
    }
     export default Kartu;
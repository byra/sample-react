import React from 'react';
import axios from 'axios';

class Shwetha extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            foo: true,
            boo: "hello"
        }
        //this.mahesh = this.mahesh.bind(this)
    }

    mahesh(){
        this.setState({
            msg: "Shwetha is awesome"
        })
    }

    /**
     * This is where we call backend calls before the component mounts
     */
    async componentDidMount(){
        // axios.get('http://localhost:3001/shwetha').then(response => {
        //     this.setState({
        //         msg:response.data.msg
        //     })
        // }).catch(error => {
        //     this.setState({
        //         msg: "Msg not found"
        //     })
        // })

        // try {
        //     let res = await axios.get('http://localhost:3001/shwetha');
        //     this.setState({
        //         msg: res.data.msg
        //     })
        // } catch(e){
        //     this.setState({
        //         msg: "Msg not found"
        //     })
        // }

        axios.get('http://localhost:3001/shwetha', function(err, res){
            if(err){
                this.setState({
                    msg: "Msg not found"
                }) 
            } else {
                this.setState({
                    msg: res.data.msg
                })
            }
        });
    }

    render() {
        if(this.state.foo === true){
            return (
                <div>
                    <h1>Byra is awesome</h1>
                    <p>Msg is: {this.state.msg}</p>
                    <button onClick={() => this.mahesh()}>Click here to change msg</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Mahesh is awesome</h1>
                    <p>Msg is: {this.state.msg}</p>
                </div>
            )
        }
    }
}

export default Shwetha;
import React from 'react';
import { fetchBlog } from './action';
import { connect } from "react-redux";

function mapStateToProps(state) {
    console.log(state);
    return { blog: state.blog }
}
@connect((store) => {
    return {
        messages: store.messages.messages,
        users: store.users
    };
})
class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(fetchBlog())
    }
    render() {
        console.log(this.state);
        if (this.props.blog.fecting) {
            return (
                <div>
                    Loading data .......
                </div>
            )
        }
        else if (this.props.blog.fetched) {
            return (
                <div>
                    {this.props.blog.data.post}
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
        
    }
}
export default connect(mapStateToProps)(Blog);
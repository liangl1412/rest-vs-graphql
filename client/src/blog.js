import React from 'react';
import { fetchBlog } from './actions/blog';
import { connect } from "react-redux";

function mapStateToProps(state) {
    return { 
        blog: state
    }
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(fetchBlog())
    }
    render() {
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
                    <pre>
                        {JSON.stringify(this.props.blog.blog.data.post,null,2)}
                    </pre>
                    <button>Mark as Read</button>
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
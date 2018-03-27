import React from 'react';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";


const GET_BLOG = gql`
  {
    post(id:"5ab2b46d941953bf614e2617") {
        title
        body
        user {
            name
            email
        }
        comments {
            body
            user {
                name
                email
            }
        }
    }
  }
`;

const Blog = () => (
    <Query query={GET_BLOG}>
        {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error load data </p>;
            return (
                <pre>
                    test
                </pre>
            );
            }
        }
    </Query>
)
export default Blog;

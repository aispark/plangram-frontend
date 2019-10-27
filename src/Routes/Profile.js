import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import Loader from "../Components/Loader";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followersCount
      followingCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
      postsCount
    }
  }
`;

export default withRouter(({ match: { params: { username } } }) => {
  console.log("username", username);
  const { data, loading } = useQuery(GET_USER, { skip: true });
  if (loading) return <Loader></Loader>;
});

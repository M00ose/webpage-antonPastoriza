import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.GRAPHQL_API_KEY;
const graphcms = new GraphQLClient(graphqlAPI);

export const fetchArtwork = async (slug) => {
  const query = gql`
    query artworks(where: { slug: $slug }) {
        title
        slug
        description
        dimensions
        media
        price
        year
        image {
          url
          width
          height
        }
      }
    }
  `;

  return await graphcms.request(query, { slug });
};

export const fetchArtworks = async () => {
  const query = gql`
    {
      artworks {
        slug
        title
        description
        dimensions
        media
        year
        image {
          url
          width
          height
        }
      }
    }
  `;

  return await graphcms.request(query);
};

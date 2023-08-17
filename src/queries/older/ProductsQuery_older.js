import { gql } from '@apollo/client';

export default function ProductsQuery(categoryUid) {
  return gql`
    query {
      products(filter: { category_uid: { eq: "${categoryUid}" } }, pageSize: 12) {
        total_count
        page_info {
          current_page
          page_size
          total_pages
        }
        items {
          uid
          sku
          name
          media_gallery {
            label
            position
            url
          }
          stock_status
          price_range {
            minimum_price {
              final_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  `;
}

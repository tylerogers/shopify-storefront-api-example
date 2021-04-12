function apiCall(query) {
  return fetch('https://a-cheng.myshopify.com/api/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': "01954558c393d74582887bcb3b98dfa6"
    },
    "body": query
  }).then(response => response.json());
}

$(document).ready(function() {
  const $app = $('#app');

});

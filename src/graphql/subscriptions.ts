/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      category {
        id
        name
        src
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      category {
        id
        name
        src
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      category {
        id
        name
        src
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      src
      products {
        items {
          id
          image
          images
          brand
          price
          rating
          numReview
          isFeatured
          name
          description
          countInStock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      src
      products {
        items {
          id
          image
          images
          brand
          price
          rating
          numReview
          isFeatured
          name
          description
          countInStock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      src
      products {
        items {
          id
          image
          images
          brand
          price
          rating
          numReview
          isFeatured
          name
          description
          countInStock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFavoriteProduct = /* GraphQL */ `
  subscription OnCreateFavoriteProduct {
    onCreateFavoriteProduct {
      id
      userSub
      productID
      product {
        id
        image
        images
        brand
        price
        rating
        numReview
        isFeatured
        name
        description
        countInStock
        category {
          id
          name
          src
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
    }
  }
`;
export const onUpdateFavoriteProduct = /* GraphQL */ `
  subscription OnUpdateFavoriteProduct {
    onUpdateFavoriteProduct {
      id
      userSub
      productID
      product {
        id
        image
        images
        brand
        price
        rating
        numReview
        isFeatured
        name
        description
        countInStock
        category {
          id
          name
          src
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
    }
  }
`;
export const onDeleteFavoriteProduct = /* GraphQL */ `
  subscription OnDeleteFavoriteProduct {
    onDeleteFavoriteProduct {
      id
      userSub
      productID
      product {
        id
        image
        images
        brand
        price
        rating
        numReview
        isFeatured
        name
        description
        countInStock
        category {
          id
          name
          src
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

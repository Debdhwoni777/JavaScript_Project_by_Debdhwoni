// Sample array of product objects
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Phone", category: "Electronics", price: 699 },
    { id: 3, name: "Shoes", category: "Fashion", price: 49 },
    { id: 4, name: "Watch", category: "Accessories", price: 199 },
    { id: 5, name: "Jacket", category: "Fashion", price: 89 }
];

// filterProducts function
function filterProducts(products, criterion) {
    return products.filter(product => {
        // Check for each criterion and return matching products
        let matches = true;

        // Check for name match (if specified in criterion)
        if (criterion.name && !product.name.toLowerCase().includes(criterion.name.toLowerCase())) {
            matches = false;
        }

        // Check for category match (if specified in criterion)
        if (criterion.category && product.category.toLowerCase() !== criterion.category.toLowerCase()) {
            matches = false;
        }

        // Check for price range (if specified in criterion)
        if (criterion.minPrice !== undefined && product.price < criterion.minPrice) {
            matches = false;
        }
        if (criterion.maxPrice !== undefined && product.price > criterion.maxPrice) {
            matches = false;
        }

        return matches;
    });
}

// Example usage
const criterion = { category: "Fashion", minPrice: 50 };
const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts);

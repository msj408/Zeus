import React from "react";

const menuItems = [
  {
    category: "Salads",
    items: [
      {
        name: "Salad",
        description:
          "Lettuce, tomato, cucumbers, onion, olives, feta cheese, fatoush dressing and your choice of protein and up to 2 sauces.",
        price: "$11.39",
      },
    ],
  },
  {
    category: "Pita",
    items: [
      {
        name: "Pita",
        description:
          "A pita bread layered with sauce, rice, choice of meat, lettuce, tomato, onion, cucumber, olives, feta cheese and topped with more delicious sauce!",
        price: "$11.39",
      },
    ],
  },
  {
    category: "Plates",
    items: [
      {
        name: "Plate",
        description:
          "Our most popular option! Comes with rice, your choice of protein, up to 2 sauces, choice of 2 sides, and slices of pita bread.",
        price: "$14.99",
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Fountain Drink", price: "$2.86" },
      { name: "Bottle Water", price: "$2.86" },
      { name: "Bottle Drink", price: "$3.11" },
    ],
  },
  {
    category: "Sides (A la Carte)",
    items: [
      { name: "Puff Pastry (3 Piece)", price: "$2.08" },
      { name: "Hummus and Pita Slices", price: "$6.24" },
      {
        name: "Dolmas (2 Piece)",
        description: "Grape leaves stuffed with rice, veggies, and seasoning.",
        price: "$6.24",
      },
      { name: "Spanakopita (2 Piece)", price: "$6.24" },
      { name: "Quinoa Tabouli (6 oz)", price: "$5.20" },
      { name: "Side of Grilled Veggies", price: "$4.16" },
      {
        name: "Fatoush Salad (No Protein)",
        description:
          "Lettuce, tomato, onion, cucumber, feta cheese, olives, fatoush dressing.",
        price: "$7.80",
      },
    ],
  },
  {
    category: "Sauces (Extra)",
    items: [
      { name: "Tzatziki", price: "$1.04" },
      { name: "Garlic Sauce", price: "$1.04" },
      { name: "Spicy Garlic", price: "$1.04" },
      { name: "Feta Dressing", price: "$1.04" },
      { name: "Fatoush", price: "$1.04" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Big Chocolate Cake Slice", price: "$9.24" },
      { name: "Carrot Cake Slice", price: "$8.21" },
      { name: "Salted Caramel Cookie", price: "$2.90" },
      { name: "Chocolate Chunk Cookie", price: "$2.90" },
      { name: "Chewy Marshmallow Bar", price: "$2.90" },
      { name: "Rockslide Brownie", price: "$4.85" },
      { name: "Luscious Lemon Square", price: "$3.62" },
      { name: "Basque Cheesecake", price: "$6.01" },
      { name: "Blueberry Cobbler Cheesecake", price: "$6.13" },
      { name: "Crème Brulee Cheesecake", price: "$6.13" },
    ],
  },
];

const Menu = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Menu
        </h2>
        {menuItems.map((section, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-secondary">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  )}
                  <p className="text-lg font-bold mt-4">{item.price}</p>
                  <button className="mt-4 bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

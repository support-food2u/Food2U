/* ============================================================
   Food2U — product.js
   ============================================================ */

// 1. DATA: Restaurant list (Easy to expand for DBMS project)
export const restaurants = [
  {
    id: 1, name: 'Evergreen', img: 'https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_rp_progressive&w=740&q=80', phones: ['8056130389', '9962372887', '7200088274'], menu: {

      "BIRYANI": [

        { name: "Chicken Biryani", price: 100 },
        { name: "Special Biryani", price: 140 },
        { name: "Lollipop Biryani", price: 140 },
        { name: "Mughal Biryani", price: 140 },
        { name: "Egg Biryani", price: 90 },
        { name: "Chicken Pulao", price: 120 },
        { name: "Kushka", price: 80 }

      ],

      "VEG PULAO": [

        { name: "Veg Pulao", price: 100 },
        { name: "Cashew Pulao", price: 120 },
        { name: "Gobi Pulao", price: 120 },
        { name: "Mushroom Pulao", price: 120 },
        { name: "Paneer Pulao", price: 120 }

      ],

      "TANDOORI": [

        { name: "Tandoori Chicken Full", price: 370 },
        { name: "Tandoori Chicken Half", price: 190 },
        { name: "Tandoori Chicken Quarter", price: 100 },
        { name: "Tangri Kabab (2 pcs)", price: 140 },
        { name: "Chicken Tikka (6 pcs)", price: 120 },
        { name: "Malai Kabab (6 pcs)", price: 140 },
        { name: "Paneer Tikka (6 pcs)", price: 120 },
        { name: "Reshmi Kabab (6 pcs)", price: 140 }

      ],

      "TANDOORI BREAD / NAAN / ROTI": [

        { name: "Roti", price: 15 },
        { name: "Butter Roti", price: 20 },
        { name: "Naan", price: 20 },
        { name: "Butter Naan", price: 25 },
        { name: "Tandoori Parotta", price: 30 },
        { name: "Aloo Parotta", price: 30 },
        { name: "Paneer Parotta", price: 40 },
        { name: "Methi Parotta", price: 30 },
        { name: "Gobi Parotta", price: 40 },
        { name: "Paneer Kulcha", price: 40 },
        { name: "Chilli Parotta Veg", price: 80 },
        { name: "Chilli Parotta Chicken", price: 90 },
        { name: "Onion Parotta", price: 30 },
        { name: "Garlic Butter Naan", price: 40 },
        { name: "Chapati", price: 15 },
        { name: "Plain Kulcha", price: 30 },
        { name: "Chole Butter", price: 80 }

      ],

      "RICE / NOODLES / PASTA": [

        { name: "Schezwan Chicken Rice / Noodles / Pasta", price: 100 },
        { name: "Schezwan Veg Rice / Noodles / Pasta", price: 80 },
        { name: "Chicken Fried Rice / Noodles / Pasta", price: 90 },
        { name: "Egg Fried Rice / Noodles / Pasta", price: 80 },
        { name: "Veg Fried Rice / Noodles / Pasta", price: 70 },
        { name: "Mushroom Rice / Noodles / Pasta", price: 90 },
        { name: "Paneer Rice / Noodles / Pasta", price: 90 },
        { name: "Gobi Fried Rice / Noodles / Pasta", price: 90 },
        { name: "Veg Mixed Rice / Noodles / Pasta", price: 110 },
        { name: "Prawn Fried Rice / Noodles / Pasta", price: 120 },
        { name: "Mutton Fried Rice / Noodles / Pasta", price: 140 },
        { name: "Sweet Corn Rice / Noodles / Pasta", price: 90 },

        { name: "Aloo Pasta", price: 90 },
        { name: "Sweet Corn Chicken Pasta", price: 130 },

        { name: "Veg Pulao", price: 100 },
        { name: "Paneer Pulao", price: 100 },
        { name: "Jeera Rice", price: 70 },
        { name: "Veg Hakka Noodles", price: 90 },
        { name: "Non-Veg Hakka Noodles", price: 100 },
        { name: "Ghee Rice", price: 80 },
        { name: "Gobi Pulao", price: 100 },
        { name: "Steam Rice", price: 70 }

      ],

      "VEG ROLL": [

        { name: "Veg Roll", price: 50 },
        { name: "Evergreen Special Veg Mix Roll", price: 80 },
        { name: "Paneer Roll", price: 60 },
        { name: "Paneer Tikka Roll", price: 70 },
        { name: "Paneer Malai Roll", price: 80 },
        { name: "Paneer Keema Roll", price: 70 },
        { name: "Mushroom Roll", price: 70 },
        { name: "Mushroom Malai Roll", price: 80 },
        { name: "Paneer Roll", price: 70 },
        { name: "Mushroom Manchurian Roll", price: 70 },
        { name: "Gobi Manchurian Roll", price: 70 },
        { name: "Gobi Malai Roll", price: 80 }

      ],

      "SPECIAL VEG ROLL": [

        { name: "Royal Veg Roll", price: 90 },
        { name: "Royal Veg Cheese Roll", price: 100 },
        { name: "Veg Manchurian Roll", price: 70 },
        { name: "Veg Manchurian Cheese Roll", price: 80 },
        { name: "Gobi Manchurian Roll", price: 70 },
        { name: "Gobi Manchurian Cheese Roll", price: 80 },
        { name: "Baby Corn Manchurian Roll", price: 80 },
        { name: "Baby Corn Manchurian Cheese Roll", price: 90 },
        { name: "Aloo Manchurian Roll", price: 80 },
        { name: "Aloo Manchurian Cheese Roll", price: 90 },
        { name: "Chilli Aloo Roll", price: 80 },
        { name: "Chilli Aloo Cheese Roll", price: 90 }

      ],

      "NON VEG ROLL": [

        { name: "Chicken Roll", price: 60 },
        { name: "Chicken Cheese Roll", price: 70 },
        { name: "Chicken Keema Roll", price: 80 },
        { name: "Chicken Keema Cheese Roll", price: 90 },
        { name: "Chicken Kabab Roll", price: 80 },
        { name: "Chicken Cheese Kabab Roll", price: 90 },
        { name: "Chicken Tikka Roll", price: 80 },
        { name: "Chicken Tikka Cheese Roll", price: 90 },
        { name: "Chicken Chilli Roll", price: 80 },
        { name: "Malai Chicken Roll", price: 80 },
        { name: "Chicken Manchurian Roll", price: 80 },
        { name: "Chettinad Chicken Roll", price: 80 },
        { name: "Kadai Chicken Roll", price: 80 },
        { name: "Egg Roll", price: 50 },
        { name: "Double Egg Roll", price: 60 },
        { name: "Egg Cheese Roll", price: 60 },
        { name: "Chicken Double Egg Roll", price: 80 }

      ],

      "SPECIAL NON VEG ROLL": [

        { name: "Royal Chicken Roll", price: 110 },
        { name: "Royal Chicken Cheese Roll", price: 120 },
        { name: "Butter Chicken Roll", price: 80 },
        { name: "Butter Chicken Cheese Roll", price: 90 },
        { name: "Mexican Chicken Roll", price: 80 },
        { name: "Peri-Peri Chicken Roll", price: 80 },
        { name: "Tandoori Chicken Roll", price: 80 },
        { name: "Barbecue Chicken Roll", price: 80 },
        { name: "Garlic Chicken Roll", price: 80 },
        { name: "Reshmi Chicken Roll", price: 80 }

      ],

      "KUBOOS ROLL": [

        { name: "Kubos Roll", price: 70 },
        { name: "Special Kubos Roll", price: 100 },
        { name: "Cheese Kubos Roll", price: 80 },
        { name: "Spicy Kubos Roll", price: 80 },
        { name: "Cheese Spicy Kubos Roll", price: 90 },
        { name: "Cheese Special Kubos Roll", price: 110 },
        { name: "Cheese Spicy Special Kubos Roll", price: 120 }

      ],

      "KUBOOS PLATE": [

        { name: "Kubos Plate", price: 110 },
        { name: "Special Kubos Plate", price: 140 },
        { name: "Spicy Kubos Plate", price: 120 },
        { name: "Cheese Kubos Plate", price: 120 },
        { name: "Cheese Spicy Kubos Plate", price: 130 },
        { name: "Cheese Spicy Special Kubos Plate", price: 160 },
        { name: "Double Special Kubos Plate", price: 280 },
        { name: "Cheese Double Special Kubos Plate", price: 290 },
        { name: "Cheese Double Kubos Plate", price: 230 },
        { name: "Spicy Double Special Kubos Plate", price: 290 },
        { name: "Spicy Cheese Double Special Kubos Plate", price: 300 }

      ],

      "Special KUBOOS ROLL": [

        { name: "Peri-Peri Kubos Roll", price: 100 },
        { name: "Tandoori Kubos Roll", price: 100 },
        { name: "Mexican Kubos Roll", price: 100 },
        { name: "Barbecue Kubos Roll", price: 100 },
        { name: "Special Peri-Peri Kubos Roll", price: 120 },
        { name: "Special Tandoori Kubos Roll", price: 120 },
        { name: "Special Mexican Kubos Roll", price: 120 },
        { name: "Special Barbecue Kubos Roll", price: 120 }

      ],

      "Special KUBOOS PLATE": [

        { name: "Peri-Peri Kubos Plate", price: 150 },
        { name: "Tandoori Kubos Plate", price: 150 },
        { name: "Mexican Kubos Plate", price: 150 },
        { name: "Barbecue Kubos Plate", price: 150 },
        { name: "Special Peri-Peri Kubos Plate", price: 160 },
        { name: "Special Tandoori Kubos Plate", price: 170 },
        { name: "Special Mexican Kubos Plate", price: 170 },
        { name: "Special Barbecue Kubos Plate", price: 180 }

      ],

      "NORTH INDIAN VEG CURRY": [

        { name: "Dal Fry", price: 70 },
        { name: "Dal Tadka", price: 80 },
        { name: "Dal Makhani", price: 100 },
        { name: "Mix Veg Curry", price: 100 },
        { name: "Kadai Veg", price: 100 },
        { name: "Veg Kurma", price: 100 },
        { name: "Gobi Masala", price: 100 },
        { name: "Aloo Masala", price: 90 },
        { name: "Aloo Gobi Masala", price: 100 },
        { name: "Veg Do Pyaza", price: 100 },
        { name: "Veg Kolhapuri", price: 100 },
        { name: "Aloo Dum", price: 100 },
        { name: "Aloo Capsicum", price: 100 },
        { name: "Aloo Jeera Masala", price: 100 },
        { name: "Green Peas Masala", price: 100 },
        { name: "Channa Masala", price: 100 },
        { name: "Paneer Butter Masala", price: 120 },
        { name: "Kadai Paneer", price: 120 },
        { name: "Paneer Chatpata", price: 120 },
        { name: "Paneer Chettinad", price: 120 },
        { name: "Paneer Do Pyaza", price: 120 },
        { name: "Paneer Kofta", price: 120 },
        { name: "Paneer Masala", price: 100 },
        { name: "Paneer Punjabi", price: 120 },
        { name: "Malai Kofta", price: 120 },
        { name: "Veg Kofta", price: 120 },
        { name: "Palak Paneer", price: 120 },
        { name: "Paneer Methi", price: 110 },
        { name: "Mushroom Masala", price: 100 },
        { name: "Kadai Mushroom", price: 110 },
        { name: "Paneer Tikka Masala", price: 120 },
        { name: "Ranger Bhurji", price: 100 },
        { name: "Bhindi Masala", price: 100 },
        { name: "Bhindi Fry", price: 90 }

      ],

      "CURRY NON VEG": [

        { name: "Chicken Curry", price: 100 },
        { name: "Chicken Masala", price: 110 },
        { name: "Chicken Punjabi", price: 120 },
        { name: "Kadai Chicken", price: 120 },
        { name: "Pepper Chicken Masala", price: 130 },
        { name: "Butter Chicken Masala", price: 130 },
        { name: "Chicken Tikka Masala", price: 130 },
        { name: "Chicken Hydrabadi", price: 130 },
        { name: "Andhra Chicken Masala", price: 130 },
        { name: "Chicken Chettinad", price: 120 },
        { name: "Evergreen Special Chicken", price: 140 },
        { name: "Chicken Mughlai", price: 130 },
        { name: "Chicken Dry Fry", price: 110 },
        { name: "Egg Bhurji", price: 50 },
        { name: "Egg Roast", price: 70 },
        { name: "Egg Pepper Fry", price: 80 },
        { name: "Egg Curry", price: 90 },
        { name: "Egg Masala", price: 90 },
        { name: "Egg Keema Masala", price: 90 },
        { name: "Egg Butter Masala", price: 100 },
        { name: "Egg Pepper Masala", price: 100 }

      ],

      "CHINESE SIDE DISH VEG": [

        { name: "Veg Manchurian", price: 100 },
        { name: "Gobi Manchurian", price: 110 },
        { name: "Chilli Veg", price: 100 },
        { name: "Chilli Gobi", price: 100 },
        { name: "Mushroom Manchurian", price: 110 },
        { name: "Chilli Mushroom", price: 110 },
        { name: "Paneer Manchurian", price: 110 },
        { name: "Chilli Paneer", price: 120 },
        { name: "Szechuan Paneer", price: 120 },
        { name: "Garlic Paneer", price: 120 },
        { name: "Ginger Paneer", price: 120 },
        { name: "Dragon Paneer", price: 140 },
        { name: "Chilli Potato", price: 100 },
        { name: "Chilli Babycorn", price: 100 },
        { name: "Babycorn Manchurian", price: 110 },
        { name: "Szechuan Gobi", price: 110 },
        { name: "Garlic Veg", price: 110 }

      ],

      "STARTER NON VEG & VEG": [

        { name: "Gobi 65", price: 100 },
        { name: "Paneer 65", price: 100 },
        { name: "Paneer Pakoda", price: 100 },
        { name: "Chicken 65", price: 110 },
        { name: "Chicken Lollipop (6 pcs)", price: 120 },
        { name: "Chicken Drumstick (6 pcs)", price: 140 },
        { name: "Chicken Pakoda", price: 100 },
        { name: "Chilli Chicken", price: 110 },
        { name: "Chicken Manchurian", price: 110 },
        { name: "Szechuan Chicken", price: 120 },
        { name: "Dragon Chicken", price: 140 },
        { name: "Ginger Chicken", price: 120 },
        { name: "Garlic Chicken", price: 120 },
        { name: "Chilli Egg", price: 90 },
        { name: "Pepper Chicken", price: 120 },
        { name: "Honey Chilli Potato", price: 120 },
        { name: "Chicken Lollipop Gravy", price: 140 }

      ],

    }
  },
  {
    id: 2, name: 'Classic Biriyani', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', phones: ['7358205870', '8056129893'], menu: {
      "ROLL": [

        { name: "Extra Cheese or Mayo", price: 10 },

        { name: "Chicken Roll", price: 60 },
        { name: "Chicken Egg Roll", price: 70 },
        { name: "Chicken Cheese Roll", price: 70 },
        { name: "Chicken Egg Cheese Roll", price: 80 },
        { name: "Double Chicken Roll", price: 100 },
        { name: "Double Chicken Cheese Roll", price: 110 },
        { name: "Double Chicken Egg Roll", price: 110 },
        { name: "Chicken Tikka Roll", price: 90 },
        { name: "Chicken Tikka Egg Roll", price: 100 },
        { name: "Malai Chicken Roll", price: 80 },
        { name: "Malai Chicken Egg Roll", price: 90 },
        { name: "Chilly Chicken Roll", price: 70 },
        { name: "Chilly Chicken Egg Roll", price: 80 },

        { name: "Chicken Mayo Roll", price: 80 },
        { name: "Chicken Mayo Egg Roll", price: 90 },

        { name: "Egg Roll", price: 50 },
        { name: "Double Egg Roll", price: 60 },
        { name: "Egg Mayo Roll", price: 70 },

        { name: "Butter Chicken Roll", price: 100 },
        { name: "Butter Chicken Egg Roll", price: 110 },

        { name: "BBQ Chicken Roll", price: 90 },
        { name: "BBQ Chicken Egg Roll", price: 100 },

        { name: "Chicken Manchurian Roll", price: 80 },
        { name: "Chicken Manchurian Egg Roll", price: 90 },

        { name: "Peri Peri Chicken Roll", price: 80 },
        { name: "Peri Peri Chicken Egg Roll", price: 90 },

        { name: "Tandoori Chicken Roll", price: 80 },
        { name: "Tandoori Egg Chicken Roll", price: 90 },

        { name: "Barebeq Chicken Roll", price: 80 },
        { name: "Barebeq Chicken Egg Roll", price: 90 },

        { name: "Mexican Chicken Roll", price: 80 },
        { name: "Mexican Egg Chicken Roll", price: 90 },

        { name: "Panner Roll", price: 60 },
        { name: "Panner Cheese Roll", price: 70 },
        { name: "Chilly Panner Roll", price: 70 },
        { name: "Panner Mayo Roll", price: 70 },
        { name: "Panner Manchurian Roll", price: 70 },
        { name: "Peri Peri Panner Roll", price: 70 },
        { name: "Tandoori Panner Roll", price: 80 },
        { name: "Maxican Panner Roll", price: 80 },
        { name: "Barebeq Panner Roll", price: 80 }

      ],

      "BIRIYANI": [

        { name: "Chicken Biryani", price: 120 },
        { name: "Leg Piece Biryani", price: 130 },
        { name: "Chicken Special Biryani", price: 140 },
        { name: "Mogal Chicken Biryani", price: 150 },
        { name: "Lollipop Biryani", price: 150 },
        { name: "Dragon Chicken Biryani", price: 150 },
        { name: "Chilly Chicken Biryani", price: 150 },
        { name: "Manchurian Chicken Biryani", price: 150 },
        { name: "Drumstick Biryani", price: 150 },
        { name: "Prawn Biryani", price: 170 },
        { name: "Special Prawn Biryani", price: 180 },
        { name: "Egg Biryani", price: 100 },
        { name: "Plain Biryani", price: 80 },
        { name: "Veg Biryani", price: 100 },
        { name: "Mushroom Biryani", price: 110 },
        { name: "Panner Biryani", price: 110 }

      ],

      "PULAO": [

        { name: "Chicken Pulao", price: 120 },
        { name: "Veg Pulao", price: 90 },
        { name: "Panner Pulao", price: 100 },
        { name: "Mushroom Pulao", price: 100 },
        { name: "Vegetable Pulao", price: 100 },
        { name: "Kaju Pulao", price: 120 }

      ],

      "RICE / NOODLES": [

        { name: "Chicken Rice or Noodles", price: 100 },
        { name: "Szechuan Chicken Rice or Noodles", price: 110 },
        { name: "Double Chicken Rice or Noodles", price: 130 },
        { name: "Szechuan Double Chicken Rice or Noodles", price: 140 },

        { name: "Egg Fried Rice or Noodles", price: 90 },
        { name: "Szechuan Egg Fried Rice or Noodles", price: 100 },
        { name: "Double Egg Rice or Noodles", price: 100 },

        { name: "Non Veg Mixed Rice or Noodles", price: 140 },
        { name: "Szechuan Non Veg Mixed Rice or Noodles", price: 150 },

        { name: "Prawn Rice or Noodles", price: 130 },
        { name: "Szechuan Prawn Rice or Noodles", price: 140 },

        { name: "Veg Rice or Noodles", price: 80 },
        { name: "Szechuan Veg Rice or Noodles", price: 90 },

        { name: "Panner Rice or Noodles", price: 100 },
        { name: "Szechuan Panner Rice or Noodles", price: 110 },

        { name: "Gobi Rice or Noodles", price: 100 },
        { name: "Szechuan Gobi Rice or Noodles", price: 110 },

        { name: "Mushroom Rice or Noodles", price: 100 },
        { name: "Szechuan Mushroom Rice or Noodles", price: 110 },

        { name: "Mix Veg Rice or Noodles", price: 100 },
        { name: "Szechuan Mix Veg Rice or Noodles", price: 110 }

      ],

      "PASTA": [

        { name: "Chicken Pasta", price: 100 },
        { name: "Szechuan Chicken Pasta", price: 110 },
        { name: "Prawn Pasta", price: 130 },
        { name: "Szechuan Prawn Pasta", price: 140 },

        { name: "Egg Pasta", price: 90 },
        { name: "Szechuan Egg Pasta", price: 100 },

        { name: "Non Veg Mix Pasta", price: 130 },
        { name: "Szechuan Non Veg Mix Pasta", price: 140 },

        { name: "Veg Pasta", price: 80 },
        { name: "Szechuan Veg Pasta", price: 90 },

        { name: "Panner Pasta", price: 100 },
        { name: "Szechuan Panner Pasta", price: 110 },

        { name: "Gobi Pasta", price: 100 },
        { name: "Szechuan Gobi Pasta", price: 110 },

        { name: "Mushroom Pasta", price: 100 },
        { name: "Szechuan Mushroom Pasta", price: 110 },

        { name: "Veg Mixed Pasta", price: 110 },
        { name: "Szechuan Veg Mixed Pasta", price: 120 }

      ],

      "CHINESE SIDE DISH": [

        { name: "Chilly Chicken Dry or Gravy", price: 110 },
        { name: "Chicken Manchurian Dry or Gravy", price: 110 },
        { name: "Pepper Chicken Dry or Gravy", price: 120 },
        { name: "Garlic Chicken Dry or Gravy", price: 120 },
        { name: "Szechuan Chicken Dry or Gravy", price: 130 },
        { name: "Dragon Chicken Dry or Gravy", price: 150 },

        { name: "Prawn Chilly Dry or Gravy", price: 170 },
        { name: "Prawn Manchurian Dry or Gravy", price: 170 },

        { name: "Panner Chilly Dry or Gravy", price: 110 },
        { name: "Panner Manchurian Dry or Gravy", price: 110 },

        { name: "Gobi Chilly Dry or Gravy", price: 100 },
        { name: "Gobi Manchurian Dry or Gravy", price: 100 },

        { name: "Mushroom Chilly Dry or Gravy", price: 110 },
        { name: "Mushroom Manchurian Dry or Gravy", price: 110 }

      ],

      "GRAVY COMBO": [

        { name: "3 Parotta or Chapati with Butter Chicken", price: 100 },
        { name: "3 Parotta or Chapati with Chicken Masala", price: 90 },
        { name: "3 Parotta or Chapati with Panner Butter Masala", price: 90 }

      ]

    }
  },
  {
    id: 3, name: 'S. R. Chat Corner', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', phones: ['9500508071', '9500509871', '7305333052'],
    menu: {

      "SANDWICH": [
        { name: "Chicken Sandwich", price: 60 },
        { name: "Egg Sandwich", price: 50 },
        { name: "Paneer Sandwich", price: 60 },
        { name: "Mushroom Sandwich", price: 60 },
        { name: "Corn Sandwich", price: 50 },
        { name: "Aloo Sandwich", price: 50 },
        { name: "Cheese Sandwich", price: 40 },
        { name: "Veg Sandwich", price: 50 },
        { name: "Double Cheese Sandwich", price: 60 },
        { name: "Khosla Sandwich", price: 40 },
        { name: "Pudina Sandwich", price: 40 },
        { name: "Chilly Cheese Corn Sandwich", price: 60 }
      ],

      "CHAT ITEMS": [
        { name: "Samosa Chat", price: 50 },
        { name: "Cutlet Chat", price: 60 },
        { name: "Papdi Chat", price: 50 },
        { name: "Kalkata Chat", price: 60 },
        { name: "American Chat", price: 60 },
        { name: "Dillagi Chat", price: 60 },
        { name: "Chana Samosa", price: 50 },
        { name: "Cutlet Chana", price: 50 },
        { name: "Aloo Chat", price: 50 },
        { name: "Papdi Chana", price: 50 },
        { name: "Dahi Puri", price: 50 },
        { name: "Masala Puri", price: 50 },
        { name: "Sev Puri", price: 50 },
        { name: "Pani Puri (1 Plate)", price: 30 },
        { name: "Bhel Puri", price: 50 },
        { name: "Samosa (1 Plate 2 Pieces)", price: 25 },
        { name: "Samosa Puff (1 Plate 2 Pieces)", price: 25 },
        { name: "Cutlet (1 Plate 2 Pieces)", price: 40 },
        { name: "Baro Bhaji", price: 40 },
        { name: "Pav Bhaji", price: 50 },
        { name: "Vada Pav", price: 50 },
        { name: "Cheese Pav Bhaji", price: 60 },
        { name: "Kachori (1 Plate 2 Pieces)", price: 40 },
        { name: "Kachori Chat", price: 60 },
        { name: "Cutlet Veg", price: 40 },
        { name: "Chicken Cutlet (1 Plate 2 Pieces)", price: 60 },
        { name: "Plain Pappad", price: 30 },
        { name: "Dhai Pappad", price: 50 },
        { name: "Dhai Samosa", price: 50 },
        { name: "Vada Pav (2 Pcs)", price: 50 }
      ],

      "BURGER": [
        { name: "Chicken Burger", price: 80 },
        { name: "Veg Burger", price: 70 },
        { name: "Chicken Burger Double Decker", price: 130 },
        { name: "Veg Burger Double Decker", price: 120 }
      ],

      "SNACKS & ROLLS": [
        { name: "French Fries", price: 60 },
        { name: "Smilies", price: 70 },
        { name: "Veg Nuggets", price: 60 },
        { name: "Aloo Tikki", price: 70 },
        { name: "Chicken Nuggets", price: 80 },
        { name: "Popcorn Chicken", price: 70 },
        { name: "Chicken Roll", price: 70 },
        { name: "Egg Roll", price: 50 },
        { name: "Veg Roll", price: 50 },
        { name: "Mushroom Roll", price: 70 },
        { name: "Paneer Roll", price: 70 },
        { name: "Chicken Kabab Roll", price: 80 },
        { name: "Chicken Manchurian Roll", price: 80 }
      ],

      "MAGGIE": [
        { name: "Chicken Maggie", price: 60 },
        { name: "Egg Maggie", price: 50 },
        { name: "Paneer Maggie", price: 60 },
        { name: "Mushroom Maggie", price: 60 },
        { name: "Corn Maggie", price: 50 },
        { name: "Cheese Maggie", price: 40 },
        { name: "Veg Maggie", price: 40 },
        { name: "Plain Maggie", price: 30 }
      ],

      "CORNS": [
        { name: "Masala Corn", price: 30 },
        { name: "Pepper Corn", price: 30 },
        { name: "Sweet Corn", price: 30 },
        { name: "Butter Corn", price: 40 }
      ],

      "CLUB SANDWICH": [
        { name: "Chicken + Egg + Club Sandwich", price: 100 },
        { name: "Mushroom + Paneer + Club Sandwich", price: 80 },
        { name: "Aloo + Veg + Club Sandwich", price: 70 },
        { name: "Aloo + Paneer + Club Sandwich", price: 80 },
        { name: "Aloo + Corn + Club Sandwich", price: 70 },
        { name: "Veg + Corn + Club Sandwich", price: 70 },
        { name: "Paneer + Veg + Club Sandwich", price: 80 },
        { name: "Mushroom + Veg + Club Sandwich", price: 80 }
      ],

      "WRAPS": [
        { name: "Chicken Wraps", price: 80 },
        { name: "Veg Wraps", price: 70 },
        { name: "Paneer Wraps", price: 80 },
        { name: "Mushroom Wraps", price: 80 },
        { name: "Corn Wraps", price: 70 },
        { name: "Kashmiri Veg Wraps", price: 100 },
        { name: "Kashmiri Chicken Wraps", price: 120 }
      ],

      "JUMBO SANDWICH": [
        { name: "Paneer + Mushroom + Corn", price: 100 },
        { name: "Veg + Aloo + Corn", price: 90 },
        { name: "Aloo + Paneer + Corn", price: 90 },
        { name: "Mushroom + Chicken + Egg", price: 110 }
      ],

      "OMLETTE": [
        { name: "Chicken Omlet", price: 60 },
        { name: "Chicken Cheese Omlet", price: 70 },
        { name: "Bread Omlet", price: 40 },
        { name: "Cheese Bread Omlet", price: 50 },
        { name: "Cheese Omlet", price: 40 },
        { name: "Omlet", price: 30 },
        { name: "Chicken Cheese Bread Omlette", price: 80 },
        { name: "Chicken Bread Omlette", price: 70 },
        { name: "Bread Pakoda (1 Pc)", price: 20 }
      ],

      "MOMOS (NON VEG)": [
        { name: "Egg Momos Steam", price: 70 },
        { name: "Egg Momos Fry", price: 80 },
        { name: "Chicken Momo Steam", price: 80 },
        { name: "Chicken Momo Fried", price: 100 },
        { name: "Chicken Pan Fried Momo", price: 110 },
        { name: "Chicken Manchurian Momo", price: 110 },
        { name: "Chicken Schezwan Momo", price: 110 },
        { name: "Chicken Dragon Momo", price: 110 },
        { name: "Chicken Garlic Momo", price: 110 }
      ],

      "MOMOS (VEG)": [
        { name: "Veg Momo Steam", price: 70 },
        { name: "Veg Momo Fried", price: 80 },
        { name: "Veg Pan Fried Momo", price: 100 },
        { name: "Veg Manchurian Momo", price: 100 },
        { name: "Veg Schezwan Momo", price: 100 },
        { name: "Veg Dragon Momo", price: 100 },
        { name: "Veg Garlic Momo", price: 100 },
        { name: "Paneer Momos Steam", price: 80 },
        { name: "Paneer Momos Fry", price: 90 }
      ],

      "IDLY": [
        { name: "Idly 1 Plate (3 Pieces)", price: 35 }
      ],

      "DOSA VARIETIES": [
        { name: "Plain Dosa", price: 40 },
        { name: "Kal Dosa", price: 40 },
        { name: "Masala Dosa", price: 60 },
        { name: "Onion Dosa", price: 60 },
        { name: "Podi Dosa", price: 60 },
        { name: "Ghee Dosa", price: 70 },
        { name: "Paneer Dosa", price: 80 },
        { name: "Mushroom Dosa", price: 70 },
        { name: "Gobi Dosa", price: 70 },
        { name: "Karam Dosa", price: 60 },
        { name: "Maisur Dosa", price: 70 },
        { name: "Andhra Mirchi", price: 60 },
        { name: "Chocolate Dosa", price: 70 },
        { name: "Ghee Masala", price: 80 },
        { name: "Ghee Onion", price: 80 },
        { name: "Ghee Podi", price: 80 },
        { name: "Ghee Paneer", price: 90 },
        { name: "Butter Dosa", price: 70 },
        { name: "Butter Masala", price: 80 },
        { name: "Butter Onion", price: 80 },
        { name: "Butter Podi", price: 80 },
        { name: "Butter Paneer", price: 90 },
        { name: "Egg Dosa", price: 60 },
        { name: "Chicken Dosa", price: 80 },
        { name: "Plain Uttapam", price: 50 },
        { name: "Masala Uttapam", price: 60 },
        { name: "Onion Uttapam", price: 60 },
        { name: "Podi Uttapam", price: 60 },
        { name: "Veg Uttapam", price: 60 },
        { name: "Carrot Uttapam", price: 60 },
        { name: "Tomato Uttapam", price: 60 },
        { name: "5 Taste Uttapam", price: 80 }
      ],

      "RAVA DOSA": [
        { name: "Plain Rava", price: 60 },
        { name: "Rava Masala", price: 70 },
        { name: "Onion Rava", price: 70 },
        { name: "Gajar Rava", price: 70 },
        { name: "Ghee Rava", price: 70 },
        { name: "Ghee Onion Rava", price: 80 },
        { name: "Ghee Masala Rava", price: 80 },
        { name: "Butter Rava", price: 70 },
        { name: "Butter Onion Rava", price: 80 },
        { name: "Butter Masala Rava", price: 80 },
        { name: "Family Dosa", price: 150 },
        { name: "Chapathi (2 Pcs)", price: 50 },
        { name: "Parotta (2 Pcs)", price: 50 },
        { name: "Chola Poori (1 Pc)", price: 80 }
      ]

    }
  },
  {
    id: 4, name: 'Sunny Days', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', phones: ['93661676144', '9578341467', '9176760095', '8667593397'], note: 'MINIMUM ORDER ₹150',
    menu: {

      "MOCKTAIL": [
        { name: "Virgin Mojito", price: 60 },
        { name: "Green Apple Mojito", price: 60 },
        { name: "Blue Lagoon", price: 60 },
        { name: "Red Wine", price: 60 },
        { name: "Bubble Gum", price: 60 }
      ],

      "MILKSHAKES": [
        { name: "Cold Chocolate", price: 50 },
        { name: "Cold Chocolate with (Boost / Horlicks)", price: 60 },
        { name: "Cold Coffee", price: 40 },
        { name: "Cold Coffee with (Boost / Horlicks)", price: 50 },
        { name: "Cheesy Rose Milk", price: 40 },
        { name: "Badam Milk", price: 40 },
        { name: "Cold Boost", price: 40 },
        { name: "Cold Horlicks", price: 40 }
      ],

      "THICK SHAKE": [
        { name: "Nutella Brownie Crumble", price: 120 },
        { name: "Belgium Chocolate", price: 110 },
        { name: "Cold Coffee Frappe", price: 110 },
        { name: "Triple Choco Chips", price: 110 },
        { name: "Crunchy Butter Scotch", price: 110 },
        { name: "Red Velvet", price: 70 },
        { name: "Brownie", price: 70 },
        { name: "Oreo", price: 60 },
        { name: "Kitkat", price: 60 },
        { name: "Chocolate", price: 60 },
        { name: "Black Current", price: 60 },
        { name: "Strawberry", price: 60 },
        { name: "Mango", price: 60 },
        { name: "Green Apple", price: 60 },
        { name: "Watermelon", price: 60 }
      ],

      "BUBBLE SHAKES": [
        { name: "Chocolate", price: 150 },
        { name: "Coffee", price: 150 },
        { name: "Blueberry", price: 150 },
        { name: "Lychee", price: 150 },
        { name: "Strawberry", price: 150 },
        { name: "Mango", price: 150 }
      ],

      "BUBBLE TEA": [
        { name: "Lemon Bubble Tea", price: 100 },
        { name: "Peach Bubble Tea", price: 120 }
      ],

      "TOPPING": [
        { name: "Vanilla Ice Cream", price: 20 },
        { name: "Chocolate Ice Cream", price: 30 }
      ],

      "ITALIAN PASTA": [
        { name: "Cheesy White Sauce (Regular)", price: 120 },
        { name: "Cheesy White Sauce (Large)", price: 150 },
        { name: "Tangy Red Sauce (Regular)", price: 120 },
        { name: "Tangy Red Sauce (Large)", price: 150 },
        { name: "Mixed Sauce (Regular)", price: 130 },
        { name: "Mixed Sauce (Large)", price: 160 },
        { name: "Paneer Pasta", price: 130 }
      ],

      "TIBETAN MOMOS": [
        { name: "Mixed Veg", price: 90 },
        { name: "Veg Schezwan", price: 100 },
        { name: "Paneer", price: 120 },
        { name: "Cheese & Corn", price: 120 },
        { name: "Chicken", price: 100 },
        { name: "Peri Peri Chicken", price: 110 },
        { name: "Chicken Cheese", price: 120 }
      ],

      "SANDWICH (VEG)": [
        { name: "Veg", price: 40 },
        { name: "Chilli Cheese", price: 50 },
        { name: "Chocolate", price: 50 },
        { name: "Cheese Corn", price: 60 },
        { name: "Paneer", price: 60 },
        { name: "Peri Peri Paneer", price: 60 },
        { name: "Paneer Tikka", price: 70 }
      ],

      "SANDWICH (NON VEG)": [
        { name: "Boiled Egg Sandwich", price: 50 },
        { name: "Chicken Sandwich", price: 60 },
        { name: "Peri Peri Chicken", price: 60 },
        { name: "Barbecue Chicken", price: 60 },
        { name: "Tandoori Chicken", price: 60 },
        { name: "Chicken Mayo", price: 60 },
        { name: "Chicken Tikka", price: 70 }
      ],

      "WRAP": [
        { name: "Paneer (Peri Peri / Makhani)", price: 70 },
        { name: "Paneer Tikka Wrap", price: 80 },
        { name: "Chicken (Peri Peri / Tandoori / BBQ / Makhani)", price: 80 },
        { name: "Chicken Tikka Wrap", price: 90 },
        { name: "Fried Chicken Wrap", price: 100 },
        { name: "Chicken Tawa Roll", price: 100 }
      ],

      "LONG SANDWICH": [
        { name: "Veg Aloo Tikki", price: 100 },
        { name: "Cheese & Corn", price: 120 },
        { name: "Paneer (Peri Peri / Makhani / Tikka)", price: 130 },
        { name: "Egg", price: 80 },
        { name: "Chicken (Peri Peri / Tandoori / BBQ / Makhani / Tikka)", price: 150 }
      ],

      "HOT DOG": [
        { name: "American", price: 100 },
        { name: "Kabab", price: 100 },
        { name: "American Veg", price: 110 }
      ],

      "BURGER": [
        { name: "Veg Burger", price: 80 },
        { name: "Paneer Burger", price: 100 },
        { name: "Veg Maharaja", price: 180 },
        { name: "Chicken Burger", price: 100 },
        { name: "Grill Chicken Burger", price: 100 },
        { name: "Chicken Maharaja", price: 220 }
      ],

      "NACHOS": [
        { name: "Mexican Veg", price: 90 },
        { name: "Mexican Chicken", price: 110 },
        { name: "Nachos with Dip", price: 70 }
      ],

      "BROWNIE": [
        { name: "Chocolate Brownie", price: 70 },
        { name: "Hot Brownie with Ice Cream", price: 90 },
        { name: "Two Much Brownie", price: 110 },
        { name: "Brownie Sandwich", price: 180 },
        { name: "Choco Lava", price: 70 }
      ],

      "VEG FRIED ITEMS": [
        { name: "French Fries", price: 60 },
        { name: "Peri Peri Fries", price: 80 },
        { name: "Mexican Cheesy Fries", price: 90 },
        { name: "Cheese Corn Nuggets (5 Pcs)", price: 80 },
        { name: "Spicy Corn Nuggets (5 Pcs)", price: 70 },
        { name: "Veg Spring Roll (2 Pcs)", price: 70 },
        { name: "Paneer Roll (2 Pcs)", price: 80 },
        { name: "Potato Cheese Shot", price: 70 }
      ],

      "NON VEG FRIED ITEMS": [
        { name: "Chicken Cheesy Fries", price: 150 },
        { name: "Chicken Nuggets (6 Pcs)", price: 80 },
        { name: "Chicken Cheese Nuggets (5 Pcs)", price: 100 },
        { name: "Chicken Cheese Ball (5 Pcs)", price: 100 },
        { name: "Chicken Finger (4 Pcs)", price: 80 },
        { name: "Chicken Popcorn (12 Pcs)", price: 80 },
        { name: "Fish Finger (4 Pcs)", price: 100 },
        { name: "Chicken Spring Roll (2 Pcs)", price: 80 },
        { name: "Chicken Spicy Wings (4 Pcs)", price: 150 }
      ]

    }
  },
  {
    id: 5, name: 'New Classic Chettinadu', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2f/33/2d/healthy-bowl-frische.jpg?w=900&h=500&s=1', phones: ['98942211203'],
    menu: {

      "FRESH LIMES": [
        { name: "Lime", price: 15 },
        { name: "Ginger Lime", price: 20 },
        { name: "Mango Lime", price: 20 },
        { name: "Orange Lime", price: 25 },
        { name: "Pineapple Lime", price: 20 },
        { name: "Rose Lime", price: 25 },
        { name: "Mint Lime", price: 25 },
        { name: "Blue Lime", price: 25 },
        { name: "Masala Lime", price: 25 },
        { name: "Cola Lime", price: 25 },
        { name: "Fanta Lime", price: 30 },
        { name: "Lime Soda", price: 30 },
        { name: "Blue Lime Soda", price: 35 },
        { name: "Black Currant Soda", price: 35 },
        { name: "Blueberry Soda", price: 35 },
        { name: "Strawberry Soda", price: 35 },
        { name: "Kiwi Soda", price: 35 },
        { name: "Mint Lime Soda", price: 35 },
        { name: "Ginger Lime Soda", price: 35 }
      ],

      "FRESH JUICE": [
        { name: "Mosambi", price: 35 },
        { name: "Watermelon", price: 35 },
        { name: "Banana", price: 35 },
        { name: "Pineapple", price: 40 },
        { name: "Grape", price: 40 },
        { name: "Chikku", price: 40 },
        { name: "Apple", price: 40 },
        { name: "Papaya", price: 40 },
        { name: "Strawberry", price: 40 },
        { name: "Orange", price: 40 },
        { name: "Mango", price: 40 },
        { name: "Pomegranate", price: 40 },
        { name: "Kiwi", price: 40 },
        { name: "Muskmelon", price: 40 },
        { name: "Anjeer (Fig)", price: 40 },
        { name: "Custard Apple", price: 40 },
        { name: "Dragon Fruit", price: 40 },
        { name: "Dates", price: 40 },
        { name: "Avocado", price: 40 },
        { name: "Buttermilk", price: 20 }
      ],

      "MILK SHAKES": [
        { name: "WITH ICE-CREAM", price: 55 },
        { name: "Apple Shake", price: 50 },
        { name: "Banana Shake", price: 50 },
        { name: "Papaya Shake", price: 50 },
        { name: "Dates Shake", price: 50 },
        { name: "Badam Shake", price: 50 },
        { name: "Rose Shake", price: 50 },
        { name: "Saudi Shake", price: 50 },
        { name: "Sharjah Shake", price: 50 },
        { name: "Chikku Shake", price: 50 },
        { name: "Kiwi Shake", price: 50 },
        { name: "Butter Fruit Shake", price: 50 },
        { name: "Muskmelon Shake", price: 50 },
        { name: "Strawberry Shake", price: 50 },
        { name: "Fig Shake", price: 50 },
        { name: "Orange Shake", price: 50 },
        { name: "Mango Shake", price: 50 },
        { name: "Custard Apple Shake", price: 50 },
        { name: "Pomegranate Shake", price: 50 },
        { name: "Avocado Shake", price: 50 }
      ],

      "CHETTINADU COMBINATION SHAKES": [
        { name: "Banana Punch", price: 50 },
        { name: "Choco Banana", price: 50 },
        { name: "Choco Chikku", price: 50 },
        { name: "Choco Apple", price: 50 },
        { name: "Strawberry Apple", price: 50 },
        { name: "Apple Scotch", price: 50 },
        { name: "Summer Brown", price: 50 },
        { name: "Pineapple Punch", price: 50 },
        { name: "Dates / Cherry", price: 50 },
        { name: "Three Berry", price: 50 },
        { name: "Custard Apple", price: 50 },
        { name: "Carrot / Banana", price: 50 },
        { name: "Fig / Dates", price: 50 },
        { name: "Cherry / Banana", price: 50 },
        { name: "Custard / Dates", price: 50 },
        { name: "Apple / Dates", price: 50 },
        { name: "Papaya / Banana", price: 50 },
        { name: "Strawberry / Custard Apple", price: 50 }
      ],

      "REAL LASSI": [
        { name: "Lassi", price: 35 },
        { name: "Mango Lassi", price: 45 },
        { name: "Pineapple Lassi", price: 45 },
        { name: "Banana Lassi", price: 45 },
        { name: "Papaya Lassi", price: 45 },
        { name: "Strawberry Lassi", price: 50 },
        { name: "Custard Lassi", price: 50 },
        { name: "Choco Lassi", price: 50 },
        { name: "Kiwi Lassi", price: 50 },
        { name: "Blueberry Lassi", price: 50 },
        { name: "Rose Lassi", price: 45 }
      ],

      "SPECIAL JUICE": [
        { name: "Rose Milk", price: 35 },
        { name: "Rose Milk & Ice Cream", price: 45 },
        { name: "Badam", price: 45 },
        { name: "Badam Milk", price: 45 },
        { name: "Badam Milk & Ice Cream", price: 45 },
        { name: "Nannari Sarbath", price: 35 },
        { name: "Carrot Juice", price: 45 },
        { name: "Beetroot Juice", price: 45 },
        { name: "ABC 1 (Apple, Beetroot, Carrot)", price: 65 },
        { name: "ABC 2 (Apple, Banana, Carrot)", price: 65 },
        { name: "PBC (Pineapple, Beetroot, Carrot)", price: 65 }
      ],

      "MAGGIE": [
        { name: "Plain Maggie", price: 30 },
        { name: "Plain Maggie Cheese", price: 40 },
        { name: "Egg Maggie", price: 40 },
        { name: "Egg Maggie Cheese", price: 50 },
        { name: "Chicken Maggie", price: 50 },
        { name: "Chicken Maggie Cheese", price: 60 },
        { name: "Masala Maggie", price: 40 },
        { name: "Masala Maggie Cheese", price: 50 },
        { name: "Masala Maggie Spicy", price: 45 },
        { name: "Masala Maggie Spicy Cheese", price: 55 },
        { name: "Mushroom Maggie", price: 50 },
        { name: "Mushroom Cheese Maggie", price: 60 },
        { name: "Mushroom Masala Maggie", price: 60 },
        { name: "Mushroom Masala Cheese Maggie", price: 70 },
        { name: "Schezwan Maggie", price: 40 },
        { name: "Veg Maggie", price: 40 },
        { name: "Veg Cheese Maggie", price: 50 },
        { name: "Veg Masala Maggie", price: 50 },
        { name: "Veg Masala Cheese Maggie", price: 60 },
        { name: "Paneer Maggie", price: 50 },
        { name: "Paneer Cheese Maggie", price: 60 }
      ],
      "SANDWICH": [
        { name: "Veg Sandwich", price: 40 },
        { name: "Veg Cheese Sandwich", price: 50 },
        { name: "Veg Club Sandwich", price: 60 },
        { name: "Egg Sandwich", price: 40 },
        { name: "Egg Cheese Sandwich", price: 50 },
        { name: "Egg Tikka Sandwich", price: 50 },
        { name: "Egg Schezwan Sandwich", price: 50 },
        { name: "Veg Tikka Sandwich", price: 50 },
        { name: "Veg Schezwan Sandwich", price: 50 },
        { name: "Mushroom Sandwich", price: 50 },
        { name: "Mushroom Cheese Sandwich", price: 60 },
        { name: "Mushroom Tikka Sandwich", price: 60 },
        { name: "Schezwan Mushroom Sandwich", price: 60 },
        { name: "Paneer Sandwich", price: 50 },
        { name: "Paneer Butter Masala Sandwich", price: 60 },
        { name: "Paneer Tikka Sandwich", price: 60 },
        { name: "Paneer Schezwan Sandwich", price: 60 },
        { name: "Paneer Cheese Sandwich", price: 60 },
        { name: "Paneer Club Sandwich", price: 70 },
        { name: "Chicken Sandwich", price: 50 },
        { name: "Pepper Chicken Sandwich", price: 60 },
        { name: "Chicken Schezwan Sandwich", price: 60 },
        { name: "Chicken Tikka Sandwich", price: 60 },
        { name: "Butter Chicken Sandwich", price: 60 },
        { name: "Chicken Cheese Sandwich", price: 60 },
        { name: "Chicken Club Sandwich", price: 70 },
        { name: "Chilly Chicken Sandwich", price: 60 },
        { name: "Chilly Chicken Cheese Sandwich", price: 70 },
        { name: "Plain Cheese Sandwich", price: 30 },
        { name: "Chilly Cheese Sandwich", price: 40 },
        { name: "Chocolate Sandwich", price: 40 },
        { name: "Chocolate Cheese Sandwich", price: 50 },
        { name: "Chocolate Club Sandwich", price: 60 },
        { name: "Fruit Sandwich", price: 50 },
        { name: "Fruit Club Sandwich", price: 70 },
        { name: "Butter Toast Sandwich", price: 30 },
        { name: "Butter Sugar Toast Sandwich", price: 30 }
      ],

      "BREAD OMELETTE": [
        { name: "Plain Bread Omelet", price: 40 },
        { name: "Cheese Bread Omelet", price: 50 },
        { name: "Chilly Cheese Bread Omelet", price: 55 },
        { name: "Chicken Bread Omelet", price: 60 },
        { name: "Chicken Cheese Bread Omelet", price: 70 },
        { name: "Pepper Chicken Bread Omelet", price: 70 },
        { name: "Schezwan Chicken Bread Omelet", price: 70 },
        { name: "Pepper Chicken Cheese Bread Omelet", price: 70 },
        { name: "Schezwan Chicken Cheese Bread Omelet", price: 70 }
      ],

      "COLD BEVERAGES": [
        { name: "Cold Coffee", price: 40 },
        { name: "Cold Coffee With Ice Cream", price: 50 },
        { name: "Cold Boost", price: 50 },
        { name: "Cold Boost With Ice Cream", price: 60 },
        { name: "Cold Horlicks", price: 45 },
        { name: "Cold Horlicks With Ice Cream", price: 55 }
      ],
      "SPECIAL SHAKES": [
        { name: "Dry Fruit Shake", price: 50 },
        { name: "Oreo Shake", price: 50 },
        { name: "KitKat Shake", price: 50 },
        { name: "Snickers Shake", price: 50 },
        { name: "Bourbon Shake", price: 50 },
        { name: "Chocolate Shake", price: 50 },
        { name: "Butterscotch Shake", price: 50 },
        { name: "Vanilla Shake", price: 50 },
        { name: "Pista Shake", price: 50 },
        { name: "Black Currant Shake", price: 50 },
        { name: "Blueberry Shake", price: 50 },
        { name: "Strawberry Shake", price: 50 }
      ],

      "MOJITO": [
        { name: "Normal Mojito", price: 40 },
        { name: "Mint Mojito", price: 40 },
        { name: "Pineapple Mojito", price: 45 },
        { name: "Kiwi Mojito", price: 45 },
        { name: "Strawberry Mojito", price: 45 },
        { name: "Blue Mojito", price: 40 },
        { name: "Butterscotch Mojito", price: 45 },
        { name: "Blueberry Mojito", price: 45 },
        { name: "Black Currant Mojito", price: 45 }
      ],

      "BIRIYANI": [
        { name: "Chicken Biriyani", price: 100 },
        { name: "Special Biriyani Chettinadu", price: 140 },
        { name: "Lollipop Biriyani", price: 140 },
        { name: "Mughal Biriyani", price: 140 },
        { name: "Egg Biriyani", price: 90 },
        { name: "Kushka", price: 80 }
      ],

      "RICE / NOODLES / PASTA": [
        { name: "Szechuan Chicken Rice / Noodles / Pasta", price: 100 },
        { name: "Szechuan Veg Rice / Noodles / Pasta", price: 80 },
        { name: "Chicken Fried Rice / Noodles / Pasta", price: 90 },
        { name: "Egg Fried Rice / Noodles / Pasta", price: 80 },
        { name: "Veg Fried Rice / Noodles / Pasta", price: 70 },
        { name: "Mushroom Rice / Noodles / Pasta", price: 90 },
        { name: "Paneer Rice / Noodles / Pasta", price: 90 },
        { name: "Gobi Fried Rice / Noodles / Pasta", price: 90 },
        { name: "Veg Mixed Rice / Noodles / Pasta", price: 100 },
        { name: "Prawn Fried Rice / Noodles / Pasta", price: 120 },
        { name: "Mutton Fried Rice / Noodles / Pasta", price: 140 },
        { name: "Sweet Corn Rice / Noodles / Pasta", price: 90 },
        { name: "Aloo Pasta", price: 90 },
        { name: "Sweet Corn Chicken Pasta", price: 130 },
        { name: "Veg Pulav", price: 100 },
        { name: "Paneer Pulav", price: 100 },
        { name: "Jeera Rice", price: 70 },
        { name: "Veg Hakka Noodles", price: 90 },
        { name: "Non Veg Hakka Noodles", price: 100 },
        { name: "Ghee Rice", price: 80 },
        { name: "Gobi Pulav", price: 100 },
        { name: "Steam Rice", price: 70 }
      ],

      "VEG ROLL": [
        { name: "Veg Roll", price: 50 },
        { name: "Paneer Roll", price: 60 },
        { name: "Paneer Tikka Roll", price: 70 },
        { name: "Paneer Malai Roll", price: 80 },
        { name: "Paneer Keema Roll", price: 70 },
        { name: "Mushroom Roll", price: 70 },
        { name: "Mushroom Malai Roll", price: 80 },
        { name: "Mushroom Manchurian Roll", price: 70 },
        { name: "Gobi Manchurian Roll", price: 70 },
        { name: "Gobi Malai Roll", price: 80 }
      ],

      "NON VEG ROLL": [
        { name: "Chicken Roll", price: 60 },
        { name: "Chicken Cheese Roll", price: 70 },
        { name: "Chicken Keema Roll", price: 80 },
        { name: "Chicken Keema Cheese Roll", price: 90 },
        { name: "Chicken Kabab Roll", price: 80 },
        { name: "Chicken Cheese Kabab Roll", price: 90 },
        { name: "Chicken Tikka Roll", price: 80 },
        { name: "Chicken Tikka Cheese Roll", price: 90 },
        { name: "Chilly Chicken Roll", price: 80 },
        { name: "Malai Chicken Roll", price: 80 },
        { name: "Chicken Manchurian Roll", price: 80 },
        { name: "Chettinad Chicken Roll", price: 80 },
        { name: "Kadai Chicken Roll", price: 80 },
        { name: "Egg Roll", price: 50 },
        { name: "Double Egg Roll", price: 60 },
        { name: "Egg Cheese Roll", price: 60 },
        { name: "Chicken Double Egg Roll", price: 80 }
      ],

      "CHINESE SIDE DISH (VEG)": [
        { name: "Veg Manchurian", price: 100 },
        { name: "Gobi Manchurian", price: 110 },
        { name: "Chilli Veg", price: 100 },
        { name: "Chilli Gobi", price: 100 },
        { name: "Mushroom Manchurian", price: 110 },
        { name: "Chilli Mushroom", price: 110 },
        { name: "Paneer Manchurian", price: 110 },
        { name: "Chilli Paneer", price: 120 },
        { name: "Szechuan Paneer", price: 120 },
        { name: "Garlic Paneer", price: 120 },
        { name: "Ginger Paneer", price: 120 },
        { name: "Dragon Paneer", price: 140 },
        { name: "Chilli Potato", price: 100 },
        { name: "Chilli Babycorn", price: 100 },
        { name: "Babycorn Manchurian", price: 110 },
        { name: "Szechuan Gobi", price: 110 },
        { name: "Garlic Veg", price: 110 }
      ],

      "STARTER (VEG & NON VEG)": [
        { name: "Gobi 65", price: 100 },
        { name: "Paneer 65", price: 100 },
        { name: "Paneer Pakoda", price: 100 },
        { name: "Chicken 65", price: 110 },
        { name: "Chicken Lollipop (6 Pcs)", price: 120 },
        { name: "Chicken Drumstick (6 Pcs)", price: 140 },
        { name: "Chicken Pakoda", price: 100 },
        { name: "Chilly Chicken", price: 110 },
        { name: "Chicken Manchurian", price: 110 },
        { name: "Szechuan Chicken", price: 120 },
        { name: "Dragon Chicken", price: 140 },
        { name: "Ginger Chicken", price: 120 },
        { name: "Garlic Chicken", price: 120 },
        { name: "Chilli Egg", price: 90 },
        { name: "Pepper Chicken", price: 120 },
        { name: "Honey Chilli Potato", price: 120 },
        { name: "Chicken Lollipop Gravy", price: 140 }
      ],

      "COMBINATION JUICE": [
        { name: "Sweet Lime / Orange", price: 60 },
        { name: "Sweet Lime / Pineapple", price: 60 },
        { name: "Orange / Pineapple", price: 60 },
        { name: "Pineapple / Papaya", price: 60 },
        { name: "Sweet Lime / Orange / Papaya", price: 60 },
        { name: "Strawberry / Orange / Papaya", price: 60 },
        { name: "Strawberry / Dates / Sweet Lime", price: 60 },
        { name: "Orange / Pineapple / Lemon", price: 60 },
        { name: "Sweet Lime / Mint / Lemon", price: 60 },
        { name: "Sweet Lime / Pineapple / Lemon", price: 60 },
        { name: "Pineapple / Tomato / Lemon", price: 60 },
        { name: "Pineapple / Mint / Lemon", price: 60 },
        { name: "Sweet Lime / Pineapple / Mint", price: 60 }
      ]

    }
  },
  {
    id: 6, name: "Queen's Court", img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', phones: ['7200794701', '8122394701'], note: 'MINIMUM ORDER ₹150',
    menu: {

      "Rolls (Uruttu)": [
        { name: "Chicken Roll", price: 60 },
        { name: "Chicken Egg Roll", price: 70 },
        { name: "Chicken Mayo Roll", price: 70 },
        { name: "Chilly Chicken Roll", price: 70 },
        { name: "Chicken Manchurian Roll", price: 70 },
        { name: "Butter Chicken Roll", price: 70 },
        { name: "Hariyali Chicken Roll", price: 70 },
        { name: "Double Egg Chicken Roll", price: 80 },
        { name: "Chicken Egg Mayo Roll", price: 80 },
        { name: "Honey Chicken Roll", price: 80 },
        { name: "Peri Peri Chicken Roll", price: 80 },
        { name: "Egg Chilly Chicken Roll", price: 80 },
        { name: "Egg Butter Chicken Roll", price: 80 },
        { name: "Malai Chicken Roll", price: 80 },
        { name: "Egg Hariyali Chicken Roll", price: 80 },
        { name: "Egg Malai Chicken Roll", price: 80 },
        { name: "Barbeque Chicken Roll", price: 90 },
        { name: "Chicken Tikka Roll", price: 90 },
        { name: "Malai Chicken Kebab Roll", price: 100 },
        { name: "Chicken Cheese Mayo Roll", price: 100 },
        { name: "Hariyali Chicken Kebab Roll", price: 100 },
        { name: "Double Chicken Mayo Roll", price: 110 },
        { name: "Fish Tikka Roll", price: 110 },
        { name: "Prawn Roll", price: 110 },
        { name: "Chicken Tikka Cheese Roll", price: 110 },
        { name: "Queens Court Spl. Chicken Roll", price: 110 },
        { name: "Double Egg Double Chicken Roll", price: 120 },
        { name: "Malai Chicken Kebab Cheese Roll", price: 120 },
        { name: "Hariyali Chicken Kebab Cheese Roll", price: 120 },
        { name: "Maharaja Chicken Roll", price: 130 },
        { name: "Fish Tikka Cheese Roll", price: 130 },
        { name: "Prawn Cheese Roll", price: 130 },
        { name: "Double Chicken Cheese Mayo Roll", price: 130 }
      ],

      "Paneer Roll": [
        { name: "Paneer Roll", price: 60 },
        { name: "Paneer Mayo Roll", price: 70 },
        { name: "Chilly Paneer Roll", price: 70 },
        { name: "Honey Paneer Roll", price: 80 },
        { name: "Malai Paneer Roll", price: 80 },
        { name: "Peri Peri Paneer Roll", price: 80 },
        { name: "Paneer Tikka Roll", price: 80 },
        { name: "Malai Paneer Tikka Roll", price: 90 },
        { name: "Double Paneer Roll", price: 90 },
        { name: "Paneer Cheese Mayo Roll", price: 90 },
        { name: "Paneer Tikka Cheese Roll", price: 100 },
        { name: "Queen Court Spl. Paneer Roll", price: 100 },
        { name: "Malai Paneer Tikka Cheese Roll", price: 110 }
      ],

      "Veg Roll": [
        { name: "Veg Roll", price: 50 },
        { name: "Mushroom Roll", price: 60 },
        { name: "Veg Mayo Roll", price: 60 },
        { name: "Veg Cheese Roll", price: 70 },
        { name: "Mushroom Mayo Roll", price: 70 },
        { name: "Aloo Jeera Roll", price: 70 },
        { name: "Aloo Methi Roll", price: 70 },
        { name: "Chilly Mushroom Roll", price: 70 },
        { name: "Gobi Manchurian Roll", price: 70 },
        { name: "Baby Corn Manchurian Roll", price: 70 },
        { name: "Gobi Manchurian Mayo Roll", price: 80 },
        { name: "Gobi Manchurian Cheese Roll", price: 90 },
        { name: "Baby Corn Manchurian Cheese Roll", price: 90 },
        { name: "Aloo Jeera Cheese Roll", price: 90 },
        { name: "Aloo Methi Cheese Roll", price: 90 },
        { name: "Mushroom Cheese Mayo Roll", price: 90 },
        { name: "Mix Veg Roll", price: 100 },
        { name: "Mix Veg Cheese Roll", price: 120 }
      ],

      "Egg Roll": [
        { name: "Egg Roll", price: 50 },
        { name: "Egg Mayo Roll", price: 60 },
        { name: "Double Egg Roll", price: 60 },
        { name: "Triple Egg Roll", price: 70 },
        { name: "Egg Mushroom Roll", price: 70 },
        { name: "Egg Paneer Roll", price: 70 },
        { name: "Egg Gobi Manchurian Roll", price: 80 },
        { name: "Egg Cheese Mayo Roll", price: 80 }
      ],

      "Mini Roll": [
        { name: "Mini Chicken Roll", price: 50 },
        { name: "Mini Paneer Roll", price: 50 },
        { name: "Mini Mushroom Roll", price: 50 }
      ],

      "Chinese Starter": [
        { name: "Paneer 65 (Dry)", price: 120 },
        { name: "Dragon Paneer", price: 130 },
        { name: "Garlic Paneer", price: 130 },
        { name: "Paneer Manchurian", price: 120 },
        { name: "Chilly Paneer", price: 120 },
        { name: "Mushroom 65", price: 100 },
        { name: "Mushroom Manchurian", price: 100 },
        { name: "Gobi 65 (Dry)", price: 100 },
        { name: "Chilly Gobi", price: 100 },
        { name: "Gobi Manchurian", price: 100 },
        { name: "Babycorn 65 (Dry)", price: 100 },
        { name: "Chilly Babycorn", price: 100 },
        { name: "Baby Corn Manchurian", price: 100 },
        { name: "Chilly Potato", price: 80 },
        { name: "Honey Chilly Potato", price: 100 }
      ],

      "Chilly Parota": [
        { name: "Veg Chilly Parota", price: 80 },
        { name: "Paneer Chilly Parota", price: 100 },
        { name: "Mushroom Chilly Parota", price: 100 },
        { name: "Gobi Chilly Parota", price: 100 },
        { name: "Chicken Chilly Parota", price: 110 },
        { name: "Prawn Chilly Parota", price: 130 }
      ],

      "Chow Mein": [
        { name: "Prawn Chowmein", price: 150 },
        { name: "Chicken Chowmein", price: 110 },
        { name: "Veg Chowmein", price: 80 },
        { name: "Paneer Chowmein", price: 100 },
        { name: "Mushroom Chowmein", price: 100 },
        { name: "Babycorn Chowmein", price: 100 },
        { name: "Egg Chowmein", price: 90 }
      ],

      "Pasta": [
        { name: "Prawn Pasta", price: 150 },
        { name: "Szechwan Prawn Pasta", price: 160 },
        { name: "Fish Tikka Pasta", price: 150 },
        { name: "Szechwan Fish Tikka Pasta", price: 160 },
        { name: "Tandoori Chicken Pasta", price: 130 },
        { name: "Szechwan Chicken Pasta", price: 120 },
        { name: "Chicken Pasta", price: 110 },
        { name: "Egg Pasta", price: 80 },
        { name: "Mix Non-Veg Pasta", price: 160 },
        { name: "Paneer Tikka Pasta", price: 120 },
        { name: "Szechwan Paneer Tikka Pasta", price: 130 },
        { name: "Paneer Pasta", price: 110 },
        { name: "Mushroom Pasta", price: 100 },
        { name: "Gobi Pasta", price: 100 },
        { name: "Babycorn Pasta", price: 100 },
        { name: "Veg Pasta", price: 80 },
        { name: "Mix Veg Pasta", price: 120 }
      ],

      "Egg Variety": [
        { name: "Egg Burjee", price: 60 },
        { name: "Egg Podimas", price: 60 },
        { name: "Chilly Egg (Dry)", price: 80 },
        { name: "Onion Omelette", price: 40 },
        { name: "Capsicum Omelette", price: 40 },
        { name: "Mushroom Omelette", price: 50 },
        { name: "Cheese Omelette", price: 70 },
        { name: "Prawn Omelette", price: 100 }
      ],

      "Rice & Noodles (Non-Veg)": [
        { name: "Chicken Fried Rice", price: 110 },
        { name: "Chicken Noodles", price: 110 },
        { name: "Szechwan Chicken Fried Rice", price: 120 },
        { name: "Szechwan Chicken Noodles", price: 120 },
        { name: "Tandoori Chicken Fried Rice", price: 130 },
        { name: "Tandoori Chicken Noodles", price: 130 },
        { name: "Prawn Fried Rice", price: 150 },
        { name: "Prawn Noodles", price: 150 },
        { name: "Fish Tikka Fried Rice", price: 150 },
        { name: "Fish Tikka Noodles", price: 150 }
      ],

      "Rice & Noodles (Veg)": [
        { name: "Paneer Fried Rice", price: 110 },
        { name: "Paneer Noodles", price: 110 },
        { name: "Mushroom Fried Rice", price: 100 },
        { name: "Mushroom Noodles", price: 100 },
        { name: "Gobi Fried Rice", price: 100 },
        { name: "Gobi Noodles", price: 100 },
        { name: "Babycorn Fried Rice", price: 100 },
        { name: "Babycorn Noodles", price: 100 },
        { name: "Veg Fried Rice", price: 80 },
        { name: "Veg Noodles", price: 80 }
      ],

      "Indian Breads": [
        { name: "Plain Roti", price: 20 },
        { name: "Butter Roti", price: 25 },
        { name: "Plain Naan", price: 25 },
        { name: "Butter Naan", price: 30 },
        { name: "Masala Naan", price: 35 },
        { name: "Chilly Naan", price: 35 },
        { name: "Garlic Naan", price: 40 },
        { name: "Cheese Naan", price: 50 }
      ],

      "Paratha / Kulcha": [
        { name: "Tandoori Paratha", price: 30 },
        { name: "Lacha Paratha", price: 30 },
        { name: "Pudhina Paratha", price: 30 },
        { name: "Masala Paratha", price: 40 },
        { name: "Aloo Paratha", price: 50 },
        { name: "Gobi Paratha", price: 50 },
        { name: "Paneer Paratha", price: 60 },
        { name: "Chicken Kulcha", price: 70 },
        { name: "Masala Kulcha", price: 40 },
        { name: "Aloo Kulcha", price: 50 },
        { name: "Gobi Kulcha", price: 50 },
        { name: "Paneer Kulcha", price: 60 }
      ],

      "Indian Combo": [
        { name: "Jeera Rice + Dal Fry", price: 100 },
        { name: "Jeera Rice + Dal Tadka", price: 110 },
        { name: "Jeera Rice + Egg Curry", price: 100 },
        { name: "Jeera Rice + Channa Masala", price: 110 },
        { name: "Jeera Rice + Aloo Methi", price: 110 },
        { name: "Jeera Rice + Chicken Curry", price: 150 },
        { name: "Jeera Rice + Fish Curry", price: 170 },
        { name: "Jeera Rice + Prawn Masala", price: 170 }
      ],

      "Chinese Combo": [
        { name: "Veg Rice/Noodles + Gobi Manchurian", price: 120 },
        { name: "Veg Rice/Noodles + Paneer Manchurian", price: 130 },
        { name: "Veg Pasta + Chilly Paneer", price: 130 },
        { name: "Babycorn Rice/Noodles + Chilly Gobi", price: 130 },
        { name: "Egg Rice/Noodles + Babycorn Manchurian", price: 130 },
        { name: "Egg Rice/Noodles + Chilly Chicken", price: 150 },
        { name: "Chicken Pasta + Chicken Manchurian", price: 170 },
        { name: "Chicken Rice/Noodles + Chicken Manchurian", price: 170 },
        { name: "Chicken Rice/Noodles + Garlic Chicken", price: 180 },
        { name: "Chicken Rice/Noodles + Pepper Chicken", price: 180 }
      ],

      "Indo-Chinese Combo": [
        { name: "Egg Rice/Noodles + Egg Keema Masala", price: 110 },
        { name: "Gobi Rice/Noodles + Babycorn Masala", price: 130 },
        { name: "Mushroom Rice/Noodles + Egg Keema Masala", price: 130 },
        { name: "Veg Rice/Noodles + Chicken Curry", price: 150 },
        { name: "Egg Rice/Noodles + Egg Chettinad Masala", price: 120 },
        { name: "Chicken Rice/Noodles + Chicken Masala", price: 160 }
      ]

    }
  },
  {
    id: 7, name: "Butty (The Chat Corner)", img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', phones: ['9123817260'],
    menu: {

      "Fusion Bites Rolls": [
        { name: "Veg Roll", price: 40 },
        { name: "Veg Cheese Roll", price: 50 },
        { name: "Veg Mayo Roll", price: 50 },
        { name: "Aloo Tikka Roll", price: 50 },
        { name: "Aloo Tikka Cheese Roll", price: 60 },
        { name: "Aloo Tikka Mayo Roll", price: 60 },
        { name: "Paneer Kabab Roll", price: 50 },
        { name: "Paneer Kabab Cheese Roll", price: 60 },
        { name: "Paneer Kabab Mayo Roll", price: 60 },
        { name: "Paneer Tikka Roll", price: 60 },
        { name: "Paneer Tikka Cheese Roll", price: 70 },
        { name: "Paneer Tikka Mayo Roll", price: 70 },
        { name: "Mushroom Roll", price: 50 },
        { name: "Mushroom Cheese Roll", price: 60 },
        { name: "Mushroom Mayo Roll", price: 60 },
        { name: "Double Paneer Roll", price: 80 },
        { name: "Double Mushroom Roll", price: 70 },
        { name: "Single Egg Double Paneer Roll", price: 90 },
        { name: "Double Egg Double Paneer Roll", price: 100 },
        { name: "Butty's Spl Chilly Corn Roll", price: 50 },
        { name: "Butty's Spl Chilly Corn Cheese Roll", price: 60 },
        { name: "Butty's Spl Mixed Veg Roll", price: 80 },
        { name: "Paneer Hot Garlic Roll", price: 70 },
        { name: "Gobi Manchurian Roll", price: 60 },
        { name: "Pepper Paneer Roll", price: 60 }
      ],

      "Paneer Special Rolls": [
        { name: "Butter Pepper Paneer Roll", price: 80 },
        { name: "Paneer Bhurji Roll", price: 60 },
        { name: "Paneer Malai Tikka Roll", price: 60 },
        { name: "Mexican Paneer Roll", price: 70 },
        { name: "Chilly Paneer Roll", price: 70 },
        { name: "Spicy Paneer Roll", price: 70 },
        { name: "Achari Paneer Roll", price: 70 },
        { name: "Paneer Methi Roll", price: 70 }
      ],

      "Add Ons": [
        { name: "Cheese Slice", price: 10 },
        { name: "Mayonnaise", price: 10 }
      ],

      "Non Veg Delight Rolls": [
        { name: "Egg Roll", price: 40 },
        { name: "Double Egg Roll", price: 50 },
        { name: "Egg Cheese Roll", price: 50 },
        { name: "Egg Mayo Roll", price: 50 },
        { name: "Chicken Kabab Roll", price: 50 },
        { name: "Chicken Kabab Cheese Roll", price: 60 },
        { name: "Chicken Kabab Mayo Roll", price: 60 },
        { name: "Double Egg Chicken Kabab Roll", price: 70 },
        { name: "Chicken Tikka Roll", price: 60 },
        { name: "Chicken Tikka Mayo Roll", price: 70 },
        { name: "Chicken Tikka Cheese Roll", price: 70 }
      ],

      "Chicken Special Rolls": [
        { name: "Egg Chicken Tikka Roll", price: 70 },
        { name: "Double Chicken Tikka Roll", price: 80 },
        { name: "Butter Chicken Roll", price: 80 },
        { name: "Butter Chicken Cheese Roll", price: 90 },
        { name: "Butter Chicken Mayo Roll", price: 90 },
        { name: "Peri Peri Chicken Kabab Roll", price: 80 },
        { name: "Peri Peri Chicken Cheese Roll", price: 90 },
        { name: "Peri Peri Chicken Mayo Roll", price: 90 },
        { name: "BBQ Chicken Kabab Roll", price: 80 },
        { name: "BBQ Chicken Cheese Roll", price: 90 },
        { name: "BBQ Chicken Mayo Roll", price: 90 },
        { name: "Tangy Chicken Kabab Roll", price: 70 },
        { name: "Mexican Chicken Kabab Roll", price: 70 },
        { name: "Double Chicken Kabab Roll", price: 80 },
        { name: "Chicken Hot Garlic Roll", price: 70 },
        { name: "Pepper Chicken Roll", price: 70 },
        { name: "Butter Pepper Chicken Roll", price: 80 },
        { name: "Tandoori Chicken Roll", price: 80 },
        { name: "Chicken Tikka Malai Roll", price: 70 },
        { name: "Chilli Chicken Roll", price: 70 },
        { name: "Spicy Chicken Roll", price: 70 },
        { name: "Achari Chicken Roll", price: 70 },
        { name: "Chicken Methi Roll", price: 70 },
        { name: "Single Egg Double Chicken Kabab Roll", price: 90 },
        { name: "Double Egg Double Chicken Kabab Roll", price: 100 }
      ],

      "Chaat": [
        { name: "Samosa (1pc)", price: 15 },
        { name: "Cutlet", price: 15 },
        { name: "Kachori", price: 20 },
        { name: "Bread Pakora Set", price: 30 },
        { name: "Pani Puri (8pcs)", price: 30 },
        { name: "Ragda Pani Puri", price: 30 },
        { name: "Chenna Masala", price: 40 },
        { name: "Aloo Puri", price: 50 },
        { name: "Sev Puri", price: 30 },
        { name: "Masala Puri", price: 50 },
        { name: "Bhel Puri", price: 50 },
        { name: "Samosa Chenna", price: 50 },
        { name: "Kachori Chenna", price: 50 },
        { name: "Dahi Kachori", price: 60 },
        { name: "Cutlet Chaat", price: 50 },
        { name: "Dahi Samosa", price: 50 },
        { name: "Dahi Cutlet", price: 50 },
        { name: "Dahi Puri", price: 60 },
        { name: "Dahi Papadi Chaat", price: 60 },
        { name: "Dahi Bhel Puri", price: 60 },
        { name: "Mix Chaat", price: 60 },
        { name: "Aloo Tikki Chaat", price: 60 },
        { name: "Fruit Bhel Puri", price: 60 },
        { name: "Ragda Pattis", price: 60 },
        { name: "Ragda Samosa", price: 60 },
        { name: "Ragda Cutlet", price: 60 },
        { name: "Ragda Papdi", price: 60 },
        { name: "Raj Kachori", price: 50 },
        { name: "Chummer Chaat", price: 50 },
        { name: "Spl Butter Samosa Chaat", price: 50 },
        { name: "Paneer Samosa Chaat", price: 60 },
        { name: "Paneer Cutlet Chaat", price: 40 },
        { name: "Boiled Egg Chaat", price: 40 },
        { name: "Corn Bhel", price: 60 },
        { name: "Corn Dahi Puri", price: 70 },
        { name: "Kachori Bhel", price: 70 },
        { name: "Samosa Bhel", price: 60 },
        { name: "Chutney Puri", price: 30 },
        { name: "Sprouts Chaat", price: 50 },
        { name: "Dabeli", price: 40 }
      ],

      "Pav Bhaji": [
        { name: "Pav Bhaji", price: 60 },
        { name: "Fry Pav Bhaji", price: 70 },
        { name: "Cheese Pav Bhaji", price: 70 },
        { name: "Paneer Pav Bhaji", price: 70 },
        { name: "Mushroom Pav Bhaji", price: 70 },
        { name: "Extra Pav", price: 20 },
        { name: "Extra Bhaji", price: 10 }
      ],

      "Vada Pav": [
        { name: "Vada Pav", price: 25 },
        { name: "Schezwan Vada Pav", price: 30 },
        { name: "Masala Vada Pav", price: 50 },
        { name: "Butter Toast Vada Pav", price: 40 },
        { name: "Maharaja Vada Pav", price: 50 },
        { name: "Masala Paneer Vada Pav", price: 60 },
        { name: "Masala Mushroom Vada Pav", price: 60 }
      ],

      "Chole Bhature": [
        { name: "Chole Bhature (2pcs)", price: 80 },
        { name: "Extra Bhature", price: 40 },
        { name: "Extra Chole", price: 10 }
      ],

      "Maggie": [
        { name: "Plain Maggie", price: 30 },
        { name: "Soupy Maggie", price: 30 },
        { name: "Ketchup Maggie", price: 30 },
        { name: "Masala Maggie", price: 30 },
        { name: "Veg Maggie", price: 40 },
        { name: "Cheese Maggie", price: 40 },
        { name: "Egg Maggie", price: 40 },
        { name: "Chicken Maggie", price: 50 },
        { name: "Paneer Maggie", price: 50 },
        { name: "Mushroom Maggie", price: 50 },
        { name: "Schezwan Maggie", price: 50 },
        { name: "Corn Cheese Maggie", price: 50 },
        { name: "Peri Peri Maggie", price: 40 },
        { name: "Butter Garlic Maggie", price: 50 },
        { name: "Mayo Maggie", price: 40 },
        { name: "Cheese Mayo Maggie", price: 50 },
        { name: "Chilli Garlic Maggie", price: 35 },
        { name: "Butter Pepper Maggie", price: 45 },
        { name: "Onion Capsicum Maggie", price: 45 },
        { name: "Tomato Cheese Maggie", price: 45 },
        { name: "Cheese Mint Maggie", price: 45 },
        { name: "Butter Masala Maggie", price: 50 }
      ],

      "Bread Omelette": [
        { name: "Plain Bread Omelette", price: 30 },
        { name: "Butter Toast Bread Omelette", price: 40 },
        { name: "Cheese Bread Omelette", price: 40 },
        { name: "Mayo Bread Omelette", price: 35 },
        { name: "Aloo Masala Bread Omelette", price: 40 },
        { name: "Green Chilli Bread Omelette", price: 35 },
        { name: "Corn & Cheese Bread Omelette", price: 50 },
        { name: "Pudina Bread Omelette", price: 35 },
        { name: "Mexican Bread Omelette", price: 40 },
        { name: "Tangy Bread Omelette", price: 40 },
        { name: "Peri Peri Bread Omelette", price: 50 },
        { name: "Tandoori Bread Omelette", price: 50 },
        { name: "Chicken Bread Omelette", price: 50 },
        { name: "Paneer Bread Omelette", price: 50 },
        { name: "Mushroom Bread Omelette", price: 50 },
        { name: "Double Decker Bread Omelette", price: 70 },
        { name: "Double Decker Chicken Bread Omelette", price: 70 },
        { name: "Double Decker Paneer Bread Omelette", price: 70 },
        { name: "Double Decker Mushroom Bread Omelette", price: 70 }
      ],

      "Omelette": [
        { name: "Plain Omelette", price: 20 },
        { name: "Butter Omelette", price: 30 },
        { name: "Butter Masala Omelette", price: 40 },
        { name: "Tomato Omelette", price: 50 },
        { name: "Chilli Garlic Omelette", price: 30 },
        { name: "Chicken Omelette", price: 40 },
        { name: "Cheese Omelette", price: 40 },
        { name: "Chicken Cheese Omelette", price: 50 },
        { name: "Peri Peri Omelette", price: 40 },
        { name: "Schezwan Omelette", price: 40 },
        { name: "Tandoori Omelette", price: 40 },
        { name: "Half Fry Omelette", price: 30 }
      ],

      "Bombay Sandwich": [
        { name: "Bombay Sandwich", price: 30 },
        { name: "Veg Sandwich", price: 30 },
        { name: "Veg Cheese Sandwich", price: 40 },
        { name: "Plain Cheese Sandwich", price: 30 },
        { name: "Butter Toast Sandwich", price: 40 },
        { name: "Cucumber Sandwich", price: 30 },
        { name: "Cucumber Cheese Sandwich", price: 40 },
        { name: "Chilli Cheese Toast Sandwich", price: 40 },
        { name: "Onion Chilli Toast Sandwich", price: 40 },
        { name: "Corn Chilli Toast Sandwich", price: 40 },
        { name: "Mayo Toast Sandwich", price: 30 },
        { name: "Paneer Masala Toast Sandwich", price: 40 },
        { name: "Mushroom Masala Toast Sandwich", price: 40 },
        { name: "Chicken Toast Sandwich", price: 50 },
        { name: "Chicken Cheese Toast Sandwich", price: 60 }
      ],

      "Tacos": [
        { name: "Soft Taco", price: 50 },
        { name: "Veg Taco", price: 50 },
        { name: "Doritos Locus Taco", price: 60 },
        { name: "Doritos Locus Supreme", price: 60 },
        { name: "Cheesy Garlic Crunchy Taco", price: 60 },
        { name: "Cheesy Veg Crunchy Taco", price: 70 },
        { name: "Spicy Potato Supreme Taco", price: 60 },
        { name: "Taco Supreme (Chicken/Paneer/Mushroom)", price: 80 },
        { name: "Naked Chicken Taco (Paneer/Mushroom)", price: 80 },
        { name: "Kick in Chicken Taco (Paneer/Mushroom)", price: 80 },
        { name: "Spicy Chicken Taco (Paneer/Mushroom)", price: 80 },
        { name: "Ultimate Chicken Taco (Paneer/Mushroom)", price: 80 },
        { name: "Chicken Flat Bread Taco (Paneer/Mushroom)", price: 80 },
        { name: "Cheesy Double Decker Taco (Chicken/Paneer/Mushroom)", price: 100 }
      ],

      "Paratha": [
        { name: "Plain Paratha (2pcs)", price: 50 },
        { name: "Plain Cheese Paratha (2pcs)", price: 70 },
        { name: "Mint Paratha (2pcs)", price: 50 },
        { name: "Mint Cheese Paratha (2pcs)", price: 70 },
        { name: "Onion Paratha (2pcs)", price: 60 },
        { name: "Onion Cheese Paratha (2pcs)", price: 80 },
        { name: "Methi Paratha (2pcs)", price: 60 },
        { name: "Methi Cheese Paratha (2pcs)", price: 80 },
        { name: "Garlic Paratha (2pcs)", price: 80 },
        { name: "Garlic Cheese Paratha (2pcs)", price: 100 },
        { name: "Aloo Paratha (2pcs)", price: 80 },
        { name: "Aloo Cheese Paratha (2pcs)", price: 100 },
        { name: "Paneer Paratha (2pcs)", price: 90 },
        { name: "Paneer Cheese Paratha (2pcs)", price: 110 },
        { name: "Gobi Paratha (2pcs)", price: 90 },
        { name: "Gobi Cheese Paratha (2pcs)", price: 110 },
        { name: "Cheese Paratha (2pcs)", price: 90 },
        { name: "Chicken Paratha (2pcs)", price: 100 },
        { name: "Chicken Cheese Paratha (2pcs)", price: 120 },
        { name: "Mix Veg Paratha (2pcs)", price: 100 },
        { name: "Mix Veg Cheese Paratha (2pcs)", price: 120 }
      ]

    }
  },
  {
    id: 8, name: "Sohana Biriyani House", img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', phones: ['6379887543'],
    menu: {

      "Biryani": [
        { name: "Chicken Hyderabadi Biriyani", price: 110 },
        { name: "Chicken Fry Piece Biriyani", price: 130 },
        { name: "Chicken Lollipop Biriyani", price: 140 },
        { name: "SPL Chicken Biriyani", price: 140 },
        { name: "Chilli Chicken Biriyani", price: 160 },
        { name: "Chicken Manchurian Biriyani", price: 160 },
        { name: "Egg Biriyani", price: 90 },
        { name: "Plain Biriyani", price: 70 }
      ],

      "Tawa Roll": [
        { name: "Chicken Tawa Roll", price: 60 },
        { name: "Chicken Cheese Tawa Roll", price: 70 },
        { name: "Chicken Mayo Tawa Roll", price: 70 },
        { name: "Chicken Tikka Tawa Roll", price: 70 },
        { name: "Chicken Tikka Mayo Roll", price: 80 },
        { name: "Chicken Tikka Cheese Roll", price: 80 },
        { name: "Paneer Tawa Roll", price: 60 },
        { name: "Cheese Paneer Tawa Roll", price: 60 },
        { name: "Chilly Gobi Tawa Roll", price: 70 },
        { name: "Veg Tawa Roll", price: 60 },
        { name: "Egg Tawa Roll", price: 40 }
      ],

      "Rice / Noodles": [
        { name: "Chicken Fried Rice", price: 90 },
        { name: "Chicken Noodles", price: 100 },
        { name: "Egg Fried Rice", price: 80 },
        { name: "Egg Noodles", price: 90 },
        { name: "Szechwan Chicken Fried Rice", price: 100 },
        { name: "Szechwan Chicken Noodles", price: 110 },
        { name: "Paneer Fried Rice", price: 100 },
        { name: "Paneer Noodles", price: 110 },
        { name: "Veg Fried Rice", price: 70 },
        { name: "Veg Noodles", price: 80 }
      ]

    }
  },
  {
    id: 9, name: "Butty (The Food Paradise)", img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', phones: ['7200318908', '812284547', '9940175123'],
    menu: {

      "Biryani": [
        { name: "Chicken Biriyani", price: 100 },
        { name: "Half Biriyani", price: 70 },
        { name: "Spl Chicken Biriyani", price: 120 },
        { name: "Lollipop Biriyani", price: 130 },
        { name: "Hyderabadi Biriyani", price: 120 },
        { name: "Mughlai Biriyani", price: 130 },
        { name: "Fish Biriyani", price: 130 },
        { name: "Prawn Biriyani", price: 130 },
        { name: "Egg Biriyani", price: 90 },
        { name: "Kushka", price: 70 },
        { name: "Chicken Chilli Biriyani", price: 140 },
        { name: "Chicken Fry Egg Biriyani", price: 160 },
        { name: "Chicken Tikka Biriyani", price: 160 },
        { name: "Kabab Chicken Biriyani", price: 180 },
        { name: "Tandoori Chicken Biriyani", price: 180 },
        { name: "Chilli Chicken Biriyani", price: 160 },
        { name: "Veg Biriyani", price: 90 },
        { name: "Paneer Biriyani", price: 100 },
        { name: "Mushroom Biriyani", price: 100 }
      ],

      "Roll / Veg Fusion Bites": [
        { name: "Veg Roll", price: 40 },
        { name: "Veg Cheese Roll", price: 50 },
        { name: "Veg Mayo Roll", price: 50 },
        { name: "Aloo Tikka Roll", price: 50 },
        { name: "Aloo Tikka Cheese Roll", price: 60 },
        { name: "Aloo Tikka Mayo Roll", price: 60 },
        { name: "Paneer Kabab Roll", price: 50 },
        { name: "Paneer Kabab Cheese Roll", price: 60 },
        { name: "Paneer Kabab Mayo Roll", price: 60 },
        { name: "Paneer Tikka Roll", price: 60 },
        { name: "Paneer Tikka Cheese Roll", price: 70 },
        { name: "Paneer Tikka Mayo Roll", price: 70 },
        { name: "Malai Paneer Roll", price: 70 },
        { name: "Malai Paneer Tikka Roll", price: 70 },
        { name: "Mushroom Roll", price: 50 },
        { name: "Mushroom Cheese Roll", price: 60 },
        { name: "Mushroom Mayo Roll", price: 60 },
        { name: "Double Paneer Roll", price: 80 },
        { name: "Double Mushroom Roll", price: 70 }
      ],

      "Non Veg Delight": [
        { name: "Egg Roll", price: 40 },
        { name: "Double Egg Roll", price: 50 },
        { name: "Egg Cheese Roll", price: 50 },
        { name: "Egg Mayo Roll", price: 50 },
        { name: "Chicken Kabab Roll", price: 50 },
        { name: "Chicken Kabab Cheese Roll", price: 60 },
        { name: "Chicken Kabab Mayo Roll", price: 60 },
        { name: "Chicken Tikka Roll", price: 60 },
        { name: "Chicken Tikka Mayo Roll", price: 70 },
        { name: "Chicken Tikka Cheese Roll", price: 70 },
        { name: "Butter Chicken Roll", price: 80 },
        { name: "Butter Chicken Cheese Roll", price: 90 },
        { name: "Peri Peri Chicken Roll", price: 80 },
        { name: "Peri Peri Chicken Cheese Roll", price: 90 },
        { name: "BBQ Chicken Roll", price: 80 },
        { name: "BBQ Chicken Cheese Roll", price: 90 },
        { name: "Tangy Chicken Roll", price: 70 },
        { name: "Mexican Chicken Roll", price: 70 }
      ],

      "Kabab Shawarma": [
        { name: "Kabab Shawarma Roll", price: 70 },
        { name: "Kabab Cheese Shawarma Roll", price: 80 },
        { name: "Kabab Egg Shawarma Roll", price: 80 },
        { name: "Kabab Spl Shawarma Roll", price: 100 },
        { name: "Kabab Cheese Shawarma Roll", price: 110 },
        { name: "Kabab Egg Shawarma Roll", price: 110 },
        { name: "Kabab Peri Peri Shawarma Roll", price: 110 },
        { name: "Kabab BBQ Shawarma Roll", price: 110 },
        { name: "Kabab Tandoori Shawarma Roll", price: 110 },
        { name: "Kabab Cheese Shawarma Platter", price: 120 },
        { name: "Spl Shawarma Platter", price: 130 },
        { name: "Kabab Peri Peri Shawarma Platter", price: 140 },
        { name: "Kabab BBQ Shawarma Platter", price: 150 }
      ],

      "Rice / Noodles / Pasta": [
        { name: "Veg Fried Rice", price: 70 },
        { name: "Egg Fried Rice", price: 80 },
        { name: "Chicken Fried Rice", price: 90 },
        { name: "Paneer Fried Rice", price: 90 },
        { name: "Mushroom Fried Rice", price: 90 },
        { name: "Gobi Fried Rice", price: 90 },
        { name: "Spl Fried Rice", price: 100 },
        { name: "Spl Mixed Veg Fried Rice", price: 100 },
        { name: "Spl Mixed Non Veg Fried Rice", price: 120 }
      ],

      "Paratha": [
        { name: "Veg Paratha Combo", price: 80 },
        { name: "Egg Paratha Combo", price: 90 },
        { name: "Chicken Paratha Combo", price: 100 },
        { name: "Veg Chilly Paratha", price: 80 },
        { name: "Egg Chilly Paratha", price: 80 },
        { name: "Paneer / Mushroom / Chicken Chilly Paratha", price: 90 }
      ],

      "Momos": [
        { name: "Steam Veg Momos", price: 60 },
        { name: "Steam Paneer Momos", price: 70 },
        { name: "Steam Chicken Momos", price: 80 },
        { name: "Fried Veg Momos", price: 70 },
        { name: "Fried Paneer Momos", price: 80 },
        { name: "Fried Chicken Momos", price: 90 },
        { name: "Pan Veg Momos", price: 80 },
        { name: "Pan Paneer Momos", price: 90 },
        { name: "Pan Chicken Momos", price: 100 },
        { name: "Pan Prawn Momos", price: 120 }
      ],

      "Veg Starters (Dry / Gravy)": [
        { name: "Veg Manchurian", price: 90 },
        { name: "Chilly Veg", price: 90 },
        { name: "Ginger Veg", price: 100 },
        { name: "Gobi Manchurian", price: 90 },
        { name: "Chilly Gobi", price: 100 },
        { name: "Gobi 65", price: 100 },
        { name: "Paneer 65", price: 100 },
        { name: "Paneer Manchurian", price: 100 },
        { name: "Chilly Paneer", price: 100 },
        { name: "Ginger Paneer", price: 100 },
        { name: "Mushroom Manchurian", price: 100 },
        { name: "Chilly Mushroom", price: 100 },
        { name: "Garlic Mushroom", price: 100 },
        { name: "Baby Corn Manchurian", price: 100 },
        { name: "Chilly Baby Corn", price: 100 }
      ],

      "Non Veg Starters (Dry / Gravy)": [
        { name: "Chicken 65", price: 100 },
        { name: "Chicken Lollipop", price: 110 },
        { name: "Chicken Drum Stick", price: 120 },
        { name: "Chilly Chicken", price: 120 },
        { name: "Chicken Manchurian", price: 130 },
        { name: "Dragon Chicken", price: 120 },
        { name: "Ginger Chicken", price: 120 },
        { name: "Garlic Chicken", price: 120 },
        { name: "Pepper Chicken", price: 120 },
        { name: "Butter Chicken", price: 140 },
        { name: "Malai Chicken", price: 140 },
        { name: "Egg Chilly", price: 100 },
        { name: "Egg Manchurian", price: 100 }
      ]

    }
  },
  {
    id: 10, name: "Google Food Park", img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', phones: ['97899040816', '8056130226'],
    menu: {

      "Chicken All Roll Items": [
        { name: "Chicken Roll", price: 50 },
        { name: "Chicken Kabab Roll", price: 60 },
        { name: "Chicken Mayo Roll", price: 60 },
        { name: "Chicken Tikka Roll", price: 60 },
        { name: "Chicken Kima Roll", price: 60 },
        { name: "Chicken Chilly Roll", price: 70 },
        { name: "Chicken Malai Roll", price: 70 },
        { name: "Chicken Lemon Roll", price: 50 },
        { name: "Chicken Mustard Roll", price: 60 },
        { name: "Chicken Garlic Roll", price: 70 },
        { name: "Chicken Korma Roll", price: 70 },
        { name: "Butter Chicken Roll", price: 70 },
        { name: "Barbeque Chicken Roll", price: 70 },
        { name: "Chettinad Chicken Roll", price: 80 },
        { name: "Dragon Chicken Roll", price: 80 },
        { name: "Pepper Chicken Roll", price: 70 }
      ],

      "Peri Peri Chicken Rolls": [
        { name: "Peri Peri Chicken Roll", price: 70 },
        { name: "Peri Peri Chicken Kabab Roll", price: 80 },
        { name: "Peri Peri Chicken Mayo Roll", price: 80 },
        { name: "Peri Peri Chicken Tikka Roll", price: 80 },
        { name: "Peri Peri Chicken Kima Roll", price: 80 },
        { name: "Peri Peri Chicken Chilly Roll", price: 80 },
        { name: "Peri Peri Chicken Malai Roll", price: 90 },
        { name: "Peri Peri Chicken Korma Roll", price: 90 },
        { name: "Peri Peri Chicken Butter Roll", price: 80 },
        { name: "Peri Peri Chicken Barbeque Roll", price: 80 },
        { name: "Peri Peri Chicken Chettinad Roll", price: 90 },
        { name: "Peri Peri Chicken Dragon Roll", price: 90 },
        { name: "Peri Peri Chicken Pepper Roll", price: 80 }
      ],

      "Mexican Chicken Rolls": [
        { name: "Mexican Chicken Roll", price: 70 },
        { name: "Mexican Chicken Kabab Roll", price: 80 },
        { name: "Mexican Chicken Mayo Roll", price: 80 },
        { name: "Mexican Chicken Tikka Roll", price: 80 },
        { name: "Mexican Chicken Kima Roll", price: 80 },
        { name: "Mexican Chicken Chilly Roll", price: 80 },
        { name: "Mexican Chicken Malai Roll", price: 90 },
        { name: "Mexican Chicken Korma Roll", price: 90 },
        { name: "Mexican Chicken Butter Roll", price: 80 },
        { name: "Mexican Chicken Barbeque Roll", price: 80 },
        { name: "Mexican Chicken Chettinad Roll", price: 90 },
        { name: "Mexican Chicken Dragon Roll", price: 90 },
        { name: "Mexican Chicken Pepper Roll", price: 80 }
      ],

      "Tandoori Chicken Rolls": [
        { name: "Tandoori Chicken Roll", price: 70 },
        { name: "Tandoori Chicken Kabab Roll", price: 80 },
        { name: "Tandoori Chicken Mayo Roll", price: 80 },
        { name: "Tandoori Chicken Tikka Roll", price: 80 },
        { name: "Tandoori Chicken Kima Roll", price: 80 },
        { name: "Tandoori Chicken Chilly Roll", price: 80 },
        { name: "Tandoori Chicken Malai Roll", price: 90 },
        { name: "Tandoori Chicken Korma Roll", price: 90 },
        { name: "Tandoori Chicken Butter Roll", price: 80 },
        { name: "Tandoori Chicken Barbeque Roll", price: 80 },
        { name: "Tandoori Chicken Chettinad Roll", price: 90 },
        { name: "Tandoori Chicken Dragon Roll", price: 90 },
        { name: "Tandoori Chicken Pepper Roll", price: 80 }
      ],

      "Biryani / Pulao": [
        { name: "Chicken Biryani", price: 100 },
        { name: "Hyderabadi Chicken Biryani", price: 110 },
        { name: "Chicken 65 Biryani", price: 120 },
        { name: "Chicken Lollypop Biryani", price: 140 },
        { name: "Chicken Drumstick Biryani", price: 150 },
        { name: "Chicken Tikka Biryani", price: 150 },
        { name: "Egg Biryani", price: 90 },
        { name: "Veg Biryani", price: 80 },
        { name: "Khuska", price: 80 },
        { name: "Paneer Biryani", price: 100 },
        { name: "Mushroom Biryani", price: 100 },
        { name: "Chicken Pulao", price: 100 },
        { name: "Paneer Pulao", price: 100 },
        { name: "Veg Pulao", price: 90 },
        { name: "Kaju Pulao", price: 90 },
        { name: "Mushroom Pulao", price: 100 },
        { name: "Gobi Pulao", price: 90 }
      ],

      "Fried Rice / Noodles": [
        { name: "Chicken Fried Rice / Noodles", price: 90 },
        { name: "Schezwan Chicken Fried Rice / Noodles", price: 100 },
        { name: "Tandoori Chicken Fried Rice / Noodles", price: 110 },
        { name: "Shawarma Chicken Rice / Noodles", price: 110 },
        { name: "Prawn Fried Rice / Noodles", price: 130 },
        { name: "Schezwan Prawn Fried Rice / Noodles", price: 140 },
        { name: "Mix Non Veg Fried Rice / Noodles", price: 130 },
        { name: "Chicken Hakka Noodles", price: 110 },
        { name: "Paneer Fried Rice / Noodles", price: 90 },
        { name: "Mushroom Fried Rice / Noodles", price: 90 },
        { name: "Egg Fried Rice / Noodles", price: 80 },
        { name: "Veg Fried Rice / Noodles", price: 80 },
        { name: "Mix Veg Fried Rice / Noodles", price: 120 },
        { name: "Gobi Fried Rice / Noodles", price: 90 }
      ],

      "Chinese Side Dish": [
        { name: "Chilly Chicken", price: 100 },
        { name: "Chicken Manchurian", price: 100 },
        { name: "Dragon Chicken", price: 130 },
        { name: "Schezwan Chicken", price: 110 },
        { name: "Pepper Chicken", price: 100 },
        { name: "Garlic Chicken", price: 100 },
        { name: "Ginger Chicken", price: 100 },
        { name: "Chicken Drumstick", price: 110 },
        { name: "Chicken Lollypop", price: 100 },
        { name: "Chicken 65", price: 100 },
        { name: "Paneer 65", price: 100 },
        { name: "Gobi 65", price: 90 },
        { name: "Mushroom 65", price: 100 },
        { name: "Paneer Chilly", price: 100 },
        { name: "Paneer Manchurian", price: 100 },
        { name: "Mushroom Manchurian", price: 100 }
      ],

      "Sandwich": [
        { name: "Chicken Sandwich", price: 50 },
        { name: "Cheese Chicken Sandwich", price: 60 },
        { name: "Mexican Chicken Sandwich", price: 60 },
        { name: "Tandoori Chicken Sandwich", price: 60 },
        { name: "Peri Peri Chicken Sandwich", price: 60 },
        { name: "Google Special Chicken Sandwich", price: 70 },
        { name: "Paneer Sandwich", price: 50 },
        { name: "Mexican Paneer Sandwich", price: 60 },
        { name: "Peri Peri Paneer Sandwich", price: 60 },
        { name: "Tandoori Paneer Sandwich", price: 60 },
        { name: "Mushroom Sandwich", price: 50 },
        { name: "Mexican Mushroom Sandwich", price: 60 },
        { name: "Peri Peri Mushroom Sandwich", price: 60 },
        { name: "Tandoori Mushroom Sandwich", price: 60 },
        { name: "Aloo Sandwich", price: 40 },
        { name: "Veg Sandwich", price: 40 },
        { name: "Mexican Veg Sandwich", price: 50 },
        { name: "Peri Peri Veg Sandwich", price: 50 },
        { name: "Tandoori Veg Sandwich", price: 50 },
        { name: "Bread Omelet", price: 40 }
      ],

      "Non Veg Starters (Dry / Gravy)": [
        { name: "Chicken 65", price: 100 },
        { name: "Chicken Lollipop", price: 110 },
        { name: "Chicken Drum Stick", price: 120 },
        { name: "Chilly Chicken", price: 120 },
        { name: "Chicken Manchurian", price: 130 },
        { name: "Dragon Chicken", price: 120 },
        { name: "Ginger Chicken", price: 120 },
        { name: "Garlic Chicken", price: 120 },
        { name: "Pepper Chicken", price: 120 },
        { name: "Butter Chicken", price: 140 },
        { name: "Malai Chicken", price: 140 },
        { name: "Egg Chilly", price: 100 },
        { name: "Egg Manchurian", price: 100 }
      ]

    }
  },
  {
    id: 11, name: "Masaledar Kitchen", img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', phones: ['9102770111', '910275777775'],
    menu: {

      "Starter": [
        { name: "Vada Pav", price: 30 },
        { name: "Pav Bhaji (2 Pav)", price: 60 },
        { name: "Chole Bhature (2pcs)", price: 90 },
        { name: "Samosa Chaat", price: 50 },
        { name: "Kachori Chaat", price: 50 },
        { name: "Tikki Chaat", price: 30 },
        { name: "Dahi Puri (6pcs)", price: 60 },
        { name: "Bhel Puri", price: 40 },
        { name: "Papdi Chaat", price: 50 },
        { name: "Chura Ghughni", price: 50 },
        { name: "Dahi Papdi", price: 50 },
        { name: "Samosa", price: 15 },
        { name: "Kachori", price: 25 },
        { name: "Bread Pakoda", price: 30 },
        { name: "Onion Pakoda (6pcs)", price: 50 },
        { name: "Cutlet", price: 25 },
        { name: "Aloo Chop", price: 15 },
        { name: "Litti Ghughni (2pcs)", price: 50 }
      ],

      "Chinese": [
        { name: "Veg Noodles / Rice", price: 80 },
        { name: "Schezwan Veg Rice / Noodles", price: 90 },
        { name: "Egg Noodles / Rice", price: 100 },
        { name: "Egg Schezwan Rice / Noodles", price: 110 },
        { name: "Paneer Noodles / Rice", price: 120 },
        { name: "Paneer Schezwan Noodles / Rice", price: 130 },
        { name: "Chicken Rice / Noodles", price: 120 },
        { name: "Chicken Schezwan Rice / Noodles", price: 130 },
        { name: "Gobi Rice / Noodles", price: 100 },
        { name: "Gobi Schezwan Noodles", price: 110 },
        { name: "Mushroom Rice / Noodles", price: 110 }
      ],

      "Manchurian & 65": [
        { name: "Veg Manchurian", price: 130 },
        { name: "Paneer Manchurian", price: 140 },
        { name: "Chicken Manchurian", price: 140 },
        { name: "Gobhi Manchurian", price: 120 },
        { name: "Mushroom Manchurian", price: 120 },
        { name: "Chicken 65", price: 140 },
        { name: "Gobhi 65", price: 120 },
        { name: "Paneer 65", price: 140 },
        { name: "Mushroom 65", price: 130 },
        { name: "Chilli Chicken", price: 140 },
        { name: "Paneer Chilli", price: 140 },
        { name: "Mushroom Chilli", price: 130 }
      ],

      "Indian Gravy": [
        { name: "Chicken Butter Masala", price: 125 },
        { name: "Paneer Butter Masala", price: 125 },
        { name: "Kadhai Chicken Masala", price: 125 },
        { name: "Kadhai Paneer Masala", price: 125 },
        { name: "Chicken Lababdar", price: 125 },
        { name: "Paneer Lababdar", price: 125 },
        { name: "Mutton Mushroom", price: 100 },
        { name: "Mushroom Masala", price: 100 },
        { name: "Bhindi Masala", price: 75 },
        { name: "Aloo Gobhi Muttor", price: 75 },
        { name: "Paneer Bhurji", price: 125 },
        { name: "Aloo Jeera", price: 60 }
      ],

      "Indian Bread": [
        { name: "Phulka / Roti", price: 12 },
        { name: "Ghee / Butter Phulka", price: 18 },
        { name: "Plain Triangle Paratha", price: 30 },
        { name: "Aloo Paratha", price: 50 },
        { name: "Paneer Paratha", price: 75 },
        { name: "Gobhi Paratha", price: 50 }
      ],

      "Maggi": [
        { name: "Maggi", price: 30 },
        { name: "Masala Maggi", price: 40 },
        { name: "Vegetable Maggi", price: 40 },
        { name: "Egg Maggi", price: 40 },
        { name: "Chicken Maggi", price: 65 }
      ],

      "Egg": [
        { name: "Omlet", price: 25 },
        { name: "Masala Omlet", price: 30 },
        { name: "Bread Omlet", price: 35 },
        { name: "Poch", price: 25 },
        { name: "Egg Bhurji", price: 30 },
        { name: "Anda Tadka", price: 90 }
      ],

      "Rice Bowls": [
        { name: "Rajma Chawal", price: 60 },
        { name: "Chole Chawal", price: 60 },
        { name: "Paneer Chawal", price: 80 },
        { name: "Chicken Chawal", price: 80 },
        { name: "Anda Chawal", price: 70 },
        { name: "Kadhi Chawal", price: 70 },
        { name: "Machli (Fish Chawal)", price: 100 },
        { name: "Mutton Chawal (2pcs)", price: 150 },
        { name: "Dal Chawal", price: 50 },
        { name: "Sabji Chawal", price: 60 }
      ],

      "Rice": [
        { name: "Plain Rice", price: 40 },
        { name: "Ghee Rice", price: 60 },
        { name: "Jeera Rice", price: 50 },
        { name: "Veg Pulao", price: 100 },
        { name: "Veg Biryani", price: 100 },
        { name: "Dal Khichdi", price: 100 }
      ],

      "Thali": [
        { name: "Veg Thali (Any Vegetable)", price: 110 },
        { name: "Veg Thali (Rajma)", price: 120 },
        { name: "Veg Thali (Chole)", price: 120 },
        { name: "Veg Thali (Kadhi)", price: 150 },
        { name: "Veg Thali (Bhindi Masala)", price: 150 },
        { name: "Anda Thali (2pcs)", price: 140 },
        { name: "Chicken Thali (4pcs)", price: 180 },
        { name: "Paneer Thali", price: 180 },
        { name: "Mutton Thali (100gm)", price: 300 },
        { name: "Fish Thali (2pcs)", price: 170 },
        { name: "Maharaj Veg Thali", price: 300 },
        { name: "Maharaj Non Veg Thali", price: 350 },
        { name: "Puri Sabji (4 Puri)", price: 70 },
        { name: "Plain Poori", price: 20 },
        { name: "Poori Chole (4 Puri)", price: 80 },
        { name: "Spl Thali (6 Puri + Sewai + Sabji)", price: 160 },
        { name: "Spl Thali (6 Puri + Kheer + Mutton Paneer)", price: 200 }
      ],

      "Combo Thali": [
        { name: "3 Roti + Mutton Paneer", price: 100 },
        { name: "3 Roti + Chicken (2pcs)", price: 100 },
        { name: "3 Roti + Anda Curry (2pcs)", price: 90 },
        { name: "3 Roti + Rajma Masala", price: 70 },
        { name: "3 Roti + 2 Paratha + Chole Masala", price: 70 },
        { name: "3 Roti + Kadhi", price: 90 },
        { name: "3 Roti + Mutton (2pcs)", price: 200 },
        { name: "3 Roti + Machli (1pc)", price: 100 },
        { name: "3 Roti + Daal", price: 60 }
      ],

      "Desi Tadka Veg Non Veg": [
        { name: "Sabji", price: 50 },
        { name: "Rajma Masala", price: 50 },
        { name: "Chole", price: 50 },
        { name: "Plain Yellow Dal", price: 50 },
        { name: "Dal Tadka / Dal Fry", price: 75 },
        { name: "Muttor Paneer", price: 100 },
        { name: "Chicken Curry (4pcs)", price: 125 },
        { name: "Egg Curry (2pcs)", price: 60 },
        { name: "Mutton Curry (2pcs)", price: 150 },
        { name: "Fish Curry (1pc)", price: 70 },
        { name: "Aloo Bhujia", price: 50 },
        { name: "Kadhi (2pcs)", price: 75 }
      ],

      "Drink & Desserts": [
        { name: "Chaas", price: 30 },
        { name: "Lassi", price: 50 },
        { name: "Butter Milk", price: 30 },
        { name: "Gulab Jamun", price: 20 },
        { name: "Sewai Ka Sweet Kheer", price: 60 },
        { name: "Kheer (Sweet Chawal Ka)", price: 60 }
      ]

    }
  }
];

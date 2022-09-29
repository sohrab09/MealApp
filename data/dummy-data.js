import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [

  //Dhaka Division

  new Category('c1', 'Dhaka', '#f5428d'),
  new Category('c2', 'Kishorgonj', '#f54242'),
  new Category('c3', 'Tangail', '#f5a442'),
  new Category('c4', 'Narayongonj', '#f5d142'),
  new Category('c5', 'Munshigonj', '#368dff'),
  new Category('c6', 'Manikgonj', '#41d95d'),
  new Category('c7', 'Gazipur', '#9eecff'),
  new Category('c8', 'Rajbari', '#b9ffb0'),
  new Category('c9', 'Sariatpur', '#ffc7ff'),
  new Category('c10', 'Madaripur', '#47fced'),
  new Category('c11', 'Gopalgonj', '#f5428d'),
  new Category('c12', 'Faridpur', '#f54242'),
  new Category('c13', 'Narsingdi', '#f5a442'),

  //Chittagong Division

  new Category('c14', 'Rangamati', '#f5d142'),
  new Category('c15', 'Noakhali', '#368dff'),
  new Category('c16', 'Chittagong', '#41d95d'),
  new Category('c17', 'Coxs Bazar', '#9eecff'),
  new Category('c18', 'Feni', '#b9ffb0'),
  new Category('c19', 'Khagrachari', '#ffc7ff'),
  new Category('c20', 'Bandarban', '#47fced'),
  new Category('c21', 'Brahmanbaria', '#f5428d'),
  new Category('c22', 'Comilla', '#f54242'),
  new Category('c23', 'Chandpur', '#f5a442'),
  new Category('c24', 'Lakshmipur', '#f5d142'),

  //Khulna Division

  new Category('c25', 'Khulna', '#368dff'),
  new Category('c26', 'Jessore', '#41d95d'),
  new Category('c27', 'Bagerhat', '#9eecff'),
  new Category('c28', 'Jhenaidah', '#b9ffb0'),
  new Category('c29', 'Narail', '#ffc7ff'),
  new Category('c30', 'Chuadanga', '#47fced'),
  new Category('c31', 'Kushtia', '#f5428d'),
  new Category('c32', 'Magura', '#f54242'),
  new Category('c33', 'Meherpur', '#f5a442'),
  new Category('c34', 'Satkhira', '#f5d142'),

  //Sylhet Division

  new Category('c35', 'Sylhet', '#368dff'),
  new Category('c36', 'Sunamgonj', '#41d95d'),
  new Category('c37', 'Moulvibazar', '#9eecff'),
  new Category('c38', 'Habiganj', '#b9ffb0'),

  //Barisal Division

  new Category('c39', 'Barisal', '#ffc7ff'),
  new Category('c40', 'Barguna', '#47fced'),
  new Category('c41', 'Pirojpur', '#f5428d'),
  new Category('c42', 'Patuakhali', '#f54242'),
  new Category('c43', 'Bhola', '#f5a442'),
  new Category('c44', 'Jhalokati', '#f5d142'),

  //Maymanshing Division

  new Category('c45', 'Maymanshing', '#368dff'),
  new Category('c46', 'Jamalpur', '#41d95d'),
  new Category('c47', 'Netrokona', '#9eecff'),
  new Category('c48', 'Sherpur', '#b9ffb0'),

  //Rangpur Division

  new Category('c49', 'Dinajpur', '#ffc7ff'),
  new Category('c50', 'Gaibandha', '#47fced'),
  new Category('c51', 'Kurigram', '#f5428d'),
  new Category('c52', 'Lalmonirhat', '#f54242'),
  new Category('c53', 'Nilphamari', '#f5a442'),
  new Category('c54', 'Panchagarh', '#f5d142'),
  new Category('c55', 'Rangpur', '#368dff'),
  new Category('c56', 'Thakurgaon', '#41d95d'),

  //Rajshahi Division

  new Category('c57', 'Rajshahi', '#9eecff'),
  new Category('c58', 'Bogra', '#b9ffb0'),
  new Category('c59', 'Joypurhat', '#ffc7ff'),
  new Category('c60', 'Naogaon', '#47fced'),
  new Category('c61', 'Natore', '#f5428d'),
  new Category('c62', 'Chapainawabganj', '#f54242'),
  new Category('c63', 'Pabna', '#f5a442'),
  new Category('c64', 'Sirajganj', '#f5d142'),

];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'বাকরখানি',
    'affordable',
    'simple',
    'https://www.chainbaker.com/wp-content/uploads/2021/05/IMG_1918.jpg',
    20,
    [
      '1 teaspoon baking powder',
      '2 cup milk',
      '1 tablespoon chiraunji',
      '10 gm peeled, sliced almonds',
      'salt as required',
      '1 1 / 2 teaspoon kewra',
      '2 1 / 2 teaspoon sugar',
      '1 tablespoon dry yeast',
      '4 tablespoon melted ghee',
      '2 1 / 2 cup all purpose flour',
      '1 tablespoon raisins',
      'water as required'
    ],
    [
      'To prepare this delicious recipe, sieve together flour, baking powder and salt in a bowl. In a separate baking bowl, add milk along with sugar and heat in the microwave until the sugar melts. Remove from heat and allow it to cool.',
      'Place yeast in another bowl, add 60 ml of warm water and set aside to dissolve for 5 minutes. Soak raisins and chiraunji in a cup warm water and then set aside for 5-10 minutes.',
      'Add sweetened milk, kewra and dissolved yeast to the flour and make a soft dough. Cover the dough with a wet cloth to maintain its moisture and set aside for 20 minutes.',
      'After that, add 3 tablespoons of melted ghee to the dough. Add the soaked almonds, raisins and chiraunji and knead well. Cover and keep it in a warm place for 30 minutes to allow the dough to rise.',
      'Preheat the oven to 464-degree Fahrenheit (240-degree Celsius). Divide the dough into equal parts and make balls. Cover and set aside for 10 minutes.',
      'Flatten balls and roll them out. Prick the entire surface with a fork or knife. Put them on a baking tray and bake in the oven for 11-13 minutes.',
      'Remove from oven and allow it to come to the room temperature. Brush the Bakarkhanis with remaining ghee and serve.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c1'],
    'বিরিয়ানি',
    'affordable',
    'simple',
    'https://cookerybay.com/wp-content/uploads/2020/12/biriyani-3-970x647.jpg',
    10,
    [
      '1 cup boiled basmati rice',
      '1 / 2 teaspoon mint leaves',
      'salt as required',
      '2 tablespoon refined oil',
      '3 green cardamom',
      '2 clove',
      '2 onion',
      '1 teaspoon turmeric',
      '1 tablespoon garlic paste',
      '1 cup hung curd',
      '2 tablespoon coriander leaves',
      'water as required',
      '1 tablespoon ghee',
      '600 gm chicken',
      '1 tablespoon garam masala powder',
      '1 teaspoon saffron',
      '1 tablespoon bay leaf',
      '1 black cardamom',
      '1 teaspoon cumin seeds',
      '4 green chillies',
      '1 tablespoon ginger paste',
      '1 teaspoon red chilli powder',
      '1 / 2 tablespoon ginger',
      '2 drops kewra',
      '1 tablespoon rose water'
    ],
    [
      "Step 1: Prepare saffron-kewra water and chop veggies', To make a delightful chicken biryani dish firstly soak saffron in water to prepare saffron water (One tsp saffron can be soaked in 1/4 cup water). Next, mix kewra drops in water and mix well to make kewra water. Set them aside for later usage. Now chop the onion and coriander leaves and keep them aside.",


      "Step 2: Saute the onions', Meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough, add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion to it and saute until pink. Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder and green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it and give a mix. (Make sure the chicken is washed properly and patted dry before adding it to the dish)",

      "Step 3: Cook biryani on low heat for 5-6 minutes, Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves. Add kewra water, rose water and saffron water in it. Cook till the chicken is tender. Then add 1 cup cooked rice and spread evenly. Then add saffron water and pour ghee over it. You can now cook the dish without the lid or cover it with a lid to give a dum-effect due to the steam formation.",

      "Step 4 Serve hot chicken biryani with your favourite chutney or raita, Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves. Serve hot chicken biryani with raita of your choice. Enjoy!"
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c2'],
    'বালিশ মিস্টি',
    'pricey',
    'simple',
    'https://i.ytimg.com/vi/yz7p-_k40y4/maxresdefault.jpg',
    45,
    [
      'Milk',
      'Curd',
      'Sugar',
      'Flour',
    ],
    [
      'প্রথমে দুধের ছানার সঙ্গে সামান্য ময়দা মিশিয়ে মণ্ড তৈরি করা হয়',
      'মণ্ড দিয়ে বানানো হয় বিভিন্ন সাইজের বালিশ, পরে তা ভাজা হয় চিনির গরম রসে, এর পর ঠাণ্ডা করেও চিনির রসে ডুবিয়ে রাখা হয় অনেকক্ষণ',
      'এক সময় তা রসে টইটম্বুর হয়ে যায়',
      'বিক্রির সময় বালিশের ওপর দেয়া হয় ক্ষীরের প্রলেপ বা দুধের মালাই',
      'এ ছাড়াও বালিশ বানানোর প্রক্রিয়ায় কিছুটা গোপনীয়তা আছে যা ব্যবসার স্বার্থে প্রকাশ করতে চান না কারিগররা।'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c3'],
    'চমচম',
    'pricey',
    'simple',
    'https://www.bongodorshon.com/uploads/story_image/tangail_chomchom_2.jpg',
    45,
    [
      'Flour',
      'Semolina',
      'Sugar',
      'Butter',
      'Jufran',
      'Lemon Juice',
      'Coconut',
    ],
    [
      'চুলায় গরুর খাঁটি দুধ জ্বাল দিয়ে প্রথমে প্রস্তুত করা হয় ছানা।',
      'পাঁচ কেজির মতো ছানার সঙ্গে মেশানো হয় ২৫০ গ্রাম ময়দা।',
      'এরপর ভালো করে মেখে মিষ্টির আকার দিয়ে চিনির শিরায় জ্বাল দিতে হয় অন্তত আধাঘণ্টা। ',
      'ক্রমশ পোড়া ইটের মতো রং ধারণ করে লম্বা মিষ্টিগুলো।',
      'এভাবেই প্রস্তুত হয় পোড়াবাড়ির চমচম।'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm6',
    ['c4'],
    'রসমালাই',
    'pricey',
    'simple',
    'https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/rasmalai-recipe-bengali.jpg',
    45,
    [
      'Milk',
      'Saffron',
      'Pistachios',
      'Water',
      'Boiling water',
      'Sugar',
      'Almonds',
      'Green cardamom',
      'Lime juice',
    ],
    [
      "Step 1: Prepare the chenna, To prepare this easy sweet recipe from a scratch, you need to begin with making the chenna at home. Take a deep bottomed saucepan and boil 1 1/2 litres of milk at a high flame. Once the milk starts boiling, turn off the flame. Mix water with lemon juice and add into the hot milk. Once the milk starts crumbling, drain out the excess water using a muslin cloth and tightly tie the crumbled milk extracts in the cloth. Put it aside for 15-20 minutes.",

      "Step 2: Prepare the sugar syrup, Rub the chhena till it's soft like white butter and you can make a dough out of it. Once done, make some balls with the dough and press them a little. Repeat the process till the dough is finished. Cover them with a wet cloth and then prepare the sugar syrup. For the same, put a kadhai over medium flame and add 2 cups of sugar in it along with 1 1/2 litre hot water. Just boil the water and your sugar syrup is ready, add your rasmalai in the sugar syrup and boil for 5 minutes. The rasmalais will turn double and this is the indication to turn off your flame.",

      "Step 3: Prepare the saffron milk for Rasmalai, Take a deep bottomed pan and boil the remaining milk in it. Once the milk starts boiling, add saffron in it along with chopped pistachios and almonds. Allow this milk blend to attain a slightly thick consistency for about 5-7 minutes. Now, add 1 cup sugar in it and mix well. Once the milk blend is reduced to half, turn off the flame and transfer it to a bowl.",

      "Step 4: Dip the sweet balls and indulge in the goodness, Now, add the sugar syrup in a bowl filled with ice cubes. Add the rasmalai in this hot-cold sugar syrup one by one. Keep them in it for 2 minutes and then squeeze the extra water and add the rasmalai in saffron milk. Let the rasmalai soak for 3-4 hours to absorb the creamy texture of the milk. It tastes best when served chilled!",
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm7',
    ['c5'],
    'ভাগ্যকুলের মিস্টি',
    'pricey',
    'simple',
    'https://vromonguide.com/wp-content/uploads/Sweets-Of-Bhagyakul-Bazar-Munshiganj.jpg',
    45,
    [
      "প্রয়োজনীয় উপকরণসমূহ গুগলে খুঁজে পাওয়া যায়নি। 😥",
    ],
    [
      "প্রস্তুত প্রণালী গুগলে খুঁজে পাওয়া যায়নি। 😥"
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm8',
    ['c6'],
    'হাজারী গুড়',
    'pricey',
    'simple',
    'https://www.gazipurkotha.com/media/imgAll/2018November/31-2001280745.jpg',
    45,
    [
      "গ্রাম বাংলার গাছি ভাইয়েরা শীতকালে মাটির তৈরি হাঁড়ি আগের দিন বিকালে বা সন্ধ্যাবেলা বেঁধে রেখে আসেন খেজুর গাছে এবং সারারাত দীর্ঘ অপেক্ষার পর হাড়ি ভর্তি রসগুলো ভোরবেলা পাখির কলকাকলীতে, ঠান্ডা আবহাওয়ায় সংগ্রহ করে নিয়ে আসেন তাদের নিজ বাড়িতে, পরিষ্কার ছাঁকনি দিয়ে তা ছেঁকে নেওয়া হয়।",
    ],
    [
      "রস জ্বাল করার জন্য যে চুলা ব্যবহার করা হয় তাকে আঞ্চলিক ভাষায় বাইন বলে। সেই চুলোর ৪ টি থেকে ৮ টি মুখ থাকে, মানে একসাথে ৪ থেকে ৮ টি হাড়িতে রস জ্বাল করা যায়। জ্বাল করার সময় মাঝে মাঝে ওই গরম রসের উপর আরেকটি পাত্র থেকে কাঁচা রস মিশিয়ে জ্বাল করা হয় এটা একটি বিশেষ প্রক্রিয়া এটাই মূলত অরিজিনাল ",

      "বিশেষ প্রক্রিয়ায় দীর্ঘ সময় জ্বাল দেওয়া হয় উচ্চ তাপমাত্রায়। উল্লেখযোগ্য যে ১৫-২০ কেজি রস জ্বাল দিয়ে ঘনত্ব বাড়ানো হয় এবং রসের রং পরিবর্তন হয়। বিশেষত্ব হচ্ছে এতগুলো রস জ্বাল দিয়ে মাত্র ৫-৭ কেজি গুড় বানানো হয়।",

      "রস জ্বাল দেয়া হয়ে গেলে তাকে একটি মাটির পাত্রে রেখে কাঠের হাতল দিয়ে অনবরত নাড়তে থাকে। নাড়তে নাড়তে একসময় ঐ রস ঘন হয়ে আসে ও রঙের পরিবর্তন হয়ে সাদা কালার ধারণ করে  এবং গুড় তৈরীর জন্য প্রস্তুত হয় । তারপর সেই ঘন রস কে ছোট ছোট পাত্রে রেখে বাজার জাত করার জন্য প্রস্তুত করা হয়। সবশেষে হাজারী লিখা সিলমোহর লাগিয়ে বাজারজাত করা হয়।",

      "হাজাড়ি গুড়ের রঙ সাদা, হাতে নিয়ে সামান্য চাপেই ভেঙে যায়। সেই সঙ্গে এর পাগল করা সুগন্ধ তো রয়েছেই। যখন শীতের সকাল শুরু হয়,তখন গ্রাম বাংলার ঘরে ঘরে, বিশেষ করে যে সব বাড়িতে হাজাড়ি গুড় প্রস্তুত করা হয় সেখান থেকে ভেসে আসে হাজারী গুড়ের সুগন্ধ। চারিদিকে যেন শুরু হয় হাজাড়ি উৎসব, চিরচেনা মনে হয়  যার স্বাদ এবং গন্ধের সাথে বাংলার প্রতিটি মানুষ সুপরিচিত। অনেকেই দেখতে ভিড় করে গুড় প্রস্তুতের সময়।",

      ""
    ],
    false,
    false,
    false,
    true
  ),
];